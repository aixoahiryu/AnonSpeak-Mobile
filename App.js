import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from 'src/nav/nav';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
        <AppContainer />
  );
}