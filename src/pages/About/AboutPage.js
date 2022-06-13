import React from "react";
//import { useNavigate } from "react-router";
//import { useUserAuth } from "../../context/UserAuthContext";

import logoB from "../../assets/logoB.png";
//import { BiLogOut } from "react-icons/bi";
import * as s from "./AboutStyles";

const AboutPage = () => {
  return (
    <s.AboutContainer>
      <div>
        <h1>About Page - Agência de Viagens</h1>
        <img src={logoB} alt="imagem home" className="logoAbout" />
        <p>
          Somos a agência de turismo do Brasil com a maior taxa de crescimento
          dos últimos anos. Isso é fruto do nosso conceito inovador de
          atendimento e suporte aos clientes. Mais do que gerar uma venda nos
          preocupamos em proporcionar sempre a melhor experiência possível aos
          nossos clientes. O que garante a nossa receita de sucesso é o forte
          comprometimento que temos com todos os nossos clientes. Com uma
          estrutura de atendimento online 24h, todos os dias da semana,
          alcançamos um importante satisfação de nossos clientes , orientando
          sempre os nossos clientes da melhor forma possível.
        </p>
      </div>
    </s.AboutContainer>
  );
};
export default AboutPage;
