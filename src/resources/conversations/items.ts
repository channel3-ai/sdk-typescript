// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConversationsAPI from './conversations';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Items extends APIResource {
  /**
   * Return persisted messages for a conversation.
   */
  list(
    conversationID: string,
    options?: RequestOptions,
  ): APIPromise<ConversationsAPI.ConversationItemsResponse> {
    return this._client.get(path`/v1/conversations/${conversationID}/items`, options);
  }
}
