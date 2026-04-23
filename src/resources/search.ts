// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ProductsAPI from './products';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Search extends APIResource {
  /**
   * Search for products with pagination support.
   */
  perform(body: SearchPerformParams, options?: RequestOptions): APIPromise<SearchResponse> {
    return this._client.post('/v1/search', { body, ...options });
  }
}

/**
 * Search and locale options for a search request.
 *
 * Locale fields are optional; the server infers missing values. Details are on
 * `language`, `country`, and `currency` below.
 */
export interface SearchConfig {
  /**
   * ISO 3166-1 alpha-2 country code. May stay unset for pan-region storefronts (e.g.
   * `currency=EUR` with no specific country).
   */
  country?:
    | 'US'
    | 'GB'
    | 'EU'
    | 'AU'
    | 'CA'
    | 'IE'
    | 'DE'
    | 'AT'
    | 'FR'
    | 'BE'
    | 'IT'
    | 'ES'
    | 'NL'
    | 'SE'
    | 'FI'
    | 'PT'
    | 'CZ'
    | null;

  /**
   * ISO 4217 currency code. When unset, inferred from `country` (e.g. `GB` → `GBP`),
   * defaulting to `USD`.
   */
  currency?: 'USD' | 'CAD' | 'AUD' | 'GBP' | 'EUR' | 'SEK' | 'CZK' | null;

  /**
   * If True, search will only use keyword search and not vector search. Keyword-only
   * search is not supported with image input.
   */
  keyword_search_only?: boolean;

  /**
   * ISO 639-1 language code. When unset, inferred from `country` (preferred) then
   * `currency`, defaulting to `en`.
   */
  language?: 'en' | 'de' | 'fr' | 'it' | 'es' | 'nl' | 'sv' | 'fi' | 'pt' | 'cs' | null;
}

/**
 * Price filter for search. Values are inclusive.
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

  MIN_PRICE_FLOOR?: number;
}

/**
 * Search filters for the search API.
 */
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
   * If provided, products from these brands will be excluded from the results
   */
  exclude_brand_ids?: Array<string> | null;

  /**
   * If provided, products in these categories (or their descendants) will be
   * excluded from the results
   */
  exclude_category_ids?: Array<string> | null;

  /**
   * If provided, products from these websites will be excluded from the results
   */
  exclude_website_ids?: Array<string> | null;

  gender?: 'male' | 'female' | 'unisex' | null;

  /**
   * Price filter for search. Values are inclusive.
   */
  price?: SearchFilterPrice | null;

  /**
   * If provided, only products from these websites will be returned
   */
  website_ids?: Array<string> | null;
}

/**
 * Search request with pagination support.
 */
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
   * Opaque token from a previous search response to fetch the next page of results.
   */
  page_token?: string | null;

  /**
   * Search query
   */
  query?: string | null;
}

/**
 * v1 paginated search response.
 */
export interface SearchResponse {
  products: Array<ProductsAPI.ProductDetail>;

  /**
   * Token to fetch the next page. Null when no more results.
   */
  next_page_token?: string | null;
}

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
   * Opaque token from a previous search response to fetch the next page of results.
   */
  page_token?: string | null;

  /**
   * Search query
   */
  query?: string | null;
}

export declare namespace Search {
  export {
    type SearchConfig as SearchConfig,
    type SearchFilterPrice as SearchFilterPrice,
    type SearchFilters as SearchFilters,
    type SearchRequest as SearchRequest,
    type SearchResponse as SearchResponse,
    type SearchPerformParams as SearchPerformParams,
  };
}
