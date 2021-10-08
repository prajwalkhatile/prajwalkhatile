import React from "react";
import "./App.css";
import Body from "./components/Body";

import Home from "./components/Home";
import About from "./components/About";
import Tech from "./components/Tech";
import Education from "./components/Education";
import Contact from "./components/Contact";
const App = () => {
  return (
    <div className="component">
      <Home />
      <Body />
      <About />
      <Tech />
      <Education />
      <Contact />
    </div>
  );
};

export default App;
