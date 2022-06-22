import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import { Alert } from "react-bootstrap";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import logoB from "../../assets/logoB.png";

import argentina from "../../assets/argentina.png";
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
        setError("Usuário não encontrado.");
      } else if (error.code === "auth/invalid-email") {
        setError("E-mail Inválido.");
      } else if (error.code === "auth/internal-error") {
        setError("Preencha todos os campos corretamente");
      } else if (error.code === "auth/weak-password") {
        setError("Senha fraca");
      } else if (error.code === "auth/email-already-in-use") {
        setError("Esse e-mail já está sendo utilizado.");
      } else if (error.code === "auth/missing-email") {
        setError("E-mail ausente / Digite um e-mail.");
      } else setError("Erro no Cadastro!");
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <s.NovaContainer>
      <section>
        <div className="imgBx">
          <img src={argentina} alt="argentina" />
        </div>
        <div className="contetBx">
          <div className="formBx">
            <img src={logoB} className="logo" alt="logo" />
            <br />
            <h2> Cadastro </h2>
            <p></p>

            <form onSubmit={handleSubmit}>
              <div className="inputBx">
                <span>Nome</span>
                <input
                  type="email"
                  name="email"
                  placeholder=" digite um email valido"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="inputBx">
                <span>Senha</span>
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
              <div className="inputBx">
                <input type="submit" value="Cadastrar" name="" />
                {/* <button className="btnLogin">CADASTRAR</button> */}
                {error && <Alert variant="danger">{error}</Alert>}
              </div>
            </form>
            <div>
              Já tenho uma conta?
              <Link to="/"> Faça login</Link>
            </div>
          </div>
        </div>
      </section>
    </s.NovaContainer>
  );
};

export default NovaConta;
