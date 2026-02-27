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
import { VscVscodeInsiders } from "react-icons/vsc";


const Skills = () => {
  let arr =[ <FaHtml5/>, <FaCss3Alt />, <IoLogoJavascript />,<SiTypescript />, <RiReactjsFill />,<RiTailwindCssFill />, <SiExpress />, <DiMongodb />, <DiNodejs />,<FaGitSquare />, <RiNextjsFill />, <VscVscodeInsiders />,  <DiPostgresql />, <FaDocker />,<FaAws />,<SiMysql/>]
  return (
    <div className="w-[80%]  border-blue-500 m-auto mt-24 p-2 rounded-xl">
  
      <p className="text-4xl font-bold text-center">Technical Skills</p>
      <div className="grid grid-cols-3 sm:grid-cols-8 gap-10  text-7xl mt-9 ">
        {
          arr.map((e,i)=>(
            <div key={i}>
             <div className="inline-block m-auto bg-gray-900 p-3 rounded-2xl">
              {e}
             </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Skills;
