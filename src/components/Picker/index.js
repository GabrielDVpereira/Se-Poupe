import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Container, Label } from './styles';
import PickerModal from './prickerModal';

export default function Picker({ label, items, onChange }) {
  const [selectedItem, setItem] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    onChange(selectedItem);
    setModalVisible(false);
  }, [selectedItem]);

  return (
    <Container onPress={() => setModalVisible(true)}>
      <Label active={!!selectedItem}>{selectedItem || label}</Label>
      <Ionicons name="md-arrow-dropdown" size={24} color="black" />
      <PickerModal
        visible={modalVisible}
        setVisible={setModalVisible}
        items={items}
        setItem={setItem}
      />
    </Container>
  );
}
