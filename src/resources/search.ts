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

    categories?: Array<string>;

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
   * Optional filters. Search will only consider products that match all of the
   * filters.
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
    /**
     * If True, search will use AI to enrich the query, for example pulling the gender,
     * brand, and price range from the query.
     */
    enrich_query?: boolean;

    /**
     * "price" redirects to the product page with the lowest price "commission"
     * redirects to the product page with the highest commission rate "brand" redirects
     * to the brand's product page
     */
    redirect_mode?: 'brand' | 'price' | 'commission' | null;
  }

  /**
   * Optional filters. Search will only consider products that match all of the
   * filters.
   */
  export interface Filters {
    /**
     * If provided, only products with these availability statuses will be returned
     */
    availability?: Array<ProductsAPI.AvailabilityStatus> | null;

    /**
     * If provided, only products from these brands will be returned
     */
    brand_ids?: Array<string> | null;

    /**
     * If provided, only products from these categories will be returned
     */
    category_ids?: Array<string> | null;

    /**
     * Filter by product condition. Incubating: condition data is currently incomplete;
     * products without condition data will be included in all condition filter
     * results.
     */
    condition?: 'new' | 'refurbished' | 'used' | null;

    /**
     * If provided, products with these IDs will be excluded from the results
     */
    exclude_product_ids?: Array<string> | null;

    gender?: 'male' | 'female' | 'unisex' | null;

    /**
     * Price filter. Values are inclusive.
     */
    price?: Filters.Price | null;

    /**
     * If provided, only products from these websites will be returned
     */
    website_ids?: Array<string> | null;
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
