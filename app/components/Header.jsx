import React from "react";
import Link from "next/link";
import style from "../styles/index.module.scss";

const Header = () => {
  return (
    <header>
      <nav className={style.header_nav_container}>
        <div className={style.header_div}>
          <Link href="/">Accueil</Link>
        </div>
        <div className={style.header_div}>
          <Link href="/ideas">ideas</Link>
        </div>
        <div className={style.header_div}>
          <Link href="/register">register</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
