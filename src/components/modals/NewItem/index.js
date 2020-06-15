import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './styles';

export default function NewItem({ modalVisible, showModal }) {
  return (
    <Modal visible={modalVisible} transparent animationType="fade">
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          showModal(false);
        }}
        activeOpacity={1}
      >
        <TouchableWithoutFeedback>
          <View behavior="position" style={styles.modalContainer}>
            <Text>Modal</Text>
            <Text>Modal</Text>
            <Text>Modal</Text>
            <Text>Modal</Text>
            <Text>Modal</Text>
            <Text>Modal</Text>
            <Text>Modal</Text>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
}
