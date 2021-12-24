import React, { useEffect, useState, useContext } from "react";
import { FlatList } from "react-native";
import { Context } from "./GlobalStore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NoteCard from "./NoteCard";

export default function Note() {
  const context = useContext(Context);
  const [Notes, setNotes] = useState([]);
  useEffect(() => {
    DataObtain();

    // (async () => {
    //   await AsyncStorage.removeItem("Notes_Data");
    // })();
  }, [context.State]);
  const DataObtain = async () => {
    try {
      const Data = await AsyncStorage.getItem("Notes_Data");
      setNotes(() => {
        return JSON.parse(Data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const DeleteNote = async (key) => {
    const NoteData = await AsyncStorage.getItem("Notes_Data");
    const JsonData = JSON.parse(NoteData);
    const newNotes = JsonData.filter((item) => item.key != key);
    const JsonNotes = JSON.stringify(newNotes);
    await AsyncStorage.setItem("Notes_Data", JsonNotes);
    context.setState((prev) => ++prev);
    context.setNoteAlert((prev) => ++prev);
  };
  return (
    <FlatList
      // keyExtractor={(id, index) => {
      //   id.id;
      // }}
      data={Notes}
      renderItem={(item) => (
        <NoteCard DeleteNote={DeleteNote} note={item.item}></NoteCard>
      )}
    />
  );
}
