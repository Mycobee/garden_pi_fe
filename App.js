import React from 'react';
import Home from './screens/Home';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#73A686',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
