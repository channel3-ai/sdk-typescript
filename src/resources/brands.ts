// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Brands extends APIResource {
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

export interface BrandFindParams {
  query: string;
}

export declare namespace Brands {
  export { type Brand as Brand, type BrandFindParams as BrandFindParams };
}
