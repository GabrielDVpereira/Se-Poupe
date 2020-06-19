import React, { useState, useEffect } from 'react';
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

const categoryNames = Object.keys(categories);

export default function NewItem({ modalVisible, showModal }) {
  const [itemDate, setItemDate] = useState('');
  const [keyPressed, setKeyPressed] = useState('');

  useEffect(() => {
    if (itemDate.length === 2 && keyPressed !== 'Backspace')
      setItemDate(itemDate.concat('/'));
    if (itemDate.length === 5 && keyPressed !== 'Backspace')
      setItemDate(itemDate.concat('/'));
  }, [itemDate]);
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
              <InputField placeholder="Nome" />
              <InputField placeholder="Preço" />
              <InputField
                maxLength={10}
                placeholder="Data"
                value={itemDate}
                onChangeText={date => setItemDate(date)}
                onKeyPress={({ nativeEvent }) => setKeyPressed(nativeEvent.key)}
              />
              <PickerContainer>
                <Picker
                  label="Categoria"
                  items={categoryNames}
                  onChange={item => console.log(item)}
                />
              </PickerContainer>
            </Form>
            <Buttom text="Adicionar" size="large" />
          </Content>
        </ModalContent>
      </Container>
    </Modal>
  );
}
