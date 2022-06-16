import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import { Alert } from "react-bootstrap";
//import GoogleButton from "react-google-button";

import { FaGithub, FaGoogle, FaFacebook } from "react-icons/fa";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
//import Marquee from "react-fast-marquee";
import logoB from "../../assets/logoB.png";
import brasil from "../../assets/brasil.png";

import * as s from "./LoginStyles";

const LoginPage = () => {
  const [show, setShow] = useState(""); //função exibir senha

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn, githubSignIn, facebookSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/about");
    } catch (error) {
      //setError(err.message);
      if (error.code === "auth/user-not-found") {
        setError(error.code + " => Usuário não encontrado.");
      } else if (error.code === "auth/invalid-email") {
        setError(error.code + " => E-mail Inválido.");
      } else if (error.code === "auth/internal-error") {
        setError(error.code + " => Preencha todos os campos corretamente");
      } else if (error.code === "auth/weak-password") {
        setError(error.code + " => Senha fraca");
      } else if (error.code === "auth/email-already-in-use") {
        setError(error.code + " => Esse e-mail já está sendo utilizado.");
      } else if (error.code === "auth/wrong-password") {
        setError(error.code + " => Senha Incorreta.");
      } else if (error.code === "auth/missing-email") {
        setError(error.code + " => E-mail ausente / Digite um e-mail.");
      } else setError("Erro no Cadastro: " + error.code);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleGithubSignIn = async (e) => {
    e.preventDefault();
    try {
      await githubSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleFacebookSignIn = async (e) => {
    e.preventDefault();
    try {
      await facebookSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <s.LoginContainer>
      <section>
        <div className="imgBx">
          <img src={brasil} alt="brasil" />
        </div>
        <div className="contetBx">
          <div className="formBx">
            <img src={logoB} className="logo" alt="logo" /> 
            <br/>
            <h2> Bem-Vindo! </h2>
            <p>
            Cadastre-se ou faça login para acessar a home page.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="inputBx">
                <span>Nome</span>
                <input
                  type="email"
                  name="email"
                  placeholder="email cadastrado"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="inputBx">
                <span>Senha</span>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="senha cadastrada"
                  type={show ? "text" : "password"}
                  value={password}
                />
                <div className="loginEye">
                  {show ? (
                    <VisibilityIcon onClick={handleClick} />
                  ) : (
                    <VisibilityOffIcon VisibilityIcon onClick={handleClick} />
                  )}
                </div>
              </div>

             {/* 
             <div className="remember">
                <label>
                  <input type="checkbox" name="" /> lembrar-me
                </label>
                  </div>
                  */}
              <div className="inputBx">
                <input type="submit" value="Entrar" name="" />
                {/* <button className="btnLogin">ENTRAR</button> */}
                {error && <Alert variant="danger">{error}</Alert>}
              </div>
            </form>
            <div className="inputBx">
              <Link to="/recuperasenha" className="btnSingin">
              Esqueci minha senha
              </Link>

              <Link to="/novaconta" className="btnPassword">
                Cadastre-se
              </Link>
            </div>
            <h3>Logar com Rede Social</h3>
            <ul className="sci">
              <li>
                <FaFacebook onClick={handleFacebookSignIn} />
              </li>
              <li>
                <div className="sciG">
                  <FaGoogle onClick={handleGoogleSignIn} />
                </div>
              </li>
              <li>
                <FaGithub onClick={handleGithubSignIn} />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </s.LoginContainer>
  );
};
export default LoginPage;
