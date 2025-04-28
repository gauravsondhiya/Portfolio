import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
const Homepage = () => {
  return (
    <div className=" w-[90%]  m-auto mt-10 p-2 ">
      <img
        className="h-[120px] mt-2 rounded-full ml-2 hover:shadow-xl shadow-blue-500/40"
        src="https://avatars.githubusercontent.com/u/159610252?v=4"
        alt="avatar"
      />

      <p className="  text-4xl font-bold tracking-tight mt-3 hover:text-blue-500">
        Hi, I'm Gaurav Sondhiya..{" "}
      </p>

      <p className=" text-xl  border-red-600 w-[70%] mt-3 p-1 ">
        I am a Software Developer based in Bangalore with over 3 years of
        experience in the <strong>Mern Stack</strong> I specialize in building
        efficient, user-focused web applications.
      </p>
      <p className="text-xl">My Current focus is React.JS, TypeScript, Next.JS and AWS.</p>
      <ul className="  flex gap-6 mt-3 text-3xl [&>li]:hover:text-blue-500">
        <li>
          <FaGithub />
        </li>
        <li>
          <FaTwitterSquare />
        </li>
        <li>
          <FaLinkedin />
        </li>
        <li>
          <IoIosMail />
        </li>
      </ul>
    </div>
  );
};

export default Homepage;
