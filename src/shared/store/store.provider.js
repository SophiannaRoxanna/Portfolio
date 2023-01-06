import React, { createContext, useReducer } from "react";

export const StoreCtx = createContext();
export const DispatchCtx = createContext();

let store = {
  newData: {
    files: [],
  },
};

const StoreProvider = (props) => {
  const [newData, newDataDispatch] = useReducer({}, store.newData);
  return (
    <DispatchCtx.Provider value={newDataDispatch}>
      <StoreCtx.Provider value={newData}>{props.children}</StoreCtx.Provider>
    </DispatchCtx.Provider>
  );
};

export default StoreProvider;
