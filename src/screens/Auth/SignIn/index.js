import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useAuthContext } from '../../../contexts/AuthContext';
import styles from './styles';

export default function SignIn({ navigation }) {
  const { authAction } = useAuthContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text>Sign in Screen</Text>
      <TextInput
        value={email}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        value={password}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
      />

      <TouchableOpacity
        onPress={() => {
          authAction.signIn({ email, password });
        }}
      >
        <Text>Enter</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
        <Text>Sign UP</Text>
      </TouchableOpacity>
    </View>
  );
}
