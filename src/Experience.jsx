import { div } from "motion/react-client";
import React from "react";

const Experience = () => {
  let data = [
    {
      companyname: "Doa Guru Info Systems Jabalpur",
      jobtype: "Contract",
      position: "Full Stack Engineer",
      year: "Dec-2025 to Nov-2026",
      location: "Banglore",
      des: "Developed a full-stack application to optimize warehouse operations for DSI, enhancing inventory tracking and process efficiency",
    },
    {
      companyname: "Freelance",
      jobtype: "",
      position: "Full Stack Engineer",
      year: "Jan-2024 to Oct-2025",
      des: "Developed a full-stack application to optimize warehouse operations for DSI, enhancing inventory tracking and process efficiency",
    },
    {
      companyname: "Linkederp Bangalore",
      jobtype: "Full time",
      position: "Associate Software Engineer ",
      year: "Sep-2022 to Dec 2024",
      des: "Developed a full-stack application to optimize warehouse operations for DSI, enhancing inventory tracking and process efficiency",
    },
  ];
  return (
    <div className="p-15  bg-[#F3EFE7] top-0 ">
      <h1 className="text-5xl font-['Iowan_Old_Style',Georgia,serif]">Work Experience</h1>
      <hr className="mt-10"/>
      <div className="p-5">
        {data.map((e, i) => (
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
