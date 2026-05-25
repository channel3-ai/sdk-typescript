// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ProductsAPI from './products';
import * as CategoriesAPI from './categories';
import * as SearchAPI from './search';
import { APIPromise } from '../core/api-promise';
import { PagePromise, SearchPage, type SearchPageParams } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Products extends APIResource {
  /**
   * Get detailed information about a specific product by its ID.
   */
  retrieve(
    productID: string,
    query: ProductRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProductDetail> {
    return this._client.get(path`/v1/products/${productID}`, { query, ...options });
  }

  /**
   * Find products similar to a given product.
   *
   * Consider setting `filters` to narrow results to the same gender, brand,
   * category, price range, etc. when you only want similar items within a specific
   * slice of the catalog.
   */
  findSimilar(
    body: ProductFindSimilarParams,
    options?: RequestOptions,
  ): PagePromise<ProductDetailsSearchPage, ProductDetail> {
    return this._client.getAPIList('/v1/similar', SearchPage<ProductDetail>, {
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Retrieve product information for any supported product URL.
   *
   * Returns the same Product model as GET /v1/products/{product_id}. The product_id
   * in the response can be used with the Product Detail endpoint.
   */
  lookup(body: ProductLookupParams, options?: RequestOptions): APIPromise<LookupResponse> {
    return this._client.post('/v1/lookup', { body, ...options });
  }

  /**
   * Search for products with pagination support.
   *
   * At least one of `query`, `image_url`, or `base64_image` must be provided;
   * requests with none of these will return 422.
   */
  search(
    body: ProductSearchParams,
    options?: RequestOptions,
  ): PagePromise<ProductDetailsSearchPage, ProductDetail> {
    return this._client.getAPIList('/v1/search', SearchPage<ProductDetail>, {
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Search the catalog by image (URL or base64), with pagination support.
   *
   * Provide exactly one of `image_url` or `base64_image`. For text or text+image
   * search, use `POST /v1/search`.
   */
  searchByImage(
    body: ProductSearchByImageParams,
    options?: RequestOptions,
  ): PagePromise<ProductDetailsSearchPage, ProductDetail> {
    return this._client.getAPIList('/v1/image-search', SearchPage<ProductDetail>, {
      body,
      method: 'post',
      ...options,
    });
  }
}

export type ProductDetailsSearchPage = SearchPage<ProductDetail>;

export type AvailabilityStatus =
  | 'InStock'
  | 'LimitedAvailability'
  | 'PreOrder'
  | 'BackOrder'
  | 'SoldOut'
  | 'OutOfStock'
  | 'Discontinued'
  | 'Unknown';

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
}

/**
 * Locale options for API requests.
 *
 * Locale fields are optional; the server infers missing values. Details are on
 * `language`, `country`, and `currency` below.
 */
export interface LocaleConfig {
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
   * ISO 639-1 language code. When unset, inferred from `country` (preferred) then
   * `currency`, defaulting to `en`.
   */
  language?: 'en' | 'de' | 'fr' | 'it' | 'es' | 'nl' | 'sv' | 'fi' | 'pt' | 'cs' | 'el' | 'ro' | null;
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
   * @deprecated
   */
  categories?: Array<string>;

  /**
   * Lean category representation used in search hits and list rows.
   */
  category?: CategoriesAPI.CategorySummary | null;

  description?: string | null;

  gender?: 'male' | 'female' | 'unisex' | null;

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
         * The availability status of the option value. None when returned on search
         * results, hydrated only on get product detail requests.
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
  availability: 'InStock' | 'OutOfStock';

  domain: string;

  price: Price;

  url: string;

  /**
   * The maximum commission rate for the merchant, as a percentage. 0 is no
   * commission. 0.5 is 50% commission. 'Max' because the actual commission rate may
   * be lower due to vendor-specific affiliate rules.
   */
  max_commission_rate?: number;
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
   * ISO 3166-1 alpha-2 country code. Matches any country when unset; defaults to
   * 'US' only when language and currency are also unset.
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
   * ISO 4217 currency code. When unset, inferred from `country` (e.g. GB -> GBP);
   * falls back to 'USD' only when all three locale fields are unset.
   */
  currency?: 'USD' | 'CAD' | 'AUD' | 'GBP' | 'EUR' | 'SEK' | 'CZK' | 'RON' | null;

  /**
   * ISO 639-1 language code. Matches any language when unset; defaults to 'en' only
   * when country and currency are also unset.
   */
  language?: 'en' | 'de' | 'fr' | 'it' | 'es' | 'nl' | 'sv' | 'fi' | 'pt' | 'cs' | 'el' | 'ro' | null;

  /**
   * Optional list of website IDs to constrain the buy URL to, relevant if multiple
   * merchants exist. Accepts website IDs or domains (e.g. "nike.com").
   */
  website_ids?: Array<string> | null;
}

export interface ProductFindSimilarParams extends SearchPageParams {
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
}

export interface ProductLookupParams {
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

export interface ProductSearchParams extends SearchPageParams {
  /**
   * Base64 encoded image. At least one of `query`, `image_url`, or `base64_image`
   * must be provided.
   */
  base64_image?: string | null;

  /**
   * Optional configuration
   */
  config?: SearchAPI.SearchConfig;

  /**
   * Optional filters. Search will only consider products that match all of the
   * filters.
   */
  filters?: SearchAPI.SearchFilters;

  /**
   * Image URL. At least one of `query`, `image_url`, or `base64_image` must be
   * provided.
   */
  image_url?: string | null;

  /**
   * Optional limit on the number of results. Default is 20, max is 30.
   */
  limit?: number | null;

  /**
   * Search query. At least one of `query`, `image_url`, or `base64_image` must be
   * provided.
   */
  query?: string | null;
}

export interface ProductSearchByImageParams extends SearchPageParams {
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
}

export declare namespace Products {
  export {
    type AvailabilityStatus as AvailabilityStatus,
    type ImageSearchRequest as ImageSearchRequest,
    type LocaleConfig as LocaleConfig,
    type LookupRequest as LookupRequest,
    type LookupResponse as LookupResponse,
    type Price as Price,
    type ProductBrand as ProductBrand,
    type ProductDetail as ProductDetail,
    type ProductImage as ProductImage,
    type ProductOffer as ProductOffer,
    type SimilarProductsRequest as SimilarProductsRequest,
    type ProductDetailsSearchPage as ProductDetailsSearchPage,
    type ProductRetrieveParams as ProductRetrieveParams,
    type ProductFindSimilarParams as ProductFindSimilarParams,
    type ProductLookupParams as ProductLookupParams,
    type ProductSearchParams as ProductSearchParams,
    type ProductSearchByImageParams as ProductSearchByImageParams,
  };
}
