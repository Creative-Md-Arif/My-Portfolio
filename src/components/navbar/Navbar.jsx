/* eslint-disable no-unused-vars */
import { Link } from "react-scroll";
import React from "react";
import { navLinksdata } from "../constanta";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa6";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu);

  return (
    <div className="w-full py-6 px-2 lg:px-8 sticky top-0 z-50 bg-bodyColor flex mx-auto justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 border-opacity-10">
      <div className="">
        <h1 className=" uppercase font-bold font-titleFont text-4xl lgl:text-5xl text-white  flex items-start">
          Moha <span className="text-blue-500">mmad</span>
        </h1>
      </div>
      <div>
        <ul className=" hidden lg:inline-flex gap-8 items-center lg:gap-10">
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
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl lg:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <h1 className=" uppercase font-bold font-titleFont text-2xl  text-white  flex items-start">
                  Moha <span className="text-blue-500">mmad</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nihil, optio. Dolore incidunt facilis fugit sunt cupiditate
                  blanditiis. Blanditiis, magni in.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map(({ _id, title, link }) => (
                  <li
                    key={_id}
                    className="text-base font-logoFont font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                     onClick={() => setShowMenu(false)}
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
              {/* ================= find part ================ */}
            <div className="flex flex-col gap-6">
              <h2 className="text base uppercase font-titleFont">Find And Me</h2>
                {/* ================================ icon part =============================== */}
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/ArifMohammad0"
                  target="_blank"
                >
                  <span className="bannerIcon">
                    <FaFacebookF />
                  </span>
                </a>
                <a href="https://github.com/Creative-Md-Arif" target="_blank">
                  <span className="bannerIcon">
                    <FaGithub />
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/md-arif-ma/"
                  target="_blank"
                >
                  <span className="bannerIcon">
                    <FaLinkedin />
                  </span>
                </a>
              </div>
              {/*  ========================= icon end ================== */}
            </div>
            {/* ======================== find Part end ============================== */}
            <span
              onClick={() => setShowMenu(false)}
              className=" absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
            >
              <MdClose />
            </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
