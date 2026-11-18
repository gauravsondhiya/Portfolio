import React from "react";
import { projectarr } from "./Data";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  
  return (
    <div className="bg-[#F3EFE7] p-15">
      <div className="">
        <h1 className="text-5xl font-['Iowan_Old_Style',Georgia,serif]"> Check out my latest work</h1>
      </div>

      <div className=" mt-5 m-auto flex flex-col gap-10 ">
        {projectarr.map((data, i) => (
          <div
            key={i}
            className="flex flex-col sm:grid sm:grid-cols-12 gap-6 border border-gray-300  bg-white rounded p-4 sm:p-6  "
          >
            {/* Image Section */}
            <div className="sm:col-span-5 flex justify-center items-center">
              <img
                src={data.logo}
                alt={data.title}
                className="rounded w-full  border border-gray-300  p-1.5"
              />
            </div>

            {/* Info Section */}
            <div className="sm:col-span-7 flex flex-col justify-between gap-4 text-white">

              <a
                  href={data.livelink}
                  target="_blank"
                  rel="noopener noreferrer"
                  
                >
                  <h2 className="text-2xl sm:text-4xl  text-center sm:text-left bg-clip-text text-black  font-['Iowan_Old_Style',Georgia,serif]">
                {data.title}
              </h2>
                </a>
              <p className="text-base sm:text-lg leading-relaxed text-center sm:text-left text-[#2c2923]">
                {data.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                {data.stack.map((tech, j) => (
                  <span
                    key={j}
                    className="px-4 py-2 border  text-sm sm:text-base font-semibold rounded-xl bg-[#7B3F32]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex justify-center sm:justify-start gap-6 mt-3">
                <a
                  href={data.livelink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border bg-gradient-to-r bg-[#7B3F32]  rounded-lg hover:scale-110 transition-transform"
                >
                  <FaExternalLinkAlt className="text-white text-2xl" />
                </a>

                <a
                  href={data.gitlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border bg-gradient-to-r bg-[#7B3F32]  rounded-lg hover:scale-110 transition-transform"
                >
                  <FaGithub className="text-white text-2xl" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
