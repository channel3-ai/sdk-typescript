// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Products extends APIResource {
  /**
   * Get detailed information about a specific product by its ID.
   */
  retrieve(productID: string, options?: RequestOptions): APIPromise<ProductDetail> {
    return this._client.get(path`/v0/products/${productID}`, options);
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
 * A product
 */
export interface Product {
  id: string;

  availability: AvailabilityStatus;

  brand_name: string;

  image_url: string;

  price: Price;

  score: number;

  title: string;

  url: string;

  categories?: Array<string>;

  description?: string | null;

  variants?: Array<Variant>;
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

  image_urls?: Array<string>;

  key_features?: Array<string> | null;

  materials?: Array<string> | null;

  variants?: Array<Variant>;
}

export interface Variant {
  image_url: string;

  product_id: string;

  title: string;
}

export declare namespace Products {
  export {
    type AvailabilityStatus as AvailabilityStatus,
    type Price as Price,
    type Product as Product,
    type ProductDetail as ProductDetail,
    type Variant as Variant,
  };
}
