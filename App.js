import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { View, StatusBar } from 'react-native';
import React from 'react';
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
} from '@expo-google-fonts/montserrat';
import Routes from './src/routes/index.routes';
import AuthContextProvider from './src/contexts/AuthContext';

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_700Bold,
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) return <View />;
  return (
    <AuthContextProvider>
      <StatusBar hidden />
      <Routes />
    </AuthContextProvider>
  );
}
