// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ProductsAPI from './products';
import * as SearchAPI from './search';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Conversations extends APIResource {
  /**
   * Run one conversation turn. Omit `conversation_id` to create the thread with this
   * turn; pass it to continue an existing thread.
   */
  create(params: ConversationCreateParams, options?: RequestOptions): APIPromise<TurnResult> {
    const { 'x-user-id': xUserID, ...body } = params;
    return this._client.post('/v1/conversations', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(xUserID != null ? { 'x-user-id': xUserID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Thread metadata plus one page of its message history. Paginate `items` with
   * `limit` and `cursor`.
   */
  retrieve(
    conversationID: string,
    query: ConversationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConversationDetail> {
    return this._client.get(path`/v1/conversations/${conversationID}`, { query, ...options });
  }
}

export interface AssistantMessage {
  parts?: Array<TextPart | ToolPart>;

  role?: 'assistant';

  /**
   * Tap-ready follow-up messages offered after this reply.
   */
  suggestions?: Array<string>;
}

/**
 * Client-facing catalog tool result shown on the stream and on `ToolPart`.
 */
export interface CatalogDisplayPayload {
  next_page_token?: string | null;

  products?: Array<ProductsAPI.ProductDetail>;

  [k: string]: unknown;
}

export interface CatalogToolError {
  error: string;

  isError?: true;

  products?: Array<ProductsAPI.ProductDetail>;
}

/**
 * Partner-supplied context pinned to the top of a conversation thread.
 */
export interface ConversationContext {
  /**
   * What platform or surface is hosting this conversation.
   */
  application_context?: string | null;

  /**
   * Who the conversation is with (profile, preferences, session facts).
   */
  user_context?: string | null;
}

/**
 * Thread metadata plus one page of its message history.
 */
export interface ConversationDetail {
  id: string;

  created_at: number;

  items: Array<UserMessage | AssistantMessage>;

  /**
   * Partner-supplied context pinned to the top of a conversation thread.
   */
  context?: ConversationContext | null;

  has_more?: boolean;

  /**
   * Pass as `cursor` to fetch the next page. Null when no more items.
   */
  next_cursor?: string | null;

  user_id?: string | null;
}

export interface ConversationError {
  code: TurnErrorCode;

  message: string;
}

/**
 * Error envelope for all non-2xx `/v1/conversations` responses.
 */
export interface ConversationErrorBody {
  error: ConversationError;
}

/**
 * Run one turn. Without `conversation_id` a new thread is created first.
 */
export interface CreateTurnRequest {
  message: UserMessage;

  /**
   * Partner-supplied context pinned to the top of a conversation thread.
   */
  context?: ConversationContext | null;

  /**
   * Existing thread to continue; when omitted, a new thread is created.
   */
  conversation_id?: string | null;

  /**
   * Search filters for the search API.
   */
  filters?: SearchAPI.SearchFilters | null;

  /**
   * Stream turn events over SSE (default) or return the assembled turn as JSON.
   */
  stream?: boolean;
}

/**
 * An image by URL. `data:` URIs are uploaded and rewritten server-side.
 */
export interface ImagePart {
  url: string;

  type?: 'image';
}

export interface ProductIDsInput {
  product_ids?: Array<string>;
}

/**
 * Post-search commentary: `delta` fragments, then one terminal done frame.
 */
export interface SearchDiscussionEvent {
  delta?: string | null;

  done?: boolean;

  /**
   * Tap-ready follow-up messages. Present on the terminal done frame.
   */
  suggestions?: Array<string> | null;

  type?: 'search.discussion';
}

export interface SearchProductsInput {
  query: string;
}

/**
 * Assistant prose fragment. A new `id` implies the start of a text block.
 */
export interface TextDeltaEvent {
  id: string;

  delta: string;

  type?: 'text.delta';
}

export interface TextEndEvent {
  id: string;

  type?: 'text.end';
}

export interface TextPart {
  text: string;

  type?: 'text';
}

/**
 * A catalog tool finished; `output` is the typed display payload.
 */
export interface ToolCompletedEvent {
  /**
   * Client-facing catalog tool result shown on the stream and on `ToolPart`.
   */
  output: CatalogDisplayPayload | CatalogToolError;

  tool: 'search_products' | 'show_products' | 'compare_products';

  tool_call_id: string;

  type?: 'tool.completed';
}

/**
 * One catalog tool call and its display payload from an assistant turn.
 */
export interface ToolPart {
  tool_call_id: string;

  tool_name: string;

  input?: SearchProductsInput | ProductIDsInput;

  /**
   * Client-facing catalog tool result shown on the stream and on `ToolPart`.
   */
  output?: CatalogDisplayPayload | CatalogToolError;

  type?: 'tool';
}

/**
 * A catalog tool began executing with these arguments.
 */
export interface ToolStartedEvent {
  input: SearchProductsInput | ProductIDsInput;

  tool: 'search_products' | 'show_products' | 'compare_products';

  tool_call_id: string;

  type?: 'tool.started';
}

export interface TurnCompletedEvent {
  usage: TurnUsage;

  type?: 'turn.completed';
}

export type TurnErrorCode =
  | 'invalid_request'
  | 'unauthorized'
  | 'insufficient_credits'
  | 'conversation_not_found'
  | 'turn_conflict'
  | 'rate_limited'
  | 'model_unavailable'
  | 'internal';

export interface TurnErrorEvent {
  code: TurnErrorCode;

  message: string;

  retryable?: boolean;

  type?: 'error';
}

/**
 * First event of every turn; carries the ids clients need to correlate.
 */
export type TurnEvent =
  | TurnStartedEvent
  | TextDeltaEvent
  | TextEndEvent
  | ToolStartedEvent
  | ToolCompletedEvent
  | SearchDiscussionEvent
  | TurnCompletedEvent
  | TurnErrorEvent;

/**
 * Buffered equivalent of a streamed turn (`stream: false`).
 */
export interface TurnResult {
  conversation_id: string;

  message: AssistantMessage;

  turn_id: string;

  usage: TurnUsage;
}

/**
 * First event of every turn; carries the ids clients need to correlate.
 */
export interface TurnStartedEvent {
  conversation_id: string;

  message_id: string;

  turn_id: string;

  type?: 'turn.started';
}

export interface TurnUsage {
  /**
   * API credits charged for this turn (turn fee plus catalog searches).
   */
  credits_charged: number;

  /**
   * Catalog searches executed during this turn.
   */
  searches_run: number;
}

export interface UserMessage {
  parts?: Array<TextPart | ImagePart>;

  role?: 'user';
}

export interface ConversationCreateParams {
  /**
   * Body param
   */
  message: UserMessage;

  /**
   * Body param: Partner-supplied context pinned to the top of a conversation thread.
   */
  context?: ConversationContext | null;

  /**
   * Body param: Existing thread to continue; when omitted, a new thread is created.
   */
  conversation_id?: string | null;

  /**
   * Body param: Search filters for the search API.
   */
  filters?: SearchAPI.SearchFilters | null;

  /**
   * Body param: Stream turn events over SSE (default) or return the assembled turn
   * as JSON.
   */
  stream?: boolean;

  /**
   * Header param: Optional user identifier to attribute clicks and sales to a user
   * in your system. Channel3 appends it to buy URLs in the response.
   */
  'x-user-id'?: string;
}

export interface ConversationRetrieveParams {
  cursor?: string | null;

  limit?: number;
}

export declare namespace Conversations {
  export {
    type AssistantMessage as AssistantMessage,
    type CatalogDisplayPayload as CatalogDisplayPayload,
    type CatalogToolError as CatalogToolError,
    type ConversationContext as ConversationContext,
    type ConversationDetail as ConversationDetail,
    type ConversationError as ConversationError,
    type ConversationErrorBody as ConversationErrorBody,
    type CreateTurnRequest as CreateTurnRequest,
    type ImagePart as ImagePart,
    type ProductIDsInput as ProductIDsInput,
    type SearchDiscussionEvent as SearchDiscussionEvent,
    type SearchProductsInput as SearchProductsInput,
    type TextDeltaEvent as TextDeltaEvent,
    type TextEndEvent as TextEndEvent,
    type TextPart as TextPart,
    type ToolCompletedEvent as ToolCompletedEvent,
    type ToolPart as ToolPart,
    type ToolStartedEvent as ToolStartedEvent,
    type TurnCompletedEvent as TurnCompletedEvent,
    type TurnErrorCode as TurnErrorCode,
    type TurnErrorEvent as TurnErrorEvent,
    type TurnEvent as TurnEvent,
    type TurnResult as TurnResult,
    type TurnStartedEvent as TurnStartedEvent,
    type TurnUsage as TurnUsage,
    type UserMessage as UserMessage,
    type ConversationCreateParams as ConversationCreateParams,
    type ConversationRetrieveParams as ConversationRetrieveParams,
  };
}
