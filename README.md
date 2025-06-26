# Channel3 TypeScript/JavaScript SDK

The official TypeScript/JavaScript SDK for the [Channel3](https://trychannel3.com) AI Shopping API.

## Installation

```bash
npm install channel3-sdk
# or
yarn add channel3-sdk
# or
pnpm add channel3-sdk
```

## Quick Start

### ES Modules / TypeScript

```typescript
import { Channel3Client } from 'channel3-sdk';

// Initialize the client
const client = new Channel3Client({
  apiKey: "your_api_key_here"
});

// Search for products
const products = await client.search({ query: "blue denim jacket" });

for (const product of products) {
  console.log(`Product: ${product.title}`);
  console.log(`Brand: ${product.brand_name}`);
  console.log(`Price: $${product.offers[0].price.price}`);
  console.log("---");
}

// Get detailed product information
const productDetail = await client.getProduct("prod_123456");
console.log(`Detailed info for: ${productDetail.title}`);
console.log(`Materials: ${productDetail.materials}`);
console.log(`Key features: ${productDetail.key_features}`);
```

### CommonJS / Node.js

```javascript
const { Channel3Client } = require('channel3-sdk');

async function main() {
  // Initialize the client
  const client = new Channel3Client({
    apiKey: "your_api_key_here"
  });
  
  // Search for products
  const products = await client.search({ query: "running shoes" });
  
  for (const product of products) {
    console.log(`Product: ${product.title}`);
    console.log(`Score: ${product.score}`);
  }
  
  // Get detailed product information
  if (products.length > 0) {
    const productDetail = await client.getProduct(products[0].id);
    console.log(`Gender: ${productDetail.gender}`);
  }
}

main().catch(console.error);
```

## Advanced Usage

### Visual Search

```typescript
// Search by image URL
const products = await client.search({ 
  imageUrl: "https://example.com/image.jpg" 
});

// Search by base64 image
const fs = require('fs');
const imageBuffer = fs.readFileSync('image.jpg');
const base64Image = imageBuffer.toString('base64');
const products2 = await client.search({ 
  base64Image: base64Image 
});
```

### Multimodal Search

```typescript
// Combine text and image search
const products = await client.search({
  query: "blue denim jacket",
  imageUrl: "https://example.com/jacket.jpg"
});
```

### Search with Filters

```typescript
import { SearchFilters } from 'channel3-sdk';

// Create search filters
const filters: SearchFilters = {
  colors: ["blue", "navy"],
  materials: ["cotton", "denim"],
  min_price: 50.0,
  max_price: 200.0
};

// Search with filters
const products = await client.search({
  query: "jacket",
  filters: filters,
  limit: 10
});
```

### Environment Variable Configuration

```typescript
// Set CHANNEL3_API_KEY environment variable
process.env.CHANNEL3_API_KEY = "your_api_key_here";

// Client will automatically use the environment variable
const client = new Channel3Client({});
```

### Custom Configuration

```typescript
const client = new Channel3Client({
  apiKey: "your_api_key_here",
  baseUrl: "https://api.trychannel3.com/v0", // Custom base URL
  timeout: 60000, // 60 second timeout
});
```

## API Reference

### Client Class

#### `Channel3Client`

**Constructor Options:**
```typescript
interface Channel3ClientConfig {
  apiKey: string; // Your Channel3 API key
  baseUrl?: string; // Base URL (default: https://api.trychannel3.com/v0)
  timeout?: number; // Timeout in milliseconds (default: 30000)
}
```

**Methods:**
- `search(options: SearchOptions): Promise<Product[]>` - Search for products
- `getProduct(productId: string): Promise<ProductDetail>` - Get product details

### Search Options

```typescript
interface SearchOptions {
  query?: string; // Text search query
  imageUrl?: string; // URL of image for visual search
  base64Image?: string; // Base64-encoded image for visual search
  filters?: SearchFilters; // Search filters
  limit?: number; // Maximum number of results (default: 20)
}
```

### Type Definitions

#### `Product`
```typescript
interface Product {
  id: string; // Unique product identifier
  score: number; // Search relevance score
  brand_name: string; // Brand name
  title: string; // Product title
  description: string; // Product description
  image_url: string; // Main product image URL
  offers: MerchantOffering[]; // Available purchase options
  family: FamilyMember[]; // Related products
}
```

#### `ProductDetail`
```typescript
interface ProductDetail {
  brand_id: string; // Brand identifier
  brand_name: string; // Brand name
  title: string; // Product title
  description: string; // Product description
  image_urls: string[]; // Product image URLs
  merchant_offerings: MerchantOffering[]; // Purchase options
  gender: "na" | "men" | "women"; // Target gender
  materials?: string[] | null; // Product materials
  key_features: string[]; // Key product features
  family_members: FamilyMember[]; // Related products
}
```

#### `SearchFilters`
```typescript
interface SearchFilters {
  colors?: string[] | null; // Color filters
  materials?: string[] | null; // Material filters
  min_price?: number | null; // Minimum price
  max_price?: number | null; // Maximum price
}
```

#### `MerchantOffering`
```typescript
interface MerchantOffering {
  url: string; // Purchase URL
  merchant_name: string; // Merchant name
  price: Price; // Price information
  availability: AvailabilityStatus; // Availability status
}
```

#### `Price`
```typescript
interface Price {
  price: number; // Current price
  compare_at_price?: number | null; // Original price (if discounted)
  currency: string; // Currency code
}
```

## Error Handling

The SDK provides specific exception types for different error conditions:

```typescript
import {
  Channel3AuthenticationError,
  Channel3ValidationError,
  Channel3NotFoundError,
  Channel3ServerError,
  Channel3ConnectionError
} from 'channel3-sdk';

try {
  const products = await client.search({ query: "shoes" });
} catch (error) {
  if (error instanceof Channel3AuthenticationError) {
    console.error("Invalid API key");
  } else if (error instanceof Channel3ValidationError) {
    console.error("Invalid request:", error.message);
  } else if (error instanceof Channel3NotFoundError) {
    console.error("Resource not found");
  } else if (error instanceof Channel3ServerError) {
    console.error("Server error - please try again later");
  } else if (error instanceof Channel3ConnectionError) {
    console.error("Connection error - check your internet connection");
  }
}
```

## Browser Support

This SDK works in both Node.js and modern browsers that support:
- ES2018+
- Fetch API (or polyfill)
- AbortController (or polyfill)

For older browsers, you may need polyfills for `fetch` and `AbortController`.

## Environment Variables

- `CHANNEL3_API_KEY` - Your Channel3 API key

## Requirements

- Node.js 16+ (for Node.js environments)
- Modern browser with ES2018+ support

## License

MIT License