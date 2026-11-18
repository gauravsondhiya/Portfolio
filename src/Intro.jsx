import React from "react";
import { social } from "./Data.jsx";
import logo from "./assets/logo.jpg";
import Experience from "./Experience.jsx";
import Projects from "./Projects.jsx";
import Skill from "./Skill.jsx";
import { Education } from "./Education.jsx";
import Resume from './Resume.jsx'
import Contact from "./Contact.jsx";
const Intro = () => {
  return (
    <div>
      <div className="sm:h-screen sm:p-15  sm:grid sm:grid-cols-12 
        bg-[#F3EFE7]">
        <div className="w-full   sm:col-span-5 h-[70%] sm:m-auto ">
          <img
            className="border-hidden rounded-full h-[300px] w-[300px]
             sm:h-[400px] sm:w-[400px]  m-auto"
            src={logo}
            alt="avatar"
          />
        </div>

        <div className="h-[70%] w-full sm:col-span-7 m-auto ">
          <h1
            className="text-center sm:text-left   
           text-[#7B3F32] font-['Iowan_Old_Style',Georgia,serif]
           text-7xl mt-3"
          >
            Hi, I'm Gaurav..{" "}
          </h1>
          <h1 className=" text-center sm:text-left text-2xl font-semibold leading-relaxed  border-red-600  mt-9 ">
            Software Engineer | 3 Years Experience | Building AI-First
            Production-Ready Applications.
            <br />
          </h1>
          <p className=" text-center  sm:text-left  text-xl   leading-8  mt-8">
            I Build and ship complete <b>AI-driven</b> applications, integrating{" "}
            <b>Generative AI</b>, with immersive <b>Frontend</b> interfaces,
            scalable <b>Backend</b> systems, and automated <b>DevOps</b>{" "}
            pipelines.
          </p>

          <div className=" border-red-500  ml-[25%] sm:ml-0 flex  gap-6 mt-8  ">
            {social.map((e, i) => (
              <span key={i} className="group">
                <a
                  href={e.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block p-2 bg-[#7B3F32] 
                  rounded-lg transition-all duration-300 
                  group-hover:scale-110 "
                >
                  <div className="text-white text-3xl ">{e.icon}</div>
                </a>
              </span>
            ))}
          </div>
        </div>
      </div>
      <Skill/> 
      <Experience/>
      <Projects/>
      <Education/>
      <Contact />
    
    </div>
  );
};

export default Intro;
