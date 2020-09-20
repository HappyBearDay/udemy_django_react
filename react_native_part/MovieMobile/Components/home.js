import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Home(props) {

  const [name, setName] = useState("Krystian");

  return (
    <View style={styles.home}>
      <Text style={styles.text}>Btn</Text>
      <Text style={styles.name} >{name}</Text>
      <Text style={styles.text}>Btn</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
  },
  name: {
    color: "#00ff00",
    marginTop: 30,
    flex: 5
  },
  text: {
    flex: 1
  }
});
