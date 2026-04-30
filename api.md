# Shared

Types:

- <code><a href="./src/resources/shared.ts">ErrorResponse</a></code>

# Products

Types:

- <code><a href="./src/resources/products.ts">AvailabilityStatus</a></code>
- <code><a href="./src/resources/products.ts">ImageSearchRequest</a></code>
- <code><a href="./src/resources/products.ts">LocaleConfig</a></code>
- <code><a href="./src/resources/products.ts">LookupRequest</a></code>
- <code><a href="./src/resources/products.ts">LookupResponse</a></code>
- <code><a href="./src/resources/products.ts">Price</a></code>
- <code><a href="./src/resources/products.ts">ProductBrand</a></code>
- <code><a href="./src/resources/products.ts">ProductDetail</a></code>
- <code><a href="./src/resources/products.ts">ProductImage</a></code>
- <code><a href="./src/resources/products.ts">ProductOffer</a></code>
- <code><a href="./src/resources/products.ts">SimilarProductsRequest</a></code>

Methods:

- <code title="get /v1/products/{product_id}">client.products.<a href="./src/resources/products.ts">retrieve</a>(productID, { ...params }) -> ProductDetail</code>
- <code title="post /v1/similar">client.products.<a href="./src/resources/products.ts">findSimilar</a>({ ...params }) -> ProductDetailsSearchPage</code>
- <code title="post /v1/lookup">client.products.<a href="./src/resources/products.ts">lookup</a>({ ...params }) -> LookupResponse</code>
- <code title="post /v1/search">client.products.<a href="./src/resources/products.ts">search</a>({ ...params }) -> ProductDetailsSearchPage</code>
- <code title="post /v1/image-search">client.products.<a href="./src/resources/products.ts">searchByImage</a>({ ...params }) -> ProductDetailsSearchPage</code>

# Brands

Types:

- <code><a href="./src/resources/brands.ts">Brand</a></code>
- <code><a href="./src/resources/brands.ts">SearchBrandsResponse</a></code>

Methods:

- <code title="get /v1/brands/{brand_id}">client.brands.<a href="./src/resources/brands.ts">retrieve</a>(brandID) -> Brand</code>
- <code title="get /v1/brands">client.brands.<a href="./src/resources/brands.ts">list</a>({ ...params }) -> BrandsCursorPage</code>
- <code title="get /v0/brands">client.brands.<a href="./src/resources/brands.ts">find</a>({ ...params }) -> Brand</code>
- <code title="get /v1/brands/search">client.brands.<a href="./src/resources/brands.ts">search</a>({ ...params }) -> SearchBrandsResponse</code>

# Categories

Types:

- <code><a href="./src/resources/categories.ts">Category</a></code>
- <code><a href="./src/resources/categories.ts">CategoryAttribute</a></code>
- <code><a href="./src/resources/categories.ts">CategoryRef</a></code>
- <code><a href="./src/resources/categories.ts">CategorySummary</a></code>
- <code><a href="./src/resources/categories.ts">PaginatedListCategoriesResponse</a></code>
- <code><a href="./src/resources/categories.ts">SearchCategoriesResponse</a></code>

Methods:

- <code title="get /v1/categories/{slug}">client.categories.<a href="./src/resources/categories.ts">retrieve</a>(slug) -> Category</code>
- <code title="get /v1/categories">client.categories.<a href="./src/resources/categories.ts">list</a>({ ...params }) -> CategorySummariesCategoryPage</code>
- <code title="get /v1/categories/search">client.categories.<a href="./src/resources/categories.ts">search</a>({ ...params }) -> SearchCategoriesResponse</code>

# Websites

Types:

- <code><a href="./src/resources/websites.ts">Website</a></code>

Methods:

- <code title="get /v0/websites">client.websites.<a href="./src/resources/websites.ts">retrieve</a>({ ...params }) -> Website | null</code>

# PriceTracking

Types:

- <code><a href="./src/resources/price-tracking.ts">PaginatedSubscriptionsResponse</a></code>
- <code><a href="./src/resources/price-tracking.ts">PriceHistory</a></code>
- <code><a href="./src/resources/price-tracking.ts">PriceHistoryPoint</a></code>
- <code><a href="./src/resources/price-tracking.ts">PriceStatistics</a></code>
- <code><a href="./src/resources/price-tracking.ts">StartTrackingRequest</a></code>
- <code><a href="./src/resources/price-tracking.ts">StopTrackingRequest</a></code>
- <code><a href="./src/resources/price-tracking.ts">Subscription</a></code>
- <code><a href="./src/resources/price-tracking.ts">History</a></code>
- <code><a href="./src/resources/price-tracking.ts">Statistics</a></code>

Methods:

- <code title="get /v0/price-tracking/subscriptions">client.priceTracking.<a href="./src/resources/price-tracking.ts">listSubscriptions</a>({ ...params }) -> SubscriptionsCursorPage</code>
- <code title="get /v0/price-tracking/history/{canonical_product_id}">client.priceTracking.<a href="./src/resources/price-tracking.ts">retrieveHistory</a>(canonicalProductID, { ...params }) -> PriceHistory</code>
- <code title="post /v0/price-tracking/start">client.priceTracking.<a href="./src/resources/price-tracking.ts">start</a>({ ...params }) -> Subscription</code>
- <code title="post /v0/price-tracking/stop">client.priceTracking.<a href="./src/resources/price-tracking.ts">stop</a>({ ...params }) -> Subscription</code>

# Search

Types:

- <code><a href="./src/resources/search.ts">SearchConfig</a></code>
- <code><a href="./src/resources/search.ts">SearchFilterPrice</a></code>
- <code><a href="./src/resources/search.ts">SearchFilters</a></code>
- <code><a href="./src/resources/search.ts">SearchRequest</a></code>
- <code><a href="./src/resources/search.ts">SearchResponse</a></code>

Methods:

- <code title="post /v1/search">client.search.<a href="./src/resources/search.ts">perform</a>({ ...params }) -> SearchResponse</code>

# Enrich

Types:

- <code><a href="./src/resources/enrich.ts">EnrichRequest</a></code>
- <code><a href="./src/resources/enrich.ts">EnrichEnrichURLResponse</a></code>

Methods:

- <code title="post /v0/enrich">client.enrich.<a href="./src/resources/enrich.ts">enrichURL</a>({ ...params }) -> EnrichEnrichURLResponse</code>
