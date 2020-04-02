import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';

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
            {filterArray.map((filterItem, index) => (
              <TouchableOpacity key={index}>
                <Text>{filterItem}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    width: 100,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginTop: 200,
  },
});
