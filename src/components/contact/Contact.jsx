// eslint-disable-next-line no-unused-vars
import React from "react";
import Title from "../layout/Title";
import { contactImg } from "../../assets/image";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import ContactRight from "./ContactRight";

const Contact = () => {
  return (
    <section
      id="contacts"
      className="w-full py-20 border-b-[1px] border-b-black border-opacity-25 "
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <div className="w-full  lgl:w-[35%] h-full bg-gradient-to-t from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8">
            <img
              className=" h-72 rounded-lg object-cover bg-slate-800 mb-3"
              src={contactImg}
              alt="testimonialOne"
            />
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold text-white">Md.Arif</h3>
              <p className="text-base tracking-wide text-gray-400">
                Front-End Developer
              </p>
              <p className="text-base text-gary-400 tracking-wide">
                Front-end developer proficient in HTML, CSS, JavaScript, and
                React.js. Dedicated to crafting intuitive user interfaces and
                collaborating with teams for project success.
              </p>
              <p className="text-base text-gray-400 flex items-center gap-2">
                Phone: <span className="text-lightText">01797475538</span>
              </p>
              <p className="text-base  text-gray-400 flex items-center flex-wrap gap-1">
                {" "}
                Email: {""}
                <span className="text-lightText ">
                  mohammadarif.ma02@gmail.com
                </span>
              </p>
            </div>
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
          </div>
          {/* div 2 right side */}
          <div className="w-full  lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b]  flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne justify-between  ">
            <ContactRight/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
