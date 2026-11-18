import React from "react";
import { Link, NavLink } from "react-router";

const Sidebar = () => {
  let sidebar_btn_data =[
    {to:"/",btn:"Home"},
    {to:"/experience",btn:"Experience"},
    {to:"/projects",btn:"Projects"},
    {to:"/skills",btn:"Skills"},
    {to:"/education",btn:"Education"},
    {to:"/resume",btn:"Resume"},
    {to:"/contact",btn:"Contact"},
  ]
  return (
    <>
      <aside className="left-0 bottom-0 border-r-1 border-gray-300   w-[20%] h-screen p-5 bg-[#F9FAFB] sticky top-0 flex flex-col justify-between">
        
        <div className="cursor-pointer  p-4">
          <Link to="/">
          <h3 className="text-2xl font-bold">Gaurav Sondhiya</h3>
          <p className="text-neutral-400 text-xl">AI and FullStack Engineer</p>
          </Link>
        </div>

        <div className="text-xl [&>span]:cursor-pointer  [&>span]:w-full [&>span]:p-1 [&>span]:hover:border-l-4 hover:border-purple-500 mt-10 flex flex-col gap-3 [&>span]:text-left [&>span]:font-bold  [&>span]:text-neutral-500 p-4 ">
         {
          sidebar_btn_data.map((e,i)=>(
            <span key={i}>
              <NavLink to={e.to}>{e.btn}</NavLink>
            </span>
          ))
         }
        </div>

        <div className="mt-10 p-4 ">
          <a href="mailto:gauravsondhiya1503@gmail.com" target="_blank">
          <button className="border p-5 w-full cursor-pointer  bg-purple-500 text-white font-bold ">
            Get in Touch
          </button>
          </a>
          {/* <div className="flex mt-5 gap-4 cursor-pointer ">
            <p>Linkedin</p>
            <p>X</p>
            <p>Github</p>
          </div> */}
        </div>

      </aside>
    </>
  );
};

export default Sidebar;
