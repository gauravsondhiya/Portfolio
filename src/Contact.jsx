import React, { useState } from "react";
import { Contact_data } from "./Data";

const Contact = () => {
  return (
    <div className="flex justify-around border border-black h-screen">
      <div className="m-auto w-[50%] font-['Iowan_Old_Style',Georgia,serif]">
        <p>Get In Touch</p>
        <h1 className="text-9xl">Let's Connect</h1>
        <p className="text-xl mt-5 ">If my work resonates with what you're building,I'd be glad to hear
          from you.
        </p>
        <div className="mt-4 text-2xl font-mono font-bold">
          <p>Mobile no -  9340578571</p>
          <a href="mailto:gauravsondhiya1503@gmail.com" target="_blank" className="hover:text-[#7B3F32]" >Email - gauravsondhiya1503@gmail.com</a>
        </div>
      </div>
      <div className="m-auto ">
          {
            Contact_data.map((e,i)=>(
              <div className=" border-black text-4xl my-4 ">
                <a  href={e.link}
                target="_blank" className="flex justify-between gap-9 p-5 hover:text-[#7B3F32] font-['Iowan_Old_Style',Georgia,serif]">
                  <span>{e.type}</span>
                  <span>↗</span>
               </a>
              <hr />
              </div>
            ))
          }
      </div>
    </div>
  );
};

export default Contact;
