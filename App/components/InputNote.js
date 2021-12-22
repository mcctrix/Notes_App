import React, { useState, useContext } from "react";
import { Context } from "./GlobalStore";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Text,
} from "react-native";

export default function () {
  const Store = useContext(Context);
  const [EnteredNote, setEnteredNote] = useState("");
  const NoteInputHandler = (value) => {
    setEnteredNote(value);
  };
  const AddNote = () => {
    Store.NoteAdd(EnteredNote, setEnteredNote);
  };
  return (
    <Modal visible={Store.InputVis} animationType="slide">
      <View style={styles.input_container}>
        <Text style={styles.Text}>Add Note</Text>
        <TextInput
          value={EnteredNote}
          onChangeText={NoteInputHandler}
          style={styles.inputfield}
          onSubmitEditing={AddNote}
        />

        <View style={styles.Buttons}>
          <TouchableOpacity
            title="Add"
            style={styles.InputButton}
            onPress={AddNote}
          >
            <Text style={styles.InputButtonText}>Add</Text>
          </TouchableOpacity>

          <TouchableOpacity
            title="Cancel"
            style={styles.InputButton}
            onPress={Store.NoteAdd.bind(this, "")}
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
    backgroundColor: "#055d75",
    textAlign: "center",
    lineHeight: 40,
    color: "#ffffff",
    fontSize: 25,
  },
  Buttons: {
    flexDirection: "row",
  },
});
