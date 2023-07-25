"use client";

const { createContext, useState } = require("react");

export const AuthContext = createContext();

import React from "react";

const AuthContextProvider = ({ children }) => {
  //création d'un etat nul (non connecté) pour l'user
  const [user, setUser] = useState();
  //function pour rafraichir l'etat (connecté ou plus connecté)
  const refreshLoginState = (data) => {
    setUser(data);
  };
  return (
    <AuthContext.Provider value={{ user, refreshLoginState }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
