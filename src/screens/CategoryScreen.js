import React, { useEffect, useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Picker } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';
import moment from 'moment';
import months from '../utils/months';
import CategoryCard from '../components/categoryCard';
import CategoryModal from '../components/modals/categoryModal';
import { SpendContext } from '../contexts/SpendContext';

export default function({ navigation }) {
  const { spends } = useContext(SpendContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMonth, setMonth] = useState(
    months[Number(moment().format('MM')) - 1]
  );
  const [selectedYear, setYear] = useState(moment().format('YYYY'));
  const [filter, setFilter] = useState([]);

  return (
    <LinearGradient
      style={styles.container}
      colors={['#6A0DAD', '#7029a3', '#9963bf']}
    >
      <TouchableOpacity
        style={styles.drawerButton}
        onPress={() => {
          navigation.openDrawer();
        }}
      >
        <Entypo name="menu" size={32} color="#fff" />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.month}>{selectedMonth}</Text>
        <View style={styles.pickerContainer}>
          <TouchableOpacity
            onPress={() => {
              setFilter(months);
              setModalVisible(true);
            }}
            style={styles.picker}
          >
            <Text style={styles.pickerText}>{selectedMonth}</Text>
            <Entypo name="triangle-down" size={32} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.picker}>
            <Text style={styles.pickerText}>{selectedYear}</Text>
            <Entypo name="triangle-down" size={32} color="#fff" />
          </TouchableOpacity>
        </View>
        <View>
          <CategoryCard spends={spends} />
        </View>
        <CategoryModal
          filterArray={filter}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerButton: {
    top: 40,
    left: 10,
  },
  content: {
    alignItems: 'center',
    top: 40,
  },
  contentTitle: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'sans-serif-medium',
  },
  pickerContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    top: 20,
  },
  pickerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  month: {
    backgroundColor: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 22,
    padding: 8,
    borderRadius: 5,
    margin: 5,
  },
  picker: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
