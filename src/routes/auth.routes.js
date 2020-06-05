import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/Splash';
import SignInScreen from '../screens/Auth/SignIn';
import SignUpScreen from '../screens/Auth/SignUp';

const authNavigationStack = createStackNavigator();
const AuthRoutes = ({ isLoading }) => {
  if (isLoading) {
    return <SplashScreen />;
  }
  return (
    <authNavigationStack.Navigator>
      <authNavigationStack.Screen name="Sign In" component={SignInScreen} />
      <authNavigationStack.Screen name="Sign Up" component={SignUpScreen} />
    </authNavigationStack.Navigator>
  );
};

export default AuthRoutes;
