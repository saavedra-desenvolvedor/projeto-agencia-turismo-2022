import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";

import logoB from "../../assets/logoB.png";

import * as s from "./RecuperaSenhaStyles";

//import Alert from "@mui/material/Alert";
import { Alert } from "react-bootstrap";
//import firebase from "../../firebase";
import "firebase/auth";

const RecuperaSenha = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const [error, setError] = useState("");
  const { resetPassword } = useUserAuth();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await resetPassword(email);
      navigate("/");
    } catch (error) {
      //setError(error.code);
      if (error.code === "auth/user-not-found") {
        setError("Usuário não encontrado.");
      } else if (error.code === "auth/missing-email") {
        setError("E-mail ausente / Digite um e-mail.");
      } else setError("Erro ao enviar email: " + error.code);
    }
  };

  return (
    <s.SenhaContainer>
      <h1>Recupera Senha - Agência de Viagens</h1>
      <div className="grid">
        <div className="gridLogin">
          <span className="login-form-title"> Recuperar Senha </span>
          <img src={logoB} className="logo" alt="logo" />
          <form className="form" onSubmit={handleResetPassword}>
            <div className="inputEmail">
              <input
                type="email"
                name="email"
                placeholder="  digite um email cadastrado"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button className="btnLogin">ENVIAR</button>
            {error && <Alert variant="danger">{error}</Alert>}
          </form>

          <div>
            <Link to="/novaconta" className="btnNovaConta">
              Criar uma conta
            </Link>

            <Link to="/" className="btnVoltar">
              Voltar
            </Link>
          </div>
        </div>
      </div>
    </s.SenhaContainer>
  );
};
export default RecuperaSenha;
