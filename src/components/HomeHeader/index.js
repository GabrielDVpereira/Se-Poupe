import React from 'react';
import { Animated } from 'react-native';
import { SimpleLineIcons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  Header,
  Title,
  Total,
  SpendProgressBar,
  Available,
  Unavailable,
  Progress,
  TotalContainer,
  NavigationIcon,
  FilterIcon,
  AppName,
} from './styles';

const AnimatedHeader = Animated.createAnimatedComponent(Header);
const AnimatedTotalContainer = Animated.createAnimatedComponent(TotalContainer);
const AnimatedAppName = Animated.createAnimatedComponent(AppName);

export default function HomeHeader({ headerOffset }) {
  const navigation = useNavigation();
  return (
    <>
      <NavigationIcon onPress={() => navigation.openDrawer()}>
        <SimpleLineIcons name="menu" size={24} color="#fff" />
      </NavigationIcon>
      <FilterIcon onPress={() => console.log('settings')}>
        <FontAwesome name="filter" size={24} color="#fff" />
      </FilterIcon>
      <AnimatedAppName
        style={{
          opacity: headerOffset.interpolate({
            inputRange: [100, 250],
            outputRange: [0, 1],
            extrapolate: 'clamp',
          }),
        }}
      >
        Se Poupe
      </AnimatedAppName>
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
    </>
  );
}
