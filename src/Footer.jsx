import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
const Footer = () => {
  return (
    <div className="border border-gray-800  w-[90%]  m-auto mt-12 p-3 ">
      <div className="[&>p,ul]: border-amber-300  grid sm:grid-cols-3 gap-5 text-xl font-bold">
      <p>Designed and Developed by Gaurav Sondhiya</p>
      <p className="text-center">Copyright @ 2025 G.S</p>
      <ul className="grid grid-cols-4 text-3xl gap-3  [&>li]:hover:text-blue-500">
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
      
    </div>
  );
};

export default Footer;
