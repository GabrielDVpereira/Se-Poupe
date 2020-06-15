import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Animated } from 'react-native';
import { Container, Content, NewItemButton } from './styles';
import Card from '../../components/Card';
import HomeHeader from '../../components/HomeHeader';
import NewItemModal from '../../components/modals/NewItem';

const scrollOffsetY = new Animated.Value(0);
const headerOffset = Animated.diffClamp(scrollOffsetY, 0, 250);

export default function HomeScreen({ navigation }) {
  const [newItemModalVisible, setNewItemModalVisible] = useState(false);

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
      <NewItemButton onPress={() => setNewItemModalVisible(true)}>
        <AntDesign name="pluscircle" size={50} color="#26dd78" />
      </NewItemButton>
      <NewItemModal
        modalVisible={newItemModalVisible}
        showModal={setNewItemModalVisible}
      />
    </Container>
  );
}
