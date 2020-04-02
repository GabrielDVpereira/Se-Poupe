import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Picker,
  TouchableWithoutFeedback,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import moment from 'moment';
import categories from '../../utils/categories';
import DatePicker from '../DatePicker';
import { api } from '../../config/api/axios';
import { SpendContext } from '../../contexts/SpendContext';
import { AuthContext } from '../../contexts/AuthContext';

export default function spendModal({ modalVisible, showModal }) {
  const { dispatch } = useContext(SpendContext);
  const { authInfo } = useContext(AuthContext);

  const [spendingName, setSpendingName] = useState('');
  const [spendingValue, setSpendingValue] = useState('');
  const [spendingLocal, setSpendingLocal] = useState('');
  const [spendingDate, setSpendingDate] = useState(
    moment().format('YYYY/MM/DD')
  );
  const [spendCategory, setSpendingCategory] = useState('');
  const [showDate, setShowDatePicker] = useState(false);
  const showDatePicker = (show, date) => {
    setShowDatePicker(show);
    setSpendingDate(date);
  };

  const newSpend = async () => {
    const spendData = {
      name: spendingName,
      value: spendingValue,
      local: spendingLocal,
      date: moment(spendingDate).format('MM/DD/YYYY'),
      category: spendCategory,
    };

    try {
      const request = await api.post('/spend', spendData, {
        headers: {
          'x-auth-token': authInfo.userToken,
        },
      });
      if (request.status === 200) {
        dispatch({ type: 'ADD_SPEND', spend: request.data.spend });
        showModal(false);
        Alert.alert('Success', 'Spend successfully created!', [
          { text: 'OK', onPress: () => {} },
        ]);
      }
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

  return (
    <Modal visible={modalVisible} transparent animationType="fade">
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          showModal(false);
        }}
      >
        <TouchableWithoutFeedback>
          <View behavior="position" style={styles.modalContainer}>
            <Text style={styles.modaltTitle}>Adicione um novo gasto </Text>
            <View style={styles.line} />
            <View style={styles.modalForm}>
              <TouchableOpacity
                style={styles.datePicker}
                onPress={() => {
                  showDatePicker(true);
                }}
              >
                <Entypo name="calendar" size={20} color="#000" />
                <Text style={{ paddingHorizontal: 10 }}>
                  {moment(spendingDate).format('DD/MM/YYYY')}
                </Text>
                <DatePicker show={showDate} showDatePicker={showDatePicker} />
              </TouchableOpacity>
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
              <View style={styles.categoryPicker}>
                <Picker
                  mode="dialog"
                  selectedValue={spendCategory}
                  style={{ height: 50, width: 150 }}
                  onValueChange={(category, itemIndex) =>
                    setSpendingCategory(category)
                  }
                >
                  {categories.map(category => (
                    <Picker.Item
                      key={category}
                      label={category}
                      value={category}
                    />
                  ))}
                </Picker>
              </View>
            </View>

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.createButton}
                onPress={() => {
                  dispatch({
                    type: 'ADD_SPEND',
                    spend: {
                      name: spendingName,
                      value: spendingValue,
                      local: spendingLocal,
                      date: moment(spendingDate).format('MM/DD/YYYY'),
                      category: spendCategory,
                    },
                  });
                  newSpend();
                }}
              >
                <Text style={styles.createText}>Criar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => {
                  showModal(false);
                }}
              >
                <Text style={styles.cancelText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
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
    backgroundColor: ' rgba(0, 0, 0, 0.6)',
  },
  modalContainer: {
    width: 300,
    backgroundColor: '#fff',
    alignSelf: 'center',
    top: 100,
    elevation: 15,
    position: 'absolute',
  },
  modalForm: {
    padding: 20,
    marginVertical: 10,
  },
  modaltTitle: {
    alignSelf: 'center',
    padding: 10,
    fontSize: 20,
    fontFamily: '',
  },
  input: {
    top: 5,
    marginVertical: 5,
    borderBottomWidth: 1,
    width: 200,
  },
  modalButtons: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    elevation: 10,
  },
  datePicker: {
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: 'red',
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createButton: {
    flex: 1,
    backgroundColor: '#00008b',
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cancelText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  categoryPicker: {
    top: 5,
  },
});
