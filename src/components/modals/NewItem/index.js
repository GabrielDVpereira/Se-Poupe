import React, { useState, useContext } from 'react';
import { View, Text, Modal, TouchableWithoutFeedback } from 'react-native';
import { Container, ModalContent, Content, InputField, Title } from './styles';

export default function NewItem({ modalVisible, showModal }) {
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
            <InputField placeholder="Name" />
            <InputField placeholder="Price" />
            <InputField placeholder="Date" />
            <InputField placeholder="Category" />
          </Content>
        </ModalContent>
      </Container>
    </Modal>
  );
}
