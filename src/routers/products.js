import {
  getProductByIdController,
  getProductsController,
} from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

import { Router } from 'express';

const router = Router();

router.get('/products', ctrlWrapper(getProductsController));

router.get('/products/:productId', ctrlWrapper(getProductByIdController));

export default router;
