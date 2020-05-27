import React from 'react';
import LottieView from 'lottie-react-native';
import { View } from 'react-native';
import styles from './styles';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/envelope.json')}
        autoPlay
        loop
      />
    </View>
  );
}
