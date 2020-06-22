import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../contexts/AuthContext';
import MainRoutes from './main.routes';
import AuthRoutes from './auth.routes';

const Routes = () => {
  const { authInfo } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {/* {authInfo.userToken ? (
        <MainRoutes />
      ) : (
        <AuthRoutes isLoading={authInfo.isLoading} />
      )} */}
      <MainRoutes />
    </NavigationContainer>
  );
};

export default Routes;
