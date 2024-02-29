// app.ts
import "reflect-metadata";
import express, { Express, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";

import { errorHandler } from './middleware/errorHandler';
import { ApiError } from "./utils/ApiError";
import v1Routes from './routes/v1';

const app: Express = express();
app.use(bodyParser.json());

// Use versioned routes
app.use('/api/v1', v1Routes);

// Handle requests where the API endpoint is not found
app.use((req: Request, res: Response, next: NextFunction) => {
    // Create a new ApiError with status code 404 and message 'API Not Found'
    const error = new ApiError(404, 'API Not Found');
    // Forward this error to the error handling middleware
    next(error);
});

// Use the error handling middleware
app.use(errorHandler);

export default app;
