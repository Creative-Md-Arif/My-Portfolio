/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import { Link } from "react-scroll";

const ProjectCard = ({ title, des, src , href, to }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-100 group">
      <div className="w-full h-[300px] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      {/* icon div */}
      <div className="w-full mt-5">
        <div className=" flex items-center justify-between ">
          <h3 className="text-base uppercase text-designColor font-normal">
            {title}
          </h3>
          <div className=" flex gap-2">
           <a href={href} target="_blank">
            <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
              <FaGithub />
            </span>
           </a>
            <a href={to} target="_blank">
            <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
              <FaGlobe />
            </span>
            </a>
            
          </div>
        </div>
      </div>
      {/* icon div End */}
      <div className="mt-5">
        <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
          {des}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
