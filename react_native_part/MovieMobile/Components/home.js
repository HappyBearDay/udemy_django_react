import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Home(props) {

  const [name, setName] = useState("Krystian");

  return (
    <View style={styles.home}>
      <Text style={styles.name} >{name}</Text>
      <TextInput
        style={{height: 40, backgroundColor: "red"}}
        value={name}
        placeholder="Type in your name"
        onChangeText={(text)=> setName(text)}
      />

      <Button title="CLICK ME"
        onPress={()=> alert(name + " You clicked the button")}
      />
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
    marginBottom: 30,
  }
});
