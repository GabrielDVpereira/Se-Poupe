import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Routes } from './src/Routes';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
