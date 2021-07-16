import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { StackNavigator } from "./stacks";

const Routes = () => {

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

export { Routes }