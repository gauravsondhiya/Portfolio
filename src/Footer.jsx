import React from "react";
import { social } from "./Data";
const Footer = () => {
  return (
    // <div className="border border-yellow-800  w-[90%]  m-auto mt-12 p-3 ">
      <div className="mt-14  border-amber-300 p-7 grid  sm:grid-cols-3 gap-2 sm:gap-5 text-xl font-bold
       text-center">
        <p>Designed and Developed by Gaurav...</p>
        <p className="text-center">Copyright @ 2025 G.S</p>
        <ul className="grid grid-cols-4 mt-4 sm:mt-0  text-3xl gap-3  [&>li]:hover:text-blue-500">
          {social.map((e, i) => (
            <li key={i} className="m-auto">
              <a href={e.url} target="_blank" rel="noopener noreferrer">
                {e.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    // </div>
  );
};

export default Footer;
