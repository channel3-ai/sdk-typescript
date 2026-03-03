// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class Brands extends APIResource {
  /**
   * Lists all brands, sorted alphabetically. Supports pagination with the cursor
   * parameter.
   */
  list(
    query: BrandListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<BrandsCursorPage, Brand> {
    return this._client.getAPIList('/v0/list-brands', CursorPage<Brand>, { query, ...options });
  }

  /**
   * Find a brand by name.
   */
  find(query: BrandFindParams, options?: RequestOptions): APIPromise<Brand> {
    return this._client.get('/v0/brands', { query, ...options });
  }
}

export type BrandsCursorPage = CursorPage<Brand>;

export interface Brand {
  id: string;

  name: string;

  /**
   * The maximum commission rate for the brand, as a percentage
   */
  best_commission_rate?: number;

  description?: string | null;

  logo_url?: string | null;
}

export interface BrandListParams extends CursorPageParams {}

export interface BrandFindParams {
  query: string;
}

export declare namespace Brands {
  export {
    type Brand as Brand,
    type BrandsCursorPage as BrandsCursorPage,
    type BrandListParams as BrandListParams,
    type BrandFindParams as BrandFindParams,
  };
}
