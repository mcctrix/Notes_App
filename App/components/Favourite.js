import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import Header from "./Header";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NoteCard from "./NoteCard";

export default function Favourite() {
  const [Notes, setNotes] = useState([]);
  useEffect(() => {
    DataObtain();
  }, []);
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
    const newNotes = Notes.filter((item) => item.key != key);
    const JsonNotes = JSON.stringify(newNotes);
    await AsyncStorage.setItem("Notes_Data", JsonNotes);
    context.setState((prev) => ++prev);
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
