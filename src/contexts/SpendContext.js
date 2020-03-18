import React, { createContext, useReducer, useEffect } from 'react';
import { spendReducer } from '../reducers/SpendReducer';
import { api } from '../config/api/axios';

export const SpendContext = createContext();

export function SpendContextProvider(props) {
  const [spends, dispatch] = useReducer(spendReducer, []);
  useEffect(() => {
    async function fetchSpends() {
      try {
        const spendResponse = await api.get('/spend');
        dispatch({ type: 'ADD_SPEND', spend: spendResponse.data.response });
      } catch (error) {
        console.error(error);
      }
    }
    fetchSpends();
  }, []);
  console.log(spends);
  return (
    <SpendContext.Provider value={{ spends, dispatch }}>
      {props.children}
    </SpendContext.Provider>
  );
}
