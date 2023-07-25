"use client";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";

const Profil = () => {
  const { user } = useContext(AuthContext);
  return (
    <main>
      <h3>Profil</h3>
      <div>
        <p>Email: {user?.email}</p>
        {/**   <p> User id: {user?.uid}</p>
         <p> User jwt: {user?.jwt}</p>*/}
      </div>
    </main>
  );
};

export default Profil;
