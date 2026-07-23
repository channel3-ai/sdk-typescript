// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ProductsAPI from './products';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * @deprecated use `products.search` (or `products.search_by_image` / `products.find_similar`) instead; this resource will be removed in the next major version
 */
export class Search extends APIResource {
  /**
   * Search for products with pagination support.
   *
   * At least one of `query`, `image_url`, `base64_image`, or `page_token` must be
   * provided; requests with none of these will return 422.
   *
   * @deprecated use `products.search` instead, which auto-paginates; will be removed in the next major version
   */
  perform(body: SearchPerformParams, options?: RequestOptions): APIPromise<SearchResponse> {
    return this._client.post('/v1/search', { body, ...options });
  }
}

/**
 * Search and locale options for a search request.
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
    | 'GR'
    | 'RO'
    | null;

  /**
   * ISO 4217 currency code. When unset, inferred from `country` (e.g. `GB` → `GBP`),
   * defaulting to `USD`.
   */
  currency?: 'USD' | 'CAD' | 'AUD' | 'GBP' | 'EUR' | 'SEK' | 'CZK' | 'RON' | null;

  /**
   * @deprecated Deprecated: use `mode`. `true` is equivalent to `mode=keyword`.
   */
  keyword_search_only?: boolean;

  /**
   * ISO 639-1 language code. When unset, inferred from `country` (preferred) then
   * `currency`, defaulting to `en`.
   */
  language?: 'en' | 'de' | 'fr' | 'it' | 'es' | 'nl' | 'sv' | 'fi' | 'pt' | 'cs' | 'el' | 'ro' | null;

  /**
   * Preferred unit for length dimensions (length/width/height) in responses. A
   * request dimension filter's unit for the field takes precedence; when neither is
   * set, the merchant's stated unit is returned.
   */
  length_unit?: 'mm' | 'cm' | 'm' | 'in' | 'ft' | null;

  /**
   * Search strategy. `default` (recommended) combines lexical + semantic search and
   * is right for most use cases. `keyword` is lexical only — use it for real-time,
   * low-latency needs like ad targeting. `agentic` uses an LLM to plan multiple
   * structured sub-searches for complex queries, with higher latency than the other
   * modes.
   */
  mode?: 'keyword' | 'default' | 'agentic';

  /**
   * Preferred unit for weight dimensions in responses. A request dimension filter's
   * weight unit takes precedence; when neither is set, the merchant's stated unit is
   * returned.
   */
  weight_unit?: 'mg' | 'g' | 'kg' | 'oz' | 'lb' | null;
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
   * If provided, only products whose extracted attributes match these key/value
   * constraints will be returned. Keys are attribute handles (e.g. 'color',
   * 'material') and values are lists of allowed values (OR within a key, AND across
   * keys). When a category filter is also supplied, all keys must be valid
   * attributes of at least one of the requested categories. See
   * `Category.attributes` for the valid keys/values per category.
   */
  attributes?: { [key: string]: Array<string> } | null;

  /**
   * If provided, only products with these availability statuses will be returned
   */
  availability?: Array<ProductsAPI.AvailabilityStatus> | null;

  /**
   * If provided, only products from these brands will be returned
   */
  brand_ids?: Array<string> | null;

  /**
   * If provided, only products from these categories will be returned. Accepts
   * category slugs.
   */
  category_ids?: Array<string> | null;

  /**
   * [Beta] Color filter wrapper. Holds required colors and optional match mode.
   */
  colors?: SearchFilters.Colors | null;

  /**
   * Filter by offer condition. Requires at least one offer matching the requested
   * condition, locale, and any price filter. Offers without condition data are
   * indexed as new.
   */
  condition?: 'new' | 'refurbished' | 'used' | null;

  /**
   * Physical-dimension range filters, matched against the same offer.
   *
   * Matching products have at least one offer satisfying every provided range
   * (alongside any locale/price/availability filters). Values are compared with a
   * small relative tolerance. An offer with no dimension data for a filtered field
   * does not match; note that when a single merchant on a product reports a
   * dimension it is shared across that product's offers, so a matching offer may not
   * itself surface that dimension in the response.
   */
  dimensions?: SearchFilters.Dimensions | null;

  /**
   * If provided, products from these brands will be excluded from the results
   */
  exclude_brand_ids?: Array<string> | null;

  /**
   * If provided, products in these categories (or their descendants) will be
   * excluded from the results. Accepts category slugs.
   */
  exclude_category_ids?: Array<string> | null;

  /**
   * If provided, products from these websites will be excluded from the results.
   * Accepts website IDs or domains (e.g. "nike.com").
   */
  exclude_website_ids?: Array<string> | null;

  gender?: 'male' | 'female' | null;

  /**
   * Price filter for search. Values are inclusive.
   */
  price?: SearchFilterPrice | null;

  /**
   * If 'on_sale', only products with at least one on-sale offer (priced below its
   * compare-at price) for the requested locale are returned. If omitted, no filter.
   */
  sale?: 'on_sale' | null;

  /**
   * If provided, only products from these websites will be returned. Accepts website
   * IDs or domains (e.g. "nike.com").
   */
  website_ids?: Array<string> | null;
}

export namespace SearchFilters {
  /**
   * [Beta] Color filter wrapper. Holds required colors and optional match mode.
   */
  export interface Colors {
    /**
     * Colors required in matching products. Treated as an AND condition.
     */
    palette: Array<Colors.Palette>;

    /**
     * How tightly colors must match: 'strict', 'standard', or 'loose'.
     */
    match?: 'strict' | 'standard' | 'loose';
  }

  export namespace Colors {
    /**
     * A single color requirement for the color filter.
     */
    export interface Palette {
      /**
       * sRGB hex string, e.g. '#a1b2c3'
       */
      hex: string;

      /**
       * Percentage of color, where 1.0 is 100%
       */
      percentage?: number | null;
    }
  }

  /**
   * Physical-dimension range filters, matched against the same offer.
   *
   * Matching products have at least one offer satisfying every provided range
   * (alongside any locale/price/availability filters). Values are compared with a
   * small relative tolerance. An offer with no dimension data for a filtered field
   * does not match; note that when a single merchant on a product reports a
   * dimension it is shared across that product's offers, so a matching offer may not
   * itself surface that dimension in the response.
   */
  export interface Dimensions {
    height?: Dimensions.Height | null;

    length?: Dimensions.Length | null;

    weight?: Dimensions.Weight | null;

    width?: Dimensions.Width | null;
  }

  export namespace Dimensions {
    export interface Height {
      /**
       * Unit that min/max are expressed in
       */
      unit: 'mm' | 'cm' | 'm' | 'in' | 'ft';

      /**
       * Maximum value, in `unit`. Inclusive.
       */
      max?: number | null;

      /**
       * Minimum value, in `unit`. Inclusive.
       */
      min?: number | null;
    }

    export interface Length {
      /**
       * Unit that min/max are expressed in
       */
      unit: 'mm' | 'cm' | 'm' | 'in' | 'ft';

      /**
       * Maximum value, in `unit`. Inclusive.
       */
      max?: number | null;

      /**
       * Minimum value, in `unit`. Inclusive.
       */
      min?: number | null;
    }

    export interface Weight {
      /**
       * Unit that min/max are expressed in
       */
      unit: 'mg' | 'g' | 'kg' | 'oz' | 'lb';

      /**
       * Maximum value, in `unit`. Inclusive.
       */
      max?: number | null;

      /**
       * Minimum value, in `unit`. Inclusive.
       */
      min?: number | null;
    }

    export interface Width {
      /**
       * Unit that min/max are expressed in
       */
      unit: 'mm' | 'cm' | 'm' | 'in' | 'ft';

      /**
       * Maximum value, in `unit`. Inclusive.
       */
      max?: number | null;

      /**
       * Minimum value, in `unit`. Inclusive.
       */
      min?: number | null;
    }
  }
}

/**
 * Search request with pagination support.
 */
export interface SearchRequest {
  /**
   * Base64 encoded image. At least one of `query`, `image_url`, `base64_image`, or
   * `page_token` must be provided.
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
   * Image URL. At least one of `query`, `image_url`, `base64_image`, or `page_token`
   * must be provided.
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
   * Search query. At least one of `query`, `image_url`, `base64_image`, or
   * `page_token` must be provided.
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
   * Base64 encoded image. At least one of `query`, `image_url`, `base64_image`, or
   * `page_token` must be provided.
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
   * Image URL. At least one of `query`, `image_url`, `base64_image`, or `page_token`
   * must be provided.
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
   * Search query. At least one of `query`, `image_url`, `base64_image`, or
   * `page_token` must be provided.
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
