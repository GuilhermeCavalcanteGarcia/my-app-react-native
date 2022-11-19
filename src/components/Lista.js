import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { contatos } from '../data/contatos';
import Contato from './Contato';
const Lista = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meus Contatos</Text>
      <ScrollView>
        {contatos.map((pessoa) => (
          <Contato key={pessoa.id} pessoa={pessoa}></Contato>
        ))}
      </ScrollView>
    </View>
  );
};

export default Lista;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: 'grey',
    flex: 1,
  },
  titulo: {
    color: 'pink',
    fontSize: 35,
    marginHorizontal: 5,
    marginVertical: 10,
    alignSelf: 'center',
  },
});
