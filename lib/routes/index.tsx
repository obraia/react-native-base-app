import React from "react";
import { StatusBar } from "react-native";
import { useSelector } from "react-redux";
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { StackNavigator } from "./stacks";
import { RootState } from "../store";

const Routes = () => {

  const { theme } = useSelector((state: RootState) => state.theme);

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor={theme.colors.header}
        barStyle={theme.title === 'light' ? 'dark-content' : 'light-content'} />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </ThemeProvider>
  )
}

export { Routes }