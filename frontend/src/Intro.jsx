import React from "react";
import { social } from "./Data.jsx";
import logo from "./assets/logo.jpg";

const Intro = () => {
  return (
    <>
      <div className=" m-auto  grid sm:grid-cols-12 gap-4  border-red-600 mt-30">
        <div className=" sm:col-span-5   border-green-600 m-auto ">
          <img
            className="border-hidden rounded-full h-[200px] w-[200px]  sm:h-[300px] sm:w-[300px] 
                      mx-auto border"
            src={logo}
            alt="avatar"
          />
        </div>
        <div className="  border-amber-400 sm:col-span-7 ">
          <h1
            className="text-center sm:text-left 
           text-purple-500
           p-4 text-4xl font-bold  mt-3"
          >
            Hi, I'm Gaurav Sondhiya..{" "}
          </h1>
          <h1 className=" text-center sm:text-left text-2xl font-semibold leading-relaxed  border-red-600  mt-2 p-4 ">
            Software Engineer | 3 Years Experience | Building AI-First
            Production-Ready Applications.
            <br />
          </h1>
          <p className=" text-center sm:text-left  text-xl border-red-600  pl-4 leading-8 ">
            I Build and ship complete <b>AI-driven</b> applications, integrating{" "}
            <b>Generative AI</b>, with immersive <b>Frontend</b> interfaces,
            scalable <b>Backend</b> systems, and automated <b>DevOps</b>{" "}
            pipelines.
          </p>

          <div className="border-red-500 p-4 flex justify-center gap-6 mt-3  sm:hidden">
            {social.map((e, i) => (
              <span key={i} className="group">
                <a
                  href={e.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block p-2 bg-purple-500 rounded-lg transition-all duration-300 group-hover:scale-110"
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
