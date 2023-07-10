import { createUserWithEmailAndPassword } from "firebase/auth";
import { NextResponse } from "next/server";
import { auth } from "./firebase_config";

export async function POST(request) {
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
    }
  }
  if (task === "login") {
    //TODO
  }
  return NextResponse.json({ status: 200, message: "tache inconnue" });
}
