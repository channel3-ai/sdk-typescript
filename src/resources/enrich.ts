// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ProductsAPI from './products';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Enrich extends APIResource {
  /**
   * Search by product URL, get back full product information from Channel3's product
   * database.
   *
   * If the product is not found in the database, the endpoint will attempt real-time
   * retrieval from the product page. This fallback returns basic product information
   * (price, images, title) without full enrichment.
   */
  enrichURL(body: EnrichEnrichURLParams, options?: RequestOptions): APIPromise<ProductsAPI.ProductDetail> {
    return this._client.post('/v0/enrich', { body, ...options });
  }
}

export interface EnrichRequest {
  /**
   * The URL of the product to enrich
   */
  url: string;
}

export interface EnrichEnrichURLParams {
  /**
   * The URL of the product to enrich
   */
  url: string;
}

export declare namespace Enrich {
  export { type EnrichRequest as EnrichRequest, type EnrichEnrichURLParams as EnrichEnrichURLParams };
}
