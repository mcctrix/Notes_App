import React, { useState, useEffect, useContext } from "react";
import { View, Text, FlatList } from "react-native";
import Header from "./Header";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Context } from "./GlobalStore";
import NoteCard from "./NoteCard";

export default function Favourite() {
  const context = useContext(Context);
  const [Notes, setNotes] = useState([]);
  useEffect(() => {
    DataObtain();
  }, [context.State]);
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
    <View>
      <Header />
      <FlatList
        data={Notes}
        renderItem={(item) => (
          <NoteCard DeleteNote={DeleteNote} note={item.item}></NoteCard>
        )}
      />
    </View>
  );
}
