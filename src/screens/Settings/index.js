import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../contexts/AuthContext';
import styles from './styles';

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
