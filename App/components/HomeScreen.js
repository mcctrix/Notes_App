import React, { useContext, useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Context } from "./GlobalStore";
import Header from "./Header";
import InputNote from "./InputNote";
import Note from "./Note";
import NoNotes from "./NoNotes";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function HomeScreen() {
  const context = useContext(Context);
  const [NotesExist, setNotesExist] = useState(false);
  const [fontisloaded] = useFonts({
    Nunito: require("../assets/fonts/Nunito-VariableFont_wght.ttf"),
    Inconsolata: require("../assets/fonts/Inconsolata-Light.ttf"),
    Josefinsans: require("../assets/fonts/JosefinSans-Light.ttf"),
  });
  useEffect(async () => {
    const Notes = await AsyncStorage.getItem("Notes_Data");
    const JsonN = await JSON.parse(Notes);
    if (JsonN[0] === undefined) {
      return setNotesExist(false);
    } else {
      return setNotesExist(true);
    }
  }, [context.NoteAlert]);
  if (!fontisloaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.main}>
      <Header title="Home"></Header>
      <InputNote></InputNote>
      {NotesExist ? <Note /> : <NoNotes />}
      <TouchableOpacity
        style={styles.AddButton}
        onPress={() => context.setInputVis(true)}
      >
        <AntDesign
          name="addfile"
          size={50}
          color="white"
          style={styles.AddButtonText}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  AddButton: {
    position: "absolute",
    borderWidth: 1,
    borderColor: "#13e2ec",
    borderRadius: 300,
    height: 75,
    width: 75,
    bottom: 20,
    right: 4,
    backgroundColor: "#055d75",
  },
  AddButtonText: {
    lineHeight: 75,
    color: "white",
    alignSelf: "center",
  },
});
