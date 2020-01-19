import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export const HomeScreen = () => {
  return (
    <LinearGradient
      colors={['#6A0DAD', '#7029a3', '#9963bf']}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.textMes}>Janeiro</Text>
        <Text style={styles.text}>Você gastou R$2000,0</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.contentTop}>
          <TouchableOpacity onPress={() => {}}>
            <MaterialIcons name="add-box" size={32} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.order} onPress={() => {}}>
            <Text style={[styles.text, { fontSize: 16 }]}>Order By</Text>
            <Entypo name="triangle-down" size={32} color="#fff" />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.contentBody}>
          <View style={styles.card}>
            <Text>Fone</Text>
            <Text>R$ 200,00</Text>
            <Text>12/02/2020</Text>
          </View>
          <View style={styles.card}>
            <Text>Fone</Text>
            <Text>R$ 200,00</Text>
            <Text>12/02/2020</Text>
          </View>
          <View style={styles.card}>
            <Text>Fone</Text>
            <Text>R$ 200,00</Text>
            <Text>12/02/2020</Text>
          </View>
          <View style={styles.card}>
            <Text>Fone</Text>
            <Text>R$ 200,00</Text>
            <Text>12/02/2020</Text>
          </View>
          <View style={styles.card}>
            <Text>Fone</Text>
            <Text>R$ 200,00</Text>
            <Text>12/02/2020</Text>
          </View>
          <View style={styles.card}>
            <Text>Fone</Text>
            <Text>R$ 200,00</Text>
            <Text>12/02/2020</Text>
          </View>
          <View style={styles.card}>
            <Text>Fone</Text>
            <Text>R$ 200,00</Text>
            <Text>12/02/2020</Text>
          </View>
          <View style={styles.card}>
            <Text>Fone</Text>
            <Text>R$ 200,00</Text>
            <Text>12/02/2020</Text>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 22,
  },
  header: {
    alignSelf: 'center',
    top: 100,
  },
  content: {
    top: 150,
    flex: 1,
  },
  contentTop: {
    flexDirection: 'row',
    margin: 50,
    justifyContent: 'space-between',
  },
  contentBody: {
    margin: 10,
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
  textMes: {
    backgroundColor: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 22,
    padding: 8,
    borderRadius: 5,
    margin: 5,
  },
  order: {
    flexDirection: 'row',
  },
});
