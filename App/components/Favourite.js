import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import Header from "./Header";
import NoteCard from "./NoteCard";

export default function Favourite() {
  const [Notes, setNotes] = useState([]);
  useEffect(() => {
    DataObtain();
  }, []);
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
  return (
    <View>
      <Header />
      <Text>Hello</Text>
      <FlatList
        data={Notes}
        renderItem={(item) => (
          <NoteCard DeleteNote={DeleteNote} note={item.item}></NoteCard>
        )}
      />
    </View>
  );
}
