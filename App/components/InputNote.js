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
import { Switch } from "react-native-elements";

export default function () {
  const [checkbox, setChekbox] = useState(false);
  const Store = useContext(Context);
  const [EnteredNote, setEnteredNote] = useState("");
  const [Description, setDescription] = useState("");
  const NoteInputHandler = (value) => {
    setEnteredNote(value);
  };
  const AddNote = () => {
    Store.NoteAdd(
      EnteredNote,
      setEnteredNote,
      checkbox,
      setChekbox,
      Description,
      setDescription
    );
  };
  const CheckFunc = () => {
    setChekbox((prev) => {
      return !prev;
    });
  };
  return (
    <Modal animationType="slide" transparent={true} visible={Store.InputVis}>
      <View style={styles.Container}>
        <View style={styles.ModalStyle}>
          <Text style={styles.Text}>Add Note</Text>
          <TextInput
            value={EnteredNote}
            onChangeText={NoteInputHandler}
            style={styles.inputfield}
            placeholder="Title"
            placeholderTextColor="#055d75"
          />
          <TextInput
            value={Description}
            onChangeText={(value) => setDescription(value)}
            autoCapitalize="sentences"
            placeholder="Type your note description...."
            placeholderTextColor="#055d75"
            style={styles.InputDescription}
          />
          <View
            style={{
              flexDirection: "row",
              position: "relative",
            }}
          >
            <Text style={{ fontSize: 25 }}>Favourite: </Text>
            <Switch value={checkbox} onValueChange={CheckFunc} />
          </View>
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
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputfield: {
    borderColor: "black",
    padding: 7,
    width: "46%",
    borderWidth: 1,
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
    position: "absolute",
    flexDirection: "row",
    bottom: "5%",
    alignSelf: "center",
  },
  InputDescription: {
    width: "80%",
    borderColor: "black",
    paddingLeft: 7,
    borderWidth: 1,
    marginTop: "5%",
    height: "20%",
  },
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ModalStyle: {
    borderRadius: 45,
    borderColor: "#0682a1",
    borderWidth: 7,
    padding: 24,
    height: "65%",
    width: "95%",
    backgroundColor: "white",
    position: "relative",
  },
  Button: {
    position: "absolute",
    bottom: "4%",
    left: "47%",
    width: 60,
    backgroundColor: "black",
    height: 50,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonText: {
    right: 10,
    fontSize: 27,
    color: "white",
  },
  TitleStyle: {
    fontSize: 55,
  },
  FavStyle: {
    fontSize: 33,
    color: "tomato",
  },
});
