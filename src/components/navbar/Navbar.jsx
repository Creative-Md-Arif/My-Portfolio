/* eslint-disable no-unused-vars */
import { Link } from "react-scroll";
import React from "react";
import { navLinksdata } from "../constanta";

const Navbar = () => {
  return (
    <div className="w-full py-6 px-8 sticky top-0 z-50 bg-bodyColor flex mx-auto justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 border-opacity-10">
      <div className="">
         <h1 className=' uppercase font-bold font-titleFont text-5xl text-white  flex items-start'>Moha <span className='text-blue-500'>mmad</span></h1>
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
