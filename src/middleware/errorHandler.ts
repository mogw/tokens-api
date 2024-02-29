// src/middleware/errorHandler.ts
import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../utils/ApiError';

// Custom error handling middleware
export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  if (err instanceof ApiError) {
    res.status(err.statusCode).json({ message: err.message });
  } else {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
