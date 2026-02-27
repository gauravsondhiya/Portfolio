import React from "react";
import { skilldata } from "./Data";
import { div } from "motion/react-client";
const Skill = () => {
  return (
    <>
      <div className="text-center text-3xl sm:text-4xl font-bold mt-10 mb-6 text-white">
        <h1>Tools of My Trade</h1>
      </div>

      <div className="w-[95%] sm:w-[90%] grid grid-cols-2 sm:grid-cols-6 m-auto gap-3 ">
       {
        skilldata.map((e)=>(
          <div  className="p-2  text-center border gap-2 border-purple-600 text-sm font-bold rounded-xl bg-gray-900">
            {e}
          </div>

        ))
       }
      </div>
    </>
  );
};

export default Skill;
