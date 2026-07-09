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
        {
          country: 'US',
          currency: 'USD',
          language: 'en',
          length_unit: 'mm',
          website_ids: ['string'],
          weight_unit: 'mg',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Channel3.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('browse', async () => {
    const responsePromise = client.products.browse({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('findSimilar: only required params', async () => {
    const responsePromise = client.products.findSimilar({ product_id: 'product_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('findSimilar: required and optional params', async () => {
    const response = await client.products.findSimilar({
      product_id: 'product_id',
      config: {
        country: 'US',
        currency: 'USD',
        language: 'en',
        length_unit: 'mm',
        weight_unit: 'mg',
      },
      filters: {
        age: ['newborn'],
        attributes: { foo: ['string'] },
        availability: ['InStock'],
        brand_ids: ['string'],
        category_ids: ['string'],
        colors: { palette: [{ hex: 'hex', percentage: 0 }] },
        condition: 'new',
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
      limit: 1,
      page_token: 'page_token',
    });
  });

  // Mock server tests are disabled
  test.skip('lookup: only required params', async () => {
    const responsePromise = client.products.lookup({ url: 'url' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('lookup: required and optional params', async () => {
    const response = await client.products.lookup({ url: 'url', max_staleness_hours: 1 });
  });

  // Mock server tests are disabled
  test.skip('monetize: only required params', async () => {
    const responsePromise = client.products.monetize({ url: 'url' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('monetize: required and optional params', async () => {
    const response = await client.products.monetize({ url: 'url' });
  });

  // Mock server tests are disabled
  test.skip('search', async () => {
    const responsePromise = client.products.search({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('searchByImage', async () => {
    const responsePromise = client.products.searchByImage({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
