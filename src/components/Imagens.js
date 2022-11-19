import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const Imagens = () => {
  return (
    <View>
      <TouchableOpacity>
        <Image source={require('../../assets/brasil-og.webp')} />
      </TouchableOpacity>
      <Image
        style={styles.image}
        source={{ uri: 'https://source.unsplash.com/random' }}
      />
    </View>
  );
};

export default Imagens;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});
