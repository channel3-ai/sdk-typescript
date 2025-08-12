import { Channel3Client } from './client';
import { Channel3NotFoundError, Channel3ConnectionError } from './exceptions';
import type { Product } from './generated/models';

jest.mock('cross-fetch', () => {
  const fetchMock = jest.fn();
  return {
    __esModule: true,
    default: fetchMock,
  };
});

// eslint-disable-next-line @typescript-eslint/no-var-requires
const fetchMock: jest.Mock = require('cross-fetch').default;

type HeadersLike = { get: (key: string) => string | null };

const makeHeaders = (entries: Record<string, string>): HeadersLike => ({
  get: (key: string) => entries[key.toLowerCase()] ?? entries[key] ?? null,
});

const makeJsonResponse = (
  url: string,
  status: number,
  body: unknown,
  headers?: Record<string, string>
) => ({
  status,
  url,
  headers: makeHeaders({ 'content-type': 'application/json', ...(headers || {}) }),
  ok: status >= 200 && status < 300,
  json: async () => body,
  text: async () => JSON.stringify(body),
  clone() {
    return this;
  },
});

describe('Channel3Client', () => {
  const API_KEY = 'test_key';
  let client: Channel3Client;

  beforeEach(() => {
    jest.useRealTimers();
    fetchMock.mockReset();
    client = new Channel3Client({ apiKey: API_KEY });
  });

  it('initializes with explicit API key', () => {
    expect(client).toBeInstanceOf(Channel3Client);
  });

  it('performs search and returns products (generated models)', async () => {
    const url = 'https://api.trychannel3.com/v0/search';
    const sample: Product[] = [
      {
        id: 'p1',
        score: 0.9,
        url: 'https://example.com/p1',
        title: 'Item 1',
        description: undefined,
        brand_name: 'Brand',
        image_url: 'https://img/p1.jpg',
        price: { price: 99, compare_at_price: undefined, currency: 'USD' },
        availability: 'InStock',
        variants: [],
      },
    ];
    fetchMock.mockResolvedValueOnce(makeJsonResponse(url, 200, sample));

    const res = await client.search({ query: 'q' });
    expect(res).toEqual(sample);

    // Validate request composed correctly
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [calledUrl, init] = fetchMock.mock.calls[0];
    expect(calledUrl).toBe(url);
    expect(init.method).toBe('POST');
    expect(init.headers['x-api-key']).toBe(API_KEY);
    expect(init.headers['Content-Type']).toBe('application/json');
    expect(typeof init.body).toBe('string');
    expect(init.body).toContain('"query":"q"');
  });

  it('maps 404 to Channel3NotFoundError', async () => {
    const url = 'https://api.trychannel3.com/v0/products/p404';
    fetchMock.mockResolvedValueOnce(makeJsonResponse(url, 404, { detail: 'not found' }));
    await expect(client.getProduct('p404')).rejects.toBeInstanceOf(Channel3NotFoundError);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it('times out and maps to Channel3ConnectionError', async () => {
    // Shorten client timeout for test
    (client as any).timeoutMs = 5;

    fetchMock.mockImplementationOnce((_url: string, init: any) => {
      return new Promise((_resolve, reject) => {
        init?.signal?.addEventListener('abort', () => {
          const err = new Error('aborted');
          (err as any).name = 'AbortError';
          reject(err);
        });
      });
    });

    await expect(client.search({ query: 'slow' })).rejects.toBeInstanceOf(Channel3ConnectionError);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
