// src/controllers/tokenController.ts
import { Request, Response } from 'express';
import * as tokenService from '../services/tokenService';
import { ApiError } from '../utils/ApiError';
import { catchAsync } from '../utils/catchAsync';

// Create a new token
export const createToken = catchAsync(async (req: Request, res: Response) => {
  const { name, ticker, description } = req.body;

  try {
    const token = await tokenService.createToken(name, ticker, description);
    res.json(token);
  } catch (error: any) {
    if (error.code === '23505') { // PostgreSQL unique violation error code
      res.status(400).json({ message: "Name or Ticker already exists." });
    } else {
      res.status(500).json({ message: "Internal server error." });
    }
  }
});

// Get a token by ID
export const getToken = catchAsync(async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    throw new ApiError(400, 'Invalid ID');
  }

  const token = await tokenService.getTokenById(id);
  if (!token) {
    throw new ApiError(404, 'Token not found');
  }
  res.json(token);
});
