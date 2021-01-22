import React, { useState, useEffect, useContext } from 'react';
import { Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Picker from '../../Picker';
import DatePicker from '../../DatePicker';

import {
  Container,
  ModalContent,
  Content,
  InputField,
  Title,
  Form,
  CloseButton,
  PickerContainer,
  DatePickerContainer,
} from './styles';
import Buttom from '../../Buttom';
import categories from '../../../utils/categories';
import { SpendContext } from '../../../contexts/SpendContext';
import generateId from '../../../utils/generateRandomId';

const categoryNames = Object.keys(categories);

export default function NewItem({ modalVisible, showModal }) {
  const [productDate, setProductDate] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCategory, setProductCategory] = useState('');

  const { productStateManager } = useContext(SpendContext);
  const hideModal = () => showModal(false);

  function cleanFields() {
    setProductDate('');
    setProductName('');
    setProductPrice('');
    setProductCategory('');
  }

  useEffect(() => {
    cleanFields();
  }, [modalVisible]);

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
      <Container>
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
              <DatePickerContainer>
                <DatePicker onChange={date => setProductDate(date)} />
              </DatePickerContainer>
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
