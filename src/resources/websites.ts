// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Websites extends APIResource {
  /**
   * Resolve a website URL to its ID and best_commission_rate. Tip: website_ids
   * filters accept domains directly, so this lookup is most useful for retrieving
   * commission rates.
   */
  retrieve(query: WebsiteRetrieveParams, options?: RequestOptions): APIPromise<Website | null> {
    return this._client.get('/v0/websites', { query, ...options });
  }

  /**
   * @deprecated use `retrieve` instead; will be removed in the next major version
   */
  find = this.retrieve;
}

export interface Website {
  id: string;

  url: string;

  /**
   * The maximum commission rate for the website in the requested country (default
   * 'US'), as a percentage
   */
  best_commission_rate?: number;
}

export interface WebsiteRetrieveParams {
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
}

export interface WebsiteFindParams {
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
}

export declare namespace Websites {
  export {
    type Website as Website,
    type WebsiteRetrieveParams as WebsiteRetrieveParams,
    type WebsiteFindParams as WebsiteFindParams,
  };
}
