import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { SLayout, SMain } from "./styles";

/* ROTAS PAGINAS */
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/Home/HomePage";
import AboutPage from "../../pages/About/AboutPage";
import BlogPage from "../../pages/Blog/BlogPage";
import ContactPage from "../../pages/Contact/ContactPage";
import DestinationsPage from "../../pages/Destinations/DestinationsPage";
import Post from "../../pages/Post/Post";
import ServicesPage from "../../pages/Services/ServicesPage";
//import LoginPage from "../../views/Login/LoginPage";
import NovaConta from "../../views/novaConta/NovaConta";
import ProtectedRoute from "../ProtectedRoute";
import RecuperaSenha from "../../views/recuperarSenha/RecuperaSenha";
import { UserAuthContextProvider } from "../../context/UserAuthContext";
//import { signInWithEmailAndPassword } from "firebase/auth";

const Layout = ({ children }) => {
  //const [user, setUser] = useState();

  return (
    <SLayout>
      <Sidebar />

      <SMain>{children}</SMain>

      {/*ROTAS */}
      <UserAuthContextProvider>
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <AboutPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/destinations"
            element={
              <ProtectedRoute>
                <DestinationsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pages/post/:id"
            element={
              <ProtectedRoute>
                <Post />
              </ProtectedRoute>
            }
          />
          <Route
            path="/blog"
            element={
              <ProtectedRoute>
                <BlogPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/services"
            element={
              <ProtectedRoute>
                <ServicesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <ContactPage />
              </ProtectedRoute>
            }
          />
          {/*  <Route path="/" element={<LoginPage />} /> */}
          <Route exact path="/novaconta" element={<NovaConta />} />
          <Route exact path="/recuperasenha" element={<RecuperaSenha />} />

          {/* <Route exact path="/logout" element={<HomePage />} /> */}
        </Routes>
      </UserAuthContextProvider>
    </SLayout>
  );
};

export default Layout;
