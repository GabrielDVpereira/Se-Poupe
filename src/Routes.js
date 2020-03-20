import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import CategoryScreen from './screens/CategoryScreen';
import SettingsScreen from './screens/SettingsScreen';
import { SpendContextProvider } from './contexts/SpendContext';

const Drawer = createDrawerNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <SpendContextProvider>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Category" component={CategoryScreen} />
          <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
      </SpendContextProvider>
    </NavigationContainer>
  );
};
