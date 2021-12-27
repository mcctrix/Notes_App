import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
} from "react-native";
import GlobalStyles from "../constants/GlobalStyles";
import { Context } from "../GlobalStore";
import { Switch } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function DetailNoteEditMode(props) {
  const [keyboardStatus, setkeyboardStatus] = useState(false);
  const context = useContext(Context);
  const [CheckBox, setCheckBox] = useState(false);
  const [EditTitle, setEditTitle] = useState("");
  const [EditDes, setEditDes] = useState("");
  const EditModeData = () => {
    setEditTitle(props.title);
    setEditDes(props.Des);
    setCheckBox(props.IsFav);
  };
  useEffect(() => {
    EditModeData();
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
  // ALL funcy Stuff
  const AddData = async () => {
    const Database = await AsyncStorage.getItem("Notes_Data");
    const JsonData = JSON.parse(Database);
    const EditedData = JsonData.map((x) => {
      if (x.key == props.id) {
        x.value = EditTitle;
        x.isFav = CheckBox;
        x.Des = EditDes;
      }
      return x;
    });
    const JsonEdited = JSON.stringify(EditedData);
    await AsyncStorage.setItem("Notes_Data", JsonEdited);
    props.editmode();
    props.DetailDis(false);
    context.setState((v) => ++v);
    context.setNoteAlert((v) => ++v);
  };
  const CancelAction = () => {
    props.editmode();
    props.DetailDis(false);
  };
  return (
    <View style={styles.EditmodeDiv}>
      <Text
        style={[
          styles.EditmodeText,
          GlobalStyles.Font,
          {
            fontSize: keyboardStatus ? 20 : 40,
          },
        ]}
      >
        Title:
      </Text>
      <TextInput
        value={EditTitle}
        onChangeText={(value) => {
          setEditTitle(value);
        }}
        multiline
        style={[
          styles.InputEdit,
          GlobalStyles.Font,
          {
            height: keyboardStatus ? 40 : 50,
            width: keyboardStatus ? "60%" : "100%",
          },
        ]}
      />
      <Text
        style={[
          styles.EditmodeText,
          GlobalStyles.Font,
          {
            fontSize: keyboardStatus ? 20 : 40,
          },
        ]}
      >
        Description:
      </Text>
      <TextInput
        multiline
        value={EditDes}
        onChangeText={(value) => {
          setEditDes(value);
        }}
        style={[
          styles.InputEdit,
          { height: 80 },
          GlobalStyles.Font,
          {
            height: keyboardStatus ? 40 : 70,
          },
        ]}
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
        <Switch
          value={CheckBox}
          onValueChange={(value) => {
            setCheckBox(value);
          }}
        />
      </View>
      <View style={styles.EditButtonDiv}>
        <TouchableOpacity onPress={AddData} style={styles.EditModeButton}>
          <Text style={[styles.ButtonText, GlobalStyles.Font]}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={CancelAction}
          style={[styles.EditModeButton]}
        >
          <Text style={[styles.ButtonText, GlobalStyles.Font]}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  EditButtonDiv: {
    position: "absolute",
    bottom: 1,
    left: 70,
    height: 50,
    width: 300,
    flexDirection: "row",
    alignContent: "center",
  },
  EditModeButton: {
    backgroundColor: "#055d75",
    marginHorizontal: 5,
    height: 50,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  InputEdit: {
    height: 50,
    width: "100%",
    borderWidth: 1,
    marginVertical: 10,
    fontSize: 30,
  },
  EditmodeDiv: {
    flex: 1,
  },
  EditmodeText: {
    fontSize: 40,
  },
  ButtonText: {
    fontSize: 27,
    color: "white",
  },
});
