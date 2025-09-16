// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ProductsAPI from './products';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Enrich extends APIResource {
  /**
   * Enrich a product URL with additional information.
   */
  enrichURL(body: EnrichEnrichURLParams, options?: RequestOptions): APIPromise<EnrichEnrichURLResponse> {
    return this._client.post('/v0/enrich', { body, ...options });
  }
}

export interface EnrichEnrichURLResponse {
  main_image_url: string;

  other_image_urls: Array<string>;

  price: ProductsAPI.Price;

  title: string;

  url: string;
}

export interface EnrichEnrichURLParams {
  /**
   * The URL of the product to enrich
   */
  url: string;
}

export declare namespace Enrich {
  export {
    type EnrichEnrichURLResponse as EnrichEnrichURLResponse,
    type EnrichEnrichURLParams as EnrichEnrichURLParams,
  };
}
