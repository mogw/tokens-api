// src/routes/v1/tokenRoutes.ts
import { Router } from 'express';
import * as tokenController from '../../controllers/tokenController';
import { validateTokenCreate } from '../../validators/tokenValidators';

// Create a new router
const router = Router();

// Define the token routes
router.post('/', validateTokenCreate, tokenController.createToken);
router.get('/:id', tokenController.getToken);

export default router;
