/**
 * Custom error classes for the Channel3 SDK
 */

export class Channel3Error extends Error {
  public readonly statusCode?: number;
  public readonly responseData?: any;

  constructor(message: string, statusCode?: number, responseData?: any) {
    super(message);
    this.name = "Channel3Error";
    this.statusCode = statusCode;
    this.responseData = responseData;
  }
}

export class Channel3AuthenticationError extends Channel3Error {
  constructor(message: string = "Invalid or missing API key", statusCode?: number, responseData?: any) {
    super(message, statusCode, responseData);
    this.name = "Channel3AuthenticationError";
  }
}

export class Channel3ValidationError extends Channel3Error {
  constructor(message: string, statusCode?: number, responseData?: any) {
    super(message, statusCode, responseData);
    this.name = "Channel3ValidationError";
  }
}

export class Channel3NotFoundError extends Channel3Error {
  constructor(message: string, statusCode?: number, responseData?: any) {
    super(message, statusCode, responseData);
    this.name = "Channel3NotFoundError";
  }
}

export class Channel3ServerError extends Channel3Error {
  constructor(message: string = "Internal server error", statusCode?: number, responseData?: any) {
    super(message, statusCode, responseData);
    this.name = "Channel3ServerError";
  }
}

export class Channel3ConnectionError extends Channel3Error {
  constructor(message: string, statusCode?: number, responseData?: any) {
    super(message, statusCode, responseData);
    this.name = "Channel3ConnectionError";
  }
} 