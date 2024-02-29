// src/utils/catchAsync.ts
import { Request, Response, NextFunction } from 'express';

// Asynchronous error handling wrapper
export const catchAsync = (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(fn(req, res, next)).catch((err) => next(err));
};
