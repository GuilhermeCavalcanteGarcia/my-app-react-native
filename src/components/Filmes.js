import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import { filmes } from '../data/filmes';

const Filmes = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meus Filmes</Text>
      <FlatList
        data={filmes}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => Alert.alert('Filme Selecionado', item.nome)}
          >
            <Image style={styles.imagem} source={{ uri: item.imgUrl }} />
          </TouchableOpacity>
        )}
        horizontal
        ItemSeparatorComponent={() => <View style={styles.separador} />}
      />
    </View>
  );
};

export default Filmes;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: 'grey',
    flex: 1,
    alignItems: 'center',
  },
  titulo: {
    color: 'pink',
    fontSize: 35,
    marginHorizontal: 5,
    marginVertical: 10,
    alignSelf: 'center',
  },
  imagem: {
    width: 172,
    height: 256,
  },
  separador: {
    width: 15,
  },
});
