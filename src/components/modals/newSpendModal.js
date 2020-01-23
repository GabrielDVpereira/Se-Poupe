import React from 'react';
import { View, StyleSheet, Modal, Text, TouchableOpacity, TextInput} from 'react-native';

export const SpendModal = ({modalVisible}) => {
  return (
  <Modal visible={modalVisible} transparent={true} animationType='slide'>
    <View style={styles.container}>
      <Text style={styles.title}>Adicione um novo gasto  </Text>
      <TextInput style={styles.textInput} placeholder={'Algum texto'}/>
      <TextInput style={styles.textInput} placeholder={'Algum texto'}/>
      <TextInput style={styles.textInput} placeholder={'Algum texto'}/>
      <TextInput style={styles.textInput} placeholder={'Algum texto'}/>
      <TouchableOpacity style={styles.createButton}>
        <Text>Criar</Text>
      </TouchableOpacity>
    </View>
  </Modal>
  );
};


const styles = StyleSheet.create({
  container: {
    elevation: 10,
    width: 300,
    height: 500,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 5,
    marginTop: 50,
    padding: 30
  },
  createButton: {
    top: 0,
    margin: 30,
    alignSelf: 'center'

  }, 
  textInput: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    width: 200, 
    marginTop: 20
  },
  title: {
    alignSelf: 'center'
  }
})