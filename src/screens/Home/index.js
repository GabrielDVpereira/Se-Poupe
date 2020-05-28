import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import SpendModal from '../../components/modals/spendModal';
import OrderModal from '../../components/modals/orderModal';
import Card from '../../components/Card';
import months from '../../utils/months';
import { SpendContext } from '../../contexts/SpendContext';
import styles from './styles';

export default function HomeScreen({ navigation }) {
  const [newSpendModal, setNewSpendModal] = useState(false);
  const [orderModal, setOrderModal] = useState(false);
  const [totalSpent, setTotal] = useState(0);
  const [month, setMonth] = useState('');
  const { spends } = useContext(SpendContext);

  useEffect(() => {
    acctualMonth();
    totalSpend();
  }, [spends]);

  function showNewSpendModal(show) {
    setNewSpendModal(show);
  }
  function showOrderModal(show) {
    setOrderModal(show);
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
          <TouchableOpacity
            style={styles.order}
            onPress={() => showOrderModal(true)}
          >
            <Text style={[styles.text, { fontSize: 16 }]}>Ordenar</Text>
            <Entypo name="triangle-down" size={32} color="#fff" />
          </TouchableOpacity>
        </View>
        <FlatList
          data={spends}
          keyExtractor={spend => spend.id}
          renderItem={({ item: spend }) => <Card spend={spend} />}
        />
      </View>
      <OrderModal modalVisible={orderModal} showModal={showOrderModal} />
      <SpendModal modalVisible={newSpendModal} showModal={showNewSpendModal} />
    </LinearGradient>
  );
}
