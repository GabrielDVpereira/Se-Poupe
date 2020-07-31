import React, { useState, useEffect, useContext } from 'react';
import { Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Picker from '../../Picker';

import {
  Container,
  ModalContent,
  Content,
  InputField,
  Title,
  Form,
  CloseButton,
  PickerContainer,
} from './styles';
import Buttom from '../../Buttom';
import categories from '../../../utils/categories';
import { SpendContext } from '../../../contexts/SpendContext';
import generateId from '../../../utils/generateRandomId';

const categoryNames = Object.keys(categories);

export default function NewItem({ modalVisible, showModal }) {
  const [keyPressed, setKeyPressed] = useState('');
  const [productDate, setProductDate] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCategory, setProductCategory] = useState('');

  const { productStateManager } = useContext(SpendContext);
  const hideModal = () => showModal(false);

  useEffect(() => {
    if (productDate.length === 2 && keyPressed !== 'Backspace')
      setProductDate(productDate.concat('/'));
    if (productDate.length === 5 && keyPressed !== 'Backspace')
      setProductDate(productDate.concat('/'));
  }, [productDate]);

  useEffect(() => {
    cleanFields();
  }, [modalVisible]);

  function cleanFields() {
    setProductDate('');
    setProductName('');
    setProductPrice('');
    setProductCategory('');
  }

  function saveProduct() {
    const product = {
      id: generateId(),
      category: productCategory,
      date: productDate,
      name: productName,
      price: productPrice,
    };
    productStateManager.addProduct(product);
    hideModal();
  }

  return (
    <Modal visible={modalVisible} transparent animationType="fade">
      <Container
        onPress={() => {
          showModal(false);
        }}
      >
        <ModalContent>
          <Content>
            <Title>Novo item</Title>
            <CloseButton onPress={() => showModal(false)}>
              <AntDesign name="closecircle" size={35} color="#D71E1E" />
            </CloseButton>
            <Form>
              <InputField
                placeholder="Nome"
                onChangeText={name => setProductName(name)}
              />
              <InputField
                placeholder="Preço"
                value={productPrice}
                onChangeText={price => setProductPrice(price)}
              />
              <InputField
                maxLength={10}
                placeholder="Data"
                value={productDate}
                onChangeText={date => setProductDate(date)}
                onKeyPress={({ nativeEvent }) => setKeyPressed(nativeEvent.key)}
              />
              <PickerContainer>
                <Picker
                  label="Categoria"
                  items={categoryNames}
                  onChange={item => setProductCategory(item)}
                />
              </PickerContainer>
            </Form>
            <Buttom text="Adicionar" size="large" onPress={saveProduct} />
          </Content>
        </ModalContent>
      </Container>
    </Modal>
  );
}
