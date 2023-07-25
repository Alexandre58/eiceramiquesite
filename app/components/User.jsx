"use client";

import Link from "next/link";
import { AuthContext } from "../context/AuthContextProvider";
import { useContext } from "react";
import style from "../styles/_header.module.scss";

import React from "react";

const User = () => {
  //const context = useContext(AuthContext)
  const { user } = useContext(AuthContext);
  return (
    <>
      {user && (
        <Link className={style.header_div} href="/profil">
          Profil
        </Link>
      )}
      {/**  {!user && <Link href="/register">Register/login</Link>}*/}
    </>
  );
};

export default User;
