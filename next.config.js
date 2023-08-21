/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;
//code ci dessous pour eviter l'erreur 'use server' dans le fichier newidea.js
// module.exports = {
//   experimental: {
//     serverActions: true,
//   },
// };
module.exports = {
  env: {
    apiKey: "AIzaSyBtl4Ldjy6nJSCMaQiE_jfeYNm0LcAnmKI",
    authDomain: "eiceramiquesite.firebaseapp.com",
    projectId: "eiceramiquesite",
    storageBucket: "eiceramiquesite.appspot.com",
    messagingSenderId: "604614680037",
    appId: "1:604614680037:web:ee143466687ce3eaf4230c",
  },
};
