import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import SpendModal from '../components/spendModal';
import { SpendContextProvider } from '../contexts/SpendContext';

import { SpendCards } from '../components/spendCards';

export const HomeScreen = () => {
  const [spendModalVisible, setSpendModalVisible] = useState(false);
  const [totalSpent, setTotal] = useState(0);
  const [acctualMonth, setMonth] = useState('');
  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  useEffect(() => {
    const date = new Date();
    const month = date.getMonth();
    setMonth(months[month]);
  });

  const showModal = show => {
    setSpendModalVisible(show);
  };
  return (
    <LinearGradient
      colors={['#6A0DAD', '#7029a3', '#9963bf']}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.textMes}>{acctualMonth}</Text>
        <Text style={styles.text}>Você gastou R$ {totalSpent}</Text>
      </View>
      <SpendContextProvider>
        <View style={styles.content}>
          <View style={styles.contentTop}>
            <TouchableOpacity
              onPress={() => {
                setSpendModalVisible(true);
              }}
            >
              <MaterialIcons name="add-box" size={32} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.order}>
              <Text style={[styles.text, { fontSize: 16 }]}>Order By</Text>
              <Entypo name="triangle-down" size={32} color="#fff" />
            </TouchableOpacity>
          </View>
          <SpendCards />
        </View>
        <SpendModal modalVisible={spendModalVisible} showModal={showModal} />
      </SpendContextProvider>
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
});
