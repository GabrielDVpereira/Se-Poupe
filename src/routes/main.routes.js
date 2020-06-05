import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/Home';
import SettingsScreen from '../screens/Settings';
import SpendContextProvider from '../contexts/SpendContext';
import categoryNavigation from './category.routes';
import SummaryNavigation from './summary.routes';

const Drawer = createDrawerNavigator();
const MainRoutes = () => {
  return (
    <SpendContextProvider>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Category" component={categoryNavigation} />
        <Drawer.Screen name="Summary" component={SummaryNavigation} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </SpendContextProvider>
  );
};

export default MainRoutes;
