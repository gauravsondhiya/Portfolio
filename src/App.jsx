import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AiOutlineAlignLeft, AiOutlineClose } from 'react-icons/ai';
import Projects from './Projects';
import Experience from './Experience';
import Skill from './Skill';
import Intro from './Intro';
import Sidebar from './Sidebar';
import Contact from './Contact';
import Resume from './Resume';
import { Education } from './Education';

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Automatically close the mobile sidebar whenever the route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col sm:grid sm:grid-cols-12 sm:h-screen">
      
      {/* Mobile Top Navbar (Hidden on Desktop) */}
      <header className="sm:hidden border-b border-gray-300 flex justify-between items-center p-5 text-3xl font-semibold font-['Iowan_Old_Style',Georgia,serif]">
        <button 
          onClick={toggleMenu} 
          aria-label="Toggle Navigation Menu"
          className="focus:outline-none"
        >
          {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineAlignLeft />}
        </button>
        <p>Gaurav..</p>
      </header>

      {/* Sidebar: Always visible on Desktop, toggled via state on Mobile */}
      <aside className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:block sm:col-span-3`}>
        <Sidebar />
      </aside>

      {/* Main Content: Hidden on Mobile when menu is open, always visible on Desktop */}
      <main className={`${isMobileMenuOpen ? 'hidden' : 'block'} sm:block sm:col-span-9 h-full overflow-y-auto`}>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </main>

    </div>
  );
};

export default App;