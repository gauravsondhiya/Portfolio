import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

import  {arr}  from "./Data.js";
const Projects = () => {
  return (
    <div className="w-[90%] border border-amber-400 m-auto mt-10  grid grid-cols-3 gap-14 ">
      {arr.map((e, i) => (
        <div key={i} className="border border-red-700 h-[500px] rounded-br-3xl">
          <img
            className=" w-[100%] h-[40%] border border-amber-500"
            src={e.logo}
            alt=""
          />

          <h1 className="border border-amber-500 h-[10%]">{e.projectname}</h1>

          <p className="border border-amber-500 h-[40%]">{e.detail}</p>


          <div className="h-[10%] flex justify-center gap-9">
            <button className="border border-amber-500 h-[50px] w-[90px] rounded-br-2xl">
              <FaGithubSquare />{e.github}
            </button>
            <button className="border border-amber-500 h-[50px] w-[90px] rounded-br-2xl">
            <FaExternalLinkAlt /> {e.live}
            </button>
          </div>

        </div>
      ))}
    </div>
  );
};

export default Projects;
