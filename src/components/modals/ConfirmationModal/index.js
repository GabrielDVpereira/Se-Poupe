import React from 'react';
import { Modal, TouchableWithoutFeedback } from 'react-native';
import {
  Container,
  ContainerButtons,
  Content,
  ModalMessage,
  Button,
  ButtonText,
} from './styles';

export default function ConfirmationModal({
  message,
  modalVisible,
  showModal,
  action,
}) {
  const hideModal = () => showModal(false);
  return (
    <Modal transparent visible={modalVisible} animationType="fade">
      <Container onPress={hideModal}>
        <TouchableWithoutFeedback>
          <Content>
            <ModalMessage>{message}</ModalMessage>
            <ContainerButtons>
              <Button color="#D71E1E" onPress={action}>
                <ButtonText>Sim</ButtonText>
              </Button>
              <Button color="#1C3FA5" onPress={hideModal}>
                <ButtonText>Não</ButtonText>
              </Button>
            </ContainerButtons>
          </Content>
        </TouchableWithoutFeedback>
      </Container>
    </Modal>
  );
}
