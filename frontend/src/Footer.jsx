import React from "react";
import { social } from "./Data";

const Footer = () => {
  return (
    
    <div className="mt-5  border-amber-300 p-2 text-center ">
        <hr class="h-px my-8 bg-neutral-quaternary border border-purple-500 "/>
        <p className="text-3xl font-semibold text-purple-400">Gaurav Sondhiya </p>
        <a
          href={"mailto:gauravsondhiya1503@gmail.com"}
          target="_blank"
          rel="noopener noreferrer"
          className=" text-purple-200"
        >
         gauravsondhiya1503@gmail.com
        </a>
      </div>

  );
};

export default Footer;
