// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Channel3 from '@channel3/sdk';

const client = new Channel3({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource conversations', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.conversations.create({ message: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.conversations.create({
      message: { parts: [{ text: 'text', type: 'text' }], role: 'user' },
      context: { application_context: 'application_context', user_context: 'user_context' },
      conversation_id: 'conversation_id',
      filters: {
        age: ['newborn'],
        attributes: { foo: ['string'] },
        availability: ['InStock'],
        brand_ids: ['string'],
        category_ids: ['string'],
        colors: { palette: [{ hex: 'hex', percentage: 0 }], match: 'strict' },
        conditions: ['new'],
        dimensions: {
          height: {
            unit: 'mm',
            max: 0,
            min: 0,
          },
          length: {
            unit: 'mm',
            max: 0,
            min: 0,
          },
          weight: {
            unit: 'mg',
            max: 0,
            min: 0,
          },
          width: {
            unit: 'mm',
            max: 0,
            min: 0,
          },
        },
        exclude_brand_ids: ['string'],
        exclude_category_ids: ['string'],
        exclude_website_ids: ['string'],
        gender: 'male',
        price: { max_price: 0, min_price: 0 },
        sale: 'on_sale',
        website_ids: ['string'],
      },
      stream: true,
      'x-user-id': 'x-user-id',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.conversations.retrieve('conversation_id');
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
      client.conversations.retrieve(
        'conversation_id',
        { cursor: 'cursor', limit: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Channel3.NotFoundError);
  });
});
