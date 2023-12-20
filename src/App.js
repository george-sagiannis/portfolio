import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <main className="main">
          <Home />
          <About />
          <Skills />
          <Projects />
        </main>
      </>
    </Router>
  );
};

export default App;
