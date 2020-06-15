import React, { useEffect } from 'react';
import { SimpleLineIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { Animated } from 'react-native';
import {
  Container,
  Header,
  NavigationIcon,
  Title,
  Total,
  SpendProgressBar,
  Available,
  Unavailable,
  Progress,
  Content,
  FilterIcon,
  TotalContainer,
  NewItemButton,
  AppName,
} from './styles';
import Card from '../../components/Card';

const scrollOffsetY = new Animated.Value(0);
const headerOffset = Animated.diffClamp(scrollOffsetY, 0, 250);
const AnimatedHeader = Animated.createAnimatedComponent(Header);
const AnimatedTotalContainer = Animated.createAnimatedComponent(TotalContainer);
const AnimatedAppName = Animated.createAnimatedComponent(AppName);

export default function HomeScreen({ navigation }) {
  useEffect(() => {}, []);
  const items = [
    {
      name: 'Led Tv',
      price: '100',
      data: '17/02/1999',
      category: 'Mercado',
    },
    {
      name: 'Led Tv',
      price: '100',
      data: '17/02/1999',
      category: 'Mercado',
    },
    {
      name: 'Led Tv',
      price: '100',
      data: '17/02/1999',
      category: 'Compras',
    },
    {
      name: 'Led Tv',
      price: '100',
      data: '17/02/1999',
      category: 'Compras',
    },
    {
      name: 'Led Tv',
      price: '100',
      data: '17/02/1999',
      category: 'Compras',
    },
    {
      name: 'Led Tv',
      price: '100',
      data: '17/02/1999',
      category: 'Compras',
    },
    {
      name: 'Led Tv',
      price: '100',
      data: '17/02/1999',
      category: 'Compras',
    },
    {
      name: 'Led Tv',
      price: '100',
      data: '17/02/1999',
      category: 'Compras',
    },
    {
      name: 'Led Tv',
      price: '100',
      data: '17/02/1999',
      category: 'Compras',
    },
  ];
  return (
    <Container>
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
        headerOffset={headerOffset}
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
          <Title>Total spent</Title>
          <Total>R$ 1000,00</Total>
          <SpendProgressBar>
            <Available />
            <Unavailable />
            <Progress>1000/5000</Progress>
          </SpendProgressBar>
        </AnimatedTotalContainer>
      </AnimatedHeader>

      <Content
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: scrollOffsetY } } },
        ])}
      >
        {items.map(item => (
          <Card spend={item} />
        ))}
      </Content>
      <NewItemButton>
        <AntDesign name="pluscircle" size={50} color="#26dd78" />
      </NewItemButton>
    </Container>
  );
}
