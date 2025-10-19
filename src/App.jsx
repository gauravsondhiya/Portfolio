import React from "react";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import Intro from "./Intro";
import Experience from "./Experience";
import Gitgraph from "./Gitgraph";
const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Projects />
      <Gitgraph/>
      <Experience/>
      <Skills />
     <Footer/>
    
    </div>
  );
};

export default App;
