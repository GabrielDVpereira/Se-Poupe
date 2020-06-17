import React, { useState, useEffect } from 'react';
import { Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import {
  Container,
  ModalContent,
  Content,
  InputField,
  Title,
  Form,
  CloseButton,
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
            <Title>New Item</Title>
            <CloseButton onPress={() => showModal(false)}>
              <AntDesign name="closecircle" size={35} color="#D71E1E" />
            </CloseButton>
            <Form>
              <InputField placeholder="Name" />
              <InputField placeholder="Price" />
              <InputField
                maxLength={10}
                placeholder="Date"
                value={itemDate}
                onChangeText={date => setItemDate(date)}
                onKeyPress={({ nativeEvent }) => setKeyPressed(nativeEvent.key)}
              />
              <RNPickerSelect
                style={{
                  inputAndroid: {
                    backgroundColor: '#e5e5e5',
                    width: '80%',
                    alignSelf: 'center',
                    borderRadius: 5,
                    marginTop: 10,
                    padding: 10,
                  },
                }}
                onValueChange={value => setSelectedUf(value)}
                items={categoryNames.map(category => ({
                  label: category,
                  value: category,
                }))}
                placeholder={{ label: 'Categoria' }}
              />
            </Form>
            <Buttom text="Adicionar" size="large" />
          </Content>
        </ModalContent>
      </Container>
    </Modal>
  );
}
