import React from "react";
//import { Route, Switch } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import BlogPage from "./pages/Blog/BlogPage";
import ContactPage from "./pages/Contact/ContactPage";
import DestinationsPage from "./pages/Destinations/DestinationsPage";
import Post from "./pages/Post/Post";
import ServicesPage from "./pages/Services/ServicesPage";
import LoginPage from "./views/Login/LoginPage";

const Rotas = () => {
  const user = true;
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/about" element={<AboutPage />} />
      <Route
        exact
        path="/destinations"
        element={user ? <DestinationsPage /> : <Navigate to="/login" />}
      />

      <Route
        exact
        path="/pages/post/:id"
        element={user ? <Post /> : <Navigate to="/login" />}
      />
      <Route
        exact
        path="/blog"
        element={user ? <BlogPage /> : <Navigate to="/login" />}
      />
      <Route
        exact
        path="/services"
        element={user ? <ServicesPage /> : <Navigate to="/login" />}
      />
      <Route
        exact
        path="/contact"
        element={user ? <ContactPage /> : <Navigate to="/login" />}
      />

      <Route
        exact
        path="/login"
        element={user ? <Navigate to="/" /> : <LoginPage />}
      />

      <Route exact path="/logout" element={<HomePage />} />
    </Routes>
  );
};

export default Rotas;
