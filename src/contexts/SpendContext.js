import React, { createContext, useReducer, useEffect, useContext } from 'react';
import { spendReducer } from '../reducers/SpendReducer';
import { api } from '../config/api/axios';
import { useAuthContext } from './AuthContext';

const SpendContext = createContext();

export function SpendContextProvider({ children }) {
  const [spends, dispatch] = useReducer(spendReducer, []);
  const { authInfo } = useAuthContext();
  useEffect(() => {
    async function fetchSpends() {
      try {
        const spendResponse = await api.get('/spends', {
          headers: {
            'x-auth-token': authInfo.userToken,
          },
        });
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

export const useSpendContext = useContext(SpendContext);
