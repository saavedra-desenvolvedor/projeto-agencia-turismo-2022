import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import { Alert } from "react-bootstrap";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import logoB from "../../assets/logoB.png";
import * as s from "./NovaContaStyles";

const NovaConta = () => {
  const [show, setShow] = useState(""); //função exibir senha

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  //const [mensagem, setMensagem] = useState("");

  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/home");
    } catch (error) {
      //setError(error.code);
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
      } else if (error.code === "auth/missing-email") {
        setError(error.code + " => E-mail ausente / Digite um e-mail.");
      } else setError("Erro no Cadastro: " + error.code);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <s.NovaContainer>
      <div className="grid">
        <div className="gridLogin">
          <span className="login-form-title"> Cadastro </span>
          <p>Crie sua conta, é grátis!</p>
          <img src={logoB} className="logo" alt="logo" />

          <form className="form" onSubmit={handleSubmit}>
            <div className="inputEmail">
              <input
                type="email"
                name="email"
                placeholder=" digite um email valido"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="inputPassword">
              <input
                className="inputSenha"
                placeholder=" digite uma senha"
                onChange={(e) => setPassword(e.target.value)}
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

            <button className="btnLogin">CADASTRAR</button>
            {error && <Alert variant="danger">{error}</Alert>}
          </form>
          <div className="btnCadastrar">
            Já tenho uma conta?
            <Link to="/">Faça login</Link>
          </div>
        </div>
      </div>
    </s.NovaContainer>
  );
};

export default NovaConta;
