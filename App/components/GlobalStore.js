import React, { createContext, useState } from "react";

export const Context = createContext({
  State: "",
  setState: "",
});

export default function GlobalStore(props) {
  const [State, setState] = useState(0);

  return (
    <Context.Provider
      value={{
        State: State,
        setState: setState,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

// import GlobalStore from "react-native-global-state-hooks";

// const LocalStorageChangeIndicator = new GlobalStore(0);

// export const useGlobalStore = countStore.getHook();
