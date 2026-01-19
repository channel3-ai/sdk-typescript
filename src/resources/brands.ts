// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Brands extends APIResource {
  /**
   * Lists all brands, sorted alphabetically. Supports infinite scrolling with the
   * paging_token parameter.
   */
  list(
    query: BrandListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PaginatedListBrandsResponse> {
    return this._client.get('/v0/list-brands', { query, ...options });
  }

  /**
   * Find a brand by name.
   */
  find(query: BrandFindParams, options?: RequestOptions): APIPromise<Brand> {
    return this._client.get('/v0/brands', { query, ...options });
  }
}

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

export interface PaginatedListBrandsResponse {
  /**
   * List of brands
   */
  items: Array<Brand>;

  /**
   * Cursor to fetch the next page of results. Null if no more results.
   */
  paging_token?: string | null;
}

export interface BrandListParams {
  /**
   * Max results (1-100)
   */
  limit?: number;

  /**
   * Pagination cursor
   */
  paging_token?: string | null;
}

export interface BrandFindParams {
  query: string;
}

export declare namespace Brands {
  export {
    type Brand as Brand,
    type PaginatedListBrandsResponse as PaginatedListBrandsResponse,
    type BrandListParams as BrandListParams,
    type BrandFindParams as BrandFindParams,
  };
}
