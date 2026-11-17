import React from "react";
import Intro from "./Intro";
import Projects from "./Projects";
const Sidebar = () => {
  return (
  <>
  
 
    <aside  className="left-0 bottom-0 border border-black w-[20%] h-screen p-5 bg-stone-50 sticky top-0">
        <div className="cursor-pointer  p-4">
          <h3 className="text-2xl font-bold">Gaurav Sondhiya</h3>
          <p className="text-neutral-400">AI and FullStack Engineer</p>
        </div>

        <div className=" [&>button]:cursor-pointer  [&>button]:w-full [&>button]:p-1 [&>button]:hover:border-l-4 hover:border-purple-500 mt-10 flex flex-col gap-3 [&>button]:text-left [&>button]:font-bold  [&>button]:text-neutral-500 p-4 ">

          <button>Home</button>
          <button>Experience</button>
          <button>Projects</button>
          <button>Educations</button>
          <button>Skills</button>
          <button>Resume</button>
          <button>Contact</button>

        </div>

        <div className="mt-10 p-4 ">
          <button className="border p-5 w-full cursor-pointer  bg-purple-500 text-white font-bold ">
            Contact with ME
          </button>

          <div className="flex mt-5 gap-4 cursor-pointer ">
            <p>Linkedin</p>
            <p>X</p>
            <p>Github</p>
          </div>
        </div>
      </aside>
      
         {/* <div className="w-[80%]">
            <Intro/>
             <Projects/>
         </div> */}


        </>
  );
};

export default Sidebar;
