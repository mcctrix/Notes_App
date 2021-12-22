import React, { useState, useContext } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Context } from "./GlobalStore";
import Header from "./Header";
import InputNote from "./InputNote";
import Note from "./Note";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen() {
  const [InputVisibility, setInputVisibility] = useState(false);
  const context = useContext(Context);

  const NoteAddHandler = async (note, setEnteredNote) => {
    context.setState((value) => ++value);
    setInputVisibility(false);
    if (note == "") {
      return;
    } else {
      const req = await AsyncStorage.getItem("Notes_Data");
      if (req == null) {
        const data = [{ key: Date.now(), value: note, isFav: false }];
        let jsondata = JSON.stringify(data);
        await AsyncStorage.setItem("Notes_Data", jsondata);
      } else {
        let database = JSON.parse(req);
        let added = [
          ...database,
          { key: Date.now(), value: note, isFav: false },
        ];
        let pushme = JSON.stringify(added);
        await AsyncStorage.setItem("Notes_Data", pushme);
      }
      setEnteredNote("");
    }
  };

  return (
    <View style={styles.main}>
      <Header></Header>
      <InputNote
        visibility={InputVisibility}
        NoteAdd={NoteAddHandler}
      ></InputNote>
      <Note></Note>
      <TouchableOpacity
        style={styles.AddButton}
        onPress={() => setInputVisibility(true)}
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
