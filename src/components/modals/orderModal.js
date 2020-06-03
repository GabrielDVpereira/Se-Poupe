import React, { useContext } from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
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

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: ' rgba(0, 0, 0, 0.5)',
  },
  content: {
    width: 300,
    backgroundColor: '#fff',
    alignSelf: 'center',
    top: 300,
    padding: 20,
  },
  text: {
    fontSize: 15,
    marginVertical: 5,
  },
});
