import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail
} from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  //const [error, setError] = useState("");

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password).then((a) => {
      alert("Usuário Logado com Sucesso!");
    });
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password).then((a) => {
      alert("Usuário Cadastrado com Sucesso!");
    });
  }
  function logOut() {
    return signOut(auth);
  }
  //LOGIN COM CONTA GOOGLE
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();

    return signInWithPopup(auth, googleAuthProvider).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const errorEmail = error.email;

      console.log(errorCode);
      console.log(errorMessage);
      console.log(errorEmail);
    });
  }
  //LOGIN COM CONTA GITHUB
  function githubSignIn() {
    const githubAuthProvider = new GithubAuthProvider();

    return signInWithPopup(auth, githubAuthProvider).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const errorEmail = error.email;

      console.log(errorCode);
      console.log(errorMessage);
      console.log(errorEmail);
    });
  }
  //LOGIN COM CONTA FACEBOOK
  function facebookSignIn() {
    const facebookAuthProvider = new FacebookAuthProvider();

    return signInWithPopup(auth, facebookAuthProvider).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const errorEmail = error.email;

      console.log(errorCode);
      console.log(errorMessage);
      console.log(errorEmail);
    });
  }
  //RESET SENHA

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email).then((a) => {
      alert("Email de redefinição de senha enviado com sucesso!");
    });

    /*.catch((error) => {
        //alert(error.code + " -> email não cadastrado");
        //alert(error.mail + " -> Digite um email valido");
        //alert(error.message + " -> email não cadastrado");

        const errorCode = error.code;
        const errorEmail = error.mail;
        const errorMensagem = error.message;
        console.log(errorCode);
        console.log(errorMensagem);
        console.log(errorEmail);        
      });
      */
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{
        user,
        logIn,
        signUp,
        logOut,
        googleSignIn,
        githubSignIn,
        facebookSignIn,
        resetPassword
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
