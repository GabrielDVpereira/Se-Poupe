import React, { useState, useContext } from 'react';
import { ToastAndroid } from 'react-native';
import { Title, Price, Category, Date, Name, Value, Content } from './styles';
import Button from '../../Buttom';
import ModalAnimated from '../ModalAnimated';
import ConfirmationModal from '../ConfirmationModal';
import { SpendContext } from '../../../contexts/SpendContext';

export default function ItemModal({ product, visible, setVisible }) {
  const [confirmationModalVisible, setConfirmationModalVisible] = useState(
    false
  );
  const { productStateManager } = useContext(SpendContext);
  const showConfirmationModal = () => setConfirmationModalVisible(true);
  const hideConfirmationModal = () => setConfirmationModalVisible(false);
  const hideItemDetailModal = () => setVisible(false);

  async function deleteItem() {
    await productStateManager.deleteProduct(product);
    ToastAndroid.showWithGravityAndOffset(
      'Produto deletado!',
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
      0,
      0
    );
    hideConfirmationModal();
    hideItemDetailModal();
  }
  return (
    <ModalAnimated visible={visible} setVisible={setVisible}>
      <Content>
        <Title>{product.name}</Title>
        <Price>
          <Name>Preço</Name>
          <Value>{product.price}</Value>
        </Price>
        <Category>
          <Name>Categoria</Name>
          <Value>{product.category}</Value>
        </Category>
        <Date>
          <Name>Data</Name>
          <Value>{product.date}</Value>
        </Date>
        <Button
          type="danger"
          text="Remover item"
          onPress={showConfirmationModal}
        />
      </Content>
      <ConfirmationModal
        modalVisible={confirmationModalVisible}
        showModal={setConfirmationModalVisible}
        message="Você tem certeza que deseja deletar esse item?"
        action={deleteItem}
      />
    </ModalAnimated>
  );
}
