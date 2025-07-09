/**
 * Type definitions for the Channel3 API
 */

export enum AvailabilityStatus {
  IN_STOCK = 'InStock',
  OUT_OF_STOCK = 'OutOfStock',
  PRE_ORDER = 'PreOrder',
  LIMITED_AVAILABILITY = 'LimitedAvailability',
  BACK_ORDER = 'BackOrder',
  DISCONTINUED = 'Discontinued',
  SOLD_OUT = 'SoldOut',
  UNKNOWN = 'Unknown',
}

export interface Price {
  /** The current price of the product, including any discounts */
  price: number;
  /** The original price of the product before any discounts */
  compare_at_price?: number | null;
  /** The currency code of the product */
  currency: string;
}

export interface Brand {
  /** Unique identifier for the brand */
  id: string;
  /** Name of the brand */
  name: string;
  /** Logo URL for the brand */
  logo_url?: string | null;
  /** Description of the brand */
  description?: string | null;
}

export interface Variant {
  /** Unique identifier for the product */
  product_id: string;
  /** Title of the variant */
  title: string;
  /** Image URL for the variant */
  image_url: string;
}

export interface Product {
  /** Unique identifier for the product */
  id: string;
  /** Relevance score for the search query */
  score: number;
  /** Product title */
  title: string;
  /** Product description */
  description?: string | null;
  /** Brand name of the product */
  brand_name: string;
  /** Main product image URL */
  image_url: string;
  /** Price information */
  price: Price;
  /** Product availability status */
  availability: AvailabilityStatus;
  /** Product variants */
  variants: Variant[];
}

export interface ProductDetail {
  /** Product title */
  title: string;
  /** Product description */
  description?: string | null;
  /** Unique identifier for the brand */
  brand_id?: string | null;
  /** Brand name of the product */
  brand_name?: string | null;
  /** List of product image URLs */
  image_urls?: string[] | null;
  /** Price information */
  price: Price;
  /** Gender of the product */
  gender?: 'unisex' | 'men' | 'women' | null;
  /** Product availability status */
  availability: AvailabilityStatus;
  /** List of key product features */
  key_features?: string[] | null;
  /** Product variants */
  variants: Variant[];
}

export interface SearchFilterPrice {
  /** Minimum price filter */
  min_price?: number | null;
  /** Maximum price filter */
  max_price?: number | null;
}

export interface SearchFilters {
  /** List of brand IDs to filter by */
  brand_ids?: string[] | null;
  /** Gender to filter by */
  gender?: 'male' | 'female' | 'unisex' | null;
  /** Price range to filter by */
  price?: SearchFilterPrice | null;
  /** Availability statuses to filter by */
  availability?: AvailabilityStatus[] | null;
}

export interface SearchRequest {
  /** Text search query */
  query?: string | null;
  /** URL of image for visual search */
  image_url?: string | null;
  /** Base64-encoded image for visual search */
  base64_image?: string | null;
  /** Maximum number of results to return */
  limit?: number | null;
  /** Search filters */
  filters?: SearchFilters;
}

export interface Channel3ClientConfig {
  /** Your Channel3 API key */
  apiKey: string;
  /** Base URL for the API (defaults to https://api.trychannel3.com/v0) */
  baseUrl?: string;
  /** Request timeout in milliseconds (defaults to 30000) */
  timeout?: number;
}

export interface SearchFilterPriceOptions {
  /** Minimum price filter */
  minPrice?: number;
  /** Maximum price filter */
  maxPrice?: number;
}

export interface SearchFiltersOptions {
  /** List of brand IDs to filter by */
  brandIds?: string[];
  /** Gender to filter by */
  gender?: 'male' | 'female' | 'unisex';
  /** Price range to filter by */
  price?: SearchFilterPriceOptions;
  /** Availability statuses to filter by */
  availability?: AvailabilityStatus[];
}

export interface SearchOptions {
  /** Text search query */
  query?: string;
  /** URL of image for visual search */
  imageUrl?: string;
  /** Base64-encoded image for visual search */
  base64Image?: string;
  /** Search filters */
  filters?: SearchFiltersOptions;
  /** Maximum number of results to return (default: 20) */
  limit?: number;
}

export interface BrandSearchOptions {
  /** Text query to filter brands */
  query?: string;
  /** Page number for pagination (default: 1) */
  page?: number;
  /** Number of brands per page (default: 100) */
  size?: number;
}
