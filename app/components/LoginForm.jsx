"use client";
import React, { useContext, useState } from "react";
import style from "../styles/_form.module.scss";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import { AuthContext } from "../context/AuthContextProvider";
import { redirect } from "next/navigation";

//communication avec firebase
const loginUser = async (data) => {
  const URL = "http://localhost:3000/api/auth";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const response = await fetch(URL, options);
  return response;
};

const LoginForm = () => {
  const [email, setEmail] = useState("Votre email");
  const [password, setPassword] = useState("Votre mot de passe");
  const [message, setMessage] = useState("Connectez-vous");
  const [hasError, setHasError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { refreshLoginState, user } = useContext(AuthContext);
  //si l'utilisateur est connecté ,redirection vers l'accueil
  if (user) {
    redirect("/");
  }
  //efface l'aide de l'input
  const clicInputEmail = () => {
    setEmail("");
  };
  const clicInputPassword = () => {
    setPassword("");
  };
  //function du formulaire d'envoi
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setMessage("Merci de remplir toutes les champs");
      setHasError(true);
      return;
    }
    setHasError(false);
    const response = await loginUser({ email, password, task: "login" });
    const responseJson = await response.json();
    if (responseJson.status === 200) {
      refreshLoginState({
        email: responseJson.email,
        uid: responseJson.uid,
        jwt: responseJson.jwt,
      });

      setEmail("");
      setPassword("");
      setMessage(responseJson.message);

      setTimeout(() => setMessage(""), 3000);
    } else {
      setHasError(true);
      setMessage(responseJson.message);
    }
  };
  //function for eye
  const toggleShow = () => {
    setShowPassword((current) => !current);
  };

  return (
    <div className={style.form_container}>
      {/** message backend*/}
      {message && (
        <div
          className={
            hasError ? style.messageBackend_Form : style.messageBackend_Form_ok
          }
        >
          {message}
        </div>
      )}
      <div className={style.form_compte_login}>
        Vous n'avez pas de compte ?{" "}
        <Link href="/register">Créer un compte.</Link>
      </div>
      <form className={style.form_form} onSubmit={handleSubmit}>
        {/**EMAIL */}
        <label htmlFor="email">Email</label>
        <input
          onClick={clicInputEmail}
          type="text"
          id="email"
          autoComplete="username"
          className={style.form_input}
          value={email}
          onInput={(e) => setEmail(e.target.value)}
        />
        {/**PASSWORD */}
        <label htmlFor="password">Mot de passe</label>
        <div className={style.passEye}>
          <input
            onClick={clicInputPassword}
            type={showPassword ? "text" : "password"}
            id="password"
            autoComplete="current-password"
            className={style.form_input}
            value={password}
            onInput={(e) => setPassword(e.target.value)}
          />{" "}
          {showPassword && <FaEyeSlash onClick={toggleShow} />}
          {!showPassword && <FaEye onClick={toggleShow} />}
        </div>

        <input
          type="submit"
          value="connection"
          className={style.form_input_submit}
        />
      </form>
    </div>
  );
};

export default LoginForm;
