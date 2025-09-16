// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { PublicSDK } from '../client';

export abstract class APIResource {
  protected _client: PublicSDK;

  constructor(client: PublicSDK) {
    this._client = client;
  }
}
