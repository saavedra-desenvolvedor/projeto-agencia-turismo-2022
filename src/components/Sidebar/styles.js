import { Link } from "react-router-dom";
import styled from "styled-components";

import { btnReset, v } from "../../styles/variables";

export const SSidebar = styled.div`
  width: ${({ isOpen }) => (!isOpen ? `auto` : v.sidebarWidth)};
  background: ${({ theme }) => theme.bg};
  height: 100vh;
  padding: ${v.lgSpacing};

  position: relative;

  .menu-bar {
    height: calc(100% - 120px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .logoHead {
    img {
      width: 52px;
      margin-left: -15px;
    }
  }

  .logoLogout {
    width: 42px;
    border-radius: 50%;
    object-fit: cover;
    list-style-type: none;
    margin-left: -30px;
    margin-bottom: -40px;
  }

  .loginText {
    text-decoration: none; /* nome login / logout */
    list-style-type: none;
    margin-top: -40px;
    margin-left: -10px;
  }

  .displayLogin {
    text-decoration: none; /* nome usuario */
    list-style-type: none;
    margin-top: 40px;
    font-weight: 500;
  }
  .loginItem {
    list-style-type: none;
    cursor: pointer;
    margin-left: -6px;
  }

  .iconLogin {
    svg {
      font-size: 25px;
    }
  }

  .linksSociais {
    a {
      list-style-type: none;
      font-size: 23px;
      color: ${({ theme }) => theme.bgSociais};
      margin: 5px;

      &:hover {
        color: rgb(0, 191, 255);
      }
    }
    li {
      list-style-type: none;
      display: inline-block;
      cursor: pointer;
    }
  }
  .btnLogout {
    display: inline;
    text-decoration: none;
    list-style-type: none;
    cursor: pointer;
    color: red;
    font-weight: bold;
    font-size: 20px;
  }
  .btnText {
    display: inline;
    text-decoration: none;
    list-style-type: none;
    cursor: pointer;
    font-weight: 500;
  }
  .textUser {
    margin: 5px;
    text-align: end;
  }
`;

/* Botão abre/fecha Menu */
export const SSidebarButton = styled.button`
  ${btnReset};
  position: absolute;
  top: ${v.xxlSpacing};
  right: ${({ isOpen }) => (isOpen ? `-16px` : `-20px`)};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ theme }) => theme.bg3}; /* Cor button seta*/
  box-shadow: 0 0 4px ${({ theme }) => theme.bg3},
    0 0 7px ${({ theme }) => theme.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transform: ${({ isOpen }) => (!isOpen ? `rotate(180deg)` : `initial`)};
  @media (max-width: 720px) {
    display: none;
  }
`;

export const SLogo = styled.div`
  width: 62px;

  img {
    max-width: 100%;
    height: auto;
  }
  cursor: pointer;

  margin-bottom: ${v.lgSpacing};
`;

export const SSearch = styled.div`
  background: ${({ theme }) => theme.bgAlpha};
  border: 1px solid ${({ theme }) => theme.bg3};
  border-radius: ${v.borderRadius};
  input {
    padding: 0 ${v.smSpacing};
    font-family: inherit;
    letter-spacing: inherit;
    font-size: 16px;
    width: 100%;
    outline: none;
    border: none;
    color: inherit;
    background: transparent;
  }
  display: flex;
`;

export const SSearchIcon = styled.button`
  ${btnReset};
  /*padding: calc(${v.mdSpacing} - 1px) ${v.mdSpacing}; */
  padding: 8px;
  display: flex;
  cursor: pointer;

  svg {
    font-size: 20px;
  }
`;

export const SDivider = styled.div`
  height: 2px;
  width: 100%;
  background: ${({ theme }) => theme.bg3};
  margin: 10px;
`;

export const SLinkContainer = styled.div`
  background: ${({ theme, isActive }) =>
    !isActive ? `transparent` : theme.bg3};
  border-radius: ${v.borderRadius};
  margin: 2px 0;

  :hover {
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bg3};
    /*font-size: 1.2em; 
    -webkit-text-stroke: 2px; */
  }
`;

export const SLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-weight: 400;
  font-size: 16px;
  padding: calc(${v.smSpacing} - 2px) 0;
`;

export const SLinkIcon = styled.div`
  padding: ${v.smSpacing} ${v.mdSpacing};
  display: flex;

  svg {
    font-size: 20px;
  }
`;

export const SLinkLabel = styled.span`
  display: block;
  flex: 1;
  margin-left: ${v.smSpacing};
`;

export const SLinkNotification = styled.div`
  font-size: 14px;
  padding: calc(${v.smSpacing} / 2) ${v.smSpacing};
  border-radius: calc(${v.borderRadius} / 2);
  background: ${({ theme, isActive }) =>
    !isActive ? theme.bgNotification : theme.bgNotification};

  margin-right: ${v.mdSpacing};
`;

export const STheme = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
`;
export const SThemeLabel = styled.span`
  display: block;
  flex: 1;
`;
export const SThemeToggler = styled.button`
  ${btnReset};
  margin: 0 auto;
  cursor: pointer;
  width: 36px;
  height: 20px;
  border-radius: 10px;
  background: ${({ theme, isActive }) =>
    !isActive ? theme.bgBotton : theme.bgBotton};

  position: relative;
`;

export const SToggleThumb = styled.div`
  height: 18px;
  width: 18px;
  position: absolute;
  top: 1px;
  bottom: 1px;
  transition: 0.2s ease right;
  right: calc(100% - 18px - 1px);
  border-radius: 50%;
  background: ${({ theme }) => theme.bgCirculo}; /* Cor circulo */
`;
