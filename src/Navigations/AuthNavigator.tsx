import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import {SigninScreen} from 'Screens/index';
import useAuthNavigator from './Hooks/UseAuthNavigator';

const Stack = createStackNavigator();

function AuthStack() {
  const { done } = useAuthNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Signin"
        component={SigninScreen}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
