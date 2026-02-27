import React, { useState } from "react";
import { FaAlignCenter } from "react-icons/fa";
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
        className="mt-1 bg-black border-amber-400 w-full fixed top-0  p-4 
      flex justify-around text-xl font-bold "
      >
        <div>
          <h1 className="text-2xl sm:text-3xl">Gaurav Sondhiya</h1>
        </div>

        <div className="hidden  sm:flex gap-3 ">
           {navbardata.map((e,i) => (
            <span key={i}>
              <a  href={e.link} target="_blank" className=" overflow-hidden bg-purple-500 text-white p-3 rounded-lg transition-all duration-300 active:scale-95 active:bg-pink-600 focus:outline-none  ">
             {e.type}
                <span className="absolute inset-0 scale-0 transition-transform duration-500 ease-out active:scale-150 active:bg-white active:opacity-30"></span>
              </a>
            
            </span>
          ))}
        </div>

        {/* mobile ? */}

        <div className="sm:hidden text-2xl">
          <a href={"#"} target="_blank" className=" overflow-hidden bg-purple-500 text-white  rounded-lg transition-all duration-300 active:scale-95 active:bg-pink-600 p-3 focus:outline-none m-auto">
                 Resume
              </a>
        </div>
      </div>

      
    </nav>
  );
};

export default Header;
