import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export const SpendCards = () => {
    return(
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
    );
}

const styles = StyleSheet.create({
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
    }
})