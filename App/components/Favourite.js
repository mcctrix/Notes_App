import React, { useState, useEffect, useContext } from "react";
import { View, FlatList, StyleSheet, Platform, StatusBar } from "react-native";
import Header from "./Header";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Context } from "./GlobalStore";
import NoteCard from "./NoteCard";
import NoNotes from "./NoNotes";

export default function Favourite() {
  const context = useContext(Context);
  const [NotesExist, setNotesExist] = useState(false);
  const [Notes, setNotes] = useState([]);
  useEffect(async () => {
    DataObtain();
    const Notes = await AsyncStorage.getItem("Notes_Data");
    const JsonN = await JSON.parse(Notes);
    if (JsonN[0] === undefined) {
      return setNotesExist(false);
    } else {
      return setNotesExist(true);
    }
  }, [context.NoteAlert]);
  const DataObtain = async () => {
    try {
      const Data = await AsyncStorage.getItem("Notes_Data");
      const JsonData = JSON.parse(Data);
      const FavNotes = JsonData.filter((item) => item.isFav == true);
      setNotes(FavNotes);
    } catch (error) {
      console.log(error);
    }
  };
  const DeleteNote = async (key) => {
    const Notes = await AsyncStorage.getItem("Notes_Data");
    const JsonNotes = JSON.parse(Notes);

    const newNotes = JsonNotes.filter((item) => item.key != key);
    const JsonNote = JSON.stringify(newNotes);
    await AsyncStorage.setItem("Notes_Data", JsonNote);
    context.setState((prev) => ++prev);
    context.setNoteAlert((prev) => ++prev);

    // const NoteData = await AsyncStorage.getItem("Notes_Data");
    // const JsonData = JSON.parse(NoteData);

    // await AsyncStorage.setItem("Notes_Data", JsonNotes);
    // context.setState((prev) => ++prev);
    // context.setNoteAlert((prev) => ++prev);
  };
  return (
    <View style={styles.Container}>
      <Header title="Favourite Notes" />
      {NotesExist ? (
        <FlatList
          data={Notes}
          renderItem={(item) => (
            <NoteCard DeleteNote={DeleteNote} note={item.item}></NoteCard>
          )}
        />
      ) : (
        <NoNotes />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
