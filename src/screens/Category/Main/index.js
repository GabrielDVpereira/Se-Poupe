import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';
import moment from 'moment';
import months from '../../../utils/months';
import CategoryModal from '../../../components/modals/Category';
import { SpendContext } from '../../../contexts/SpendContext';
import styles from './styles';

export default function Category({ navigation }) {
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

        <CategoryModal
          filterArray={filter}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </View>
    </LinearGradient>
  );
}
