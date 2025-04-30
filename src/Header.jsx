import React, { useState } from "react";
import { FaAlignCenter } from "react-icons/fa";
import { FaSkullCrossbones } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import logo from "./assets/logo.jpeg";
const Header = () => {
  let [onclick, setonclick] = useState(false);

  let onoff = () => {
    setonclick(!onclick);
  };

  return (
    <nav>
      <div className=" border-amber-400 w-full fixed top-5  ">
        <ul
          className="hidden sm:flex justify-center gap-6 backdrop-blur-sm
         border-2 border-blue-500  text-xl font-bold  p-4 [&>li]:hover:text-blue-500
           [&>li]:hover:underline underline-offset-2  rounded-b-4xl w-[60%] m-auto"
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
        <div className="sm:hidden text-3xl font-bold border border-blue-600 flex rounded-b-4xl backdrop-blur-xl">
          <img src={logo} alt="" className="ml-3 h-[60px] rounded-full  " />
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
