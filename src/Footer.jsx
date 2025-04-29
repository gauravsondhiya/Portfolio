import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
const Footer = () => {
  return (
    <div className=" border-amber-300 flex justify-between w-[90%]  m-auto mt-3 p-4 text-xl font-bold">
      <p>Designed and Developed by Gaurav Sondhiya</p>
      <p>Copyright @ 2025 G.S</p>
      <ul className="flex text-2xl gap-5 [&>li]:hover:text-blue-500">
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

export default Footer;
