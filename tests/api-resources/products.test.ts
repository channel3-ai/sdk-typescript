// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Channel3 from '@channel3/sdk';

const client = new Channel3({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource products', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.products.retrieve('product_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.products.retrieve(
        'product_id',
        { redirect_mode: 'brand', website_ids: ['string'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Channel3.NotFoundError);
  });
});
