import { getProductsController } from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

import { Router } from 'express';

const router = Router();

router.get('/products', ctrlWrapper(getProductsController));

export default router;
