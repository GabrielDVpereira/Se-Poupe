import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CategoryScreen from '../screens/Category/Main';
import CategoryDetailsScreen from '../screens/Category/Details';

const CategoryStack = createStackNavigator();

const CategoryNavigation = () => (
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

export default CategoryNavigation;
