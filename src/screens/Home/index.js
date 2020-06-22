import React, { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Animated, TouchableOpacity, View } from 'react-native';
import { RnContainer, Container, Content, NewItemButton } from './styles';
import Card from '../../components/Card';
import HomeHeader from '../../components/HomeHeader';
import NewItemModal from '../../components/modals/NewItem';
import ItemDeailModal from '../../components/modals/ItemDeailModal';

const scrollOffsetY = new Animated.Value(0);
const headerOffset = Animated.diffClamp(scrollOffsetY, 0, 250);
const containerScale = new Animated.Value(1);
const AnimatedContainer = Animated.createAnimatedComponent(Container);

export default function HomeScreen({ navigation }) {
  const [newItemModalVisible, setNewItemModalVisible] = useState(false);
  const [itemDetailModalVisible, setItemDetailModalVisible] = useState(false);
  useEffect(() => {
    if (itemDetailModalVisible) {
      Animated.timing(containerScale, {
        toValue: 0.8,
        duration: 200,
      }).start();
    } else {
      Animated.timing(containerScale, {
        toValue: 1,
        duration: 200,
      }).start();
    }
  }, [itemDetailModalVisible]);

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
    <RnContainer>
      <AnimatedContainer style={{ transform: [{ scale: containerScale }] }}>
        <HomeHeader headerOffset={headerOffset} />

        <Content
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: scrollOffsetY } } },
          ])}
        >
          {items.map(item => (
            <TouchableOpacity onPress={() => setItemDetailModalVisible(true)}>
              <Card spend={item} />
            </TouchableOpacity>
          ))}
        </Content>
        <NewItemButton onPress={() => setNewItemModalVisible(true)}>
          <AntDesign name="pluscircle" size={50} color="#26dd78" />
        </NewItemButton>
        <NewItemModal
          modalVisible={newItemModalVisible}
          showModal={setNewItemModalVisible}
        />
        <ItemDeailModal
          visible={itemDetailModalVisible}
          setVisible={setItemDetailModalVisible}
        />
      </AnimatedContainer>
    </RnContainer>
  );
}
