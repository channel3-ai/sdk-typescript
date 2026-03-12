// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
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
   * Ordered list of brands.
   */
  brands?: Array<ProductBrand>;

  categories?: Array<string>;

  description?: string | null;

  gender?: 'male' | 'female' | 'unisex' | null;

  images?: Array<ProductImage>;

  key_features?: Array<string> | null;

  materials?: Array<string> | null;

  /**
   * All merchant offers for this product in the requested locale.
   */
  offers?: Array<ProductOffer>;
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

export interface ProductRetrieveParams {
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
    type ProductBrand as ProductBrand,
    type ProductDetail as ProductDetail,
    type ProductImage as ProductImage,
    type ProductOffer as ProductOffer,
    type ProductRetrieveParams as ProductRetrieveParams,
  };
}
