import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { Settings } from "../screens/initial/index";
import { Notifications } from "../screens/notifications";
import { Apparence } from "../screens/apparence";
import { About } from "../screens/about";

const Stack = createStackNavigator();

const SettingsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Apparence" component={Apparence} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  )
}

export { SettingsNavigator }