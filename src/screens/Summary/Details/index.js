import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { SpendContext } from '../../../contexts/SpendContext';
import styles from './styles';

export default function SummaryScreen() {
  const { spends } = useContext(SpendContext);
  return (
    <View style={styles.container}>
      <Text>Summary Details Screen!!</Text>
    </View>
  );
}
