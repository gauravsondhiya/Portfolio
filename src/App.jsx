import React from "react";
import Header from "./Header";
import Homepage from "./Homepage";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";

import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div class=" bg-slate-950">
  
 <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Homepage />} />
      </Routes>
      <Footer />
  </div>

  );
};

export default App;


