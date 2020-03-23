import React, { createContext, useReducer, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import AuthReducer from '../reducers/AuthReducer';
import { api } from '../config/api/axios';

export const AuthContext = createContext();

export function AuthContextProvider(props) {
  const [authInfo, dispatch] = useReducer(AuthReducer, {
    isLoading: true,
    isSignout: false,
    userToken: null,
  });

  useEffect(() => {
    async function getToken() {
      try {
        const token = await AsyncStorage.getItem('token');
        setTimeout(() => {
          dispatch({ type: 'RESTORE_TOKEN', token });
        }, 4000); // timer for the splash screen
      } catch (error) {
        console.log(error);
      }
    }

    getToken();
  }, []);

  const authAction = {
    async signIn(userCredentials) {
      try {
        dispatch({ type: 'SPLASH' });
        const respose = await api.post('/user/auth', userCredentials);
        const token = respose.headers['x-auth-token'];
        setTimeout(() => {
          dispatch({ type: 'SIGN_IN', token }); // wait 4 seconds for the splash and then renders the homepage
        }, 3000);

        await AsyncStorage.setItem('token', token);
      } catch (error) {
        console.error(error);
      }
    },
    async signOut() {
      dispatch({ type: 'SPLASH' });
      setTimeout(() => {
        dispatch({ type: 'SIGN_OUT' });
      }, 3000);
      await AsyncStorage.removeItem('token');
    },
    async signUp(userCredentials) {
      // regsiter route
      // save token to async storage
    },
  };
  return (
    <AuthContext.Provider value={{ authInfo, authAction }}>
      {props.children}
    </AuthContext.Provider>
  );
}