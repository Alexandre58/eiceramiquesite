"use client";
import React, { useState } from "react";
//REPREND LE STYLE DE FORM et de LoginForm
import style from "../styles/_form.module.scss";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";

//FETCH
async function registerUser(data) {
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
}
//FIN DU FETCH
const RegisterForm = () => {
  const [email, setEmail] = useState("email");
  const [password, setPassword] = useState("mot de passe");
  const [confirm, setConfirm] = useState("confirme mot de passe");
  const [showPassword, setShowPassword] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [message, setMessage] = useState("");

  const clicInputEmail = () => {
    setEmail("");
  };
  const clicInputPassword = () => {
    setPassword("");
  };
  const clicInputConfirm = () => {
    setConfirm("");
  };
  //function handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();

    //const response = await registerUser({ email, password, task: "register" }); avant d'envoyer cette reponse voir les if;
    if (email === "" || password === "" || confirm === "") {
      setMessage("Merci de saisir tous les champs");
      setHasError(true);
      return;
    }

    if (password !== confirm) {
      setMessage("Le mot de passe et la confirmation sont différents !");
      setHasError(true);
      return;
    }

    setMessage("");
    setHasError("");
    const response = await registerUser({ email, password, task: "register" });
    const responseJson = await response.json();
    console.log({ responseFromForm: responseJson });
    if (responseJson.status === 200) {
      setEmail("");
      setPassword("");
      setConfirm("");
      setMessage(responseJson.message);
      setTimeout(() => {
        setMessage("");
      }, 4000);
    } else {
      setHasError(true);
      setMessage(responseJson.message);
    }
  };
  //function pour voir ou pas le mot de passe
  const toggleShow = () => {
    setShowPassword((current) => !current);
  };
  return (
    <div className={style.form_container}>
      <h3 className={style.form_h3}>Formulaire d'inscription</h3>

      <div className={style.form_compte_login}>
        Vous avez déjà un compte ? <Link href="/login">Connectez-vous</Link>
      </div>
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
        {/*confirm password*/}
        <label htmlFor="password">Confirmation du mot de passe</label>
        <div className={style.passEye}>
          <input
            onClick={clicInputConfirm}
            type={showPassword ? "text" : "password"}
            id="password"
            className={style.form_input}
            value={confirm}
            onInput={(e) => setConfirm(e.target.value)}
          />{" "}
          {showPassword && <FaEyeSlash onClick={toggleShow} />}
          {!showPassword && <FaEye onClick={toggleShow} />}
        </div>

        <input
          type="submit"
          value="create"
          className={style.form_input_submit}
        />
      </form>
    </div>
  );
};

export default RegisterForm;
