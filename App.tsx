/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme, PaperProvider } from 'react-native-paper';
import Navigation from './src/Navigation/Navigation';

function App(): JSX.Element {
  return (
      <NavigationContainer >
        <PaperProvider>
          <Navigation />
        </PaperProvider>
      </NavigationContainer>
  );
}


export default App;
