import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AuthContext } from '../contexts/AuthContext';

export default function SettingsScreen() {
  const { authAction } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>Settings</Text>
      <TouchableOpacity onPress={() => authAction.signOut()}>
        <Text>SIGN OUT</Text>
      </TouchableOpacity>
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
