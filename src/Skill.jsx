import React from "react";
import { skilldata } from "./Data";
import Gitgraph from "./Gitgraph";

const Skill = () => {
  return (
    <div className="p-15 mt-5">
        <Gitgraph/>
      <div className=" text-5xl  mb-3 mt-10 font-['Iowan_Old_Style',Georgia,serif]">
        <h1>Professional Skillset</h1>
      </div>

      <div className="">

        {skilldata.map((tech, j) => (
          <div className=" mt-8">
            <div className=" text-2xl font-semibold font-['Iowan_Old_Style',Georgia,serif] ">
              {tech.type}
            </div>

            <div className="flex gap-5 mt-4 mb-4">
            {tech.stack.map((e) => (
               <span
                key={j}
                className="  p-4 bg-[#7B3F32] text-white text-base  font-bold rounded-xl "
              >{e}
              </span>
             ))
             }
            </div>
           <hr className="border-gray-300" />
          </div>
        ))}

      </div>
     
    </div>
  );
};

export default Skill;
