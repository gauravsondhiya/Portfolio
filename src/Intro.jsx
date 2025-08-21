import React from "react";
import { social } from "./Data.jsx";
import logo from "./assets/logo.jpg";
import { Link } from "react-router";
const Intro = () => {
  return (
    <div className="w-[90%] m-auto mt-[25%]  grid sm:grid-cols-12 gap-4  border-red-600">

      <div className="hidden md:block border-red-600 sm:col-span-5  ">
        <img
          className="m-auto w-[50%] rounded-e-4xl  border-red-600 shadow-xl shadow-purple-500"
          src={logo}
          alt="avatar"
        />
      </div>

        <div className=" border-amber-400 col-span-7 ">
       <p className="  text-4xl font-bold tracking-tight mt-3 hover:text-blue-500">
        Hi, I'm Gaurav Sondhiya..{" "}
      </p>

      <p className=" text-xl  border-red-600 sm:w-[70%] mt-3 p-1 ">
        I am a Software Developer based in Bangalore with over 3 years of
        experience in the <strong>Mern Stack</strong> I specialize in building
        efficient, user-focused web applications.
      </p>
      <p className="text-xl">
        My Current focus is React.JS, TypeScript, Next.JS and AWS.
      </p>
      <ul className="  flex gap-6 mt-3 text-3xl [&>li]:hover:text-blue-500">
        {social.map((e, i) => (
          <li key={i}>
            <a
              href={e.url}
              target="_blank"
              rel="noopener noreferrer"
            >
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
