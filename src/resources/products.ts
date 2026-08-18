// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ProductsAPI from './products';
import * as CategoriesAPI from './categories';
import * as SearchAPI from './search';
import { APIPromise } from '../core/api-promise';
import { PagePromise, SearchPage, type SearchPageParams } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Products extends APIResource {
  /**
   * Get detailed information about a specific product by its ID.
   */
  retrieve(
    productID: string,
    params: ProductRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProductDetail> {
    const { 'x-user-id': xUserID, ...query } = params ?? {};
    return this._client.get(path`/v1/products/${productID}`, {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xUserID != null ? { 'x-user-id': xUserID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * List and page through products for a set of filters.
   *
   * Useful for a static, grid view of products for a brand, website, or category.
   *
   * At least one of `filters.brand_ids`, `filters.category_ids`, or
   * `filters.website_ids` must be provided.
   */
  browse(
    params: ProductBrowseParams,
    options?: RequestOptions,
  ): PagePromise<ProductDetailsSearchPage, ProductDetail> {
    const { 'x-user-id': xUserID, ...body } = params;
    return this._client.getAPIList('/v1/browse', SearchPage<ProductDetail>, {
      body,
      method: 'post',
      ...options,
      headers: buildHeaders([
        { ...(xUserID != null ? { 'x-user-id': xUserID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Find products similar to a given product.
   *
   * Consider setting `filters` to narrow results to the same gender, brand,
   * category, price range, etc. when you only want similar items within a specific
   * slice of the catalog.
   */
  findSimilar(
    params: ProductFindSimilarParams,
    options?: RequestOptions,
  ): PagePromise<ProductDetailsSearchPage, ProductDetail> {
    const { 'x-user-id': xUserID, ...body } = params;
    return this._client.getAPIList('/v1/similar', SearchPage<ProductDetail>, {
      body,
      method: 'post',
      ...options,
      headers: buildHeaders([
        { ...(xUserID != null ? { 'x-user-id': xUserID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieve product information for any supported product URL.
   *
   * Returns the same Product model as GET /v1/products/{product_id}. The product_id
   * in the response can be used with the Product Detail endpoint.
   */
  lookup(params: ProductLookupParams, options?: RequestOptions): APIPromise<LookupResponse> {
    const { 'x-user-id': xUserID, ...body } = params;
    return this._client.post('/v1/lookup', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(xUserID != null ? { 'x-user-id': xUserID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Return monetizable offers (with max commission rate) for a product URL.
   *
   * Access to this endpoint is restricted. If you think your use-case requires it,
   * please contact us. Usually, developers actually want search. This is helpful for
   * migrating to Channel3.
   */
  monetize(params: ProductMonetizeParams, options?: RequestOptions): APIPromise<MonetizeResponse> {
    const { 'x-user-id': xUserID, ...body } = params;
    return this._client.post('/v1/monetize', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(xUserID != null ? { 'x-user-id': xUserID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Search for products with pagination support.
   *
   * At least one of `query`, `image_url`, `base64_image`, or `page_token` must be
   * provided; requests with none of these will return 422.
   */
  search(
    params: ProductSearchParams,
    options?: RequestOptions,
  ): PagePromise<ProductDetailsSearchPage, ProductDetail> {
    const { 'x-user-id': xUserID, ...body } = params;
    return this._client.getAPIList('/v1/search', SearchPage<ProductDetail>, {
      body,
      method: 'post',
      ...options,
      headers: buildHeaders([
        { ...(xUserID != null ? { 'x-user-id': xUserID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Search the catalog by image (URL or base64), with pagination support.
   *
   * Provide exactly one of `image_url` or `base64_image`. For text or text+image
   * search, use `POST /v1/search`.
   */
  searchByImage(
    params: ProductSearchByImageParams,
    options?: RequestOptions,
  ): PagePromise<ProductDetailsSearchPage, ProductDetail> {
    const { 'x-user-id': xUserID, ...body } = params;
    return this._client.getAPIList('/v1/image-search', SearchPage<ProductDetail>, {
      body,
      method: 'post',
      ...options,
      headers: buildHeaders([
        { ...(xUserID != null ? { 'x-user-id': xUserID } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export type ProductDetailsSearchPage = SearchPage<ProductDetail>;

/**
 * The two availability values the public API emits on offers.
 *
 * Internal `AvailabilityStatus` values are collapsed to these via
 * `AvailabilityStatus.to_api()`.
 */
export type AvailabilityStatus = 'InStock' | 'OutOfStock';

/**
 * Filter-driven product listing with pagination (no free-text query).
 */
export interface BrowseRequest {
  /**
   * Filters to browse by. At least one of `brand_ids`, `category_ids`, or
   * `website_ids` must be provided.
   */
  filters?: SearchAPI.SearchFilters;

  /**
   * Optional limit on the number of results. Default is 20, max is 30.
   */
  limit?: number | null;

  /**
   * Opaque token from a previous browse response to fetch the next page.
   */
  page_token?: string | null;
}

/**
 * Image-only search request.
 */
export interface ImageSearchRequest {
  /**
   * Base64 encoded image bytes (no data URI prefix).
   */
  base64_image?: string | null;

  /**
   * Optional locale configuration.
   */
  config?: LocaleConfig;

  /**
   * Optional filters. Search will only consider products that match all of the
   * filters.
   */
  filters?: SearchAPI.SearchFilters;

  /**
   * Publicly accessible URL of the image to search with.
   */
  image_url?: string | null;

  /**
   * Optional limit on the number of results. Default is 20, max is 30.
   */
  limit?: number | null;

  /**
   * Opaque token from a previous image-search response to fetch the next page of
   * results.
   */
  page_token?: string | null;

  /**
   * Image segmentation mode. None (default) disables segmentation. "AUTO" segments
   * and crops the main product automatically. A custom string (e.g. "shoe", "mug")
   * segments the specified object.
   */
  segment?: string | null;
}

/**
 * Locale options for API requests.
 *
 * Locale fields are optional; the server infers missing values. Details are on
 * `language`, `country`, and `currency` below.
 */
export interface LocaleConfig {
  /**
   * ISO 3166-1 alpha-2 country code (plus the pan-region `EU`).
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
   * ISO 4217 currency code.
   */
  currency?: 'USD' | 'CAD' | 'AUD' | 'GBP' | 'EUR' | 'SEK' | 'CZK' | 'RON' | null;

  /**
   * ISO 639-1 language code.
   */
  language?: 'en' | 'de' | 'fr' | 'it' | 'es' | 'nl' | 'sv' | 'fi' | 'pt' | 'cs' | 'el' | 'ro' | null;

  /**
   * Preferred unit for length dimensions (length/width/height) in responses. A
   * request dimension filter's unit for the field takes precedence; when neither is
   * set, the merchant's stated unit is returned.
   */
  length_unit?: 'mm' | 'cm' | 'm' | 'in' | 'ft' | null;

  /**
   * Preferred unit for weight dimensions in responses. A request dimension filter's
   * weight unit takes precedence; when neither is set, the merchant's stated unit is
   * returned.
   */
  weight_unit?: 'mg' | 'g' | 'kg' | 'oz' | 'lb' | null;
}

export interface LookupRequest {
  /**
   * The URL of the product to look up
   */
  url: string;

  /**
   * Maximum age (in hours) of cached product data before forcing a fresh lookup.
   * Defaults to 3 hours.
   */
  max_staleness_hours?: number;
}

/**
 * Response from the /v1/lookup endpoint.
 */
export interface LookupResponse {
  /**
   * Product with detailed information.
   */
  product: ProductDetail;
}

export interface MonetizeOffer {
  /**
   * Merchant domain, e.g. nordstrom.com
   */
  domain: string;

  /**
   * buy.trychannel3.com deeplink. Clicks are tracked and routed through the
   * highest-paying affiliate network for the merchant.
   */
  url: string;

  /**
   * Maximum post-take-rate commission for the merchant, as a decimal (0.05 = 5%).
   * 'Max' because the realized rate may be lower.
   */
  max_commission_rate?: number;
}

export interface MonetizeRequest {
  /**
   * The URL of the product to monetize
   */
  url: string;
}

/**
 * Response from the /v1/monetize endpoint — just the list of offers.
 */
export interface MonetizeResponse {
  /**
   * Monetizable offers, sorted by max_commission_rate descending.
   */
  offers?: Array<MonetizeOffer>;
}

export interface Price {
  /**
   * The currency code of the product, like USD, EUR, GBP, etc.
   */
  currency: string;

  /**
   * The current price of the product, including any discounts.
   */
  price: number;

  /**
   * The original price of the product before any discounts.
   */
  compare_at_price?: number | null;
}

export interface ProductBrand {
  id: string;

  name: string;
}

/**
 * Product with detailed information.
 */
export interface ProductDetail {
  id: string;

  title: string;

  /**
   * Target age group. Age-agnostic products are typically returned as 'adult'.
   */
  age?: 'newborn' | 'infant' | 'toddler' | 'kids' | 'adult' | null;

  /**
   * Ordered list of brands.
   */
  brands?: Array<ProductBrand>;

  /**
   * Lean category representation used in search hits and list rows.
   */
  category?: CategoriesAPI.CategorySummary | null;

  description?: string | null;

  /**
   * Product gender. 'unisex' is deprecated: coerced to None on input, never emitted.
   */
  gender?: 'male' | 'female' | null;

  images?: Array<ProductImage>;

  key_features?: Array<string> | null;

  materials?: Array<string> | null;

  /**
   * All merchant offers for this product in the requested locale.
   */
  offers?: Array<ProductOffer>;

  /**
   * Structured attributes extracted for this product, keyed by attribute handle
   * (e.g. 'color', 'material'). Values are the canonical allowed values for that
   * handle.
   */
  structured_attributes?: { [key: string]: Array<string> };

  /**
   * Wrapper for variant-interaction state on a Product.
   *
   * Holds `options` and `selected`. `options` represent all of the configuration
   * options for the product. `selected` represents the currently selected option
   * values.
   */
  variants?: ProductDetail.Variants | null;
}

export namespace ProductDetail {
  /**
   * Wrapper for variant-interaction state on a Product.
   *
   * Holds `options` and `selected`. `options` represent all of the configuration
   * options for the product. `selected` represents the currently selected option
   * values.
   */
  export interface Variants {
    options: Array<Variants.Option>;

    selected: Array<Variants.Selected>;
  }

  export namespace Variants {
    /**
     * One dimension of a product family (e.g. 'Color', 'Size').
     */
    export interface Option {
      /**
       * The name of the option (e.g. 'Color', 'Size')
       */
      name: string;

      /**
       * The values of the option (e.g. ['Blue', 'Red', 'Green'])
       */
      values: Array<Option.Value>;
    }

    export namespace Option {
      /**
       * One value of one variant option (e.g. 'Blue' under 'Color')
       */
      export interface Value {
        /**
         * Whether the option value exists on the product, or is a configuration only
         * present on another variant of the same product. For example, a shirt that comes
         * in multiple colors, but only one color is available in Size XL.
         */
        exists: boolean;

        /**
         * The display value of the option value (e.g. 'Blue')
         */
        label: string;

        /**
         * The two availability values the public API emits on offers.
         *
         * Internal `AvailabilityStatus` values are collapsed to these via
         * `AvailabilityStatus.to_api()`.
         */
        available?: ProductsAPI.AvailabilityStatus | null;

        /**
         * The product id that represents this value. Variants that point to different
         * products will have this field set, as well as thumbnail_url for displaying
         * selector icons.
         */
        product_id?: string | null;

        /**
         * For options that reference different products, this is the URL of the thumbnail
         * image for the option value. E.g., a shoe that comes in multiple colors will have
         * an OptionValue for each color with a thumbnail_url set.
         */
        thumbnail_url?: string | null;
      }
    }

    /**
     * One effective selection on a product, post server-side relaxation.
     */
    export interface Selected {
      /**
       * The display value of the selected option (e.g. 'Blue', 'XL')
       */
      label: string;

      /**
       * The name of the selected option (e.g. 'Color', 'Size')
       */
      name: string;
    }
  }
}

/**
 * Product image with metadata.
 */
export interface ProductImage {
  url: string;

  alt_text?: string | null;

  /**
   * Background-removed square image on Channel3 CDN when available. Use for product
   * grids; `url` is the regular hosted shot.
   */
  cleaned_url?: string | null;

  is_main_image?: boolean;

  /**
   * Product image type classification for API responses.
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
    | 'product_information'
    | 'merchant_information'
    | null;
}

export interface ProductOffer {
  /**
   * The two availability values the public API emits on offers.
   *
   * Internal `AvailabilityStatus` values are collapsed to these via
   * `AvailabilityStatus.to_api()`.
   */
  availability: AvailabilityStatus;

  domain: string;

  price: Price;

  url: string;

  /**
   * Offer condition. 'refurbished' is deprecated: rejected as a filter value,
   * coerced to None on responses.
   */
  condition?: 'new' | 'used' | null;

  /**
   * Physical dimensions of a product offer. Members are null when unknown.
   *
   * Values are standardized to the supported unit set; a merchant-stated value whose
   * unit is not one of those units is omitted rather than shown.
   */
  dimensions?: ProductOffer.Dimensions | null;

  /**
   * The maximum commission rate for the merchant, as a decimal fraction: 0 is no
   * commission, 0.5 is 50% commission. 'Max' because the actual commission rate may
   * be lower due to vendor-specific affiliate rules.
   */
  max_commission_rate?: number;
}

export namespace ProductOffer {
  /**
   * Physical dimensions of a product offer. Members are null when unknown.
   *
   * Values are standardized to the supported unit set; a merchant-stated value whose
   * unit is not one of those units is omitted rather than shown.
   */
  export interface Dimensions {
    /**
     * A length measurement, in one of the supported length units.
     */
    height?: Dimensions.Height | null;

    /**
     * A length measurement, in one of the supported length units.
     */
    length?: Dimensions.Length | null;

    /**
     * A weight measurement, in one of the supported weight units.
     */
    weight?: Dimensions.Weight | null;

    /**
     * A length measurement, in one of the supported length units.
     */
    width?: Dimensions.Width | null;
  }

  export namespace Dimensions {
    /**
     * A length measurement, in one of the supported length units.
     */
    export interface Height {
      number: number;

      /**
       * The unit from the request's dimension filters when one was given (the value is
       * converted to it); otherwise the unit the merchant stated.
       */
      unit: 'mm' | 'cm' | 'm' | 'in' | 'ft';
    }

    /**
     * A length measurement, in one of the supported length units.
     */
    export interface Length {
      number: number;

      /**
       * The unit from the request's dimension filters when one was given (the value is
       * converted to it); otherwise the unit the merchant stated.
       */
      unit: 'mm' | 'cm' | 'm' | 'in' | 'ft';
    }

    /**
     * A weight measurement, in one of the supported weight units.
     */
    export interface Weight {
      number: number;

      /**
       * The unit from the request's dimension filters when one was given (the value is
       * converted to it); otherwise the unit the merchant stated.
       */
      unit: 'mg' | 'g' | 'kg' | 'oz' | 'lb';
    }

    /**
     * A length measurement, in one of the supported length units.
     */
    export interface Width {
      number: number;

      /**
       * The unit from the request's dimension filters when one was given (the value is
       * converted to it); otherwise the unit the merchant stated.
       */
      unit: 'mm' | 'cm' | 'm' | 'in' | 'ft';
    }
  }
}

/**
 * Find products similar to a given product.
 */
export interface SimilarProductsRequest {
  /**
   * Canonical product ID to find similar products for.
   */
  product_id: string;

  /**
   * Optional locale configuration.
   */
  config?: LocaleConfig;

  /**
   * Optional filters. Search will only consider products that match all of the
   * filters.
   */
  filters?: SearchAPI.SearchFilters;

  /**
   * Optional limit on the number of results. Default is 20, max is 30.
   */
  limit?: number | null;

  /**
   * Opaque token from a previous similar response to fetch the next page of results.
   */
  page_token?: string | null;
}

export interface ProductRetrieveParams {
  /**
   * Query param: ISO 3166-1 alpha-2 country code. Matches any country when unset;
   * defaults to 'US' only when language and currency are also unset.
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
   * Query param: ISO 4217 currency code. When unset, inferred from `country` (e.g.
   * GB -> GBP); falls back to 'USD' only when all three locale fields are unset.
   */
  currency?: 'USD' | 'CAD' | 'AUD' | 'GBP' | 'EUR' | 'SEK' | 'CZK' | 'RON' | null;

  /**
   * Query param: ISO 639-1 language code. Matches any language when unset; defaults
   * to 'en' only when country and currency are also unset.
   */
  language?: 'en' | 'de' | 'fr' | 'it' | 'es' | 'nl' | 'sv' | 'fi' | 'pt' | 'cs' | 'el' | 'ro' | null;

  /**
   * Query param: Preferred unit for length dimensions (length/width/height). When
   * unset, dimensions are returned in the unit the merchant stated.
   */
  length_unit?: 'mm' | 'cm' | 'm' | 'in' | 'ft' | null;

  /**
   * Query param: Optional list of website IDs to constrain the buy URL to, relevant
   * if multiple merchants exist. Accepts website IDs or domains (e.g. "nike.com").
   */
  website_ids?: Array<string> | null;

  /**
   * Query param: Preferred unit for weight dimensions. When unset, weight is
   * returned in the unit the merchant stated.
   */
  weight_unit?: 'mg' | 'g' | 'kg' | 'oz' | 'lb' | null;

  /**
   * Header param: Optional user identifier to attribute clicks and sales to a user
   * in your system. Channel3 appends it to buy URLs in the response.
   */
  'x-user-id'?: string;
}

export interface ProductBrowseParams extends SearchPageParams {
  /**
   * Body param: Filters to browse by. At least one of `brand_ids`, `category_ids`,
   * or `website_ids` must be provided.
   */
  filters?: SearchAPI.SearchFilters;

  /**
   * Body param: Optional limit on the number of results. Default is 20, max is 30.
   */
  limit?: number | null;

  /**
   * Header param: Optional user identifier to attribute clicks and sales to a user
   * in your system. Channel3 appends it to buy URLs in the response.
   */
  'x-user-id'?: string;
}

export interface ProductFindSimilarParams extends SearchPageParams {
  /**
   * Body param: Canonical product ID to find similar products for.
   */
  product_id: string;

  /**
   * Body param: Optional locale configuration.
   */
  config?: LocaleConfig;

  /**
   * Body param: Optional filters. Search will only consider products that match all
   * of the filters.
   */
  filters?: SearchAPI.SearchFilters;

  /**
   * Body param: Optional limit on the number of results. Default is 20, max is 30.
   */
  limit?: number | null;

  /**
   * Header param: Optional user identifier to attribute clicks and sales to a user
   * in your system. Channel3 appends it to buy URLs in the response.
   */
  'x-user-id'?: string;
}

export interface ProductLookupParams {
  /**
   * Body param: The URL of the product to look up
   */
  url: string;

  /**
   * Body param: Maximum age (in hours) of cached product data before forcing a fresh
   * lookup. Defaults to 3 hours.
   */
  max_staleness_hours?: number;

  /**
   * Header param: Optional user identifier to attribute clicks and sales to a user
   * in your system. Channel3 appends it to buy URLs in the response.
   */
  'x-user-id'?: string;
}

export interface ProductMonetizeParams {
  /**
   * Body param: The URL of the product to monetize
   */
  url: string;

  /**
   * Header param: Optional user identifier to attribute clicks and sales to a user
   * in your system. Channel3 appends it to buy URLs in the response.
   */
  'x-user-id'?: string;
}

export interface ProductSearchParams extends SearchPageParams {
  /**
   * Body param: Base64 encoded image. At least one of `query`, `image_url`,
   * `base64_image`, or `page_token` must be provided.
   */
  base64_image?: string | null;

  /**
   * Body param: Optional configuration
   */
  config?: SearchAPI.SearchConfig;

  /**
   * Body param: Optional filters. Search will only consider products that match all
   * of the filters.
   */
  filters?: SearchAPI.SearchFilters;

  /**
   * Body param: Image URL. At least one of `query`, `image_url`, `base64_image`, or
   * `page_token` must be provided.
   */
  image_url?: string | null;

  /**
   * Body param: Optional limit on the number of results. Default is 20, max is 30.
   */
  limit?: number | null;

  /**
   * Body param: Search query. At least one of `query`, `image_url`, `base64_image`,
   * or `page_token` must be provided.
   */
  query?: string | null;

  /**
   * Header param: Optional user identifier to attribute clicks and sales to a user
   * in your system. Channel3 appends it to buy URLs in the response.
   */
  'x-user-id'?: string;
}

export interface ProductSearchByImageParams extends SearchPageParams {
  /**
   * Body param: Base64 encoded image bytes (no data URI prefix).
   */
  base64_image?: string | null;

  /**
   * Body param: Optional locale configuration.
   */
  config?: LocaleConfig;

  /**
   * Body param: Optional filters. Search will only consider products that match all
   * of the filters.
   */
  filters?: SearchAPI.SearchFilters;

  /**
   * Body param: Publicly accessible URL of the image to search with.
   */
  image_url?: string | null;

  /**
   * Body param: Optional limit on the number of results. Default is 20, max is 30.
   */
  limit?: number | null;

  /**
   * Body param: Image segmentation mode. None (default) disables segmentation.
   * "AUTO" segments and crops the main product automatically. A custom string (e.g.
   * "shoe", "mug") segments the specified object.
   */
  segment?: string | null;

  /**
   * Header param: Optional user identifier to attribute clicks and sales to a user
   * in your system. Channel3 appends it to buy URLs in the response.
   */
  'x-user-id'?: string;
}

export declare namespace Products {
  export {
    type AvailabilityStatus as AvailabilityStatus,
    type BrowseRequest as BrowseRequest,
    type ImageSearchRequest as ImageSearchRequest,
    type LocaleConfig as LocaleConfig,
    type LookupRequest as LookupRequest,
    type LookupResponse as LookupResponse,
    type MonetizeOffer as MonetizeOffer,
    type MonetizeRequest as MonetizeRequest,
    type MonetizeResponse as MonetizeResponse,
    type Price as Price,
    type ProductBrand as ProductBrand,
    type ProductDetail as ProductDetail,
    type ProductImage as ProductImage,
    type ProductOffer as ProductOffer,
    type SimilarProductsRequest as SimilarProductsRequest,
    type ProductDetailsSearchPage as ProductDetailsSearchPage,
    type ProductRetrieveParams as ProductRetrieveParams,
    type ProductBrowseParams as ProductBrowseParams,
    type ProductFindSimilarParams as ProductFindSimilarParams,
    type ProductLookupParams as ProductLookupParams,
    type ProductMonetizeParams as ProductMonetizeParams,
    type ProductSearchParams as ProductSearchParams,
    type ProductSearchByImageParams as ProductSearchByImageParams,
  };
}
