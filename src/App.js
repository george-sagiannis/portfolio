import React from "react";

import "./App.css";

import Header from "./components/header/Header";

import Home from "./components/home/Home";

import Skills from "./components/skills/Skills";

import About from "./components/about/About";


const App = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
      </main>
    </>
  );
};
export default App;