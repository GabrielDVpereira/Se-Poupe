import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { SpendCards } from '../components/spendCards';
import DatePicker from '../components/DatePicker';

export const HomeScreen = () => {

  const [spendModalVisible, setSpendModalVisible ] = useState(false);
  const [spendingName, setSpendingName ] = useState('');
  const [spendingValue, setSpendingValue ] = useState('');
  const [spendingLocal, setSpendingLocal ] = useState('');
  const [spendingDate, setSpendingDate ] = useState('');
  const [spendCategory, setSpendingCategory ] = useState('');
  const [showDate, setShowDatePicker] = useState(false);
  
  const showDatePicker = (show, date) => {
    setShowDatePicker(show);
    setSpendingDate(date)
  }
  
  return (
    <LinearGradient
      colors={['#6A0DAD', '#7029a3', '#9963bf']}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.textMes}>Janeiro</Text>
        <Text style={styles.text}>Você gastou R$2000,0</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.contentTop}>
          <TouchableOpacity onPress={() => {setSpendModalVisible(true)}}>
            <MaterialIcons name="add-box" size={32} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.order}>
            <Text style={[styles.text, { fontSize: 16 }]}>Order By</Text>
            <Entypo name="triangle-down" size={32} color="#fff" />
          </TouchableOpacity>
        </View>
        <SpendCards />
        
          <Modal visible={spendModalVisible} transparent={true} animationType='slide'>
            <View style={styles.modalContainer}>
              <Text style={styles.modaltTitle}>Adicione um novo gasto  </Text>
              <TextInput style={styles.input} placeholder={'Nome do gasto'} onChangeText ={(text) =>{setSpendingName(text)}}/>
              <TextInput style={styles.input} placeholder={'Valor'} onChangeText ={(text) =>{setSpendingValue(text)}}/>
              <TextInput style={styles.input} placeholder={'Local'} onChangeText ={(text) =>{setSpendingLocal(text)}}/>
              <TextInput style={styles.input} placeholder={'Categoria'} onChangeText ={(text) =>{setSpendingCategory(text)}}/>
              <TouchableOpacity style = {styles.datePicker} onPress={() => { showDatePicker(true) }}>
                <Text>Data</Text>
              </TouchableOpacity>
                <View style={styles.modalButtons} >
                  <KeyboardAvoidingView behavior="position" enabled>
                      <TouchableOpacity style={styles.createButton} onPress={() => {
                        console.log(spendingName)
                        console.log(spendingValue)
                        console.log(spendingLocal)
                        console.log(spendingDate)
                        console.log(spendCategory)
                      }}>
                        <Text>Criar</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.cancelButton} onPress={() => {setSpendModalVisible(false)}}>
                        <Text>Cancelar</Text>
                      </TouchableOpacity>
                  </KeyboardAvoidingView>
                </View>
            </View>
          </Modal>
          <DatePicker show ={showDate} showDatePicker ={showDatePicker}/>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 22,
  },
  header: {
    alignSelf: 'center',
    top: 100,
  },
  content: {
    top: 150,
    flex: 1,
  },
  contentTop: {
    flexDirection: 'row',
    margin: 50,
    justifyContent: 'space-between',
  },
  textMes: {
    backgroundColor: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 22,
    padding: 8,
    borderRadius: 5,
    margin: 5,
  },
  order: {
    flexDirection: 'row',
  },
  modalContainer:{
    width: 300,
    height: 400, 
    padding: 20, 
    backgroundColor: "#fff", 
    alignSelf: 'center',
    top: 100, 
    elevation: 15
  },
  modaltTitle:{
    alignSelf: 'center'
  },
  input:{
    top:30,
    marginVertical: 5,
    borderBottomWidth: 1,
    width: 200
  },
  modalButtons:{
    flex: 1, 
    alignItems: 'center', 
    flexDirection: 'row'
  },
  datePicker: {
    top: 40
  }

});
