import React, { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Context = createContext({
  State: "",
  setState: "",
});

export default function GlobalStore(props) {
  const [InputVisibility, setInputVisibility] = useState(false);
  const [State, setState] = useState(0);
  const NoteAddHandler = async (note, setEnteredNote) => {
    setState((value) => ++value);
    setInputVisibility(false);
    if (note == "") {
      return;
    } else {
      const req = await AsyncStorage.getItem("Notes_Data");
      if (req == null) {
        const data = [{ key: Date.now(), value: note, isFav: false }];
        let jsondata = JSON.stringify(data);
        await AsyncStorage.setItem("Notes_Data", jsondata);
      } else {
        let database = JSON.parse(req);
        let added = [
          ...database,
          { key: Date.now(), value: note, isFav: false },
        ];
        let pushme = JSON.stringify(added);
        await AsyncStorage.setItem("Notes_Data", pushme);
      }
      setEnteredNote("");
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
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

// import GlobalStore from "react-native-global-state-hooks";

// const LocalStorageChangeIndicator = new GlobalStore(0);

// export const useGlobalStore = countStore.getHook();
