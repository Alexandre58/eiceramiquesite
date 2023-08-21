import React from "react";
import style from "../styles/_ideas.module.scss";
import Link from "next/link";

const Idea = ({ data }) => {
  const { id, title, description } = data;
  return (
    <div className={style.main_ideas_div} key={id}>
      <h2>{title}</h2>
      <p>{description}</p>
      {/**lien descriptif vers les ideas personnalisés ,on se sert de l'id qui fait la key dans le map */}
      <Link className={style.lnk} href={`/ideas/${id}`}>
        Voir les détails...
      </Link>
    </div>
  );
};

export default Idea;
