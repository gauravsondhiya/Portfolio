import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import Intro from "./Intro";
import Experience from "./Experience";
import Gitgraph from "./Gitgraph";
import { LoaderOne } from "@/components/ui/loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate content/data loading
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    // show skeleton or loader while page loads
    return (
      <div className="flex justify-center items-center h-screen bg-black">
        <LoaderOne />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Intro />
      <Projects />
      <Gitgraph />
      <Experience />
      <Footer />
    </div>
  );
};

export default App;
