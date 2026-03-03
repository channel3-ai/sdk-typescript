// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Channel3 from '@channel3/sdk';

const client = new Channel3({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource enrich', () => {
  // Mock server tests are disabled
  test.skip('enrichURL: only required params', async () => {
    const responsePromise = client.enrich.enrichURL({ url: 'url' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('enrichURL: required and optional params', async () => {
    const response = await client.enrich.enrichURL({ url: 'url' });
  });
});
