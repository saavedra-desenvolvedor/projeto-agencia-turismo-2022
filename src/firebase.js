import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDan6-lOmkAj7ULGyltXybPoKJCPrjmL6k",

  authDomain: "projeto-agencia-2022.firebaseapp.com",

  projectId: "projeto-agencia-2022",

  storageBucket: "projeto-agencia-2022.appspot.com",

  messagingSenderId: "899258279305",

  appId: "1:899258279305:web:04387941bec2c758ce6d58",

  measurementId: "G-TKEKW7N0SP"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

//var db = firebaseApp.firestore();

//export {db};
export default app;
