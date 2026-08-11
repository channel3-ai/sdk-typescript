// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ConversationsAPI from './conversations/conversations';
import { APIPromise } from '../core/api-promise';
import { Stream } from '../core/streaming';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Responses extends APIResource {
  /**
   * Run a shopping conversation turn.
   */
  create(params: ResponseCreateParams, options?: RequestOptions): APIPromise<Stream<ResponseCreateResponse>> {
    const { 'x-user-id': xUserID, ...body } = params;
    return this._client.post('/v1/responses', {
      body,
      ...options,
      headers: buildHeaders([
        { Accept: 'text/event-stream', ...(xUserID != null ? { 'x-user-id': xUserID } : undefined) },
        options?.headers,
      ]),
      stream: true,
    }) as APIPromise<Stream<ResponseCreateResponse>>;
  }
}

export interface ChatRequest {
  attachments?: Array<ChatRequest.Attachment> | null;

  /**
   * Partner-supplied context pinned to the top of a conversation thread.
   */
  context?: ConversationsAPI.ConversationContext | null;

  conversation_id?: string | null;

  debug?: boolean;

  image?: ChatRequest.Image | null;

  message?: ChatRequest.Message | null;

  messages?: Array<ChatRequest.Message>;
}

export namespace ChatRequest {
  export interface Attachment {
    url: string;

    key?: string | null;
  }

  export interface Image {
    base64?: string | null;

    url?: string | null;
  }

  export interface Message {
    role: string;

    parts?: Array<Message.Part>;
  }

  export namespace Message {
    export interface Part {
      type: 'text' | 'tool' | 'image';

      input?: { [key: string]: unknown } | null;

      /**
       * Tool call kept in conversation history for model context only. Not streamed to
       * the UI and not exposed as a conversation item.
       */
      modelOnly?: boolean;

      output?: { [key: string]: unknown } | null;

      suggestedReplies?: Array<string> | null;

      text?: string | null;

      toolCallId?: string | null;

      toolName?: string | null;

      url?: string | null;
    }
  }

  export interface Message {
    role: string;

    parts?: Array<Message.Part>;
  }

  export namespace Message {
    export interface Part {
      type: 'text' | 'tool' | 'image';

      input?: { [key: string]: unknown } | null;

      /**
       * Tool call kept in conversation history for model context only. Not streamed to
       * the UI and not exposed as a conversation item.
       */
      modelOnly?: boolean;

      output?: { [key: string]: unknown } | null;

      suggestedReplies?: Array<string> | null;

      text?: string | null;

      toolCallId?: string | null;

      toolName?: string | null;

      url?: string | null;
    }
  }
}

export type ResponseCreateResponse = string;

export interface ResponseCreateParams {
  /**
   * Body param
   */
  attachments?: Array<ResponseCreateParams.Attachment> | null;

  /**
   * Body param: Partner-supplied context pinned to the top of a conversation thread.
   */
  context?: ConversationsAPI.ConversationContext | null;

  /**
   * Body param
   */
  conversation_id?: string | null;

  /**
   * Body param
   */
  debug?: boolean;

  /**
   * Body param
   */
  image?: ResponseCreateParams.Image | null;

  /**
   * Body param
   */
  message?: ResponseCreateParams.Message | null;

  /**
   * Body param
   */
  messages?: Array<ResponseCreateParams.Message>;

  /**
   * Header param: Optional user identifier to attribute clicks and sales to a user
   * in your system. Channel3 appends it to buy URLs in the response.
   */
  'x-user-id'?: string;
}

export namespace ResponseCreateParams {
  export interface Attachment {
    url: string;

    key?: string | null;
  }

  export interface Image {
    base64?: string | null;

    url?: string | null;
  }

  export interface Message {
    role: string;

    parts?: Array<Message.Part>;
  }

  export namespace Message {
    export interface Part {
      type: 'text' | 'tool' | 'image';

      input?: { [key: string]: unknown } | null;

      /**
       * Tool call kept in conversation history for model context only. Not streamed to
       * the UI and not exposed as a conversation item.
       */
      modelOnly?: boolean;

      output?: { [key: string]: unknown } | null;

      suggestedReplies?: Array<string> | null;

      text?: string | null;

      toolCallId?: string | null;

      toolName?: string | null;

      url?: string | null;
    }
  }

  export interface Message {
    role: string;

    parts?: Array<Message.Part>;
  }

  export namespace Message {
    export interface Part {
      type: 'text' | 'tool' | 'image';

      input?: { [key: string]: unknown } | null;

      /**
       * Tool call kept in conversation history for model context only. Not streamed to
       * the UI and not exposed as a conversation item.
       */
      modelOnly?: boolean;

      output?: { [key: string]: unknown } | null;

      suggestedReplies?: Array<string> | null;

      text?: string | null;

      toolCallId?: string | null;

      toolName?: string | null;

      url?: string | null;
    }
  }
}

export declare namespace Responses {
  export {
    type ChatRequest as ChatRequest,
    type ResponseCreateResponse as ResponseCreateResponse,
    type ResponseCreateParams as ResponseCreateParams,
  };
}
