import React, { useContext, useRef, useState } from "react";
//import { Link } from "react-router-dom";
import {
  SSearch,
  SSearchIcon,
  SSidebar,
  SDivider,
  SLinkContainer,
  SLink,
  SLinkIcon,
  SLinkLabel,
  SLinkNotification,
  STheme,
  SThemeLabel,
  SThemeToggler,
  SToggleThumb,
  SSidebarButton
} from "./styles";

import logo from "../../assets/logoB.png";

import { AiFillHome, AiOutlineSearch, AiOutlineLeft } from "react-icons/ai";
import {
  FaInfoCircle,
  FaPlaneDeparture,
  FaBlogger,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";

import { MdContactMail, MdMiscellaneousServices } from "react-icons/md";

import { ThemeContext } from "./../../App";
import { useLocation } from "react-router-dom";

//import { BiLogOut } from "react-icons/bi";
//import { useNavigate } from "react-router";
//import { useUserAuth } from "../../context/UserAuthContext";

const Sidebar = () => {
  //const [user, setUser] = useState("");

  const searchRef = useRef(null);
  const { setTheme, theme } = useContext(ThemeContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();

  const searchClickHandler = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
      searchRef.current.focus();
    } else {
      // search functionality
    }
  };

  return (
    <SSidebar isOpen={sidebarOpen}>
      <>
        <SSidebarButton
          isOpen={sidebarOpen}
          onClick={() => setSidebarOpen((p) => !p)}
        >
          <AiOutlineLeft />
        </SSidebarButton>
      </>
      <div className="logoHead">
        {logArray.map(({ icon, label }) => (
          <SLink
            to="/home"
            style={!sidebarOpen ? { width: `fit-content` } : {}}
          >
            <SLinkIcon>{icon}</SLinkIcon>
            {sidebarOpen && <SLinkLabel>{label}</SLinkLabel>}
          </SLink>
        ))}
      </div>

      <div className="menu-bar">
        <div className="menu">
          <SSearch
            onClick={searchClickHandler}
            style={!sidebarOpen ? { width: `fit-content` } : {}}
          >
            <SSearchIcon>
              <AiOutlineSearch />
            </SSearchIcon>
            <input
              ref={searchRef}
              placeholder="Search"
              style={!sidebarOpen ? { width: 0, padding: 0 } : {}}
            />
          </SSearch>
          <SDivider />
          {linksArray.map(({ icon, label, notification, to }) => (
            <SLinkContainer key={label} isActive={pathname === to}>
              <SLink
                to={to}
                style={!sidebarOpen ? { width: `fit-content` } : {}}
              >
                <SLinkIcon>{icon}</SLinkIcon>
                {sidebarOpen && (
                  <>
                    <SLinkLabel>{label}</SLinkLabel>
                    {/* if notifications are at 0 or null, do not display */}
                    {!!notification && (
                      <SLinkNotification>{notification}</SLinkNotification>
                    )}
                  </>
                )}
              </SLink>
            </SLinkContainer>
          ))}
        </div>

        <div className="linksSociais">
          <SDivider />

          <li>
            <a
              target="_blank"
              without
              rel="noreferrer"
              href={"https://github.com/saavedra-desenvolvedor"}
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              without
              rel="noreferrer"
              href={"https://www.linkedin.com/in/jorge-oliveira-4701722b/"}
            >
              <FaLinkedin />
            </a>
          </li>
        </div>
      </div>
      <SDivider />
      <STheme>
        {sidebarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
        <SThemeToggler
          isActive={theme === "dark"}
          onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
        >
          <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
        </SThemeToggler>
      </STheme>
    </SSidebar>
  );
};
const logArray = [
  {
    label: "Agência Viagens",
    icon: <img src={logo} alt="logo" />
  }
];
const linksArray = [
  {
    label: "Inicio",
    icon: <AiFillHome />,
    to: "/home",
    notification: 0
  },
  {
    label: "Sobre",
    icon: <FaInfoCircle />,
    to: "/about",
    notification: 0
  },
  {
    label: "Destinos",
    icon: <FaPlaneDeparture />,
    to: "/destinations",
    notification: 0
  },
  {
    label: "Blog",
    icon: <FaBlogger />,
    to: "/blog",
    notification: 0
  },
  {
    label: "Serviços",
    icon: <MdMiscellaneousServices />,
    to: "/services",
    notification: 0
  },
  {
    label: "Contato",
    icon: <MdContactMail />,
    to: "/contact",
    notification: 0
  }
];
/* const loginLinksArray = [
  {
    label: "Login",
    icon: <BiLogIn />,
    to: "/"
  }
]; */

export default Sidebar;
