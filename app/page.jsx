import Link from "next/link";
import style from "./styles/index.module.scss";

export default function Home() {
  return (
    <main className={style.main}>
      <h1>App idea</h1>
      <p>
        Trouver des idées ici{" "}
        <Link className={style.accueil_link_ideas} href="/ideas">
          Accéder a nos idées
        </Link>
      </p>
    </main>
  );
}
