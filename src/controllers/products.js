import createHttpError from 'http-errors';
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
} from '../services/products.js';

export const getProductsController = async (req, res) => {
  const products = await getAllProducts();
  res.status(200).json({
    status: 200,
    message: 'Successfully found products!',
    data: products,
  });
};

export const getProductByIdController = async (req, res) => {
  const { productId } = req.params;
  const product = await getProductById(productId);

  if (product === null) {
    throw createHttpError(404, 'Product not found.');
  }

  res.status(200).send({
    status: 200,
    message: `Successfully found product with id ${productId}!`,
    data: product,
  });
};

export const createProductsController = async (req, res) => {
  const product = await createProduct(req.body);
  res.status(201).send({
    status: 201,
    message: 'Successfully created a product!',
    data: product,
  });
};

export const updateProductController = async (req, res, next) => {
  const { productId } = req.params;
  const payload = req.body;
  const newProduct = await updateProduct(productId, payload);

  if (!newProduct) {
    throw createHttpError(404, 'Product not found.');
  }

  res.status(200).json({
    status: 200,
    message: 'Successfully patched a product!',
    data: newProduct,
  });
};
