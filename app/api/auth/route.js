import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { NextResponse } from "next/server";
import { auth } from "./firebase_config";

export async function POST(request) {
  //on envoi vers firebase l'enregistrement de l'utilisateur
  const { email, password, task } = await request.json();
  console.log({ email, password, task });
  if (task === "register") {
    //console.log("case - register");

    try {
      // register with firebase
      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // console.log("*****token, user.uid*************");
      // console.log({
      //   token: credentials.user.accessToken,
      //   uuid: credentials.user.uid,
      // });
      // console.log("*****credentials*************");
      // console.log({ credentials });
      // console.log("******************");

      return NextResponse.json({
        status: 200,
        message: `Compte pour ${email} a bien été crée.`,
      });
    } catch (err) {
      console.log({ messageDuserver: err.message });
      //affichage error provenant de firbase
      //{ messageDuserver: 'Firebase: Error (auth/email-already-in-use).' }
      if (err.message.includes("email-already-in-use")) {
        return NextResponse.json({
          status: 500,
          message: `Désolé, cette adresse mail est déjà utilisée.`,
        });
      }

      // messageDuserver: 'Firebase: Password should be at least 6 characters (auth/weak-password).'
      if (err.message.includes("auth/weak-password")) {
        return NextResponse.json({
          status: 500,
          message: `mot de passe plus de six caractére sont requis.`,
        });
      }
      // messageDuserver: 'Firebase: Password should be at least 6 characters (auth/weak-password).'
      if (err.message.includes("auth/invalid-email")) {
        return NextResponse.json({
          status: 500,
          message: `Adresse email invalide.`,
        });
      }
    }
  }
  if (task === "login") {
    try {
      //l'utilsateur ayant crée un compte avec register
      const credentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log({ loginResponse: credentials });

      //login succes
      return NextResponse.json({
        status: 200,
        message: `Bienvenu ${email}`,
        email,
        uid: credentials.user.uid,
        jwt: credentials.user.accessToken,
      });
    } catch (err) {
      //mot de passe pas bon
      //console.log({ serverErreurMessage: err.message }); //(auth/wrong-password)
      if (err.message.includes("auth/wrong-password")) {
        return NextResponse.json({
          status: 500,
          message: "Email ou mot de passe incorrect",
        });
      }
      //si l'utilisateur n'existe pas
      // console.log({ serverErreurMessage: err.message }); //(auth/user-not-found)
      if (err.message.includes("auth/user-not-found")) {
        return NextResponse.json({
          status: 500,
          message: `Cette email  ${email} n'exite pas`,
        });
      }
      //autre erreur
      console.log({ loginErreur: err });
      return NextResponse.json({
        status: 500,
        message: "Erreur d'authentification",
      });
    }
  }
  return NextResponse.json({
    status: 200,
    message: "tache inconnue",
  });
}
