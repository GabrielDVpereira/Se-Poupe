import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import SpendModal from '../../components/modals/Spend';
import OrderModal from '../../components/modals/Order';
import Card from '../../components/Card';
import months from '../../utils/months';
import { SpendContext } from '../../contexts/SpendContext';
import styles from './styles';

export default function HomeScreen({ navigation }) {
  const [newSpendModalVisible, setNewSpendModalVisible] = useState(false);
  const [orderModalVisible, setOrderModalVisible] = useState(false);
  const [totalSpent, setTotal] = useState(0);
  const { spends } = useContext(SpendContext);

  useEffect(() => {
    totalSpend();
  }, [spends]);

  function currentMonth() {
    const date = new Date();
    const currentMonthIndex = date.getMonth();
    return months[currentMonthIndex];
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
        <Text style={styles.textMes}>{currentMonth()}</Text>
        <Text style={styles.text}>Você gastou R$ {totalSpent}</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.contentTop}>
          <TouchableOpacity
            onPress={() => {
              setNewSpendModalVisible(true);
            }}
          >
            <MaterialIcons name="add-box" size={32} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.order}
            onPress={() => setOrderModalVisible(true)}
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
      <OrderModal
        modalVisible={orderModalVisible}
        showModal={setOrderModalVisible}
      />
      <SpendModal
        modalVisible={newSpendModalVisible}
        showModal={setNewSpendModalVisible}
      />
    </LinearGradient>
  );
}
