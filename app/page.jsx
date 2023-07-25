"use client";
import Link from "next/link";
import style from "./styles/_page.module.scss";
import { AuthContext } from "./context/AuthContextProvider";
import { useContext } from "react";

export default function Home() {
  const { user } = useContext(AuthContext);
  return (
    <main className={style.main}>
      <h1>App idea</h1>
      <p>
        Trouver des idées ici{" "}
        <Link className={style.accueil_link_ideas} href="/ideas">
          Accéder a nos idées
        </Link>
      </p>
      <p>
        Créer ou mofifier Votre profil{" "}
        {user && (
          <Link className={style.accueil_link_ideas} href="/profil">
            Accéder à votre profil
          </Link>
        )}
        {!user && (
          <Link className={style.accueil_link_ideas} href="/register">
            Identifiez-vous
          </Link>
        )}
      </p>
    </main>
  );
}
