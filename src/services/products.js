import { collectionProducts } from '../models/products.js';

export const getAllProducts = async () => {
  const products = await collectionProducts.find();
  return products;
};

export const getProductById = async (productId) => {
  return await collectionProducts.findOne({ _id: productId });
};

export const createProduct = async (payload) => {
  const product = await collectionProducts.create(payload);
  return product;
};
