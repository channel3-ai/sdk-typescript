// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PriceTracking extends APIResource {
  /**
   * Get price history for a canonical product.
   */
  getHistory(
    canonicalProductID: string,
    query: PriceTrackingGetHistoryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PriceHistory> {
    return this._client.get(path`/v0/price-tracking/history/${canonicalProductID}`, { query, ...options });
  }

  /**
   * List your active price tracking subscriptions.
   */
  listSubscriptions(
    query: PriceTrackingListSubscriptionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PaginatedSubscriptions> {
    return this._client.get('/v0/price-tracking/subscriptions', { query, ...options });
  }

  /**
   * Start tracking prices for a canonical product.
   */
  start(body: PriceTrackingStartParams, options?: RequestOptions): APIPromise<Subscription> {
    return this._client.post('/v0/price-tracking/start', { body, ...options });
  }

  /**
   * Stop tracking prices for a canonical product.
   */
  stop(body: PriceTrackingStopParams, options?: RequestOptions): APIPromise<Subscription> {
    return this._client.post('/v0/price-tracking/stop', { body, ...options });
  }
}

export interface PaginatedSubscriptions {
  subscriptions: Array<Subscription>;

  next_page_token?: string | null;
}

export interface PriceHistory {
  canonical_product_id: string;

  history?: Array<PriceHistory.History>;

  product_title?: string | null;

  statistics?: PriceHistory.Statistics | null;
}

export namespace PriceHistory {
  export interface History {
    currency: string;

    price: number;

    timestamp: string;
  }

  export interface Statistics {
    currency: string;

    current_price: number;

    current_status: 'low' | 'typical' | 'high';

    max_price: number;

    mean: number;

    min_price: number;

    std_dev: number;
  }
}

export interface Subscription {
  canonical_product_id: string;

  created_at: string;

  subscription_status: 'active' | 'cancelled';
}

export interface PriceTrackingGetHistoryParams {
  /**
   * Number of days of history to fetch (max 30)
   */
  days?: number;
}

export interface PriceTrackingListSubscriptionsParams {
  limit?: number;

  page_token?: string | null;
}

export interface PriceTrackingStartParams {
  canonical_product_id: string;
}

export interface PriceTrackingStopParams {
  canonical_product_id: string;
}

export declare namespace PriceTracking {
  export {
    type PaginatedSubscriptions as PaginatedSubscriptions,
    type PriceHistory as PriceHistory,
    type Subscription as Subscription,
    type PriceTrackingGetHistoryParams as PriceTrackingGetHistoryParams,
    type PriceTrackingListSubscriptionsParams as PriceTrackingListSubscriptionsParams,
    type PriceTrackingStartParams as PriceTrackingStartParams,
    type PriceTrackingStopParams as PriceTrackingStopParams,
  };
}
