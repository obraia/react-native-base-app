import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { Splash } from "../modules/splash/screens";
import { TabNavigator } from "./tabs";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Tabs"
      screenOptions={{ headerShown: false }}
      headerMode='float'>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Tabs" component={TabNavigator} />
    </Stack.Navigator>
  )
}

export { StackNavigator }