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
} from './styles';
import Card from '../../components/Card';

const scrollOffsetY = new Animated.Value(0);
const headerOffset = Animated.diffClamp(scrollOffsetY, 0, 250);
const AnimatedHeader = Animated.createAnimatedComponent(Header);

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
      <AnimatedHeader
        headerOffset={headerOffset}
        style={{
          transform: [
            {
              translateY: headerOffset.interpolate({
                inputRange: [0, 250],
                outputRange: [0, -250],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}
      >
        <NavigationIcon onPress={() => navigation.openDrawer()}>
          <SimpleLineIcons name="menu" size={24} color="#fff" />
        </NavigationIcon>
        <TotalContainer>
          <Title>Total Spent</Title>
          <Total>R$ 1000,00</Total>
          <SpendProgressBar>
            <Available />
            <Unavailable />
            <Progress>1000/5000</Progress>
          </SpendProgressBar>
        </TotalContainer>
        <FilterIcon onPress={() => console.log('settings')}>
          <FontAwesome name="filter" size={24} color="#fff" />
        </FilterIcon>
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
