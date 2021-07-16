import React from 'react';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';
import { Routes } from './lib/routes';
import dark from './lib/shared/themes/dark';
import light from './lib/shared/themes/light';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  console.log(isDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? dark : light}>
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
