import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import { contatos } from '../data/contatos';
import Contato from './Contato';

const Lista2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meus Contatos</Text>
      <FlatList
        data={contatos}
        renderItem={({ item }) => <Contato contato={item} />}
      />
    </View>
  );
};

export default Lista2;

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
