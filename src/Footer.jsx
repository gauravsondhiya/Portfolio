import React from "react";
import { social } from "./Data";
const Footer = () => {
  return (
    <div className="border border-gray-800  w-[90%]  m-auto mt-12 p-3 ">
      <div className="[&>p,ul]: border-amber-300  grid sm:grid-cols-3 gap-5 text-xl font-bold">
        <p>Designed and Developed by Gaurav Sondhiya</p>
        <p className="text-center">Copyright @ 2025 G.S</p>
        <ul className="grid grid-cols-4 text-3xl gap-3  [&>li]:hover:text-blue-500">
          {social.map((e, i) => (
            <li key={i}>
              <a href={e.url} target="_blank" rel="noopener noreferrer">
                {e.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
