import React from 'react';
import LottieView from 'lottie-react-native';
import { View } from 'react-native';
import styles from './styles';

export default function SplashScreen() {
  const slashAnimation = require('../../assets/envelope.json');
  return (
    <View style={styles.container}>
      <LottieView source={slashAnimation} autoPlay loop />
    </View>
  );
}
