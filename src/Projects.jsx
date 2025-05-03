import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

import { arr } from "./Data.jsx";
const Projects = () => {
  return (
    <div className="w-[90%]  border-amber-400 m-auto mt-24   ">
      <h1 className="text-4xl  hover:underline -underline-offset-auto text-center">
        Projects
      </h1>
      <div className="grid  sm:grid-cols-3 gap-14 mt-5">
        {arr.map((e, i) => (
          <div
            key={i}
            className=" h-[500px] rounded-3xl"
          >
            <img
              className=" w-[80%] h-[36%]  rounded-2xl m-auto mt-3"
              src={e.logo}
              alt="logo"
            />
            <h1 className=" border-amber-500 h-[10%] text-center text-2xl font-bold">
              {e.projectname}
            </h1>
            <p className=" border-amber-500 h-[40%]  text-wrap font-semibold">
              {e.detail}
            </p>

            <div className="h-[10%] flex  border-amber-500">
              <button className=" border border-blue-800 h-[50px]  w-[120px] rounded-xl m-auto font-semibold ">
                <FaGithubSquare className="m-auto text-2xl" />
                {e.github}
              </button>
              <button className=" h-[50px] w-[120px] rounded-xl border border-blue-800 font-semibold
              m-auto">
                <FaExternalLinkAlt className="m-auto text-xl" />
                {e.live}
              </button>
            </div>
            
          </div>
       
        ))}
      </div>
    </div>
  );
};

export default Projects;
