import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import DatePicker from './DatePicker';

export default function spendModal({ modalVisible, showModal }) {
  const [spendingName, setSpendingName] = useState('');
  const [spendingValue, setSpendingValue] = useState('');
  const [spendingLocal, setSpendingLocal] = useState('');
  const [spendingDate, setSpendingDate] = useState('');
  const [spendCategory, setSpendingCategory] = useState('');
  const [showDate, setShowDatePicker] = useState(false);

  const showDatePicker = (show, date) => {
    setShowDatePicker(show);
    setSpendingDate(date);
  };

  return (
    <Modal visible={modalVisible} transparent animationType="slide">
      <View style={styles.modalContainer}>
        <Text style={styles.modaltTitle}>Adicione um novo gasto </Text>
        <TextInput
          style={styles.input}
          placeholder="Nome do gasto"
          onChangeText={text => {
            setSpendingName(text);
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Valor"
          onChangeText={text => {
            setSpendingValue(text);
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Local"
          onChangeText={text => {
            setSpendingLocal(text);
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Categoria"
          onChangeText={text => {
            setSpendingCategory(text);
          }}
        />
        <TouchableOpacity
          style={styles.datePicker}
          onPress={() => {
            showDatePicker(true);
          }}
        >
          <Text>Data</Text>
        </TouchableOpacity>
        <View style={styles.modalButtons}>
          <KeyboardAvoidingView behavior="position" enabled>
            <TouchableOpacity
              style={styles.createButton}
              onPress={() => {
                console.log(spendingName);
                console.log(spendingValue);
                console.log(spendingLocal);
                console.log(spendingDate);
                console.log(spendCategory);
              }}
            >
              <Text>Criar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => {
                showModal(false);
              }}
            >
              <Text>Cancelar</Text>
            </TouchableOpacity>
            <DatePicker show={showDate} showDatePicker={showDatePicker} />
          </KeyboardAvoidingView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    width: 300,
    height: 400,
    padding: 20,
    backgroundColor: '#fff',
    alignSelf: 'center',
    top: 100,
    elevation: 15,
  },
  modaltTitle: {
    alignSelf: 'center',
  },
  input: {
    top: 30,
    marginVertical: 5,
    borderBottomWidth: 1,
    width: 200,
  },
  modalButtons: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  datePicker: {
    top: 40,
  },
});
