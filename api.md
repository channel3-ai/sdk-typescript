# Channel3

Types:

- <code><a href="./src/resources/top-level.ts">RetrieveResponse</a></code>

Methods:

- <code title="get /">client.<a href="./src/index.ts">retrieve</a>() -> unknown</code>

# Search

Types:

- <code><a href="./src/resources/search.ts">SearchPerformResponse</a></code>

Methods:

- <code title="post /v0/search">client.search.<a href="./src/resources/search.ts">perform</a>({ ...params }) -> SearchPerformResponse</code>

# Products

Types:

- <code><a href="./src/resources/products.ts">AvailabilityStatus</a></code>
- <code><a href="./src/resources/products.ts">Price</a></code>
- <code><a href="./src/resources/products.ts">Variant</a></code>
- <code><a href="./src/resources/products.ts">ProductRetrieveResponse</a></code>

Methods:

- <code title="get /v0/products/{product_id}">client.products.<a href="./src/resources/products.ts">retrieve</a>(productID) -> ProductRetrieveResponse</code>

# Brands

Types:

- <code><a href="./src/resources/brands.ts">Brand</a></code>
- <code><a href="./src/resources/brands.ts">BrandListResponse</a></code>

Methods:

- <code title="get /v0/brands/{brand_id}">client.brands.<a href="./src/resources/brands.ts">retrieve</a>(brandID) -> Brand</code>
- <code title="get /v0/brands">client.brands.<a href="./src/resources/brands.ts">list</a>({ ...params }) -> BrandListResponse</code>

# Enrich

Types:

- <code><a href="./src/resources/enrich.ts">EnrichEnrichURLResponse</a></code>

Methods:

- <code title="post /v0/enrich">client.enrich.<a href="./src/resources/enrich.ts">enrichURL</a>({ ...params }) -> EnrichEnrichURLResponse</code>
