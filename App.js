import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-web';
import { useState } from 'react';

export default function App() {

  const [feladat, setFeladat] = useState([]);

  return (
    <View style={styles.container}>
      <Text style={styles.fejlec}>Estis ListaAPP</Text>
      <TextInput
        style={styles.input}
        placeholder="Add meg a feladatot"
        value={feladat}
        onChangeText={(text) => setFeladat(text)} // Kisbetűs onChangeText
      />
      <TouchableOpacity style={styles.ButtonText} onPress={() => setFeladat('')}>Törlés</TouchableOpacity>
      <Text>Beírt szöveg: {feladat}</Text>
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  fejlec: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: 'green',
    backgroundColor: 'lightblue',
  },
  input: {
    padding: 20,
    margin: 30,
    backgroundColor: 'lightgrey',
    fontSize: 10,
    fontWeight: 'bold',

  },
  ButtonText:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    backgroundColor: 'lightblue',
  }
});
