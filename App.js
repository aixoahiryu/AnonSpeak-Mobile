import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import AppContainer, {MessengerAppContainer, TabContainer} from './src/nav/nav';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#0084ff',
        accent: '#f1c40f',
        background: '#f9f9f9',
        paper: 'white'
    }
};



export default function App() {
  return (
  		// <AppContainer />
  		<TabContainer />
  );
}