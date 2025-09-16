// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Brands extends APIResource {
  /**
   * Get detailed information for a specific brand by its ID.
   */
  retrieve(brandID: string, options?: RequestOptions): APIPromise<Brand> {
    return this._client.get(path`/v0/brands/${brandID}`, options);
  }

  /**
   * Get all brands that the vendor currently sells.
   */
  list(
    query: BrandListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BrandListResponse> {
    return this._client.get('/v0/brands', { query, ...options });
  }
}

export interface Brand {
  id: string;

  name: string;

  description?: string | null;

  logo_url?: string | null;
}

export interface BrandListResponse {
  items: Array<Brand>;

  /**
   * Pagination metadata for responses
   */
  pagination: BrandListResponse.Pagination;
}

export namespace BrandListResponse {
  /**
   * Pagination metadata for responses
   */
  export interface Pagination {
    current_page: number;

    page_size: number;

    total_count: number;

    total_pages: number;
  }
}

export interface BrandListParams {
  page?: number;

  query?: string | null;

  size?: number;
}

export declare namespace Brands {
  export {
    type Brand as Brand,
    type BrandListResponse as BrandListResponse,
    type BrandListParams as BrandListParams,
  };
}
