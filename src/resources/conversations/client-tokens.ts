// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class ClientTokens extends APIResource {
  /**
   * Mint a short-lived, browser-safe token. With `conversation_id` the token
   * continues and reads that thread; without it, the token's first turn creates the
   * thread and binds the token to it.
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

  token_id: string;

  token_type?: 'Bearer';
}

export interface CreateClientTokenRequest {
  conversation_id?: string | null;

  ttl_seconds?: number;
}

export interface RevokeClientTokenRequest {
  token: string;
}

export interface ClientTokenCreateParams {
  conversation_id?: string | null;

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
