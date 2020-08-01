import React, { createContext, useReducer, useEffect, useState } from 'react';
import { spendReducer } from '../reducers/SpendReducer';
import ProductStorageService from '../services/AsyncStorage/Products';

export const SpendContext = createContext();

export default function SpendContextProvider({ children }) {
  const [products, dispatch] = useReducer(spendReducer, []);
  const [totalSpent, setTotalSpent] = useState(0);
  const spendLimit = 10000;

  async function fetchProducts() {
    const productsFromStorage = await ProductStorageService.getProducts();
    if (productsFromStorage) {
      dispatch({ products: productsFromStorage });
    } else {
      dispatch({ products: [] });
    }
  }

  function calculateTotalSpend() {
    const totalProductsPrice = products.reduce(
      (total, product) => Number(product.price) + total,
      0
    );
    setTotalSpent(totalProductsPrice);
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  useEffect(() => {
    calculateTotalSpend();
  }, [products]);

  const productStateManager = {
    async addProduct(product) {
      await ProductStorageService.saveProduct(product);
      dispatch({ products: [product, ...products] });
    },
    async deleteProduct(product) {
      await ProductStorageService.removeProduct(product);
      const newProductList = products.filter(
        productFromState => productFromState.id !== product.id
      );
      dispatch({ products: newProductList });
    },
  };
  return (
    <SpendContext.Provider
      value={{ products, productStateManager, totalSpent, spendLimit }}
    >
      {children}
    </SpendContext.Provider>
  );
}
