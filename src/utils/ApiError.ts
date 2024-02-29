// src/utils/ApiError.ts

// Define a custom API error class
export class ApiError extends Error {
  statusCode: number;
  message: string;

  constructor(statusCode: number, message: string) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}
