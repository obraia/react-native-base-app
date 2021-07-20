import React from "react";
import { CardStyleInterpolators, createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { Home } from "../screens/initial/index";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const Stack = createStackNavigator();

const HomeNavigator = () => {

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
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

export { HomeNavigator }