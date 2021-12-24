import React, { useContext, useState, useEffect } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Context } from "./GlobalStore";
import Header from "./Header";
import InputNote from "./InputNote";
import Note from "./Note";
import NoNotes from "./NoNotes";

export default function HomeScreen() {
  const context = useContext(Context);
  const [NotesExist, setNotesExist] = useState(false);
  useEffect(async () => {
    const Notes = await AsyncStorage.getItem("Notes_Data");
    const JsonN = await JSON.parse(Notes);
    if (JsonN[0] === undefined) {
      return setNotesExist(false);
    } else {
      return setNotesExist(true);
    }
  }, [context.NoteAlert]);
  return (
    <View style={styles.main}>
      <Header></Header>
      <InputNote></InputNote>
      {NotesExist ? <Note /> : <NoNotes />}
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
