import React, { useContext } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { SpendContext } from '../../../contexts/SpendContext';
import orderSpends from '../../../utils/order';
import styles from './styles';

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
        <TouchableWithoutFeedback>
          <View style={styles.content}>
            <TouchableOpacity
              onPress={() => {
                orderBy('value-desc');
                showModal(false);
              }}
            >
              <Text style={styles.text}>Valor</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                orderBy('data-asc');
                showModal(false);
              }}
            >
              <Text style={styles.text}>Data</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
}
