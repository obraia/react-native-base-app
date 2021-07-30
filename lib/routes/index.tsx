import 'react-native-gesture-handler';

import React from "react";
import { StatusBar } from "react-native";
import { useSelector } from "react-redux";
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StackNavigator } from "./stacks";
import { RootState } from "../store";

const Routes = () => {

  const { theme } = useSelector((state: RootState) => state.theme);

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider style={{ backgroundColor: theme.colors.background }}>
        <StatusBar
          backgroundColor={theme.colors.header}
          barStyle={theme.title === 'light' ? 'dark-content' : 'light-content'} />
        <NavigationContainer theme={theme as any}>
          <StackNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}

export { Routes }