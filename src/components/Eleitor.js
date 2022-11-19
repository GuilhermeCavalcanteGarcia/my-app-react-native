import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Eleitor = ({ nome, idade }) => {
  return (
    <View
      style={[
        styles.container,
        idade >= 16 ? styles.containerElegivel : styles.containerInelegivel,
      ]}
    >
      <Text style={styles.textoEleitor}>Eleitor(a): {nome}</Text>

      {idade >= 16 ? (
        <Text style={styles.textoElegivel}>Pode votar!</Text>
      ) : (
        <Text style={styles.textoInelegivel}>Não pode votar</Text>
      )}
    </View>
  );
};

export default Eleitor;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1F2937',
    borderRadius: 7,
    padding: 10,
    marginVertical: 5,
  },
  textoEleitor: {
    fontSize: 30,
    color: 'white',
  },
  textoElegivel: {
    fontSize: 20,
    color: '#10B981',
  },
  textoInelegivel: {
    fontSize: 20,
    color: '#EF4444',
  },
  containerElegivel: {
    backgroundColor: '#064E3B',
  },
  containerInelegivel: {
    backgroundColor: '#7F1D1D',
  },
});
