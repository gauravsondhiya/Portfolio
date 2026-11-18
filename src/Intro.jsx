import React from "react";
import { social } from "./Data.jsx";
import logo from "./assets/logo.jpg";

const Intro = () => {
  return (
    <>
      <div className="  grid sm:grid-cols-12     h-screen p-5 bg-[#F3EFE7]">
        <div className=" sm:col-span-5   h-[70%]  m-auto ">
          <img
            className="border-hidden rounded-full h-[400px] w-[400px]
             sm:h-[400px] sm:w-[400px] 
                       "
            src={logo}
            alt="avatar"
          />
        </div>
        <div className="h-[70%] sm:col-span-7 m-auto">
          <h1
            className="text-center sm:text-left 
           text-[#7B3F32] font-['Iowan_Old_Style',Georgia,serif]
           text-7xl   mt-3"
          >
            Hi, I'm Gaurav..{" "}
          </h1>
          <h1 className=" text-center sm:text-left text-2xl font-semibold leading-relaxed  border-red-600  mt-9 ">
            Software Engineer | 3 Years Experience | Building AI-First
            Production-Ready Applications.
            <br />
          </h1>
          <p className="  sm:text-left  text-xl   leading-8  mt-8">
            I Build and ship complete <b>AI-driven</b> applications, integrating{" "}
            <b>Generative AI</b>, with immersive <b>Frontend</b> interfaces,
            scalable <b>Backend</b> systems, and automated <b>DevOps</b>{" "}
            pipelines.
          </p>

          <div className="border-red-500 flex  gap-6 mt-8  ">
            {social.map((e, i) => (
              <span key={i} className="group">
                <a
                  href={e.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block p-2 bg-[#7B3F32] rounded-lg transition-all duration-300 group-hover:scale-110"
                >
                  <div className="text-white text-3xl">{e.icon}</div>
                </a>
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
