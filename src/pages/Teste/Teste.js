import React from "react";
//import { useNavigate } from "react-router";
//import { useUserAuth } from "../../context/UserAuthContext";

import logoB from "../../assets/logoB.png";
//import { BiLogOut } from "react-icons/bi";

import * as s from "./TesteStyle";

const Teste = () => {
  return (
    <s.TesteContainer>
      <h1>Blog Page - Agência de Viagens</h1>
      <img src={logoB} alt="imagem Blog" className="logoBlog" />
    </s.TesteContainer>
  );
};
export default Teste;
