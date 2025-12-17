// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as SearchAPI from './search';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Products extends APIResource {
  /**
   * Get detailed information about a specific product by its ID.
   *
   * You can optionally pass variant dimension query parameters to select a specific
   * variant configuration. For example:
   * `/products/ABC123?dim-color-id=Red&dim-size-id=M`
   *
   * The response includes `variant_info` with:
   *
   * - `dimensions`: All dimensions this product family varies on
   * - `selected`: Current selection state (from the product or query params)
   * - `available`: What values are still available given current selection
   */
  retrieve(
    productID: string,
    query: ProductRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProductDetail> {
    return this._client.get(path`/v0/products/${productID}`, { query, ...options });
  }
}

export type AvailabilityStatus =
  | 'InStock'
  | 'LimitedAvailability'
  | 'PreOrder'
  | 'BackOrder'
  | 'SoldOut'
  | 'OutOfStock'
  | 'Discontinued'
  | 'Unknown';

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

/**
 * A search result that includes product details and a relevance score.
 */
export interface Product {
  id: string;

  availability: AvailabilityStatus;

  /**
   * @deprecated Main product image (deprecated, use images field)
   */
  image_url: string;

  price: Price;

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

  images?: Array<Product.Image>;

  key_features?: Array<string> | null;

  materials?: Array<string> | null;

  /**
   * @deprecated Simple variant list (deprecated, use variant_info for full variant
   * details)
   */
  variants?: Array<Variant>;
}

export namespace Product {
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

/**
 * A product with detailed information
 */
export interface ProductDetail {
  id: string;

  availability: AvailabilityStatus;

  price: Price;

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

  images?: Array<ProductDetail.Image>;

  key_features?: Array<string> | null;

  materials?: Array<string> | null;

  /**
   * @deprecated Simple variant list (deprecated, use variant_info for full variant
   * details)
   */
  variants?: Array<Variant>;
}

export namespace ProductDetail {
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

export interface Variant {
  image_url: string;

  product_id: string;

  title: string;
}

export interface ProductRetrieveParams {
  /**
   * "price" redirects to the product page with the lowest price "commission"
   * redirects to the product page with the highest commission rate "brand" redirects
   * to the brand's product page
   */
  redirect_mode?: SearchAPI.RedirectMode | null;

  /**
   * Optional list of website IDs to constrain the buy URL to, relevant if multiple
   * merchants exist
   */
  website_ids?: Array<string> | null;
}

export declare namespace Products {
  export {
    type AvailabilityStatus as AvailabilityStatus,
    type Price as Price,
    type Product as Product,
    type ProductDetail as ProductDetail,
    type Variant as Variant,
    type ProductRetrieveParams as ProductRetrieveParams,
  };
}
