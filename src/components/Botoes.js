import {
  Button,
  StyleSheet,
  View,
  Alert,
  TouchableOpacity,
  Text,
} from 'react-native';
import React from 'react';

const Botoes = () => {
  function botaoPressionado(num) {
    // console.warn('Botão pressionado ' + num);
    Alert.alert('BOTÃO CLICADO', 'PARABÉNS, VOCÊ CLICOU NO BOTÃO!');
  }
  return (
    <View>
      <Button
        title="Clique"
        onPress={() => botaoPressionado(5)}
        color="coral"
      ></Button>
      <TouchableOpacity style={styles.botaoOpacity}>
        <Text>Clique</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Botoes;

const styles = StyleSheet.create({
  botaoOpacity: {
    marginTop: 10,
    backgroundColor: 'blueviolet',
    borderRadius: 5,
    padding: 5,
    alignItems: 'center',
  },
});
