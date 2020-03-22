import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Routes } from './src/Routes';
import { AuthContextProvider } from './src/contexts/AuthContext';

export default function App() {
  return (
    <View style={styles.container}>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
