import React from "react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Intro from "./Intro";
const Homepage = () => {
  return (
    <div>
      <Intro />
      <Skills />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Homepage;
