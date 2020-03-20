import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import CategoryScreen from './screens/CategoryScreen';
import CategoryDetailsScreen from './screens/CategoryDetailsScreen';
import SettingsScreen from './screens/SettingsScreen';
import SummaryScreen from './screens/SummaryScreen';
import SummaryDetailsScreen from './screens/SummaryDetailsScreen';
import { SpendContextProvider } from './contexts/SpendContext';

const Drawer = createDrawerNavigator();
const SummaryStack = createStackNavigator();
const CategoryStack = createStackNavigator();

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

export const Routes = () => {
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
