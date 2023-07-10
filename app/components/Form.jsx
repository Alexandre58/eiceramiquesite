"use client";

import React, { useState } from "react";
import style from "../styles/_form.module.scss";

const Form = ({ formTitle }) => {
  const [ideaTitle, setIdeaTitle] = useState("");
  const [ideaDescription, setIdeaDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    //addIdea(ideaTitle, ideaDescription);
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
    <div className={style.form_container}>
      <h3 className={style.form_h3}>{formTitle}</h3>
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
        ></textarea>
        <input
          type="submit"
          value="create"
          className={style.form_input_submit}
        />
      </form>
    </div>
  );
};

export default Form;
