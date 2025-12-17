# Search

Types:

- <code><a href="./src/resources/search.ts">RedirectMode</a></code>
- <code><a href="./src/resources/search.ts">SearchConfig</a></code>
- <code><a href="./src/resources/search.ts">SearchFilterPrice</a></code>
- <code><a href="./src/resources/search.ts">SearchFilters</a></code>
- <code><a href="./src/resources/search.ts">SearchRequest</a></code>
- <code><a href="./src/resources/search.ts">SearchPerformResponse</a></code>

Methods:

- <code title="post /v0/search">client.search.<a href="./src/resources/search.ts">perform</a>({ ...params }) -> SearchPerformResponse</code>

# Products

Types:

- <code><a href="./src/resources/products.ts">AvailabilityStatus</a></code>
- <code><a href="./src/resources/products.ts">Price</a></code>
- <code><a href="./src/resources/products.ts">Product</a></code>
- <code><a href="./src/resources/products.ts">ProductDetail</a></code>
- <code><a href="./src/resources/products.ts">Variant</a></code>

Methods:

- <code title="get /v0/products/{product_id}">client.products.<a href="./src/resources/products.ts">retrieve</a>(productID, { ...params }) -> ProductDetail</code>

# Brands

Types:

- <code><a href="./src/resources/brands.ts">Brand</a></code>

Methods:

- <code title="get /v0/brands">client.brands.<a href="./src/resources/brands.ts">find</a>({ ...params }) -> Brand</code>

# Websites

Types:

- <code><a href="./src/resources/websites.ts">Website</a></code>

Methods:

- <code title="get /v0/websites">client.websites.<a href="./src/resources/websites.ts">find</a>({ ...params }) -> Website | null</code>

# Enrich

Types:

- <code><a href="./src/resources/enrich.ts">EnrichRequest</a></code>

Methods:

- <code title="post /v0/enrich">client.enrich.<a href="./src/resources/enrich.ts">enrichURL</a>({ ...params }) -> ProductDetail</code>

# PriceTracking

Types:

- <code><a href="./src/resources/price-tracking.ts">PaginatedSubscriptions</a></code>
- <code><a href="./src/resources/price-tracking.ts">PriceHistory</a></code>
- <code><a href="./src/resources/price-tracking.ts">Subscription</a></code>

Methods:

- <code title="get /v0/price-tracking/history/{canonical_product_id}">client.priceTracking.<a href="./src/resources/price-tracking.ts">getHistory</a>(canonicalProductID, { ...params }) -> PriceHistory</code>
- <code title="get /v0/price-tracking/subscriptions">client.priceTracking.<a href="./src/resources/price-tracking.ts">listSubscriptions</a>({ ...params }) -> PaginatedSubscriptions</code>
- <code title="post /v0/price-tracking/start">client.priceTracking.<a href="./src/resources/price-tracking.ts">start</a>({ ...params }) -> Subscription</code>
- <code title="post /v0/price-tracking/stop">client.priceTracking.<a href="./src/resources/price-tracking.ts">stop</a>({ ...params }) -> Subscription</code>
