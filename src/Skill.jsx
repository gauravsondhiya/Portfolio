import React from "react";
import { skilldata } from "./Data";
import Gitgraph from "./Gitgraph";

const Skill = () => {
  return (
    <div className="p-5 mt-5">

      <div className=" text-3xl sm:text-4xl font-bold  mb-3 ">
        <h1>Professional Skillset</h1>
      </div>

      <div className="  border-black">

        {skilldata.map((tech, j) => (
          <div className=" mt-4">
            <div className=" text-2xl">
              {tech.type}
            </div>

            <div className="flex gap-5 mt-4 mb-4">
            {tech.stack.map((e) => (
               <span
                key={j}
                className="  p-4 border border-purple-500 text-base  font-bold rounded-xl "
              >{e}
              </span>
             ))
             }
            </div>
           <hr className="" />
          </div>
        ))}

      </div>
      <Gitgraph/>
    </div>
  );
};

export default Skill;
