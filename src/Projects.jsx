import React from "react";
import { projectarr } from "./Data";
import { Button } from "../src/components/ui/moving-border";
const Projects = () => {
  return (
    <div className="sm:w-[90%] sm:m-auto  sm:p-5  flex flex-col gap-5">
      {/* logo */}
      {projectarr.map((data) => (
        <div className="sm:w-[90%] sm:border border-purple-300  sm:h-[400px] sm:m-auto grid sm:grid-cols-12  rounded-2xl gap-2  ">

          <div className="sm:col-span-6 sm:ml-5 sm:my-auto rounded-2xl  ">
            <img
              src={data.logo}
              alt="project logo"
              className="rounded-2xl sm:m-auto   p-1.5 bg-gradient-to-r from-purple-700 via-red-400 to-pink-500 rounded-lg"
            />
          </div>

          {/* defination */}
          <div className="sm:col-span-6   border-amber-500 sm:p-5">

            <div className="h-[90px]  text-center  text-6xl font-bold relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-700 via-red-400 to-pink-500 ">
              <h1 className="">{data.title}</h1>
            </div>
            
            <div className="h-[90px]  p-3 text-center sm:text-left text-xl ">
              <h1>{data.description}</h1>
            </div>
            <div className="h-[25%] h-[90px]  flex ">
             {
              data.stack.map((e)=>(
                <p className="border m-auto p-3 rounded-xl">
                {e}
                </p>
              ))
             }
            </div>
            <div className="h-[25%] h-[90px]   flex  [&>button]:rounded-xl [&>button]:h-9 text-xl font-bold [&>button]:hover:transform-3d">
              <button className="border w-29 m-auto hover:transform-3d ">Github</button>
              <button className="border w-29 m-auto">Live</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
