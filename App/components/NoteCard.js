import React, { useState } from "react";
import DetailNote from "./Modal/DetailNote";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export default function NoteCard(props) {
  const [DetailNoteDisplay, setDetailNoteDisplay] = useState(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setDetailNoteDisplay(true);
        }}
        activeOpacity={0.6}
        style={styles.note_card}
      >
        <Text style={styles.NoteText}>{props.note.value}</Text>
        <TouchableOpacity onPress={props.DeleteNote.bind(this, props.note.key)}>
          <Text style={styles.CardText}>Delete</Text>
        </TouchableOpacity>
      </TouchableOpacity>
      <DetailNote
        Display={DetailNoteDisplay}
        Data={props}
        ChangeDis={setDetailNoteDisplay}
      />
    </>
  );
}

const styles = StyleSheet.create({
  note_card: {
    width: "100%",
    height: 55,
    backgroundColor: "#055d75",
    borderColor: "#ffffff",
    borderWidth: 1,
    borderRadius: 1,
    flexDirection: "row",
    padding: 5,
    paddingHorizontal: 10,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  NoteText: {
    color: "#ffffff",
    fontSize: 25,
  },
  CardText: {
    color: "#ffffff",
    fontSize: 25,
    textAlign: "center",
  },
});
