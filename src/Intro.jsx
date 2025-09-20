import React from "react";
import { social } from "./Data.jsx";
import logo from "./assets/logo.jpg";
import { Link } from "react-router";
const Intro = () => {
  return (
    <div className="w-[80%] m-auto mt-[9%]  grid sm:grid-cols-12 gap-4  border-red-600">
      <div className="hidden md:block  border-red-600 sm:col-span-5   ">
        <img
          className=" rounded-full h-[450px] w-[450px] object-scale-down mx-auto border"
          src={logo}
          alt="avatar"
        />
      </div>

      <div className=" border-amber-400 col-span-7 ">
        <p className="  p-4 text-4xl font-bold tracking-tight mt-3">
          Hi, I'm Gaurav Sondhiya..{" "}
        </p>

        <p className=" text-xl leading-relaxed  border-red-600  mt-3 p-4 ">
          I am a Software Engineer with 3 years of Experience in building Modern
          applications. I work with React, Next.js, Redux, Node.js, Express,
          MongoDB, and PostgreSQL. I also have knowledge of DevOps, AWS, Zod,
          and generative AI with vector databases. My focus is on creating
          scalable, secure, and impactful digital solutions.
        </p>

        <ul className=" p-4 flex gap-6 mt-3 text-3xl [&>li]:hover:text-blue-500">
          {social.map((e, i) => (
            <li key={i}>
              <a href={e.url} target="_blank" rel="noopener noreferrer">
                {e.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Intro;
