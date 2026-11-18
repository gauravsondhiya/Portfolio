import { div } from "motion/react-client";
import React from "react";

export const Education = () => {
  let data = [
    {
      collage_name: "Gyan Ganga College of technology Jabalpur",
      Degree: "Master of Computer Application (MCA) ",
      year: "July-2024 to August-2026",
      Grade: "8.0 CGPA"
    },
    {
      collage_name: "st aloysius college jabalpur",
      Degree: "Bachelor of commerce Computer Application",
      year: "July-2018 to August-2021",
      Grade: ""
    }
  ];
  return (
    <div className="p-15 mt-5">
      <h1 className="text-5xl">Education</h1>
      <hr className="mt-15"/>
      <div className="p-5">
        {data.map((e, i) => (
          <div key={i} className="mt-5">
            <div className="flex justify-between ">
              <p className="text-xl font-semibold">{e.Degree}</p>
              <p>{e.year}</p>
            </div>
            <div>
              <p>{e.collage_name}</p>
              <p>{e.Grade}</p>
            </div>

           
      
           <hr class="w-55 mx-auto bg-amber-500 rounded-sm md:my-10"/>
          </div>
        ))}
      </div>
    </div>
  );
};


