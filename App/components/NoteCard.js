import React from "react";

import { Text, StyleSheet, TouchableOpacity } from "react-native";

export default function NoteCard(props) {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.note_card}>
      <Text style={styles.NoteText}>{props.note.value}</Text>
      <TouchableOpacity onPress={props.DeleteNote.bind(this, props.note.key)}>
        <Text style={styles.CardText}>Delete</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  note_card: {
    width: "100%",
    height: 45,
    backgroundColor: "#055d75",
    marginVertical: 5,
    flexDirection: "row",
    padding: 5,
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  NoteText: {
    color: "#ffffff",
    fontSize: 25,
  },
  CardText: {
    color: "#ffffff",
    fontSize: 25,
  },
});
