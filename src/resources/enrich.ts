// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ProductsAPI from './products';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * @deprecated enrich is deprecated; migrate to `products.lookup`. This resource will be removed in the next major version.
 */
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
   *
   * @deprecated use `products.lookup` instead; will be removed in the next major version
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
  variants?: EnrichEnrichURLResponse.Variants | null;
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
