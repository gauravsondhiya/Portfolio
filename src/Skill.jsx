import React from "react";
import { skilldata } from "./Data";
import { div } from "motion/react-client";
const Skill = () => {
  return (
    <>
      <div className="text-center text-3xl sm:text-4xl font-bold mt-10 mb-3 text-white">
        <h1>Skills</h1>
      </div>
      <div className="flex flex-wrap justify-center sm:justify-start gap-2 p-3">
        {skilldata.map((tech, j) => (
          <span
            key={j}
            className="px-3 py-2 border border-purple-600 text-sm sm:text-base font-bold rounded-xl bg-gray-900"
          >
            {tech}
          </span>
        ))}
      </div>
    </>
  );
};

export default Skill;
