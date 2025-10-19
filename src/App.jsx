import React from "react";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import Intro from "./Intro";
import Experience from "./Experience";
const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Projects />
      <Experience/>
      <Skills />
     <Footer/>
    
    </div>
  );
};

export default App;
