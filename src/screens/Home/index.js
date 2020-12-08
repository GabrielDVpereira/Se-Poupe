import React, { useState, useContext } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Animated, TouchableOpacity, Text, View, Image } from 'react-native';
import { RnContainer, Container, Content, NewItemButton } from './styles';
import Card from '../../components/Card';
import HomeHeader from '../../components/HomeHeader';
import NewItemModal from '../../components/modals/NewItem';
import ItemDeailModal from '../../components/modals/ItemDeailModal';
import { SpendContext } from '../../contexts/SpendContext';
import ClearConfirmationModal from '../../components/modals/ConfirmationModal';
import Button from '../../components/Buttom';

import emptyImg from '../../assets/image/empty.png';

const scrollOffsetY = new Animated.Value(0);
const headerOffset = Animated.diffClamp(scrollOffsetY, 0, 250);

export default function HomeScreen() {
  const [clearListModalVisible, setClearListModalVisible] = useState(false);
  const [newItemModalVisible, setNewItemModalVisible] = useState(false);
  const [itemDetailModalVisible, setItemDetailModalVisible] = useState(false);
  const [productSelected, setProductSelected] = useState(null);
  const { products, productStateManager, hasProducts } = useContext(
    SpendContext
  );

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

  function clearList() {
    productStateManager.clearProdductList();
    setClearListModalVisible(false);
  }

  function renderEmptyMessage() {
    return (
      <View style={{ width: '100%', alignItems: 'center' }}>
        <Image source={emptyImg} style={{ width: 150, height: 250 }} />
        <Text
          style={{
            marginBottom: 10,
            fontFamily: 'Montserrat_500Medium',
            fontSize: 16,
          }}
        >
          Você não possui produtos
        </Text>
        <Button
          size="small"
          text="adicionar"
          onPress={() => setNewItemModalVisible(true)}
        />
      </View>
    );
  }

  function renderClearButton() {
    if (hasProducts) {
      return (
        <View
          style={{
            marginLeft: 16,
            marginTop: 10,
            flexDirection: 'row',
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: '#D71E1E',
              padding: 10,
              borderRadius: 5,
              flexDirection: 'row',
              alignItems: 'center',
            }}
            onPress={() => setClearListModalVisible(true)}
          >
            <Text
              style={{
                color: '#fff',
                marginRight: 5,
                fontFamily: 'Montserrat_600SemiBold',
              }}
            >
              Limpar
            </Text>
            <AntDesign name="delete" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      );
    }
  }

  function renderProductsList() {
    return products.map(product => (
      <TouchableOpacity
        key={product.id}
        onPress={() => showProductDetailModal(product)}
      >
        <Card spend={product} />
      </TouchableOpacity>
    ));
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
          {renderClearButton()}
          {hasProducts ? renderProductsList() : renderEmptyMessage()}
        </Content>
        <NewItemButton onPress={() => setNewItemModalVisible(true)}>
          <AntDesign name="pluscircle" size={50} color="#26dd78" />
        </NewItemButton>
        <NewItemModal
          modalVisible={newItemModalVisible}
          showModal={setNewItemModalVisible}
        />
        {renderItemDetailModal()}
        <ClearConfirmationModal
          message="você tem certeza que deseja limpar essa lista?"
          modalVisible={clearListModalVisible}
          showModal={setClearListModalVisible}
          action={clearList}
        />
      </Container>
    </RnContainer>
  );
}
