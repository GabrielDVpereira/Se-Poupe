import React, { createContext, useReducer, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import { spendReducer } from '../reducers/SpendReducer';
import ProductStorageService from '../services/AsyncStorage/Products';

export const SpendContext = createContext();

export default function SpendContextProvider({ children }) {
  const [products, dispatch] = useReducer(spendReducer, []);

  async function fetchProducts() {
    const productsFromStorage = await ProductStorageService.getProducts();
    if (productsFromStorage) {
      dispatch({ products: productsFromStorage });
    } else {
      dispatch({ products: [] });
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const productStateManager = {
    async addProduct(product) {
      console.log(product);
      await ProductStorageService.saveProduct(product);
      dispatch({ products: [product, ...products] });
    },
  };
  return (
    <SpendContext.Provider value={{ products, productStateManager }}>
      {children}
    </SpendContext.Provider>
  );
}
