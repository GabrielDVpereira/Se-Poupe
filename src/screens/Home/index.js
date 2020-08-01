import React, { useState, useContext } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Animated, TouchableOpacity } from 'react-native';
import { RnContainer, Container, Content, NewItemButton } from './styles';
import Card from '../../components/Card';
import HomeHeader from '../../components/HomeHeader';
import NewItemModal from '../../components/modals/NewItem';
import ItemDeailModal from '../../components/modals/ItemDeailModal';
import { SpendContext } from '../../contexts/SpendContext';

const scrollOffsetY = new Animated.Value(0);
const headerOffset = Animated.diffClamp(scrollOffsetY, 0, 250);

export default function HomeScreen() {
  const [newItemModalVisible, setNewItemModalVisible] = useState(false);
  const [itemDetailModalVisible, setItemDetailModalVisible] = useState(false);
  const [productSelected, setProductSelected] = useState(null);
  const { products } = useContext(SpendContext);

  function showProductDetailModal(product) {
    setProductSelected(product);
    setItemDetailModalVisible(true);
  }

  function renderItemDetailModal() {
    if (productSelected) {
      return (
        <ItemDeailModal
          product={productSelected}
          visible={itemDetailModalVisible}
          setVisible={setItemDetailModalVisible}
        />
      );
    }
  }

  return (
    <RnContainer>
      <Container>
        <HomeHeader headerOffset={headerOffset} />
        <Content
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
            { useNativeDriver: false }
          )}
        >
          {products.map(product => (
            <TouchableOpacity
              key={product.id}
              onPress={() => showProductDetailModal(product)}
            >
              <Card spend={product} />
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
        {renderItemDetailModal()}
      </Container>
    </RnContainer>
  );
}
