import React, { useState, createContext } from "react";
import t from "prop-types";

export const drawerContext = createContext();

export const DrawerProvider = ({ children }) => {
  const [isDrawerActive, setIsDrawerActive] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerActive(!isDrawerActive);
  };

  return (
    <drawerContext.Provider value={{ toggleDrawer, isDrawerActive }}>
      {children}
    </drawerContext.Provider>
  );
};

DrawerProvider.propTypes = {
  children: t.node.isRequired,
};
