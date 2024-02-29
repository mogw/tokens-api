import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

// Validate token creation request
export const validateTokenCreate = [
  body('name').notEmpty().withMessage('Name is required'),
  body('ticker').notEmpty().withMessage('Ticker is required'),
  body('description').notEmpty().withMessage('Description is required'),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
