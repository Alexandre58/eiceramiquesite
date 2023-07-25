"use client";
import React, { useContext } from "react";
import Link from "next/link";
import style from "../styles/_header.module.scss";
import User from "./User";
import { AuthContext } from "../context/AuthContextProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <header>
      <nav className={style.header_nav_container}>
        <Link className={style.header_div} href="/">
          Accueil
        </Link>

        <Link className={style.header_div} href="/ideas">
          ideas
        </Link>

        <Link className={style.header_div} href="/newidea">
          News idea
        </Link>

        {!user ? (
          <Link className={style.header_div} href="/register">
            Connection
          </Link>
        ) : (
          ""
        )}
        <User />
      </nav>
    </header>
  );
};

export default Header;
