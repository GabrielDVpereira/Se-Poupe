import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

export default function CategoryModal({
  filterArray,
  modalVisible,
  setModalVisible,
}) {
  return (
    <Modal visible={modalVisible} transparent animationType="fade">
      <TouchableOpacity
        onPress={() => {
          setModalVisible(false);
        }}
        style={styles.container}
        activeOpacity={1}
      >
        <TouchableWithoutFeedback>
          <View style={styles.content}>
            {filterArray.map(filterItem => (
              <TouchableOpacity key={Math.random()}>
                <Text>{filterItem}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
}
