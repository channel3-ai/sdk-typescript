# Shared

Types:

- <code><a href="./src/resources/shared.ts">ErrorResponse</a></code>

# Products

Types:

- <code><a href="./src/resources/products.ts">AvailabilityStatus</a></code>
- <code><a href="./src/resources/products.ts">BrowseRequest</a></code>
- <code><a href="./src/resources/products.ts">ImageSearchRequest</a></code>
- <code><a href="./src/resources/products.ts">LocaleConfig</a></code>
- <code><a href="./src/resources/products.ts">LookupRequest</a></code>
- <code><a href="./src/resources/products.ts">LookupResponse</a></code>
- <code><a href="./src/resources/products.ts">MonetizeOffer</a></code>
- <code><a href="./src/resources/products.ts">MonetizeRequest</a></code>
- <code><a href="./src/resources/products.ts">MonetizeResponse</a></code>
- <code><a href="./src/resources/products.ts">Price</a></code>
- <code><a href="./src/resources/products.ts">ProductBrand</a></code>
- <code><a href="./src/resources/products.ts">ProductDetail</a></code>
- <code><a href="./src/resources/products.ts">ProductImage</a></code>
- <code><a href="./src/resources/products.ts">ProductOffer</a></code>
- <code><a href="./src/resources/products.ts">SimilarProductsRequest</a></code>

Methods:

- <code title="get /v1/products/{product_id}">client.products.<a href="./src/resources/products.ts">retrieve</a>(productID, { ...params }) -> ProductDetail</code>
- <code title="post /v1/browse">client.products.<a href="./src/resources/products.ts">browse</a>({ ...params }) -> ProductDetailsSearchPage</code>
- <code title="post /v1/similar">client.products.<a href="./src/resources/products.ts">findSimilar</a>({ ...params }) -> ProductDetailsSearchPage</code>
- <code title="post /v1/lookup">client.products.<a href="./src/resources/products.ts">lookup</a>({ ...params }) -> LookupResponse</code>
- <code title="post /v1/monetize">client.products.<a href="./src/resources/products.ts">monetize</a>({ ...params }) -> MonetizeResponse</code>
- <code title="post /v1/search">client.products.<a href="./src/resources/products.ts">search</a>({ ...params }) -> ProductDetailsSearchPage</code>
- <code title="post /v1/image-search">client.products.<a href="./src/resources/products.ts">searchByImage</a>({ ...params }) -> ProductDetailsSearchPage</code>

# Reporting

Types:

- <code><a href="./src/resources/reporting/reporting.ts">ReportingProduct</a></code>

## Clicks

Types:

- <code><a href="./src/resources/reporting/clicks.ts">Click</a></code>
- <code><a href="./src/resources/reporting/clicks.ts">ClicksResponse</a></code>
- <code><a href="./src/resources/reporting/clicks.ts">ClicksSummary</a></code>

Methods:

- <code title="get /v1/reporting/clicks">client.reporting.clicks.<a href="./src/resources/reporting/clicks.ts">list</a>({ ...params }) -> ClicksAnalyticsPage</code>

## Transactions

Types:

- <code><a href="./src/resources/reporting/transactions.ts">PublicTransactionStatus</a></code>
- <code><a href="./src/resources/reporting/transactions.ts">Transaction</a></code>
- <code><a href="./src/resources/reporting/transactions.ts">TransactionsResponse</a></code>
- <code><a href="./src/resources/reporting/transactions.ts">TransactionsSummary</a></code>

Methods:

- <code title="get /v1/reporting/transactions">client.reporting.transactions.<a href="./src/resources/reporting/transactions.ts">list</a>({ ...params }) -> TransactionsAnalyticsPage</code>

# Brands

Types:

- <code><a href="./src/resources/brands.ts">Brand</a></code>
- <code><a href="./src/resources/brands.ts">SearchBrandsResponse</a></code>

Methods:

- <code title="get /v1/brands/{brand_id}">client.brands.<a href="./src/resources/brands.ts">retrieve</a>(brandID, { ...params }) -> Brand</code>
- <code title="get /v1/brands">client.brands.<a href="./src/resources/brands.ts">list</a>({ ...params }) -> BrandsCursorPage</code>
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

# Conversations

Types:

- <code><a href="./src/resources/conversations/conversations.ts">AssistantMessage</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">CatalogDisplayPayload</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">CatalogToolError</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">ConversationContext</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">ConversationDetail</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">ConversationError</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">ConversationErrorBody</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">CreateTurnRequest</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">ImagePart</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">PartCompletedEvent</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">PartDeltaEvent</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">PartStartedEvent</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">ProductIDsInput</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">SearchProductsInput</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">TextPart</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">ToolPart</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">TurnCompletedEvent</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">TurnErrorCode</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">TurnErrorEvent</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">TurnEvent</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">TurnResult</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">TurnStartedEvent</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">TurnUsage</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">UserMessage</a></code>

Methods:

- <code title="post /v1/conversations">client.conversations.<a href="./src/resources/conversations/conversations.ts">create</a>({ ...params }) -> TurnResult</code>
- <code title="get /v1/conversations/{conversation_id}">client.conversations.<a href="./src/resources/conversations/conversations.ts">retrieve</a>(conversationID, { ...params }) -> ConversationDetail</code>

## ClientTokens

Types:

- <code><a href="./src/resources/conversations/client-tokens.ts">ClientTokenResponse</a></code>
- <code><a href="./src/resources/conversations/client-tokens.ts">CreateClientTokenRequest</a></code>
- <code><a href="./src/resources/conversations/client-tokens.ts">RevokeClientTokenRequest</a></code>

Methods:

- <code title="post /v1/conversations/client_tokens">client.conversations.clientTokens.<a href="./src/resources/conversations/client-tokens.ts">create</a>({ ...params }) -> ClientTokenResponse</code>
- <code title="post /v1/conversations/client_tokens/revoke">client.conversations.clientTokens.<a href="./src/resources/conversations/client-tokens.ts">revoke</a>({ ...params }) -> void</code>

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
