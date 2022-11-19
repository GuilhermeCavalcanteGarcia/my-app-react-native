import { Text, TextInput, StyleSheet } from 'react-native';

export default function Formulario() {
  return (
    <>
      <Text>Nome</Text>
      <TextInput placeholder="Digite seu nome" />
    </>
  );
}
const estilos = StyleSheet.create({
  label: {
    color: 'white',
  },
  input: {
    color: 'black',
    backgroundColor: '#E5E7EB',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
});
