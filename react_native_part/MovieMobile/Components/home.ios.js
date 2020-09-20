import React, {useState} from 'react';
import { StyleSheet, Text, View, Platform} from 'react-native';

export default function Home(props) {

  const [name, setName] = useState("Krystian");

  return (
    <View style={styles.home}>
      <Text>"I'm on ios"</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: Platform.OS == "ios" ?'#fff': "#00FF00",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 40
  }
});
