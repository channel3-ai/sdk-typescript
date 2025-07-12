import fetch from 'cross-fetch';
import {
  Product,
  ProductDetail,
  SearchOptions,
  Channel3ClientConfig,
  Brand,
  BrandSearchOptions,
} from './types';
import {
  Channel3Error,
  Channel3AuthenticationError,
  Channel3ValidationError,
  Channel3NotFoundError,
  Channel3ServerError,
  Channel3ConnectionError,
} from './exceptions';
import { toCamelCase, toSnakeCase } from './utils';

type HttpMethod = 'GET' | 'POST';

interface RequestOptions {
  method: HttpMethod;
  path: string;
  body?: unknown;
  params?: Record<string, string | number | undefined>;
}

export class Channel3Client {
  private readonly apiKey: string;
  private readonly baseUrl: string;
  private readonly timeout: number;
  private readonly headers: Record<string, string>;

  constructor(config: Channel3ClientConfig) {
    if (!config.apiKey) {
      const envApiKey = typeof process !== 'undefined' ? process.env?.CHANNEL3_API_KEY : undefined;
      if (!envApiKey) {
        throw new Error(
          'No API key provided. Set CHANNEL3_API_KEY environment variable or pass apiKey in config.'
        );
      }
      this.apiKey = envApiKey;
    } else {
      this.apiKey = config.apiKey;
    }

    this.baseUrl = config.baseUrl || 'https://api.trychannel3.com/v0';
    this.timeout = config.timeout || 30000;
    this.headers = {
      'x-api-key': this.apiKey,
      'Content-Type': 'application/json',
    };
  }

  private async _request<T>(options: RequestOptions): Promise<T> {
    const { method, path, body, params } = options;
    const url = new URL(`${this.baseUrl}${path}`);

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          url.searchParams.append(key, String(value));
        }
      });
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(url.toString(), {
        method,
        headers: this.headers,
        body: body ? JSON.stringify(toSnakeCase(body)) : undefined,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const responseData = await response.json().catch(() => null);

      if (!response.ok) {
        this.handleErrorResponse(response.status, responseData, url.toString());
      }

      return toCamelCase(responseData) as T;
    } catch (error) {
      if (error instanceof Channel3Error) {
        throw error;
      }

      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          throw new Channel3ConnectionError('Request timed out');
        }
        throw new Channel3ConnectionError(`Request failed: ${error.message}`);
      }

      throw new Channel3Error(`Unexpected error: ${error}`);
    }
  }

  private handleErrorResponse(status: number, responseData: any, url: string): never {
    const errorMessage = responseData?.detail || `Request failed with status ${status}`;

    switch (status) {
      case 401:
        throw new Channel3AuthenticationError('Invalid or missing API key', status, responseData);
      case 404:
        throw new Channel3NotFoundError(errorMessage, status, responseData);
      case 422:
        throw new Channel3ValidationError(
          `Validation error: ${errorMessage}`,
          status,
          responseData
        );
      case 500:
        throw new Channel3ServerError('Internal server error', status, responseData);
      default:
        throw new Channel3Error(`Request to ${url} failed: ${errorMessage}`, status, responseData);
    }
  }

  async search(options: SearchOptions = {}): Promise<Product[]> {
    return this._request<Product[]>({
      method: 'POST',
      path: '/search',
      body: options,
    });
  }

  async getProduct(productId: string): Promise<ProductDetail> {
    if (!productId || !productId.trim()) {
      throw new Error('productId cannot be empty');
    }
    return this._request<ProductDetail>({
      method: 'GET',
      path: `/products/${productId}`,
    });
  }

  async getBrands(options: BrandSearchOptions = {}): Promise<Brand[]> {
    return this._request<Brand[]>({
      method: 'GET',
      path: '/brands',
      params: options as Record<string, string | number | undefined>,
    });
  }

  async getBrand(brandId: string): Promise<Brand> {
    if (!brandId || !brandId.trim()) {
      throw new Error('brandId cannot be empty');
    }
    return this._request<Brand>({
      method: 'GET',
      path: `/brands/${brandId}`,
    });
  }
}

// Alias for backwards compatibility
export { Channel3Client as AsyncChannel3Client };
