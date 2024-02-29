// src/routes/v1/index.ts
import { Router } from 'express';
import tokenRoutes from './tokenRoutes';

// Create a new router
const router = Router();

// Use the token routes
router.use('/tokens', tokenRoutes);

export default router;
