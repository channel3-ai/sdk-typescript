// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ReportingAPI from './reporting';
import { AnalyticsPage, type AnalyticsPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

export class Clicks extends APIResource {
  /**
   * List affiliate clicks for your account over a datetime window.
   *
   * Defaults to the last 30 days ending now. Maximum window is 90 days. Pass an
   * offset-aware ISO datetime to express local time (e.g. last 6 hours). Returns a
   * summary plus a paginated list of click events (most recent first).
   */
  list(
    query: ClickListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ClicksAnalyticsPage, Click> {
    return this._client.getAPIList('/v1/reporting/clicks', AnalyticsPage<Click>, { query, ...options });
  }
}

export type ClicksAnalyticsPage = AnalyticsPage<Click>;

/**
 * A single affiliate click event.
 */
export interface Click {
  /**
   * Click event ID.
   */
  id: string;

  /**
   * When the click occurred, returned with a UTC offset (Z).
   */
  timestamp: string;

  /**
   * Click city, if available.
   */
  city?: string | null;

  /**
   * Click country, if available.
   */
  country?: string | null;

  /**
   * Compact product reference on click/transaction items.
   */
  product?: ReportingAPI.AffiliateProduct | null;
}

/**
 * Paginated clicks for a vendor over a date range.
 */
export interface ClicksResponse {
  /**
   * Inclusive end of the resolved query window.
   */
  end_date: string;

  /**
   * Whether more pages are available.
   */
  has_more: boolean;

  items: Array<Click>;

  /**
   * Page size.
   */
  limit: number;

  /**
   * Current page (1-indexed).
   */
  page: number;

  /**
   * Inclusive start of the resolved query window.
   */
  start_date: string;

  /**
   * Aggregate click stats for the requested date range.
   */
  summary: ClicksSummary;

  /**
   * Total matching clicks in the date range.
   */
  total_count: number;
}

/**
 * Aggregate click stats for the requested date range.
 */
export interface ClicksSummary {
  /**
   * Total clicks in the date range.
   */
  total_clicks: number;
}

export interface ClickListParams extends AnalyticsPageParams {
  /**
   * Inclusive end of the window (ISO 8601 datetime with optional offset, e.g.
   * 2026-08-01T23:59:59-04:00). Offset-aware values are converted to UTC; naive
   * values are treated as UTC.
   */
  end_date?: string | null;

  /**
   * Inclusive start of the window (ISO 8601 datetime with optional offset, e.g.
   * 2026-08-01T00:00:00-04:00). Offset-aware values are converted to UTC; naive
   * values are treated as UTC.
   */
  start_date?: string | null;
}

export declare namespace Clicks {
  export {
    type Click as Click,
    type ClicksResponse as ClicksResponse,
    type ClicksSummary as ClicksSummary,
    type ClicksAnalyticsPage as ClicksAnalyticsPage,
    type ClickListParams as ClickListParams,
  };
}
