import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SpendContext } from '../contexts/SpendContext';

export default function SummaryScreen() {
  const { spends } = useContext(SpendContext);
  console.log(spends);
  return (
    <View style={styles.container}>
      <Text>Summary Details Screen!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
