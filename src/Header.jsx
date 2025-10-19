import React, { useState } from "react";
import { FaAlignCenter } from "react-icons/fa";
import { FaSkullCrossbones } from "react-icons/fa6";
import {  NavLink } from "react-router-dom";
import { RiReactjsFill } from "react-icons/ri";
const Header = () => {
  let [onclick, setonclick] = useState(false);

  let onoff = () => {
    setonclick(!onclick);
  };

  return (
    <nav>
      <div className="border backdrop-blur-3xl border-amber-400 w-full fixed top-0  p-4 flex justify-around text-xl font-bold ">
        <NavLink to="/">
          <h1 className="text-3xl">Gaurav Sondhiya</h1>
        </NavLink>

        <ul
          className="hidden  sm:flex justify-center gap-6 
         border-blue-500   
           [&>li]:hover:text-blue-300"
        >
          <li>
            <NavLink to="/">Github</NavLink>
          </li>
          <li>
            <NavLink to="/skills">Linkedin</NavLink>
          </li>
          <li>
            <NavLink to="/about">X</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/#">Resume</NavLink>
          </li>
        </ul>

        {/* mobile ? */}

        <div
          className="sm:hidden text-3xl font-bold  border-blue-600 flex rounded-b-4xl 
        backdrop-blur-xl"
        >
        
          <button onClick={onoff} className="ml-auto mr-7">
            {onclick ? <FaAlignCenter /> : <FaSkullCrossbones />}
          </button>
        </div>

        {onclick && (
          <ul
            className=" sm:hidden text-xl font-bold text-center [&>li]:mt-2  [&>li]:hover:text-blue-500
           [&>li]:hover:underline underline-offset-2 backdrop-blur-xl"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/skills">Skills</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/resume">Resume</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Header;
