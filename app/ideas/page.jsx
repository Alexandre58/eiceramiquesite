import React from "react";
import style from "../styles/index.module.scss";
import Idea from "../components/Idea";

//APPEL DE L'API
const fetchIdeas = async () => {
  const res = await fetch("http://localhost:3000/api/ideas");
  const ideas = await res.json();
  return ideas;
};
const ideas = async () => {
  const ideas = await fetchIdeas();
  console.log("*********reçu du fetch*************");
  console.log(ideas);

  return (
    <main className={style.main_ideas_container}>
      {ideas.length && ideas.map((idea) => <Idea data={idea} />)}
    </main>
  );
};

export default ideas;
