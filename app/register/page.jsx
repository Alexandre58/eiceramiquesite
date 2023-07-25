import React from "react";
import style from "../styles/_register.module.scss";
import RegisterForm from "../components/RegisterForm";

const register = (data) => {
  return (
    <main className={style.main_container}>
      {/**<h1>Création de compte</h1>*/}
      <RegisterForm />
    </main>
  );
};

export default register;
