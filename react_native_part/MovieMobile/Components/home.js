import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Image, ImageBackground } from 'react-native';

export default function Home(props) {

  const [name, setName] = useState("Krystian");

  return (
    <View style={styles.home}>
      <ImageBackground
        style={{width:"100%", height:"100%"}}
        source={require("../assets/apple.jpeg")}>
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
          {key: "Krystian8"},
          {key: "Krystian9"},
          {key: "Krystian10"},
          {key: "Krystian11"},
          {key: "Krystian12"},
          {key: "Krystian13"},
          {key: "Krystian14"},
        ]}
        renderItem={
          ({item}, id)=> <Text style={styles.text} key={id}>{item.key}</Text>
      }
      />
      </ImageBackground>
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
