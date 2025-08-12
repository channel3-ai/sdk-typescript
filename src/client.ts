import fetch from 'cross-fetch';
import type {
  Product,
  ProductDetail,
  Brand,
  SearchRequest,
  PaginatedResponseBrand,
} from './generated/models';
import type { GetBrandsV0BrandsGetRequest } from './generated/apis/Channel3ApiApi';
import {
  Channel3Error,
  Channel3AuthenticationError,
  Channel3ValidationError,
  Channel3NotFoundError,
  Channel3ServerError,
  Channel3ConnectionError,
} from './exceptions';
import { Channel3ApiApi, Configuration } from './generated';
import type { InitOverrideFunction } from './generated/runtime';

export interface Channel3ClientConfig {
  apiKey: string;
}

export class Channel3Client {
  private readonly apiKey: string;
  private readonly timeoutMs: number = 30000;
  private readonly api: Channel3ApiApi;

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

    const configuration = new Configuration({
      basePath:
        (typeof process !== 'undefined' && process.env && process.env.CHANNEL3_BASE_PATH) ||
        'https://api.trychannel3.com',
      apiKey: async () => this.apiKey,
      fetchApi: fetch as any,
    });

    this.api = new Channel3ApiApi(configuration);
  }

  private createTimeoutOverride(): { initOverride: InitOverrideFunction; clear: () => void } {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeoutMs);
    const initOverride: InitOverrideFunction = async ({ init }) => ({
      ...init,
      signal: controller.signal,
    });
    const clear = () => clearTimeout(timeoutId);
    return { initOverride, clear };
  }

  private async handleGeneratedCall<T>(
    fn: (initOverride: InitOverrideFunction) => Promise<T>
  ): Promise<T> {
    const { initOverride, clear } = this.createTimeoutOverride();
    try {
      const result = await fn(initOverride);
      clear();
      return result;
    } catch (error: any) {
      clear();
      await this.rethrowAsChannel3Error(error);
      throw error;
    }
  }

  private async rethrowAsChannel3Error(error: unknown): Promise<never> {
    if (error && typeof error === 'object' && 'name' in error) {
      const err = error as any;
      if (err.name === 'ResponseError' && err.response) {
        const status = err.response.status as number;
        let responseData: any = null;
        try {
          responseData = await err.response.clone().json();
        } catch {
          try {
            const text = await err.response.clone().text();
            responseData = { detail: text };
          } catch {
            responseData = null;
          }
        }
        const url = err.response.url as string;
        const errorMessage = responseData?.detail || `Request failed with status ${status}`;
        switch (status) {
          case 401:
            throw new Channel3AuthenticationError(
              'Invalid or missing API key',
              status,
              responseData
            );
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
            throw new Channel3Error(
              `Request to ${url} failed: ${errorMessage}`,
              status,
              responseData
            );
        }
      }
      if (err.name === 'FetchError') {
        throw new Channel3ConnectionError(`Request failed: ${err.message}`);
      }
      if (err.name === 'AbortError') {
        throw new Channel3ConnectionError('Request timed out');
      }
    }
    if (error instanceof Channel3Error) {
      throw error;
    }
    if (error instanceof Error) {
      throw new Channel3ConnectionError(`Request failed: ${error.message}`);
    }
    throw new Channel3Error(`Unexpected error: ${String(error)}`);
  }

  async search(options: SearchRequest = {}): Promise<Product[]> {
    const products = await this.handleGeneratedCall((initOverride) =>
      this.api.searchV0SearchPost({ searchRequest: options }, initOverride)
    );
    return products;
  }

  async getProduct(productId: string): Promise<ProductDetail> {
    if (!productId || !productId.trim()) {
      throw new Error('productId cannot be empty');
    }
    const product = await this.handleGeneratedCall((initOverride) =>
      this.api.getProductDetailV0ProductsProductIdGet({ productId }, initOverride)
    );
    return product;
  }

  async getBrands(options: GetBrandsV0BrandsGetRequest = {}): Promise<PaginatedResponseBrand> {
    const result = await this.handleGeneratedCall((initOverride) =>
      this.api.getBrandsV0BrandsGet(
        { query: options.query, page: options.page, size: options.size },
        initOverride
      )
    );
    return result;
  }

  async getBrand(brandId: string): Promise<Brand> {
    if (!brandId || !brandId.trim()) {
      throw new Error('brandId cannot be empty');
    }
    const brand = await this.handleGeneratedCall((initOverride) =>
      this.api.getBrandDetailV0BrandsBrandIdGet({ brandId }, initOverride)
    );
    return brand;
  }
}

export { Channel3Client as AsyncChannel3Client };
