import React, { useContext } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Context } from "./GlobalStore";
import Header from "./Header";
import InputNote from "./InputNote";
import Note from "./Note";

export default function HomeScreen() {
  const context = useContext(Context);

  return (
    <View style={styles.main}>
      <Header></Header>
      <InputNote></InputNote>
      <Note></Note>
      <TouchableOpacity
        style={styles.AddButton}
        onPress={() => context.setInputVis(true)}
      >
        <Text style={styles.AddButtonText}>&#x2B;</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 23,
    flex: 1,
    borderWidth: 1,
    borderColor: "#137793",
  },
  AddButton: {
    position: "absolute",
    borderWidth: 1,
    borderColor: "#13e2ec",
    borderRadius: 300,
    height: 60,
    width: 60,
    bottom: 20,
    right: 4,
    backgroundColor: "#055d75",
  },
  AddButtonText: {
    lineHeight: 60,
    color: "white",
    fontSize: 60,
    alignSelf: "center",
  },
});
