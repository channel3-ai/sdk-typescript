// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ItemsAPI from './items';
import { Items } from './items';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Conversations extends APIResource {
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);

  /**
   * Return metadata for a conversation thread.
   */
  retrieve(conversationID: string, options?: RequestOptions): APIPromise<Conversation> {
    return this._client.get(path`/v1/conversations/${conversationID}`, options);
  }
}

export interface Conversation {
  id: string;

  created_at: number;

  /**
   * Partner-supplied context pinned to the top of a conversation thread.
   */
  context?: ConversationContext | null;

  /**
   * Free-form key/value pairs the caller attached to the thread.
   */
  metadata?: { [key: string]: unknown };

  user_id?: string | null;
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

export interface ConversationItemsResponse {
  items: Array<ConversationItemsResponse.Item>;
}

export namespace ConversationItemsResponse {
  export interface Item {
    role: string;

    parts?: Array<Item.Part>;
  }

  export namespace Item {
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

Conversations.Items = Items;

export declare namespace Conversations {
  export {
    type Conversation as Conversation,
    type ConversationContext as ConversationContext,
    type ConversationItemsResponse as ConversationItemsResponse,
  };

  export { Items as Items };
}
