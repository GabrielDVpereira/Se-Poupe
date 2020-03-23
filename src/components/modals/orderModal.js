import React, { useContext } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { SpendContext } from '../../contexts/SpendContext';

export default function orderModal({ modalVisible, showModal }) {
  const { spends, dispatch } = useContext(SpendContext);

  function orderSpends(orderBy) {
    // call the due compare function and dispatch the result
  }
  return (
    <Modal visible={modalVisible} transparent animationType="fade">
      <TouchableOpacity
        style={styles.container}
        onPress={() => showModal(false)}
        activeOpacity={1}
      >
        <View style={styles.content}>
          <TouchableOpacity onPress={() => showModal(false)}>
            <Text>Categoria</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => showModal(false)}>
            <Text>Valor</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => showModal(false)}>
            <Text>Data</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: ' rgba(0, 0, 0, 0.3)',
  },
  content: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    alignSelf: 'center',
    top: 300,
  },
});
