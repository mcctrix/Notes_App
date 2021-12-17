import React, { useState } from "react";

import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Text,
} from "react-native";

export default function (props) {
  const [EnteredNote, setEnteredNote] = useState("");

  const NoteInputHandler = (value) => {
    setEnteredNote(value);
  };

  return (
    <Modal visible={props.visibility} animationType="slide">
      <View style={styles.input_container}>
        <Text style={styles.Text}>Add Note</Text>
        <TextInput
          value={EnteredNote}
          onChangeText={NoteInputHandler}
          style={styles.inputfield}
          onSubmitEditing={props.NoteAdd.bind(this, EnteredNote)}
        />
        <View style={styles.Buttons}>
          <TouchableOpacity
            title="Add"
            style={styles.InputButton}
            onPress={props.NoteAdd.bind(this, EnteredNote, setEnteredNote)}
          >
            <Text style={styles.InputButtonText}>Add</Text>
          </TouchableOpacity>

          <TouchableOpacity
            title="Add"
            style={styles.InputButton}
            onPress={props.NoteAdd.bind(this, "")}
          >
            <Text style={styles.InputButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputfield: {
    borderColor: "black",
    padding: 7,
    width: "80%",
    borderWidth: 1,
  },
  input_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Text: {
    fontSize: 30,
    marginBottom: 10,
  },
  InputButton: {
    marginLeft: 10,
  },
  InputButtonText: {
    marginTop: 15,
    height: 40,
    width: 90,
    backgroundColor: "red",
    textAlign: "center",
    lineHeight: 40,
    color: "#ffffff",
    fontSize: 25,
  },
  Buttons: {
    flexDirection: "row",
  },
});
