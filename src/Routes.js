import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './screens/Splash';
import HomeScreen from './screens/Home';
import CategoryScreen from './screens/Category/Main';
import CategoryDetailsScreen from './screens/Category/Details';
import SettingsScreen from './screens/Settings';
import SummaryScreen from './screens/Summary/Main';
import SummaryDetailsScreen from './screens/Summary/Details';
import { SpendContextProvider } from './contexts/SpendContext';
import SignInScreen from './screens/Auth/SignIn';
import SignUpScreen from './screens/Auth/SignUp';
import { AuthContext } from './contexts/AuthContext';

const Drawer = createDrawerNavigator();
const SummaryStack = createStackNavigator();
const CategoryStack = createStackNavigator();
const authNavigationStack = createStackNavigator();

const SummaryNavigation = () => (
  <SummaryStack.Navigator initialRouteName="Summary">
    <SummaryStack.Screen
      name="Summary"
      component={SummaryScreen}
      options={{
        headerShown: false,
      }}
    />
    <SummaryStack.Screen
      name="SummaryDetails"
      component={SummaryDetailsScreen}
      options={{
        title: 'Details',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#6A0DAD',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'sans-serif',
        },
      }}
    />
  </SummaryStack.Navigator>
);

const categoryNavigation = () => (
  <CategoryStack.Navigator initialRouteName="category">
    <CategoryStack.Screen
      name="category"
      component={CategoryScreen}
      options={{
        headerShown: false,
      }}
    />
    <CategoryStack.Screen
      name="category details"
      component={CategoryDetailsScreen}
      options={{
        title: 'Details',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#6A0DAD',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'sans-serif',
        },
      }}
    />
  </CategoryStack.Navigator>
);

const AuthRoutes = ({ isLoading }) => {
  if (isLoading) {
    return <SplashScreen />;
  }
  return (
    <NavigationContainer>
      <authNavigationStack.Navigator>
        <authNavigationStack.Screen name="Sign In" component={SignInScreen} />
        <authNavigationStack.Screen name="Sign Up" component={SignUpScreen} />
      </authNavigationStack.Navigator>
    </NavigationContainer>
  );
};

const MainRoutes = () => {
  return (
    <NavigationContainer>
      <SpendContextProvider>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Category" component={categoryNavigation} />
          <Drawer.Screen name="Summary" component={SummaryNavigation} />
          <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
      </SpendContextProvider>
    </NavigationContainer>
  );
};

export const Routes = () => {
  const { authInfo } = useContext(AuthContext);
  return authInfo.userToken ? (
    <MainRoutes />
  ) : (
    <AuthRoutes isLoading={authInfo.isLoading} />
  );
};
