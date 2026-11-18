import { div } from "motion/react-client";
import React from "react";
import { experience_data } from "./Data";
const Experience = () => {
  
  return (
    <div className="sm:p-15  bg-[#F3EFE7] p-5 ">
      <h1 className="text-5xl font-['Iowan_Old_Style',Georgia,serif]">Work Experience</h1>
      <hr className="mt-10"/>
      <div className="p-5">
        {experience_data.map((e, i) => (
          <div key={i} className="mt-5">
            <div className="flex justify-between ">
              <p className="text-xl font-semibold font-['Iowan_Old_Style',Georgia,serif]">{e.position}</p>
              <p>{e.year}</p>
            </div>
            <div>
              <p>{e.companyname}</p>
              <p>{e.jobtype}</p>
            </div>

            <div className="mt-3">
              <p>{e.des}</p>
            </div>
      
           <hr class=" mx-auto border-gray-400 rounded-sm md:my-10"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
