/* eslint-disable no-unused-vars */
import { Link } from "react-scroll";
import React from "react";
import { navLinksdata } from "../constanta";

const Navbar = () => {
  return (
    <div className="w-full py-6 sticky top-0 z-50 bg-bodyColor flex mx-auto justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 border-opacity-10">
      <div className="">
        <h1 className="text-white font-logoFont text-5xl font-bold uppercase">
          Moha<span className=" text-red-600 text-3xl">mmad</span>
        </h1>
      </div>
      <div>
        <ul className="flex items-center gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              key={_id}
              className="text-base font-logoFont font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
