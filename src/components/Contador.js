import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

const Contador = () => {
  //   let contador = 0;
  const [contador, setContador] = useState(0);
  const [newContador, setNewContador] = useState(0);

  function contar() {
    setContador(contador + 1);
  }
  function newContar() {
    setNewContador(newContador + 1);
  }
  return (
    <View>
      <Text style={styles.texto}> Contador - {contador}</Text>
      <TouchableOpacity styles={styles.botao} onPress={contar}>
        <Text style={styles.textoBotao}>Contar</Text>
      </TouchableOpacity>
      <Text style={styles.texto}> Novo Contador - {newContador}</Text>
      <TouchableOpacity styles={styles.botao} onPress={newContar}>
        <Text style={styles.textoBotao}>Contar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Contador;

const styles = StyleSheet.create({
  texto: {
    color: 'white',
    fontSize: 30,
  },
  botao: {
    backgroundColor: '#6B7280',
    padding: 30,
    width: 100,
    alignSelf: 'center',
    margin: 10,
  },
  textoBotao: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});
