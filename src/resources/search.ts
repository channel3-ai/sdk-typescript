// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ProductsAPI from './products';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Search extends APIResource {
  /**
   * Search for products.
   */
  perform(body: SearchPerformParams, options?: RequestOptions): APIPromise<SearchPerformResponse> {
    return this._client.post('/v0/search', { body, ...options });
  }
}

export type SearchPerformResponse = Array<SearchPerformResponse.SearchPerformResponseItem>;

export namespace SearchPerformResponse {
  /**
   * A product
   */
  export interface SearchPerformResponseItem {
    id: string;

    availability: ProductsAPI.AvailabilityStatus;

    brand_name: string;

    image_url: string;

    price: ProductsAPI.Price;

    score: number;

    title: string;

    url: string;

    description?: string | null;

    variants?: Array<ProductsAPI.Variant>;
  }
}

export interface SearchPerformParams {
  /**
   * Base64 encoded image
   */
  base64_image?: string | null;

  /**
   * Optional configuration
   */
  config?: SearchPerformParams.Config;

  /**
   * Optional customer information to personalize search results
   */
  context?: string | null;

  /**
   * Optional filters
   */
  filters?: SearchPerformParams.Filters;

  /**
   * Image URL
   */
  image_url?: string | null;

  /**
   * Optional limit on the number of results
   */
  limit?: number | null;

  /**
   * Search query
   */
  query?: string | null;
}

export namespace SearchPerformParams {
  /**
   * Optional configuration
   */
  export interface Config {
    enrich_query?: boolean;

    /**
     * Mode for redirecting to a product page
     */
    redirect_mode?: 'brand' | 'price' | 'commission' | null;

    semantic_search?: boolean;
  }

  /**
   * Optional filters
   */
  export interface Filters {
    /**
     * List of availability statuses
     */
    availability?: Array<ProductsAPI.AvailabilityStatus> | null;

    /**
     * List of brand IDs
     */
    brand_ids?: Array<string> | null;

    /**
     * List of product IDs to exclude
     */
    exclude_product_ids?: Array<string> | null;

    gender?: 'male' | 'female' | 'unisex' | null;

    /**
     * Price filter. Values are inclusive.
     */
    price?: Filters.Price | null;
  }

  export namespace Filters {
    /**
     * Price filter. Values are inclusive.
     */
    export interface Price {
      /**
       * Maximum price, in dollars and cents
       */
      max_price?: number | null;

      /**
       * Minimum price, in dollars and cents
       */
      min_price?: number | null;
    }
  }
}

export declare namespace Search {
  export {
    type SearchPerformResponse as SearchPerformResponse,
    type SearchPerformParams as SearchPerformParams,
  };
}
