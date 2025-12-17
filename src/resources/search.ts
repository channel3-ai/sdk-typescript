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

/**
 * "price" redirects to the product page with the lowest price "commission"
 * redirects to the product page with the highest commission rate "brand" redirects
 * to the brand's product page
 */
export type RedirectMode = 'brand' | 'price' | 'commission';

/**
 * Configuration for a search request
 */
export interface SearchConfig {
  /**
   * If True, search will only use keyword search and not vector search. Keyword-only
   * search is not supported with image input.
   */
  keyword_search_only?: boolean;

  /**
   * "price" redirects to the product page with the lowest price "commission"
   * redirects to the product page with the highest commission rate "brand" redirects
   * to the brand's product page
   */
  redirect_mode?: RedirectMode | null;
}

/**
 * Price filter. Values are inclusive.
 */
export interface SearchFilterPrice {
  /**
   * Maximum price, in dollars and cents
   */
  max_price?: number | null;

  /**
   * Minimum price, in dollars and cents
   */
  min_price?: number | null;
}

export interface SearchFilters {
  /**
   * Filter by age group. Age-agnostic products are treated as adult products.
   */
  age?: Array<'newborn' | 'infant' | 'toddler' | 'kids' | 'adult'> | null;

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
  price?: SearchFilterPrice | null;

  /**
   * If provided, only products from these websites will be returned
   */
  website_ids?: Array<string> | null;
}

export interface SearchRequest {
  /**
   * Base64 encoded image
   */
  base64_image?: string | null;

  /**
   * Optional configuration
   */
  config?: SearchConfig;

  /**
   * Optional customer information to personalize search results
   */
  context?: string | null;

  /**
   * Optional filters. Search will only consider products that match all of the
   * filters.
   */
  filters?: SearchFilters;

  /**
   * Image URL
   */
  image_url?: string | null;

  /**
   * Optional limit on the number of results. Default is 20, max is 30.
   */
  limit?: number | null;

  /**
   * Search query
   */
  query?: string | null;
}

export type SearchPerformResponse = Array<ProductsAPI.Product>;

export interface SearchPerformParams {
  /**
   * Base64 encoded image
   */
  base64_image?: string | null;

  /**
   * Optional configuration
   */
  config?: SearchConfig;

  /**
   * Optional customer information to personalize search results
   */
  context?: string | null;

  /**
   * Optional filters. Search will only consider products that match all of the
   * filters.
   */
  filters?: SearchFilters;

  /**
   * Image URL
   */
  image_url?: string | null;

  /**
   * Optional limit on the number of results. Default is 20, max is 30.
   */
  limit?: number | null;

  /**
   * Search query
   */
  query?: string | null;
}

export declare namespace Search {
  export {
    type RedirectMode as RedirectMode,
    type SearchConfig as SearchConfig,
    type SearchFilterPrice as SearchFilterPrice,
    type SearchFilters as SearchFilters,
    type SearchRequest as SearchRequest,
    type SearchPerformResponse as SearchPerformResponse,
    type SearchPerformParams as SearchPerformParams,
  };
}
