import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
const contato = ({ contato }) => {
  return (
    <View style={styles.contato}>
      <Text style={styles.contatoNome}> Nome - {contato.nome}</Text>
      <Text style={styles.contatoTelefone}> Telefone - {contato.telefone}</Text>
      <Text style={styles.contatoEmail}> Email - {contato.email}</Text>
    </View>
  );
};

export default contato;

const styles = StyleSheet.create({
  contato: {
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 15,
    padding: 10,
    backgroundColor: '#D1D5D8',
  },
  contatoNome: {
    color: 'black',
    fontSize: 19,
  },
  contatoTelefone: {
    fontSize: 17,
    color: 'black',
  },
  contatoEmail: {
    fontSize: 14,
    color: '#4F46E5',
  },
});
