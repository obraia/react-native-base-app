import React from "react";
import { CardStyleInterpolators, createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { Settings } from "../screens/initial/index";
import { Notifications } from "../screens/notifications";
import { Apparence } from "../screens/apparence";
import { About } from "../screens/about";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { Storage } from "../screens/storage";

const Stack = createStackNavigator();

const SettingsNavigator = () => {

  const { theme } = useSelector((state: RootState) => state.theme);

  const screenOptions: StackNavigationOptions = {
    headerStyle: {
      backgroundColor: theme.colors.header,
      shadowColor: 'transparent',
    },
    headerTintColor: theme.colors.textHeader,
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
  }

  return (
    <Stack.Navigator screenOptions={screenOptions} headerMode='float'>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Apparence" component={Apparence} />
      <Stack.Screen name="Storage" component={Storage} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  )
}

export { SettingsNavigator }