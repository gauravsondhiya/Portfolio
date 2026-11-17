import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Footer from "./Footer";
import Intro from "./Intro";
import Experience from "./Experience";
import Gitgraph from "./Gitgraph";
import { LoaderOne } from "@/components/ui/loader";
import Skill from "./Skill";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[80%]">
        <Intro />
         {/* <Projects /> */}
        {/* <Experience/> */}
        {/* <Intro />
       
        <Skill />
        <Footer /> */}
      </div>
    </div>
  );
};

export default App;
