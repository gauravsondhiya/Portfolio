import React, { useState } from "react";
import { navbardata } from "./Data";

const Header = () => {
  let [onclick, setonclick] = useState(false);

  let onoff = () => {
    setonclick(!onclick);
  };

  return (
    <nav>
      <div className="fixed top-0 w-full p-4 sm:p-4 bg-black  border-amber-400 flex justify-center text-xl font-bold ">
        {/* <div>
          <h1 className="text-2xl sm:text-3xl">Gaurav Sondhiya</h1>
        </div> */}

        <div className="hidden  sm:flex gap-3 ">
          {navbardata.map((e, i) => (
            <span key={i}>
              <a
                href={e.link}
                target="_blank"
                className="overflow-hidden 
                 text-white p-3 rounded-lg transition-all duration-300 active:scale-95 active:bg-pink-600 focus:outline-none hover:bg-purple-400 hover:text-black">
                {e.type}
                <span className="absolute inset-0 scale-0 transition-transform duration-500 ease-out active:scale-150 active:bg-white active:opacity-30"></span>
              </a>
            </span>
          ))}
        </div>

        {/* mobile ? */}

        <div className="sm:hidden">
          {navbardata.map((e, i) => (
            <span key={i}>
              <a
                href={e.link}
                target="_blank"
                className="overflow-hidden 
                 text-white p-2 rounded-lg transition-all duration-300 active:scale-95 active:bg-pink-600 focus:outline-none hover:bg-purple-400 hover:text-black">
                {e.type}
                <span className="absolute inset-0 scale-0 transition-transform duration-500 ease-out active:scale-150 active:bg-white active:opacity-30"></span>
              </a>
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
