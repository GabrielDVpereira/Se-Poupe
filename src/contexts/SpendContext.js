import React, { createContext, useReducer, useEffect, useContext } from 'react';
import { spendReducer } from '../reducers/SpendReducer';
import { api } from '../config/api/axios';
import { AuthContext } from './AuthContext';

export const SpendContext = createContext();

export function SpendContextProvider(props) {
  const [spends, dispatch] = useReducer(spendReducer, []);
  const { authInfo } = useContext(AuthContext);
  useEffect(() => {
    async function fetchSpends() {
      try {
        const spendResponse = await api.get('/spend', {
          headers: {
            'x-auth-token': authInfo.userToken,
          },
        });
        dispatch({ spend: spendResponse.data.response });
      } catch (error) {
        console.error(error);
      }
    }
    fetchSpends();
  }, []);
  return (
    <SpendContext.Provider value={{ spends, dispatch }}>
      {props.children}
    </SpendContext.Provider>
  );
}
