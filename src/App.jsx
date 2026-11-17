import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Projects from './Projects';
import Experience from './Experience';
import Skill from './Skill';
import Intro from './Intro';
import Sidebar from './Sidebar';
const App = () => {
  return (
    <div className='flex'>
    <Sidebar/>
    <div className='w-[80%]'>
 <Routes>
      <Route path="/" element={<Intro/>} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/skills" element={<Skill />} />
      <Route path="/projects" element={<Projects />} />
      {/* <Route path="/resume" element={<Footer />} /> */}
    </Routes>
    </div>
   
    </div>
  )
}

export default App