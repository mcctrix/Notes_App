import React, { useState, useContext, useEffect } from "react";
import { Context } from "./GlobalStore";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Text,
  Keyboard,
} from "react-native";
import { Switch } from "react-native-elements";
import GlobalStyles from "./constants/GlobalStyles";

export default function () {
  const [keyboardStatus, setkeyboardStatus] = useState(false);
  const [checkbox, setChekbox] = useState(false);
  const Store = useContext(Context);
  const [EnteredNote, setEnteredNote] = useState("");
  const [Description, setDescription] = useState("");
  const NoteInputHandler = (value) => {
    setEnteredNote(value);
  };
  useEffect(() => {
    const keyboardshown = Keyboard.addListener("keyboardDidShow", () => {
      setkeyboardStatus(true);
    });
    const keyboardhide = Keyboard.addListener("keyboardDidHide", () => {
      setkeyboardStatus(false);
    });
    return () => {
      keyboardshown.remove();
      keyboardhide.remove();
    };
  }, []);
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
  const clearField = () => {
    Store.setInputVis(false);
    setEnteredNote("");
    setDescription("");
    setChekbox("");
  };
  const CheckFunc = () => {
    setChekbox((prev) => {
      return !prev;
    });
  };
  return (
    <Modal animationType="slide" transparent={true} visible={Store.InputVis}>
      <View
        style={[
          styles.Container,
          {
            justifyContent: keyboardStatus ? "flex-start" : "center",
          },
        ]}
      >
        <View
          style={[
            styles.ModalStyle,
            {
              height: keyboardStatus ? "100%" : "60%",
              width: "95%",
            },
          ]}
        >
          <Text style={[styles.Text, GlobalStyles.Font]}>Add Note</Text>
          <TextInput
            value={EnteredNote}
            onChangeText={NoteInputHandler}
            style={[styles.inputfield, GlobalStyles.Font]}
            placeholder="Title"
            placeholderTextColor="#055d75"
          />
          <TextInput
            value={Description}
            multiline
            onChangeText={(value) => setDescription(value)}
            autoCapitalize="sentences"
            placeholder="Type your note description...."
            placeholderTextColor="#055d75"
            style={[styles.InputDescription, GlobalStyles.Font]}
          />
          <View
            style={{
              flexDirection: "row",
              position: "relative",
            }}
          >
            <Text style={[{ fontSize: 25, marginRight: 6 }, GlobalStyles.Font]}>
              Favourite:
            </Text>
            <Switch value={checkbox} onValueChange={CheckFunc} />
          </View>
          <View style={styles.Buttons}>
            <TouchableOpacity
              title="Add"
              style={styles.InputButton}
              onPress={AddNote}
            >
              <Text style={[styles.InputButtonText, GlobalStyles.Font]}>
                Add
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              title="Cancel"
              style={styles.InputButton}
              onPress={clearField}
            >
              <Text style={[styles.InputButtonText, GlobalStyles.Font]}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  Container: {
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
    position: "absolute",
    flexDirection: "row",
    bottom: "5%",
    alignSelf: "center",
  },
  InputDescription: {
    width: "90%",
    borderColor: "black",
    paddingLeft: 7,
    borderWidth: 1,
    marginTop: "5%",
    height: "20%",
    fontSize: 25,
  },
  inputfield: {
    borderColor: "black",
    padding: 7,
    width: "90%",
    borderWidth: 1,
    fontSize: 25,
  },
  ModalStyle: {
    borderRadius: 45,
    borderColor: "#0682a1",
    borderWidth: 7,
    padding: 24,
    backgroundColor: "white",
    position: "relative",
  },
});
