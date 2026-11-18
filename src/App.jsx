import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Fixed import
import Projects from './Projects';
import Experience from './Experience';
import Skill from './Skill';
import Intro from './Intro';
import Sidebar from './Sidebar';
import Contact from './Contact'
import Resume from './Resume';
import { Education } from './Education';

const App = () => {
  return (
    // Added h-screen and overflow-hidden to lock the viewport frame
    <div className='flex h-screen overflow-hidden'>
      <Sidebar />
      
      {/* Added h-full and overflow-y-auto so only the route content scrolls */}
      <div className='w-[80%] h-full overflow-y-auto'>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/education" element={<Education/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App