import React from 'react';
import { Modal, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import {
  ModalContainer,
  ModalContent,
  ModalItemText,
  ModalItem,
  ModalItems,
} from './styles';

export default function PickerModal({ items, setItem, visible, setVisible }) {
  return (
    <Modal
      visible={visible}
      onRequestClose={() => setVisible(false)}
      transparent
      animationType="fade"
    >
      <ModalContainer onPress={() => setVisible(false)}>
        <TouchableWithoutFeedback>
          <ModalContent>
            <ModalItems>
              {items.map(item => (
                <ModalItem key={item} onPress={() => setItem(item)}>
                  <ModalItemText>{item}</ModalItemText>
                  <Ionicons name="ios-arrow-forward" size={24} color="#ccc" />
                </ModalItem>
              ))}
            </ModalItems>
          </ModalContent>
        </TouchableWithoutFeedback>
      </ModalContainer>
    </Modal>
  );
}
