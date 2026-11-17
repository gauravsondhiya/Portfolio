import { div } from "motion/react-client";
import React from "react";

const Experience = () => {
  let data = [
    {
      companyname: "Doa Guru Info Systems",
      jobtype: "Contract",
      position: "Full Stack Engineer",
      year: "Dec-2025 to Nov-2026",
      location: "Banglore",
      des: "Developed a full-stack application to optimize warehouse operations for DSI, enhancing inventory tracking and process efficiency",
    },
    {
      companyname: "Freelance",
      jobtype: "Freelance",
      position: "Full Stack Engineer",
      year: "Jan-2024 to Oct-2025",
      location: "Banglore",
      des: "Developed a full-stack application to optimize warehouse operations for DSI, enhancing inventory tracking and process efficiency",
    },
    {
      companyname: "Linkederp",
      jobtype: "Full time",
      position: "Associate Software Engineer",
      year: "Sep-2022 to Dec 2024",
      location: "Banglore",
      des: "Developed a full-stack application to optimize warehouse operations for DSI, enhancing inventory tracking and process efficiency",
    },
  ];
  return (
    <div className="p-15 mt-5">
      <h1 className="text-5xl">Work Experience</h1>
      <hr className="mt-15"/>
      <div className="p-5">
        {data.map((e, i) => (
          <div key={i} className="mt-5">
            <div className="flex justify-between ">
              <p className="text-xl font-semibold">{e.position}</p>
              <p>{e.year}</p>
            </div>
            <div>
              <p>{e.companyname}</p>
              <p>{e.jobtype}</p>
            </div>

            <div className="mt-3">
              <p>{e.des}</p>
            </div>
      
           <hr class="w-55 mx-auto bg-amber-500 rounded-sm md:my-10"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
