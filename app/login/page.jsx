import React from "react";
import LoginForm from "../components/LoginForm";
import style from "../styles/index.module.scss";

const Login = () => {
  return (
    <main className={style.main_container}>
      <LoginForm />
    </main>
  );
};

export default Login;
