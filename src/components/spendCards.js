import React, { useContext, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import moment from 'moment';
import { SpendContext } from '../contexts/SpendContext';

export const SpendCards = () => {
  const { spends } = useContext(SpendContext);

  return (
    <ScrollView style={styles.contentBody}>
      {spends.map((spend, index) => (
        <View key={index} style={styles.card}>
          <Text>{spend.name}</Text>
          <Text>{`R$ ${spend.value}`}</Text>
          <Text>{moment(spend.date).format('DD/MM/YYYY')}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentBody: {
    marginHorizontal: 10,
  },
  card: {
    marginTop: 20,
    backgroundColor: '#fff',
    width: '100%',
    height: 100,
    elevation: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
