"use client";
import React, { useState } from "react";
import Form from "../components/Form";
import style from "../styles/_form.module.scss";

const newidea = () => {
  //POUR FORMULAIRE
  const [ideaTitle, setIdeaTitle] = useState("");
  const [ideaDescription, setIdeaDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const URL = "http://localhost:3000/api/ideas";
    const data = { title: ideaTitle, description: ideaDescription };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(URL, options);
    const result = await response.json();
    console.log({ resultFromClient: result });
    return result;
  };
  return (
    <div>
      <h1>Bienvenu sur votre formulaire</h1>
      {/**avec le formulaire comme component mais cela fonctionne ausii de cette maniere avec le formulaire ici
      <Form formTitle="Création d'une nouvelle idée" addIdea={addIdea} />*/}
      <div className={style.form_container}>
        <h3 className={style.form_h3}>Création d'un article</h3>
        <form className={style.form_form} onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            className={style.form_input}
            value={ideaTitle}
            onInput={(e) => setIdeaTitle(e.target.value)}
          />

          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            className={style.form_textarea}
            value={ideaDescription}
            onInput={(e) => setIdeaDescription(e.target.value)}
          />

          <input
            type="submit"
            value="create"
            className={style.form_input_submit}
          />
        </form>
      </div>
    </div>
  );
};

export default newidea;
