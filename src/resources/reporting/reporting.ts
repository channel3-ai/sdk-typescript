// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ClicksAPI from './clicks';
import { Click, ClickListParams, Clicks, ClicksAnalyticsPage, ClicksResponse, ClicksSummary } from './clicks';
import * as TransactionsAPI from './transactions';
import {
  PublicTransactionStatus,
  Transaction,
  TransactionListParams,
  Transactions,
  TransactionsAnalyticsPage,
  TransactionsResponse,
  TransactionsSummary,
} from './transactions';

export class Reporting extends APIResource {
  clicks: ClicksAPI.Clicks = new ClicksAPI.Clicks(this._client);
  transactions: TransactionsAPI.Transactions = new TransactionsAPI.Transactions(this._client);
}

/**
 * Compact product reference on click/transaction items.
 */
export interface ReportingProduct {
  /**
   * Canonical product ID.
   */
  id: string;

  /**
   * Product image URL.
   */
  image_url?: string | null;

  /**
   * Product title.
   */
  title?: string | null;
}

Reporting.Clicks = Clicks;
Reporting.Transactions = Transactions;

export declare namespace Reporting {
  export { type ReportingProduct as ReportingProduct };

  export {
    Clicks as Clicks,
    type Click as Click,
    type ClicksResponse as ClicksResponse,
    type ClicksSummary as ClicksSummary,
    type ClicksAnalyticsPage as ClicksAnalyticsPage,
    type ClickListParams as ClickListParams,
  };

  export {
    Transactions as Transactions,
    type PublicTransactionStatus as PublicTransactionStatus,
    type Transaction as Transaction,
    type TransactionsResponse as TransactionsResponse,
    type TransactionsSummary as TransactionsSummary,
    type TransactionsAnalyticsPage as TransactionsAnalyticsPage,
    type TransactionListParams as TransactionListParams,
  };
}
