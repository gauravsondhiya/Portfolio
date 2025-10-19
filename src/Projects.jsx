import React from "react";
import { projectarr } from "./Data";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Projects = () => {
  return (
    <>
       <div className="text-center text-4xl font-bold mt-9 ">
          <h1>API to UI: Complete Projects</h1>
       </div>
    <div className="sm:w-[90%] sm:m-auto  sm:p-5  flex flex-col gap-5">
      {/* logo */}
      {projectarr.map((data ,i) => (
        <div key={i} className="sm:w-[90%] mt-15 border border-purple-300  sm:h-[400px] sm:m-auto grid sm:grid-cols-12  rounded-2xl gap-2  ">
          <div className="sm:col-span-6 sm:ml-5 sm:my-auto rounded-2xl p-4 ">
            <img
              src={data.logo}
              alt="project logo"
              className="rounded-2xl sm:m-auto p-1.5 bg-gradient-to-r from-purple-700 via-red-400 to-pink-500 rounded-2xl"
            />
          </div>

          {/* defination */}
          <div className="sm:col-span-6 border-amber-500 sm:p-5">
            <div className="h-[90px]  text-center  text-6xl font-bold  bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-700 via-red-400 to-pink-500 ">
              <h1 className="">{data.title}</h1>
            </div>

            <div  className="h-[90px]  p-3 text-center sm:text-left text-xl ">
              <h1 >{data.description}</h1>
            </div>
            <div className="h-[25%] h-[90px]  grid grid-cols-5 gap-2 ">
              {data.stack.map((e ,i) => (
                <p key={i} className="border border-purple-600 text-pink-500 font-bold m-auto p-3 rounded-xl">{e}</p>
              ))}
            </div>

            <div className="flex text-xl justify-center gap-14 mt-10">
              <a
                href={data.livelink}
                target="_blank"
                rel="livelink"
                className="inline-block p-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg group-hover:from-purple-600 group-hover:via-pink-600 group-hover:to-red-600 transition-all duration-300 group-hover:scale-110"
              >
                <span className="text-white text-3xl">
                  <FaExternalLinkAlt />

                </span>
              </a>
              <a
                href={data.gitlink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block p-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg group-hover:from-purple-600 group-hover:via-pink-600 group-hover:to-red-600 transition-all duration-300 group-hover:scale-110"
              >
                <div className="text-white text-3xl"><FaGithub /></div>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Projects;
