import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SummaryScreen from '../screens/Summary/Main';
import SummaryDetailsScreen from '../screens/Summary/Details';

const SummaryStack = createStackNavigator();

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
export default SummaryNavigation;
