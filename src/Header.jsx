import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <nav>
         <ul className='flex justify-center w-[50%] m-auto mt-8 p-3 rounded-b-4xl 
         border-2 border-blue-500 gap-10 text-xl  
          font-bold [&>li]:hover:underline-offset-1   [&>li]:hover:underline 
         ' >
           <li><Link to="/">Home</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/contact">Contact</Link></li>
         </ul>
    </nav>
  )
}

export default Header
