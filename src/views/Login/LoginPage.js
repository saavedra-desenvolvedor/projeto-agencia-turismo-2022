import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import { Alert } from "react-bootstrap";
//import GoogleButton from "react-google-button";

import { FaGithub, FaGoogle, FaFacebook } from "react-icons/fa";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import logoB from "../../assets/logoB.png";
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
      navigate("/home");
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
      <div className="grid">
        <div className="gridLogin">
          <span className="login-form-title"> Login </span>

          <img src={logoB} className="logo" alt="logo" />
          <p>
            Efetue seu Login ou Cadastre-se para acessar os demais serviços.
          </p>

          <form className="form" onSubmit={handleSubmit}>
            <div className="inputEmail">
              <input
                type="email"
                name="email"
                placeholder="  email cadastrado"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="inputPassword">
              <input
                className="inputSenha"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="  senha cadastrada"
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

            <button className="btnLogin">ENTRAR</button>
            {error && <Alert variant="danger">{error}</Alert>}
          </form>
          <div>
            <Link to="/recuperasenha" className="btnSingin">
              Nova Senha
            </Link>

            <Link to="/novaconta" className="btnPassword">
              Cadastre-se
            </Link>
          </div>

          <h3>ou</h3>
          <h4>Login com Suas Redes Sociais</h4>
          <li>
            <FaFacebook onClick={handleFacebookSignIn} />
          </li>
          <li>
            <div>
              <FaGoogle onClick={handleGoogleSignIn} />
            </div>
          </li>
          <li>
            <FaGithub onClick={handleGithubSignIn} />
          </li>
        </div>
      </div>
    </s.LoginContainer>
  );
};
export default LoginPage;
