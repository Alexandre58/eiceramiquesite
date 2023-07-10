// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBtl4Ldjy6nJSCMaQiE_jfeYNm0LcAnmKI",
  authDomain: "eiceramiquesite.firebaseapp.com",
  projectId: "eiceramiquesite",
  storageBucket: "eiceramiquesite.appspot.com",
  messagingSenderId: "604614680037",
  appId: "1:604614680037:web:ee143466687ce3eaf4230c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
