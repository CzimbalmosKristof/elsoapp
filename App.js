import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList } from 'react-native';
import { TextInput } from 'react-native-web';
import { useState } from 'react';

export default function App() {

  const [feladat, setFeladat] = useState([]);
  const [feladatok, setFeladatok] = useState([]);
  const [szam, setSzam] = useState(0);
  const [javitindex, SetJavitindex] = useState(-1);

  const addFeladat = () => {
    if (feladat !== '') {
      if (javitindex > -1) {
        const ujFeladatok = [...feladatok];
        ujFeladatok[javitindex] = feladat;
        setFeladatok(ujFeladatok);
        SetJavitindex(-1);
      }
    } else {
      setFeladat(feladat);
      setFeladatok([...feladatok, feladat]);
      alert('Kérlek adj meg egy feladatot!');
    }
  }

  const torolFeladat = (index) => {
    const ujFeladatok = [...feladatok];
    ujFeladatok.splice(index, 1);
    setFeladatok(ujFeladatok);
  }

  const javitFeladat = (index) => {
    let jfeladat = feladatok[index];
    setFeladat(jfeladat);
    SetJavitindex(index);

  }

  const renderElem = ({ item, index}) => (
    <View style={styles.feladat}>
      <Text style={styles.feladatText}>{item}</Text>
      <View style={styles.gombPanel}>
        <TouchableOpacity onPress={()=>javitFeladat(index)}  >
          <Text style={styles.JavitGomb}>Mentés</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>torolFeladat(index)} >
          <Text style={styles.TorolGomb} >Törlés</Text>
        </TouchableOpacity>
      </View>
    </View>
  );




  return (
    <View style={styles.container}>
      <Text style={styles.fejlec}>Estis ListaAPP</Text>
      <TextInput
        style={styles.input}
        placeholder="Add meg a feladatot"
        value={feladat}
        onChangeText={(text) => setFeladat(text)} // Kisbetűs onChangeText
      />
      <TouchableOpacity style={styles.ButtonText} onPress={() => setFeladat('')}><>Törlés</></TouchableOpacity>
      <TouchableOpacity style={styles.ButtonText} onPress={addFeladat}><>Listához adás</></TouchableOpacity>
      <Text>Beírt szöveg: {feladat}</Text>
      <FlatList data={feladatok}
        renderItem={renderElem}
      />
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
  ButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    backgroundColor: 'lightblue',
  },
  feladat:{
    flexDirection: 'row',
  },
  feladatText:{
    fontSize: 20,
  },
  gombPanel:{
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  JavitGomb:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    color: 'black',
    borderColor: 'black',
    border:3  ,
    borderWidth: 3,
    backgroundColor: 'green',
  },
  TorolGomb:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderColor: 'black',
    border:3  ,
    borderWidth: 3,
    backgroundColor: 'red',
  },
});
