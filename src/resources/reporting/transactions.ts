// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ReportingAPI from './reporting';
import { AnalyticsPage, type AnalyticsPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

export class Transactions extends APIResource {
  /**
   * List affiliate transactions for your account over a datetime window.
   *
   * Defaults to the last 30 days ending now. Maximum window is 90 days. Pass an
   * offset-aware ISO datetime to express local time (e.g. last 6 hours). Returns a
   * summary of net commission (after take rate) plus a paginated list of
   * transactions (most recent first). Network-approved commissions appear as
   * pending.
   */
  list(
    query: TransactionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<TransactionsAnalyticsPage, Transaction> {
    return this._client.getAPIList('/v1/reporting/transactions', AnalyticsPage<Transaction>, {
      query,
      ...options,
    });
  }
}

export type TransactionsAnalyticsPage = AnalyticsPage<Transaction>;

/**
 * Vendor-facing transaction status (approved is surfaced as pending).
 */
export type PublicTransactionStatus = 'pending' | 'paid';

/**
 * A single affiliate CPA transaction.
 */
export interface Transaction {
  /**
   * Transaction ID.
   */
  id: string;

  /**
   * Vendor net commission (after Channel3 take rate).
   */
  commission_amount: number;

  /**
   * Order amount in the transaction currency.
   */
  order_amount: number;

  /**
   * Purchase timestamp, returned with a UTC offset (Z).
   */
  purchased_at: string;

  /**
   * pending (includes network-approved) or paid.
   */
  status: PublicTransactionStatus;

  /**
   * Brand name, if known.
   */
  brand_name?: string | null;

  /**
   * Purchase city, if available.
   */
  city?: string | null;

  /**
   * Purchase country, if available.
   */
  country?: string | null;

  /**
   * Compact product reference on click/transaction items.
   */
  product?: ReportingAPI.AffiliateProduct | null;
}

/**
 * Paginated transactions for a vendor over a date range.
 */
export interface TransactionsResponse {
  /**
   * Inclusive end of the resolved query window. Always returned with a UTC offset
   * (Z); request values with other offsets are converted.
   */
  end_date: string;

  /**
   * Whether more pages are available.
   */
  has_more: boolean;

  items: Array<Transaction>;

  /**
   * Page size.
   */
  limit: number;

  /**
   * Current page (1-indexed).
   */
  page: number;

  /**
   * Inclusive start of the resolved query window. Always returned with a UTC offset
   * (Z); request values with other offsets are converted.
   */
  start_date: string;

  /**
   * Aggregate transaction stats for the requested date range.
   */
  summary: TransactionsSummary;

  /**
   * Total matching transactions in the date range.
   */
  total_count: number;
}

/**
 * Aggregate transaction stats for the requested date range.
 */
export interface TransactionsSummary {
  /**
   * Vendor net commission already paid out.
   */
  paid_commission: number;

  /**
   * Vendor net commission still pending payout.
   */
  pending_commission: number;

  /**
   * Sum of vendor net commission (pending + paid) for the date range.
   */
  total_commission: number;

  /**
   * Total transactions in the date range.
   */
  total_count: number;
}

export interface TransactionListParams extends AnalyticsPageParams {
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

export declare namespace Transactions {
  export {
    type PublicTransactionStatus as PublicTransactionStatus,
    type Transaction as Transaction,
    type TransactionsResponse as TransactionsResponse,
    type TransactionsSummary as TransactionsSummary,
    type TransactionsAnalyticsPage as TransactionsAnalyticsPage,
    type TransactionListParams as TransactionListParams,
  };
}
