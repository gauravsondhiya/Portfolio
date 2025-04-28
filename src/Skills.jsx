import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { DiNodejs } from "react-icons/di";
import { FaGitSquare } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
  return (
    <div className="w-[90%]  border-amber-400 m-auto mt-10 p-2 text-white ">
        <p className="text-center text-4xl font-bold ">Professional Skillset</p>
      <ul className="grid grid-cols-5 gap-9 text-7xl mt-9  [&>li]:m-auto " >
        <li className="m-auto">
          <FaHtml5 />
        </li>
        <li>
          <FaCss3Alt />
        </li>
        <li>
          <IoLogoJavascript />
        </li>
        <li>
          <RiReactjsFill />
        </li>
        <li>
          <SiExpress />
        </li>
        <li>
          <DiMongodb />
        </li>
        <li>
          <DiNodejs />
        </li>
        <li>
          <FaGitSquare />
        </li>
        <li>
          <RiNextjsFill />
        </li>
        <li>
          <SiTypescript />
        </li>
        <li>
          <FaAws />
        </li>
        <li>
          <FaDocker />
        </li>
        <li>
          <SiMysql />
        </li>
        <li>
          <DiPostgresql />
        </li>
        <li><RiTailwindCssFill/></li>
       
      </ul>
    </div>
  );
};

export default Skills;
