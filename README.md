# Channel3 TypeScript/JavaScript SDK

[![npm version](https://badge.fury.io/js/channel3-sdk.svg)](https://badge.fury.io/js/channel3-sdk)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-16%2B-green)](https://nodejs.org/)

The official TypeScript/JavaScript SDK for the [Channel3](https://trychannel3.com) AI Shopping API. Search for products using text, images, and advanced filters with AI-powered semantic search.

## 🚀 Features

- **🔍 Text Search**: Natural language product search
- **🖼️ Visual Search**: Search by image URL or base64 data
- **🎯 Advanced Filters**: Filter by brand, price, gender, availability
- **⚙️ Search Configuration**: Control query enrichment and semantic search
- **🔧 TypeScript First**: Full type safety with auto-generated types from OpenAPI
- **🌐 Cross-Platform**: Works in Node.js and modern browsers
- **⚡ Modern**: ESM and CommonJS support, AbortController for timeouts
- **🛡️ Robust Error Handling**: Detailed error types for different scenarios

## 📦 Installation

```bash
npm install channel3-sdk
# or
yarn add channel3-sdk
# or
pnpm add channel3-sdk
```

## 🏃‍♂️ Quick Start

### Basic Usage

```typescript
import { Channel3Client } from 'channel3-sdk';

const client = new Channel3Client({
  apiKey: process.env.CHANNEL3_API_KEY!,
});

// Search for products
const products = await client.search({
  query: 'blue denim jacket',
});

console.log(`Found ${products.length} products`);
products.forEach((product) => {
  console.log(`${product.title} - $${product.price.price} ${product.price.currency}`);
});
```

### Advanced Search with Configuration

```typescript
// Search with custom configuration and context
const results = await client.search({
  query: 'running shoes',
  config: {
    enrich_query: true, // Enable query enrichment
    semantic_search: true, // Enable semantic search
  },
  context: 'Looking for athletic footwear for marathon training',
  filters: {
    price: { min_price: 50, max_price: 200 },
    gender: 'male',
    brand_ids: ['nike-id', 'adidas-id'],
  },
  limit: 10,
});
```

### Visual Search

```typescript
// Search by image URL
const imageResults = await client.search({
  image_url: 'https://example.com/product-image.jpg',
});

// Search by base64 image
const base64Results = await client.search({
  base64_image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...',
});
```

## 📚 API Reference

### Client Configuration

```typescript
interface Channel3ClientConfig {
  apiKey: string; // Your Channel3 API key
}
```

### Methods

#### `search(options: SearchRequest): Promise<Product[]>`

Search for products with various options.

**Parameters:**

- `query?: string` - Text search query
- `image_url?: string` - URL of image for visual search
- `base64_image?: string` - Base64-encoded image for visual search
- `config?: SearchConfig` - Search configuration options
- `context?: string` - Additional context for the search
- `filters?: SearchFilters` - Advanced filtering options
- `limit?: number` - Maximum results to return (default: 20)

#### `getProduct(productId: string): Promise<ProductDetail>`

Get detailed information about a specific product.

#### `getBrands(options?: GetBrandsV0BrandsGetRequest): Promise<PaginatedResponseBrand>`

Get list of available brands with pagination.

#### `getBrand(brandId: string): Promise<Brand>`

Get detailed information about a specific brand.

## 🔧 Configuration Options

### Search Configuration

```typescript
interface SearchConfig {
  enrich_query?: boolean; // Enable AI query enrichment (default: true)
  semantic_search?: boolean; // Enable semantic search (default: true)
}
```

### Search Filters

```typescript
interface SearchFilters {
  brand_ids?: string[]; // Filter by specific brand IDs
  gender?: 'male' | 'female' | 'unisex'; // Gender filter
  price?: {
    // Price range filter
    min_price?: number;
    max_price?: number;
  };
  availability?: AvailabilityStatus[]; // Availability filter
}
```

## 🌍 Environment Variables

- `CHANNEL3_API_KEY` - Your Channel3 API key (required)
- `CHANNEL3_BASE_PATH` - Custom API base path (optional, for local development)

## 🛠️ Local Development & Testing

For local development against your own backend:

```bash
# Set environment variables
export CHANNEL3_BASE_PATH="http://localhost:8000"
export CHANNEL3_API_KEY="your_dev_key"

# Create test script
cat > test-local.mjs << 'EOF'
import { Channel3Client } from 'channel3-sdk';

const client = new Channel3Client({ apiKey: process.env.CHANNEL3_API_KEY });
const products = await client.search({ query: 't-shirt' });
console.log(`Found ${products.length} products`);
EOF

# Run test
node test-local.mjs
```

## 🚨 Error Handling

The SDK provides specific error types for different scenarios:

```typescript
import {
  Channel3AuthenticationError, // 401 - Invalid API key
  Channel3ValidationError, // 422 - Invalid request data
  Channel3NotFoundError, // 404 - Resource not found
  Channel3ServerError, // 500 - Server error
  Channel3ConnectionError, // Network/timeout errors
} from 'channel3-sdk';

try {
  const products = await client.search({ query: 'shoes' });
} catch (error) {
  if (error instanceof Channel3AuthenticationError) {
    console.error('Invalid API key');
  } else if (error instanceof Channel3ValidationError) {
    console.error('Invalid request:', error.message);
  } else if (error instanceof Channel3ConnectionError) {
    console.error('Network error:', error.message);
  }
}
```

## 🔄 Staying in Sync

This SDK is automatically generated from the Channel3 OpenAPI specification. To regenerate types after API updates:

```bash
npm run openapi:generate
```

## 🌐 Browser Support

Works in modern browsers that support:

- ES2018+
- Fetch API (or polyfill)
- AbortController (or polyfill)

## 📋 Requirements

- Node.js 16+
- TypeScript 4.5+ (for TypeScript projects)

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🤝 Support

- 📧 Email: [alex@trychannel3.com](mailto:alex@trychannel3.com)
- 🐛 Issues: [GitHub Issues](https://github.com/channel3/sdk-typescript/issues)
- 🌐 Website: [https://trychannel3.com](https://trychannel3.com)

---

Made with ❤️ by the Channel3 team
