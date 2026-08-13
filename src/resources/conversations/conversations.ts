// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ProductsAPI from '../products';
import * as SearchAPI from '../search';
import * as ClientTokensAPI from './client-tokens';
import {
  ClientTokenCreateParams,
  ClientTokenResponse,
  ClientTokenRevokeParams,
  ClientTokens,
  CreateClientTokenRequest,
  RevokeClientTokenRequest,
} from './client-tokens';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Conversations extends APIResource {
  clientTokens: ClientTokensAPI.ClientTokens = new ClientTokensAPI.ClientTokens(this._client);

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
   * Existing thread to continue. When omitted, a new thread is created and its id
   * returned.
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

/**
 * Final state of the part at `part_index`; replace any streamed state.
 */
export interface PartCompletedEvent {
  /**
   * One catalog tool call and its display payload from an assistant turn.
   */
  part: TextPart | ToolPart;

  part_index: number;

  type?: 'part.completed';
}

/**
 * Append `delta` to the text of the part at `part_index`.
 */
export interface PartDeltaEvent {
  delta: string;

  part_index: number;

  type?: 'part.delta';
}

/**
 * A new part began at `part_index`; `part` is its initial state.
 */
export interface PartStartedEvent {
  /**
   * One catalog tool call and its display payload from an assistant turn.
   */
  part: TextPart | ToolPart;

  part_index: number;

  type?: 'part.started';
}

export interface ProductIDsInput {
  product_ids?: Array<string>;
}

export interface SearchProductsInput {
  query: string;
}

export interface TextPart {
  text: string;

  type?: 'text';
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
  output?: CatalogDisplayPayload | CatalogToolError | null;

  type?: 'tool';
}

/**
 * Terminal event of a successful turn.
 */
export interface TurnCompletedEvent {
  message: AssistantMessage;

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
  | 'token_not_found'
  | 'service_unavailable'
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
  | PartStartedEvent
  | PartDeltaEvent
  | PartCompletedEvent
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
   * Body param: Existing thread to continue. When omitted, a new thread is created
   * and its id returned.
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

Conversations.ClientTokens = ClientTokens;

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
    type PartCompletedEvent as PartCompletedEvent,
    type PartDeltaEvent as PartDeltaEvent,
    type PartStartedEvent as PartStartedEvent,
    type ProductIDsInput as ProductIDsInput,
    type SearchProductsInput as SearchProductsInput,
    type TextPart as TextPart,
    type ToolPart as ToolPart,
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

  export {
    ClientTokens as ClientTokens,
    type ClientTokenResponse as ClientTokenResponse,
    type CreateClientTokenRequest as CreateClientTokenRequest,
    type RevokeClientTokenRequest as RevokeClientTokenRequest,
    type ClientTokenCreateParams as ClientTokenCreateParams,
    type ClientTokenRevokeParams as ClientTokenRevokeParams,
  };
}
