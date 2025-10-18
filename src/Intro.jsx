import React from "react";
import { social } from "./Data.jsx";
import logo from "./assets/logo.jpg";

const Intro = () => {
  return (
    <>
      <div className="w-[80%] m-auto  grid sm:grid-cols-12 gap-4  border-red-600 mt-30">
        <div className=" sm:col-span-5   border-green-600  ">
          <img
            className=" rounded-full h-[300px] w-[300px]  sm:h-[400px] sm:w-[400px] 
                      mx-auto border"
            src={logo}
            alt="avatar"
          />
        </div>

        <div className=" border-amber-400 sm:col-span-7 ">
          <div className="text-center sm:text-left relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4 text-4xl font-bold  mt-3">
            Hi, I'm Gaurav Sondhiya..{" "}
          </div>
          <p className=" text-xl leading-relaxed  border-red-600  mt-3 p-4 ">
            I am a Software Engineer with <b>3 years</b> of Experience in
            building web applications.
            <br /> I work with React, Next.js, Redux, Node.js, Express, MongoDB,
            and PostgreSQL. I also have knowledge of DevOps, AWS, Zod, and
            generative AI with vector databases. My focus is on creating
            scalable, secure, and impactful digital solutions.
          </p>

         <div className="border-red-500 p-4 flex gap-6 mt-3">
  {social.map((e, i) => (
    <span key={i} className="group">
      <a
        href={e.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block p-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg group-hover:from-purple-600 group-hover:via-pink-600 group-hover:to-red-600 transition-all duration-300 group-hover:scale-110"
      >
        <div className="text-white text-3xl">
          {e.icon}
        </div>
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
