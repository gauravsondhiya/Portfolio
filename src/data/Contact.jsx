import React, { useState } from "react";
import { Contact_data } from "./Data";

const Contact = () => {
  return (
    <div className="p-5  grid sm:grid-cols-12  sm:p-20  h-full
      ">

      <div className=" sm:col-span-6 m-auto  font-['Iowan_Old_Style',Georgia,serif]">
        {/* <p>Get In Touch</p> */}
        <p className="text-8xl sm:text-9xl">Let's Connect</p>
        <p className="text-xl mt-5 ">If my work resonates with what you're building,I'd be glad to hear
          from you.
        </p>
        <div className=" mt-4 text-xl sm:text-2xl font-mono font-bold">
          <p>Mobile no -  9340578571</p>
          <a href="mailto:gauravsondhiya1503@gmail.com" target="_blank" className="hover:text-[#7B3F32]" >Email-gauravsondhiya1503@gmail.com</a>
        </div>
      </div>

      <div className="sm:col-span-6 sm:m-auto ">
          {
            Contact_data.map((e,i)=>(
              <div key={i} className=" border-black text-4xl my-4 ">
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
