import React from "react";
import style from "../styles/_ideas.module.scss";

const Idea = ({ data }) => {
  const { id, title, description } = data;
  return (
    <div className={style.main_ideas_div} key={id}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Idea;
