import fetch from 'cross-fetch';
import {
  Product,
  ProductDetail,
  SearchOptions,
  Channel3ClientConfig,
  SearchRequest,
  SearchFilters,
} from './types';
import {
  Channel3Error,
  Channel3AuthenticationError,
  Channel3ValidationError,
  Channel3NotFoundError,
  Channel3ServerError,
  Channel3ConnectionError,
} from './exceptions';

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

  private buildSearchRequest(options: SearchOptions): SearchRequest {
    let apiFilters: SearchFilters = {};

    if (options.filters) {
      apiFilters = {
        brands: options.filters.brands,
        gender: options.filters.gender,
        availability: options.filters.availability,
        price: options.filters.price
          ? {
              min_price: options.filters.price.minPrice,
              max_price: options.filters.price.maxPrice,
            }
          : undefined,
      };
    }

    return {
      query: options.query || null,
      image_url: options.imageUrl || null,
      base64_image: options.base64Image || null,
      filters: apiFilters,
      limit: options.limit || 20,
    };
  }

  private removeNullFields(obj: any): any {
    const result: any = {};
    Object.keys(obj).forEach((key) => {
      if (obj[key] !== null && obj[key] !== undefined) {
        result[key] = obj[key];
      }
    });
    return result;
  }

  async search(options: SearchOptions = {}): Promise<Product[]> {
    const searchRequest = this.buildSearchRequest(options);
    const url = `${this.baseUrl}/search`;

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.timeout);

      const response = await fetch(url, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(this.removeNullFields(searchRequest)),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const responseData = await response.json();

      if (!response.ok) {
        this.handleErrorResponse(response.status, responseData, url);
      }

      if (!Array.isArray(responseData)) {
        throw new Channel3Error('Invalid response format: expected array');
      }

      return responseData as Product[];
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

  async getProduct(productId: string): Promise<ProductDetail> {
    if (!productId || !productId.trim()) {
      throw new Error('productId cannot be empty');
    }

    const url = `${this.baseUrl}/products/${productId}`;

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.timeout);

      const response = await fetch(url, {
        method: 'GET',
        headers: this.headers,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const responseData = await response.json();

      if (!response.ok) {
        this.handleErrorResponse(response.status, responseData, url);
      }

      return responseData as ProductDetail;
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
}

// Alias for backwards compatibility
export { Channel3Client as AsyncChannel3Client };
