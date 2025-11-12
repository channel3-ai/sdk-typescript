// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ProductsAPI from './products';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Enrich extends APIResource {
  /**
   * Search by product URL, get back full product information from Channel3’s product
   * database.
   */
  enrichURL(body: EnrichEnrichURLParams, options?: RequestOptions): APIPromise<EnrichEnrichURLResponse> {
    return this._client.post('/v0/enrich', { body, ...options });
  }
}

export interface EnrichRequest {
  /**
   * The URL of the product to enrich
   */
  url: string;
}

export interface EnrichEnrichURLResponse {
  id: string;

  availability: ProductsAPI.AvailabilityStatus;

  price: ProductsAPI.Price;

  title: string;

  url: string;

  brand_id?: string | null;

  brand_name?: string | null;

  gender?: 'male' | 'female' | 'unisex' | null;

  image_urls?: Array<string> | null;

  key_features?: Array<string> | null;

  materials?: Array<string> | null;

  variants?: Array<ProductsAPI.Variant>;
}

export interface EnrichEnrichURLParams {
  /**
   * The URL of the product to enrich
   */
  url: string;
}

export declare namespace Enrich {
  export {
    type EnrichRequest as EnrichRequest,
    type EnrichEnrichURLResponse as EnrichEnrichURLResponse,
    type EnrichEnrichURLParams as EnrichEnrichURLParams,
  };
}
