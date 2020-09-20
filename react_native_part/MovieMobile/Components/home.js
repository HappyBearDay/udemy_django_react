import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TextInput } from 'react-native';

export default function Home(props) {

  const [name, setName] = useState("Krystian");

  return (
    <View style={styles.home}>
      <FlatList
        data={[
          {key: "Krystian"},
          {key: "Krystian1"},
          {key: "Krystian2"},
          {key: "Krystian3"},
          {key: "Krystian4"},
          {key: "Krystian5"},
          {key: "Krystian6"},
          {key: "Krystian7"},
          {key: "Krystian7"},
          {key: "Krystian7"},
          {key: "Krystian7"},
          {key: "Krystian7"},
          {key: "Krystian7"},
          {key: "Krystian7"},
          {key: "Krystian7"},
        ]}
        renderItem={
          ({item}, id)=> <Text style={styles.text} key={id}>{item.key}</Text>
      }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 40
  }
});
