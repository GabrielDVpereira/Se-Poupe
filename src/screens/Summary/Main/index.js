import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function SummaryScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('SummaryDetails')}>
        <Text>Summary Screen!!</Text>
      </TouchableOpacity>
    </View>
  );
}
