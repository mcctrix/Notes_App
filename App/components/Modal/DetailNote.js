import React, { useEffect, useState } from "react";
import DetailNoteEditMode from "./DetailNoteEditMode";
import {
  Modal,
  StyleSheet,
  View,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import DetailNoteNormalMode from "./DetailNoteNormalMode";
export default function (props) {
  const [keyboardStatus, setkeyboardStatus] = useState(false);
  const [Editing, setEditing] = useState(false);

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
  const Editmode = () => {
    setEditing((prev) => !prev);
  };

  return (
    <Modal animationType="slide" transparent={true} visible={props.Display}>
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
              height: keyboardStatus ? "100%" : "65%",
              width: "95%",
            },
          ]}
        >
          {Editing ? (
            <DetailNoteEditMode
              title={props.Data.note.value}
              Des={props.Data.note.Des}
              IsFav={props.Data.note.isFav}
              id={props.Data.note.key}
              editmode={Editmode}
              DetailDis={props.ChangeDis}
              keyboardstatus={keyboardStatus}
            />
          ) : (
            <DetailNoteNormalMode Data={props} />
          )}
          <TouchableOpacity style={styles.EditButton} onPress={Editmode}>
            <Entypo name="edit" size={45} color="white" />
          </TouchableOpacity>
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
  ModalStyle: {
    borderRadius: 45,
    borderColor: "#0682a1",
    borderWidth: 7,
    padding: 24,
    width: "95%",
    backgroundColor: "white",
    position: "relative",
  },
  EditButton: {
    backgroundColor: "#055d75",
    width: 60,
    height: 60,
    position: "absolute",
    right: 20,
    top: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
});
