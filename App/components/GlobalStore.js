import React, { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Context = createContext({
  State: "",
  setState: "",
});

export default function GlobalStore(props) {
  const [InputVisibility, setInputVisibility] = useState(false);
  const [State, setState] = useState(0);
  const [NoteAddAlert, setNoteAddAlert] = useState(0);

  const NoteAddHandler = async (
    note,
    setEnteredNote,
    checkbox,
    setChkBox,
    description,
    setDes
  ) => {
    setNoteAddAlert((value) => ++value);
    setState((value) => ++value);
    setInputVisibility(false);
    if (note == "") {
      return;
    } else {
      const req = await AsyncStorage.getItem("Notes_Data");
      if (req == null) {
        const data = [
          { key: Date.now(), value: note, isFav: checkbox, Des: description },
        ];
        let jsondata = JSON.stringify(data);
        await AsyncStorage.setItem("Notes_Data", jsondata);
      } else {
        let database = JSON.parse(req);
        let added = [
          ...database,
          { key: Date.now(), value: note, isFav: checkbox, Des: description },
        ];
        let pushme = JSON.stringify(added);
        await AsyncStorage.setItem("Notes_Data", pushme);
      }
      setEnteredNote("");
      setDes("");
      setChkBox(false);
    }
  };
  return (
    <Context.Provider
      value={{
        State: State,
        setState: setState,
        NoteAdd: NoteAddHandler,
        InputVis: InputVisibility,
        setInputVis: setInputVisibility,
        NoteAlert: NoteAddAlert,
        setNoteAlert: setNoteAddAlert,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

// import GlobalStore from "react-native-global-state-hooks";

// const LocalStorageChangeIndicator = new GlobalStore(0);

// export const useGlobalStore = countStore.getHook();
