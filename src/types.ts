/**
 * Type definitions for the Channel3 API
 */

export enum AvailabilityStatus {
  InStock = 'InStock',
  OutOfStock = 'OutOfStock',
  PreOrder = 'PreOrder',
  LimitedAvailability = 'LimitedAvailability',
  BackOrder = 'BackOrder',
  Discontinued = 'Discontinued',
  SoldOut = 'SoldOut',
  Unknown = 'Unknown',
}

export interface Price {
  /** The current price of the product, including any discounts */
  price: number;
  /** The original price of the product before any discounts */
  compare_at_price?: number | null;
  /** The currency code of the product */
  currency: string;
}

export interface MerchantOffering {
  /** URL to purchase the product */
  url?: string;
  /** Name of the merchant */
  merchant_name: string;
  /** Price information */
  price: Price;
  /** Product availability status */
  availability: AvailabilityStatus;
}

export interface FamilyMember {
  /** Unique identifier for the family member */
  id: string;
  /** Title of the family member product */
  title: string;
  /** Image URL for the family member product */
  image_url: string;
}

export interface Product {
  /** Unique identifier for the product */
  id: string;
  /** Relevance score for the search query */
  score: number;
  /** Brand name of the product */
  brand_name: string;
  /** Product title */
  title: string;
  /** Product description */
  description: string;
  /** Main product image URL */
  image_url: string;
  /** Available purchase options */
  offers: MerchantOffering[];
  /** Related family products */
  family?: FamilyMember[];
}

export interface ProductDetail {
  /** Unique identifier for the brand */
  brand_id: string;
  /** Brand name of the product */
  brand_name: string;
  /** Product title */
  title: string;
  /** Product description */
  description: string;
  /** List of product image URLs */
  image_urls: string[];
  /** List of merchant offerings */
  merchant_offerings: MerchantOffering[];
  /** Target gender */
  gender?: 'na' | 'men' | 'women';
  /** List of materials */
  materials?: string[] | null;
  /** List of key product features */
  key_features?: string[];
  /** Related family products */
  family_members?: FamilyMember[];
}

export interface SearchFilterPrice {
  /** Minimum price filter */
  min_price?: number | null;
  /** Maximum price filter */
  max_price?: number | null;
}

export interface SearchFilters {
  /** List of brands to filter by */
  brands?: string[] | null;
  /** Gender to filter by */
  gender?: 'male' | 'female' | 'unisex' | null;
  /** Price range to filter by */
  price?: SearchFilterPrice | null;
  /** Availability status to filter by */
  availability?: AvailabilityStatus | null;
}

export interface SearchRequest {
  /** Text search query */
  query?: string | null;
  /** URL of image for visual search */
  image_url?: string | null;
  /** Base64-encoded image for visual search */
  base64_image?: string | null;
  /** Search filters */
  filters?: SearchFilters;
  /** Maximum number of results to return */
  limit?: number | null;
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
  /** List of brands to filter by */
  brands?: string[];
  /** Gender to filter by */
  gender?: 'male' | 'female' | 'unisex';
  /** Price range to filter by */
  price?: SearchFilterPriceOptions;
  /** Availability status to filter by */
  availability?: AvailabilityStatus;
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
