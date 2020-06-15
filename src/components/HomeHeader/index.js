import React from 'react';
import { Animated } from 'react-native';
import {
  Header,
  Title,
  Total,
  SpendProgressBar,
  Available,
  Unavailable,
  Progress,
  TotalContainer,
} from './styles';

const AnimatedHeader = Animated.createAnimatedComponent(Header);
const AnimatedTotalContainer = Animated.createAnimatedComponent(TotalContainer);
export default function HomeHeader({ headerOffset }) {
  return (
    <AnimatedHeader
      style={{
        transform: [
          {
            translateY: headerOffset.interpolate({
              inputRange: [0, 250],
              outputRange: [0, -120],
              extrapolate: 'clamp',
            }),
          },
        ],
        borderBottomLeftRadius: headerOffset.interpolate({
          inputRange: [100, 250],
          outputRange: [20, 0],
          extrapolate: 'clamp',
        }),
        borderBottomRightRadius: headerOffset.interpolate({
          inputRange: [100, 250],
          outputRange: [20, 0],
          extrapolate: 'clamp',
        }),
      }}
    >
      <AnimatedTotalContainer
        style={{
          opacity: headerOffset.interpolate({
            inputRange: [100, 250],
            outputRange: [1, 0],
            extrapolate: 'clamp',
          }),
        }}
      >
        <Title>Gasto total</Title>
        <Total>R$ 1000,00</Total>
        <SpendProgressBar>
          <Available />
          <Unavailable />
          <Progress>1000/5000</Progress>
        </SpendProgressBar>
      </AnimatedTotalContainer>
    </AnimatedHeader>
  );
}
