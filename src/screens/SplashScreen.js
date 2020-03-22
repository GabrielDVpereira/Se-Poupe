import React from 'react';
import LottieView from 'lottie-react-native';
import { View, StyleSheet, Text } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <LottieView source={require('../assets/envelope.json')} autoPlay loop />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6A0DAD',
  },
});
