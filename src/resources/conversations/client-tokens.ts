// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class ClientTokens extends APIResource {
  /**
   * Mint a short-lived, browser-safe client token for the conversations API. Pass
   * `session_id` for a session token that can create and continue conversations for
   * that session, or `conversation_id` for a token bound to one existing
   * conversation.
   */
  create(body: ClientTokenCreateParams, options?: RequestOptions): APIPromise<ClientTokenResponse> {
    return this._client.post('/v1/conversations/client_tokens', { body, ...options });
  }

  /**
   * Revoke a client token immediately. The token travels in the request body, not
   * the URL, so it stays out of access logs; only the minting vendor can revoke it.
   */
  revoke(body: ClientTokenRevokeParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/v1/conversations/client_tokens/revoke', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ClientTokenResponse {
  token: string;

  expires_at: number;

  token_type?: 'Bearer';
}

export interface CreateClientTokenRequest {
  conversation_id?: string | null;

  session_id?: string | null;

  ttl_seconds?: number;
}

export interface RevokeClientTokenRequest {
  token: string;
}

export interface ClientTokenCreateParams {
  conversation_id?: string | null;

  session_id?: string | null;

  ttl_seconds?: number;
}

export interface ClientTokenRevokeParams {
  token: string;
}

export declare namespace ClientTokens {
  export {
    type ClientTokenResponse as ClientTokenResponse,
    type CreateClientTokenRequest as CreateClientTokenRequest,
    type RevokeClientTokenRequest as RevokeClientTokenRequest,
    type ClientTokenCreateParams as ClientTokenCreateParams,
    type ClientTokenRevokeParams as ClientTokenRevokeParams,
  };
}
