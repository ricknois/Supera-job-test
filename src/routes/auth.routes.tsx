import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from '../global/styles/theme';

import { SignIn } from '../screens/SignIn';
import { Home } from '../screens/Home';
import { ProductDetails } from '../screens/ProductDetails';
import { Cart } from '../screens/Cart';

const { Navigator, Screen } = createStackNavigator();


export function AuthRoutes() {
  return(
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary100
        }
      }}
    >
      <Screen
        name="SignIn"
        component={SignIn}
      />
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="Details"
        component={ProductDetails}
      />
      <Screen
        name="Cart"
        component={Cart}
      />
    </Navigator>
  );
};