/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { FaFigma } from "react-icons/fa";


const LeftBanner = () => {
  // react type writer
  const [text] = useTypewriter({
    words: ["Web Designer.", "Front-End Developer."],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <div className="w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-3">
        <h4>WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          HI, I'm {""}
          <span className=" text-designColor capitalize ">Md.Arif</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a
          <span className="pl-2">
            {text}
            {/* react type writer */}
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </span>
        </h2>
        <p>
          My career objective is to excel as a front-end developer, specializing
          in HTML, CSS, JavaScript, and React.js. I aim to leverage my skills to
          create dynamic and visually appealing user interfaces, contributing to
          innovative projects that enhance the digital experience. By staying
          updated with the latest technologies and best practices, I seek to
          deliver high-quality solutions that exceed user expectations and drive
          business success.
        </p>
      </div>
      {/* React Icons Part Banner */}
      <div className="flex justify-between">
        {/* part one */}
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find And Me
          </h2>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/ArifMohammad0" target="_blank">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
            <a href="https://github.com/Creative-Md-Arif" target="_blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/md-arif-ma/" target="_blank">
              <span className="bannerIcon">
                <FaLinkedin />
              </span>
            </a>
          </div>
        </div>
        {/* part Two */}
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Best Skil on
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <RiTailwindCssFill />
            </span>
            <span className="bannerIcon">
              <IoLogoFirebase />
            </span>
            <span className="bannerIcon">
              <FaFigma />
            </span>
          </div>
        </div>
      </div>
      {/* React Icons Part End */}
    </div>
  );
};

export default LeftBanner;
