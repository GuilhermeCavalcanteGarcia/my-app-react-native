import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Box = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default Box;

const styles = StyleSheet.create({
  container: {
    borderWidth: 8,
    borderColor: 'coral',
    borderRadius: 15,
    flex: 1,
    marginVertical: 15,
    padding: 5,
  },
});
