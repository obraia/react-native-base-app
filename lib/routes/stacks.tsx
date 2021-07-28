import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { AuthNavigator } from "../modules/authentication/stacks";
import { TabNavigator } from "./tabs";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={{ headerShown: false }}
      headerMode='float'>
      <Stack.Screen name="Auth" component={AuthNavigator} />
      <Stack.Screen name="Tabs" component={TabNavigator} />
    </Stack.Navigator>
  )
}

export { StackNavigator }