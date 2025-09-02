import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/layouts/Header";
import { Home } from "../components/pages/Home";
import { About } from "../components/pages/About";
import { Projects } from "../components/pages/Projects";
import { Resume } from "../components/pages/Resume";
import { Footer } from "../components/layouts/Footer";

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      <Header />
      <section className="content">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/inicio" element={<Home/>} />
          <Route path="/sobre-mi" element={<About/>} />
          <Route path="/proyectos" element={<Projects/>} />
          <Route path="/curriculum" element={<Resume/>} />
        </Routes>
      </section>
      <Footer/>
    </BrowserRouter>
  );
};
