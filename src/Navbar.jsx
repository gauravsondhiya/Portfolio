import React, { useState } from "react";
import { FaAlignCenter } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";
import { navbardata } from "./Data";
const Header = () => {
  let [onclick, setonclick] = useState(false);
  
  let onoff = () => {
    setonclick(!onclick);
  };

  return (
    <nav>
      <div
        className=" bg-black border-amber-400 w-full fixed top-0  p-4 
      flex justify-around text-xl font-bold "
      >
        <NavLink to="/">
          <h1 className="text-3xl">Gaurav Sondhiya</h1>
        </NavLink>

        <div className="hidden  sm:flex gap-3 ">
           {navbardata.map((e) => (
            <>
              <a href={e.link} target="_blank" className=" overflow-hidden bg-purple-500 text-white p-3 rounded-lg transition-all duration-300 active:scale-95 active:bg-pink-600 focus:outline-none  ">
             {e.type}
                <span className="absolute inset-0 scale-0 transition-transform duration-500 ease-out active:scale-150 active:bg-white active:opacity-30"></span>
              </a>
            
            </>
          ))}
        </div>

        {/* mobile ? */}

        <div className="sm:hidden text-3xl flex">
          <button onClick={onoff} className="ml-auto mr-7">
            {onclick ? <FaAlignCenter /> : <VscThreeBars />}
          </button>
        </div>
      </div>

      {/* mobile navbar */}

      {onclick && (
        <div className=" sm:hidden grid bg-black text-2xl  text-center mt-20  bg-cover h-full">
          {navbardata.map((e) => (
            <>
              <a href={e.link} target="_blank" className=" overflow-hidden bg-purple-500 text-white px-6 py-3 rounded-lg transition-all duration-300 active:scale-95 active:bg-pink-600 focus:outline-none w-[30%] m-auto mt-3">
             {e.type}
                <span className="absolute inset-0 scale-0 transition-transform duration-500 ease-out active:scale-150 active:bg-white active:opacity-30"></span>
              </a>
            
            </>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;
