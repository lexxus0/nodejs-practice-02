import {
  createProductsController,
  getProductByIdController,
  getProductsController,
  updateProductController,
} from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

import { Router } from 'express';

const router = Router();

router.get('/products', ctrlWrapper(getProductsController));

router.get('/products/:productId', ctrlWrapper(getProductByIdController));

router.post('/products', ctrlWrapper(createProductsController));

router.patch('/products/:productId', ctrlWrapper(updateProductController));

export default router;
