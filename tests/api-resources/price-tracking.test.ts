// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Channel3 from '@channel3/sdk';

const client = new Channel3({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource priceTracking', () => {
  // Mock server tests are disabled
  test.skip('getHistory', async () => {
    const responsePromise = client.priceTracking.getHistory('canonical_product_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getHistory: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.priceTracking.getHistory(
        'canonical_product_id',
        { days: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Channel3.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('listSubscriptions', async () => {
    const responsePromise = client.priceTracking.listSubscriptions();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listSubscriptions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.priceTracking.listSubscriptions(
        { limit: 1, page_token: 'page_token' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Channel3.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('start: only required params', async () => {
    const responsePromise = client.priceTracking.start({ canonical_product_id: 'canonical_product_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('start: required and optional params', async () => {
    const response = await client.priceTracking.start({ canonical_product_id: 'canonical_product_id' });
  });

  // Mock server tests are disabled
  test.skip('stop: only required params', async () => {
    const responsePromise = client.priceTracking.stop({ canonical_product_id: 'canonical_product_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('stop: required and optional params', async () => {
    const response = await client.priceTracking.stop({ canonical_product_id: 'canonical_product_id' });
  });
});
