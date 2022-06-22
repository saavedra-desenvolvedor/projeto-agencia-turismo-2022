import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";

import logoB from "../../assets/logoB.png";
import franca from "../../assets/franca.png";

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
      } else setError("Erro ao enviar email!");
    }
  };

  return (
    <s.SenhaContainer>
      <section>
        <div className="imgBx">
          <img src={franca} alt="frança" />
          {/* <img src={argentina} alt="argentina" /> */}
        </div>
        <div className="contetBx">
          <div className="formBx">
            <img src={logoB} className="logo" alt="logo" />

            <h2> Recuperar Senha </h2>
            <p></p>
            <form className="form" onSubmit={handleResetPassword}>
              <div className="inputBx">
                <span>Nome</span>
                <input
                  type="email"
                  name="email"
                  placeholder="  digite um email cadastrado"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="inputBx">
                <input type="submit" value="Enviar" name="" />
                {/* <button className="btnLogin">ENVIAR</button> */}
                {error && <Alert variant="danger">{error}</Alert>}
              </div>
            </form>

            <Link to="/novaconta" className="btnNovaConta">
              Criar conta
            </Link>

            <Link to="/" className="btnVoltar">
              Voltar
            </Link>
          </div>
        </div>
      </section>
    </s.SenhaContainer>
  );
};
export default RecuperaSenha;
