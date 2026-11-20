import React from "react";
import { skilldata } from "./Data";
import Gitgraph from "./Gitgraph";

const Skill = () => {
  return (
    <div className="p-5  sm:p-15  bg-[#F3EFE7]">
        <Gitgraph/>
      <div className=" text-5xl  mb-3 mt-10 font-['Iowan_Old_Style',Georgia,serif]">
        <h1>Professional Skillset</h1>
      </div>

      <div className=" grid grid-cols-12 gap-5 h-full mt-5 ">

        {skilldata.map((tech, j) => (
          <div className="border border-gray-300 rounded col-span-6  h-[100%] p-5">
            <div className=" text-2xl font-semibold font-['Iowan_Old_Style',Georgia,serif] ">
              {tech.type}
            </div>

            <div className=" grid sm:grid-cols-12 mt-5  gap-5 text-center  ">
            {tech.stack.map((e) => (
               <div
                key={j}
                className=" col-span-4 text-base
                  p-4 bg-[#7B3F32] text-white font-bold rounded "
              >{e}
              </div>
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
