// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Channel3 } from '../client';

export abstract class APIResource {
  protected _client: Channel3;

  constructor(client: Channel3) {
    this._client = client;
  }
}
