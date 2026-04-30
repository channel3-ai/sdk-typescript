// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Websites extends APIResource {
  /**
   * Find a website by URL.
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
   * The maximum commission rate for the website, as a percentage
   */
  best_commission_rate?: number;
}

export interface WebsiteRetrieveParams {
  query: string;
}

export interface WebsiteFindParams {
  query: string;
}

export declare namespace Websites {
  export {
    type Website as Website,
    type WebsiteRetrieveParams as WebsiteRetrieveParams,
    type WebsiteFindParams as WebsiteFindParams,
  };
}
