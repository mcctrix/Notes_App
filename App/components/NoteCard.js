import React, { useState } from "react";
import DetailNote from "./Modal/DetailNote";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import GlobalStyles from "./constants/GlobalStyles";

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
        <Text style={[styles.NoteText, GlobalStyles.Font]}>
          {props.note.value}
        </Text>
        <TouchableOpacity onPress={props.DeleteNote.bind(this, props.note.key)}>
          <Text style={[styles.CardText, GlobalStyles.Font]}>Delete</Text>
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
    borderBottomWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 10,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  NoteText: {
    color: "#ffffff",
    fontSize: 30,
  },
  CardText: {
    color: "#ffffff",
    fontSize: 30,
    textAlign: "center",
  },
});
