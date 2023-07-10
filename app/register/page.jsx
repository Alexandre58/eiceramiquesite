import React from "react";
import style from "../styles/index.module.scss";
import RegisterForm from "../components/RegisterForm";

const register = (data) => {
  return (
    <main className={style.main_container}>
      <h1>S'enregistrer</h1>
      <RegisterForm />
    </main>
  );
};

export default register;
