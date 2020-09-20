import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Home(props) {

  const [name, setName] = useState("Krystian");

  return (
    <View style={styles.container}>
      <Text>{props.msg}</Text>
      <Text>{name}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
