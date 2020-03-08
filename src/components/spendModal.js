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
    <Modal visible={modalVisible} transparent animationType="fade">
      <View style={styles.container}>
        <View behavior="position" style={styles.modalContainer}>
          <Text style={styles.modaltTitle}>Adicione um novo gasto </Text>
          <View style={styles.line} />
          <View style={styles.modalForm}>
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
              <DatePicker show={showDate} showDatePicker={showDatePicker} />
            </TouchableOpacity>
          </View>
          <View style={styles.line} />

          <View style={styles.modalButtons}>
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
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '100%',
    top: 20,
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: ' rgba(0, 0, 0, 0.3)',
  },
  modalContainer: {
    width: 300,
    height: 400,
    backgroundColor: '#fff',
    alignSelf: 'center',
    top: 100,
    elevation: 15,
  },
  modalForm: {
    padding: 20,
  },
  modaltTitle: {
    alignSelf: 'center',
    padding: 10,
  },
  input: {
    top: 30,
    marginVertical: 5,
    borderBottomWidth: 1,
    width: 200,
  },
  modalButtons: {
    top: 40,
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-around',
  },
  datePicker: {
    top: 30,
    marginVertical: 5,
  },
});
