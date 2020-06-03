import React, { createContext, useReducer, useEffect } from 'react';
import { spendReducer } from '../reducers/SpendReducer';
import { api } from '../config/api/axios';

export const SpendContext = createContext();

export default function SpendContextProvider({ children }) {
  const [spends, dispatch] = useReducer(spendReducer, []);
  useEffect(() => {
    async function fetchSpends() {
      try {
        const spendResponse = await api.get('/spends');
        dispatch({ spends: spendResponse.data.response });
      } catch (error) {
        console.error(error.response.data);
      }
    }
    fetchSpends();
  }, []);
  return (
    <SpendContext.Provider value={{ spends, dispatch }}>
      {children}
    </SpendContext.Provider>
  );
}
