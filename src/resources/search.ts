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
   * If True, search will use AI to enrich the query, for example pulling the gender,
   * brand, and price range from the query.
   */
  enrich_query?: boolean;

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
   * Optional limit on the number of results
   */
  limit?: number | null;

  /**
   * Search query
   */
  query?: string | null;
}

export type SearchPerformResponse = Array<SearchPerformResponse.SearchPerformResponseItem>;

export namespace SearchPerformResponse {
  /**
   * A search result that includes product details and a relevance score.
   */
  export interface SearchPerformResponseItem {
    id: string;

    availability: ProductsAPI.AvailabilityStatus;

    /**
     * @deprecated Main product image (deprecated, use images field)
     */
    image_url: string;

    price: ProductsAPI.Price;

    score: number;

    title: string;

    url: string;

    brand_id?: string | null;

    brand_name?: string | null;

    categories?: Array<string>;

    description?: string | null;

    gender?: 'male' | 'female' | 'unisex' | null;

    /**
     * @deprecated List of image URLs (deprecated, use images field)
     */
    image_urls?: Array<string>;

    images?: Array<SearchPerformResponseItem.Image>;

    key_features?: Array<string> | null;

    materials?: Array<string> | null;

    variants?: Array<ProductsAPI.Variant>;
  }

  export namespace SearchPerformResponseItem {
    /**
     * Product image with metadata
     */
    export interface Image {
      url: string;

      alt_text?: string | null;

      is_main_image?: boolean;

      /**
       * Photo quality classification for API responses. Note: This enum is decoupled
       * from internal ImageIntelligence types as they may diverge.
       */
      photo_quality?: 'professional' | 'ugc' | 'poor' | null;

      /**
       * Product image type classification for API responses. Note: This enum is
       * decoupled from internal ImageIntelligence types as they may diverge.
       */
      shot_type?:
        | 'hero'
        | 'lifestyle'
        | 'on_model'
        | 'detail'
        | 'scale_reference'
        | 'angle_view'
        | 'flat_lay'
        | 'in_use'
        | 'packaging'
        | 'size_chart'
        | 'color_swatch'
        | 'product_information'
        | 'merchant_information'
        | null;
    }
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
   * Optional limit on the number of results
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
