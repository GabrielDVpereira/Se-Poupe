import React, { createContext, useReducer, useEffect, useState } from 'react';
import { spendReducer } from '../reducers/SpendReducer';
import ProductStorageService from '../services/AsyncStorage/Products';
import DefaultProducts from '../utils/products';

export const SpendContext = createContext();

export default function SpendContextProvider({ children }) {
  const [products, dispatch] = useReducer(spendReducer, []);
  const [totalSpent, setTotalSpent] = useState(0);
  const spendLimit = 10000;

  async function fetchProducts() {
    const productsFromStorage = await ProductStorageService.getProducts();
    if (productsFromStorage?.length) {
      dispatch({ products: [...productsFromStorage, ...DefaultProducts] });
    } else {
      dispatch({ products: DefaultProducts });
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
    async filterProducts(price, category, date) {
      const filterRules = { price, category, date };
      const productsToFilter = products;
      const productsFilterd = ProductStorageService.filter(
        productsToFilter,
        filterRules
      );
      dispatch({ products: productsFilterd });
    },
    async clearFilter() {
      const productsFromStorage = await ProductStorageService.getProducts();
      dispatch({ products: productsFromStorage });
    },
    clearProdductList() {
      ProductStorageService.clearList();
      dispatch({ type: 'CLEAR' });
    },
  };
  return (
    <SpendContext.Provider
      value={{
        products,
        productStateManager,
        totalSpent,
        spendLimit,
        hasProducts: products.length > 0,
      }}
    >
      {children}
    </SpendContext.Provider>
  );
}
