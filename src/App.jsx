import React from "react";
import Header from "./Header";
import Homepage from "./Homepage";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import Contact from "./Contact";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div class="absolute [background:radial-gradient(90%_180%_at_50%_10%,#000_40%,#63e_100%)]">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Homepage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
