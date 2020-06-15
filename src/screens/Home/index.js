import React, { useState } from 'react';
import { SimpleLineIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { Animated } from 'react-native';
import {
  Container,
  NavigationIcon,
  Content,
  FilterIcon,
  NewItemButton,
  AppName,
} from './styles';
import Card from '../../components/Card';
import HomeHeader from '../../components/HomeHeader';

const scrollOffsetY = new Animated.Value(0);
const headerOffset = Animated.diffClamp(scrollOffsetY, 0, 250);

const AnimatedAppName = Animated.createAnimatedComponent(AppName);

export default function HomeScreen({ navigation }) {
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
      <HomeHeader headerOffset={headerOffset} />

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
