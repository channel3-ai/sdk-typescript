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
 * v0 search result with score and deprecated image_url.
 */
export interface Product {
  id: string;

  /**
   * @deprecated Deprecated, use offers field
   */
  availability: 'InStock' | 'OutOfStock';

  /**
   * @deprecated Main product image (deprecated, use images field)
   */
  image_url: string;

  /**
   * @deprecated Deprecated, use offers field
   */
  price: Price;

  score: number;

  title: string;

  /**
   * @deprecated Deprecated, use offers field
   */
  url: string;

  /**
   * @deprecated
   */
  brand_id?: string | null;

  /**
   * @deprecated
   */
  brand_name?: string | null;

  /**
   * Ordered list of brands.
   */
  brands?: Array<ProductBrand>;

  categories?: Array<string>;

  description?: string | null;

  gender?: 'male' | 'female' | 'unisex' | null;

  /**
   * @deprecated List of image URLs (deprecated, use images field)
   */
  image_urls?: Array<string>;

  images?: Array<ProductImage>;

  key_features?: Array<string> | null;

  materials?: Array<string> | null;

  /**
   * All merchant offers for this product in the requested locale.
   */
  offers?: Array<ProductOffer>;

  /**
   * @deprecated Legacy variant list, always empty. Use v1 API for variant
   * dimensions.
   */
  variants?: Array<Variant>;
}

export interface ProductBrand {
  id: string;

  name: string;
}

/**
 * v0 product detail with deprecated fields.
 */
export interface ProductDetail {
  id: string;

  /**
   * @deprecated Deprecated, use offers field
   */
  availability: 'InStock' | 'OutOfStock';

  /**
   * @deprecated Deprecated, use offers field
   */
  price: Price;

  title: string;

  /**
   * @deprecated Deprecated, use offers field
   */
  url: string;

  /**
   * @deprecated
   */
  brand_id?: string | null;

  /**
   * @deprecated
   */
  brand_name?: string | null;

  /**
   * Ordered list of brands.
   */
  brands?: Array<ProductBrand>;

  categories?: Array<string>;

  description?: string | null;

  gender?: 'male' | 'female' | 'unisex' | null;

  /**
   * @deprecated List of image URLs (deprecated, use images field)
   */
  image_urls?: Array<string>;

  images?: Array<ProductImage>;

  key_features?: Array<string> | null;

  materials?: Array<string> | null;

  /**
   * All merchant offers for this product in the requested locale.
   */
  offers?: Array<ProductOffer>;

  /**
   * @deprecated Legacy variant list, always empty. Use v1 API for variant
   * dimensions.
   */
  variants?: Array<Variant>;
}

/**
 * v0 product image with deprecated photo_quality field.
 */
export interface ProductImage {
  url: string;

  alt_text?: string | null;

  is_main_image?: boolean;

  /**
   * @deprecated Photo quality classification for API responses.
   */
  photo_quality?: 'professional' | 'ugc' | 'poor' | null;

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

export interface Variant {
  image_url: string;

  product_id: string;

  title: string;
}

export interface ProductRetrieveParams {
  /**
   * @deprecated Deprecated and ignored. Each offer now contains its own merchant
   * URL.
   */
  redirect_mode?: 'brand' | 'price' | 'commission' | null;

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
    type ProductBrand as ProductBrand,
    type ProductDetail as ProductDetail,
    type ProductImage as ProductImage,
    type ProductOffer as ProductOffer,
    type Variant as Variant,
    type ProductRetrieveParams as ProductRetrieveParams,
  };
}
