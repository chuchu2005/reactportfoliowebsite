import React from "react";
import "./App.scss";
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import Portfolio from "./components/portfolio/Portfolio";
import Bio from "./components/bio/Bio";
import Experience from "./components/experience/Experience";
import Achievements from "./components/achievements/Achievements";
import Arsenal from "./components/arsenal/Arsenal";
import Skills from "./components/skills/Skills";
import Vouchers from "./components/vouchers/Vouchers";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Header />
      <Portfolio />
      <Bio />
      <Experience />
      <Achievements />
      <Skills />
      <Arsenal />
      <Vouchers />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
