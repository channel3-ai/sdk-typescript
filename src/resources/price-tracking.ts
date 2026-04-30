// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PriceTracking extends APIResource {
  /**
   * @deprecated use `retrieve_history` instead; will be removed in the next major version
   */
  getHistory = this.retrieveHistory;

  /**
   * List your active price tracking subscriptions.
   */
  listSubscriptions(
    query: PriceTrackingListSubscriptionsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SubscriptionsCursorPage, Subscription> {
    return this._client.getAPIList('/v0/price-tracking/subscriptions', CursorPage<Subscription>, {
      query,
      ...options,
    });
  }

  /**
   * Get price history for a canonical product.
   */
  retrieveHistory(
    canonicalProductID: string,
    query: PriceTrackingRetrieveHistoryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PriceHistory> {
    return this._client.get(path`/v0/price-tracking/history/${canonicalProductID}`, { query, ...options });
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

export type SubscriptionsCursorPage = CursorPage<Subscription>;

export interface PaginatedSubscriptionsResponse {
  items: Array<Subscription>;

  next_cursor?: string | null;
}

export interface PriceHistory {
  canonical_product_id: string;

  history?: Array<PriceHistoryPoint>;

  product_title?: string | null;

  statistics?: PriceStatistics | null;
}

export interface PriceHistoryPoint {
  currency: string;

  price: number;

  timestamp: string;
}

export interface PriceStatistics {
  currency: string;

  current_price: number;

  current_status: 'low' | 'typical' | 'high';

  max_price: number;

  mean: number;

  min_price: number;

  std_dev: number;
}

export interface StartTrackingRequest {
  canonical_product_id: string;
}

export interface StopTrackingRequest {
  canonical_product_id: string;
}

export interface Subscription {
  canonical_product_id: string;

  created_at: string;

  subscription_status: 'active' | 'cancelled';
}

/**
 * @deprecated renamed to PriceHistoryPoint; will be removed in the next major version
 */
export type History = PriceHistoryPoint;

/**
 * @deprecated renamed to PriceStatistics; will be removed in the next major version
 */
export type Statistics = PriceStatistics;

export interface PriceTrackingGetHistoryParams {
  /**
   * Number of days of history to fetch (max 30)
   */
  days?: number;
}

export interface PriceTrackingListSubscriptionsParams extends CursorPageParams {}

export interface PriceTrackingRetrieveHistoryParams {
  /**
   * Number of days of history to fetch (max 30)
   */
  days?: number;
}

export interface PriceTrackingStartParams {
  canonical_product_id: string;
}

export interface PriceTrackingStopParams {
  canonical_product_id: string;
}

export declare namespace PriceTracking {
  export {
    type PaginatedSubscriptionsResponse as PaginatedSubscriptionsResponse,
    type PriceHistory as PriceHistory,
    type PriceHistoryPoint as PriceHistoryPoint,
    type PriceStatistics as PriceStatistics,
    type StartTrackingRequest as StartTrackingRequest,
    type StopTrackingRequest as StopTrackingRequest,
    type Subscription as Subscription,
    type History as History,
    type Statistics as Statistics,
    type SubscriptionsCursorPage as SubscriptionsCursorPage,
    type PriceTrackingGetHistoryParams as PriceTrackingGetHistoryParams,
    type PriceTrackingListSubscriptionsParams as PriceTrackingListSubscriptionsParams,
    type PriceTrackingRetrieveHistoryParams as PriceTrackingRetrieveHistoryParams,
    type PriceTrackingStartParams as PriceTrackingStartParams,
    type PriceTrackingStopParams as PriceTrackingStopParams,
  };
}
