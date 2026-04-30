// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ProductsAPI from './products';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Enrich extends APIResource {
  /**
   * **Deprecated** — use POST /v1/lookup instead.
   *
   * Search by product URL, get back full product information from Channel3's product
   * database.
   *
   * If the product is not found in the database, the endpoint will attempt real-time
   * retrieval from the product page. This fallback returns basic product information
   * (price, images, title) without full enrichment.
   */
  enrichURL(body: EnrichEnrichURLParams, options?: RequestOptions): APIPromise<EnrichEnrichURLResponse> {
    return this._client.post('/v0/enrich', { body, ...options });
  }
}

export interface EnrichRequest {
  /**
   * The URL of the product to enrich
   */
  url: string;
}

/**
 * v0 product detail with deprecated fields.
 */
export interface EnrichEnrichURLResponse {
  id: string;

  /**
   * @deprecated Deprecated, use offers field
   */
  availability: 'InStock' | 'OutOfStock';

  /**
   * @deprecated Deprecated, use offers field
   */
  price: ProductsAPI.Price;

  title: string;

  /**
   * @deprecated Deprecated, use offers field
   */
  url: string;

  /**
   * Target age group. Age-agnostic products are typically returned as 'adult'.
   */
  age?: 'newborn' | 'infant' | 'toddler' | 'kids' | 'adult' | null;

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
  brands?: Array<ProductsAPI.ProductBrand>;

  categories?: Array<string>;

  description?: string | null;

  gender?: 'male' | 'female' | 'unisex' | null;

  /**
   * @deprecated List of image URLs (deprecated, use images field)
   */
  image_urls?: Array<string>;

  images?: Array<EnrichEnrichURLResponse.Image>;

  key_features?: Array<string> | null;

  materials?: Array<string> | null;

  /**
   * All merchant offers for this product in the requested locale.
   */
  offers?: Array<ProductsAPI.ProductOffer>;

  /**
   * @deprecated Legacy variant list, always empty. Use v1 API for variant
   * dimensions.
   */
  variants?: Array<EnrichEnrichURLResponse.Variant>;
}

export namespace EnrichEnrichURLResponse {
  /**
   * v0 product image with deprecated photo_quality field.
   */
  export interface Image {
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

  export interface Variant {
    image_url: string;

    product_id: string;

    title: string;
  }
}

export interface EnrichEnrichURLParams {
  /**
   * The URL of the product to enrich
   */
  url: string;
}

export declare namespace Enrich {
  export {
    type EnrichRequest as EnrichRequest,
    type EnrichEnrichURLResponse as EnrichEnrichURLResponse,
    type EnrichEnrichURLParams as EnrichEnrichURLParams,
  };
}
