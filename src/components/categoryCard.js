import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';

export default function CategoryCard({ spends }) {
  return (
    <ScrollView style={styles.container}>
      {spends.map(spend => (
        <View key={spend._id} style={styles.card}>
          <Text>Teste</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 15,
    backgroundColor: '#fff',
    width: '100%',
    height: 100,
    elevation: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  container: {
    marginVertical: 30,
    marginHorizontal: 20,
  },
});
