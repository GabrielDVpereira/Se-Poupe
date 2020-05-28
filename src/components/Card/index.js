import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import getFormatedValue from '../../utils/getFormatedValue';

export default function Card({ spend }) {
  console.log(spend);
  return (
    <View style={styles.card}>
      <Text>{spend.name}</Text>
      <Text>{getFormatedValue(spend.value, 'money')}</Text>
      <Text>{getFormatedValue(spend.date, 'date')}</Text>
    </View>
  );
}
