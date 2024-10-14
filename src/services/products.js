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

export const updateProduct = async (productId, payload) => {
  const updateProduct = await collectionProducts.findOneAndUpdate(
    { _id: productId },
    payload,
    { new: true },
  );

  return updateProduct;
};

export const deleteProduct = async (productId) => {
  const product = await collectionProducts.findOneAndDelete({ _id: productId });
  return product;
};
