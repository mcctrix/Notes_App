import React, { useState } from "react";
import NoteCard from "./components/NoteCard";
import InputNote from "./components/InputNote";
import Header from "./components/Header";

import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
} from "react-native";

export default function app() {
  const [Notes, setNotes] = useState([
    { key: Math.random(), value: "Learn React Native" },
    { key: Math.random(), value: "React is best" },
  ]);
  const [InputVisibility, setInputVisibility] = useState(false);

  const NoteAddHandler = (note, EN) => {
    setInputVisibility(false);
    if (note == "") {
      return;
    } else {
      setNotes(() => [
        ...Notes,
        { key: Math.random().toString(), value: note },
      ]);
      EN("");
    }
  };

  const DeleteNote = (key) => {
    setNotes((Notes) => {
      return Notes.filter((item) => item.key != key);
    });
  };

  return (
    <View style={styles.main}>
      <Header></Header>
      <InputNote
        visibility={InputVisibility}
        NoteAdd={NoteAddHandler}
      ></InputNote>
      <FlatList
        data={Notes}
        renderItem={(item) => (
          <NoteCard DeleteNote={DeleteNote} note={item.item}></NoteCard>
        )}
      />
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
    borderWidth: 2,
    borderRadius: 300,
    height: 60,
    width: 60,
    bottom: 20,
    right: 4,
  },
  AddButtonText: {
    lineHeight: 60,
    color: "red",
    fontSize: 60,
    alignSelf: "center",
  },
});
