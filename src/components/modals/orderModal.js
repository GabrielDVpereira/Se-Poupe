import React, { useContext } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { SpendContext } from '../../contexts/SpendContext';
import orderSpends from '../../utils/order';

export default function orderModal({ modalVisible, showModal }) {
  const { spends, dispatch } = useContext(SpendContext);

  function orderBy(orderRule) {
    // call the due compare function and dispatch the result
    const spendOrderd = orderSpends(spends, orderRule);
    dispatch({ type: 'ORDER', spendOrderd });
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
          <TouchableOpacity onPress={() => orderBy('value-desc')}>
            <Text>Valor</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => orderBy('data-asc')}>
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
