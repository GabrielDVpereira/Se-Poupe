import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  Alert,
  Picker,
  TouchableWithoutFeedback,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import moment from 'moment';
import categories from '../../../utils/categories';
import DatePicker from '../../DatePicker';
import { api } from '../../../config/api/axios';
import styles from './styles';
import { SpendContext } from '../../../contexts/SpendContext';

export default function spendModal({ modalVisible, showModal }) {
  const { dispatch } = useContext(SpendContext);

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
      const request = await api.post('/spend', spendData);
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
        activeOpacity={1}
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
                  onValueChange={category => setSpendingCategory(category)}
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
