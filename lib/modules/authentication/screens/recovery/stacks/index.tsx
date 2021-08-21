import React from "react";
import { CardStyleInterpolators, createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { Initial } from "../initial";
import { NewPasword } from "../newPassword";
import { RecoveryCode } from "../code";

const Stack = createStackNavigator();

const RecoveryNavigator = () => {

  const screenOptions: StackNavigationOptions = {
    headerShown: false,
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
  }

  return (
    <Stack.Navigator screenOptions={screenOptions} headerMode='float'>
      <Stack.Screen name="Initial" component={Initial} />
      <Stack.Screen name="NewPasword" component={NewPasword} />
      <Stack.Screen name="RecoveryCode" component={RecoveryCode} />
    </Stack.Navigator>
  )
}

export { RecoveryNavigator }