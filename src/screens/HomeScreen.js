import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import SpendModal from '../components/spendModal';
import { SpendCards } from '../components/spendCards';
import months from '../utils/months';
import { SpendContext } from '../contexts/SpendContext';

export default function HomeScreen({ navigation }) {
  const [newSpendModal, setNewSpendModal] = useState(false);
  const [totalSpent, setTotal] = useState(0);
  const [month, setMonth] = useState('');
  const { spends } = useContext(SpendContext);

  useEffect(() => {
    acctualMonth();
    totalSpend();
  }, []);

  function showModal(show) {
    setNewSpendModal(show);
  }

  function acctualMonth() {
    const date = new Date();
    const monthIndex = date.getMonth();
    setMonth(months[monthIndex]);
  }
  function totalSpend() {
    const totalValue = spends.reduce((total, spend) => total + spend.value, 0);
    setTotal(totalValue);
  }

  return (
    <LinearGradient
      colors={['#6A0DAD', '#7029a3', '#9963bf']}
      style={styles.container}
    >
      <TouchableOpacity
        style={styles.drawerButton}
        onPress={() => {
          navigation.openDrawer();
        }}
      >
        <Entypo name="menu" size={32} color="#fff" />
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.textMes}>{month}</Text>
        <Text style={styles.text}>Você gastou R$ {totalSpent}</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.contentTop}>
          <TouchableOpacity
            onPress={() => {
              setNewSpendModal(true);
            }}
          >
            <MaterialIcons name="add-box" size={32} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.order}>
            <Text style={[styles.text, { fontSize: 16 }]}>Ordenar</Text>
            <Entypo name="triangle-down" size={32} color="#fff" />
          </TouchableOpacity>
        </View>
        <SpendCards />
      </View>
      <SpendModal modalVisible={newSpendModal} showModal={showModal} />
    </LinearGradient>
  );
}

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
    top: 100,
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
  drawerButton: {
    top: 40,
    left: 10,
  },
});
