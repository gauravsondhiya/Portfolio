import React from "react";
import { projectarr } from "./Data";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <>
      <div className="text-center text-3xl sm:text-4xl font-bold mt-10 mb-6 text-white">
        <h1>API to UI: Complete Projects</h1>
      </div>

      <div className="w-[95%] sm:w-[90%] m-auto flex flex-col gap-10">
        {projectarr.map((data, i) => (
          <div
            key={i}
            className="flex flex-col sm:grid sm:grid-cols-12 gap-6  border-purple-400 rounded-2xl p-4 sm:p-6  shadow-lg hover:shadow-purple-700/30 transition-all duration-300"
          >
            {/* Image Section */}
            <div className="sm:col-span-5 flex justify-center items-center">
              <img
                src={data.logo}
                alt={data.title}
                className="rounded-2xl w-full max-w-[400px] bg-gradient-to-r from-purple-700 via-red-400 to-pink-500 p-1"
              />
            </div>

            {/* Info Section */}
            <div className="sm:col-span-7 flex flex-col justify-between gap-4 text-white">
              <h2 className="text-2xl sm:text-4xl font-bold text-center sm:text-left bg-clip-text text-transparent bg-gradient-to-r  from-purple-600 via-red-400 to-pink-500 p-3">
                {data.title}
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-center sm:text-left text-gray-300">
                {data.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                {data.stack.map((tech, j) => (
                  <span
                    key={j}
                    className="px-4 py-2 border border-purple-600 text-sm sm:text-base font-semibold rounded-xl bg-gray-900"
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
                  className="p-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg hover:scale-110 transition-transform"
                >
                  <FaExternalLinkAlt className="text-white text-2xl" />
                </a>

                <a
                  href={data.gitlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg hover:scale-110 transition-transform"
                >
                  <FaGithub className="text-white text-2xl" />
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
