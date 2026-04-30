// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CategoryPage, type CategoryPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Categories extends APIResource {
  /**
   * Look up a category by slug.
   */
  retrieve(slug: string, options?: RequestOptions): APIPromise<Category> {
    return this._client.get(path`/v1/categories/${slug}`, options);
  }

  /**
   * Paginated list of all categories.
   */
  list(
    query: CategoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CategorySummariesCategoryPage, CategorySummary> {
    return this._client.getAPIList('/v1/categories', CategoryPage<CategorySummary>, { query, ...options });
  }

  /**
   * Search categories by free-text query.
   */
  search(query: CategorySearchParams, options?: RequestOptions): APIPromise<SearchCategoriesResponse> {
    return this._client.get('/v1/categories/search', { query, ...options });
  }
}

export type CategorySummariesCategoryPage = CategoryPage<CategorySummary>;

/**
 * Full category representation used in detail responses.
 */
export interface Category {
  /**
   * Whether this category has subcategories
   */
  has_children: boolean;

  /**
   * URL-friendly slug (e.g. 'sofas')
   */
  slug: string;

  /**
   * Human-readable category title
   */
  title: string;

  /**
   * Structured attributes applicable to this category
   */
  attributes?: Array<CategoryAttribute>;

  /**
   * Direct subcategories only (one level)
   */
  children?: Array<CategoryRef>;

  /**
   * Natural-language description of products in this category
   */
  description?: string | null;

  /**
   * Hierarchical path as a structured list, root first; the last entry is this
   * category itself
   */
  path?: Array<CategoryRef>;
}

/**
 * A structured attribute (e.g. Color, Size) applicable to a category.
 */
export interface CategoryAttribute {
  /**
   * Human-readable attribute name (e.g. 'Color')
   */
  name: string;

  /**
   * URL-friendly identifier (e.g. 'color', 'frame-color')
   */
  slug: string;

  /**
   * Allowed values for this attribute. May be empty when no enumerated value set is
   * defined.
   */
  values?: Array<string>;
}

/**
 * Lean reference to a category, used in path and children arrays.
 */
export interface CategoryRef {
  /**
   * URL-friendly slug (e.g. 'sofas')
   */
  slug: string;

  /**
   * Human-readable category title
   */
  title: string;
}

/**
 * Lean category representation used in search hits and list rows.
 */
export interface CategorySummary {
  /**
   * Whether this category has subcategories
   */
  has_children: boolean;

  /**
   * URL-friendly slug (e.g. 'sofas')
   */
  slug: string;

  /**
   * Human-readable category title
   */
  title: string;

  /**
   * Hierarchical path as a structured list, root first; the last entry is this
   * category itself
   */
  path?: Array<CategoryRef>;
}

export interface PaginatedListCategoriesResponse {
  /**
   * Categories in this page
   */
  items: Array<CategorySummary>;

  /**
   * 1-indexed page number returned
   */
  page: number;

  /**
   * Number of items per page
   */
  page_size: number;

  /**
   * Total number of categories matching the query
   */
  total: number;
}

export interface SearchCategoriesResponse {
  /**
   * Categories matching the query, ordered by relevance.
   */
  categories: Array<CategorySummary>;
}

export interface CategoryListParams extends CategoryPageParams {
  /**
   * If true, return only top-level (root) categories.
   */
  roots_only?: boolean;
}

export interface CategorySearchParams {
  /**
   * Free-text query (e.g. 'sofas', 'yoga mats').
   */
  query: string;

  /**
   * Maximum number of categories to return.
   */
  limit?: number;
}

export declare namespace Categories {
  export {
    type Category as Category,
    type CategoryAttribute as CategoryAttribute,
    type CategoryRef as CategoryRef,
    type CategorySummary as CategorySummary,
    type PaginatedListCategoriesResponse as PaginatedListCategoriesResponse,
    type SearchCategoriesResponse as SearchCategoriesResponse,
    type CategorySummariesCategoryPage as CategorySummariesCategoryPage,
    type CategoryListParams as CategoryListParams,
    type CategorySearchParams as CategorySearchParams,
  };
}
