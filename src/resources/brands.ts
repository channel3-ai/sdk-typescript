// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Brands extends APIResource {
  /**
   * Get detailed information about a specific brand by its ID.
   */
  retrieve(
    brandID: string,
    query: BrandRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Brand> {
    return this._client.get(path`/v1/brands/${brandID}`, { query, ...options });
  }

  /**
   * Paginated list of brands, capped at the top 5,000.
   */
  list(
    query: BrandListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<BrandsCursorPage, Brand> {
    return this._client.getAPIList('/v1/brands', CursorPage<Brand>, { query, ...options });
  }

  /**
   * Find a brand by name.
   *
   * @deprecated use `search` (returns a list) instead; will be removed in the next major version
   */
  find(query: BrandFindParams, options?: RequestOptions): APIPromise<Brand> {
    return this._client.get('/v0/brands', { query, ...options });
  }

  /**
   * Search brands by free-text query.
   */
  search(query: BrandSearchParams, options?: RequestOptions): APIPromise<SearchBrandsResponse> {
    return this._client.get('/v1/brands/search', { query, ...options });
  }
}

export type BrandsCursorPage = CursorPage<Brand>;

export interface Brand {
  id: string;

  name: string;

  /**
   * The maximum commission rate for the brand in the requested country (default
   * 'US'), as a percentage
   */
  best_commission_rate?: number;

  description?: string | null;

  logo_url?: string | null;
}

export interface SearchBrandsResponse {
  /**
   * Brands matching the query, ordered by relevance.
   */
  brands: Array<Brand>;
}

export interface BrandRetrieveParams {
  /**
   * ISO 3166-1 alpha-2 country code that `best_commission_rate` is scoped to.
   * Defaults to 'US' when unset.
   */
  country?:
    | 'US'
    | 'GB'
    | 'EU'
    | 'AU'
    | 'CA'
    | 'IE'
    | 'DE'
    | 'AT'
    | 'FR'
    | 'BE'
    | 'IT'
    | 'ES'
    | 'NL'
    | 'SE'
    | 'FI'
    | 'PT'
    | 'CZ'
    | 'GR'
    | 'RO'
    | null;
}

export interface BrandListParams extends CursorPageParams {
  /**
   * ISO 3166-1 alpha-2 country code that `best_commission_rate` is scoped to.
   * Defaults to 'US' when unset.
   */
  country?:
    | 'US'
    | 'GB'
    | 'EU'
    | 'AU'
    | 'CA'
    | 'IE'
    | 'DE'
    | 'AT'
    | 'FR'
    | 'BE'
    | 'IT'
    | 'ES'
    | 'NL'
    | 'SE'
    | 'FI'
    | 'PT'
    | 'CZ'
    | 'GR'
    | 'RO'
    | null;
}

export interface BrandFindParams {
  query: string;
}

export interface BrandSearchParams {
  /**
   * Free-text query (e.g. 'Nike', 'lululemon').
   */
  query: string;

  /**
   * ISO 3166-1 alpha-2 country code that `best_commission_rate` is scoped to.
   * Defaults to 'US' when unset.
   */
  country?:
    | 'US'
    | 'GB'
    | 'EU'
    | 'AU'
    | 'CA'
    | 'IE'
    | 'DE'
    | 'AT'
    | 'FR'
    | 'BE'
    | 'IT'
    | 'ES'
    | 'NL'
    | 'SE'
    | 'FI'
    | 'PT'
    | 'CZ'
    | 'GR'
    | 'RO'
    | null;

  /**
   * Maximum number of brands to return.
   */
  limit?: number;
}

export declare namespace Brands {
  export {
    type Brand as Brand,
    type SearchBrandsResponse as SearchBrandsResponse,
    type BrandsCursorPage as BrandsCursorPage,
    type BrandRetrieveParams as BrandRetrieveParams,
    type BrandListParams as BrandListParams,
    type BrandFindParams as BrandFindParams,
    type BrandSearchParams as BrandSearchParams,
  };
}
