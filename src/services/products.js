import { collectionProducts } from '../models/products.js';

export const getAllProducts = async () => {
  const products = await collectionProducts.find();
  return products;
};
