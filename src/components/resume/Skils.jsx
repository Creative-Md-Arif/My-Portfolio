/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";

const Skils = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex gap-20"
    >
      {/* personal Skil */}
      <div className="w-1/2">
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">Features</p>
          <h2 className="text-4xl font-bold">Design Skill</h2>
        </div>
        {/* Resume Card */}
        <div className="mt-14 w-full flex flex-col gap-6 ">
          <div className=" overflow-x-hidden">
            <p className="text-sm uppercase font-medium">photoshot</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[30%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className=" absolute -top-7 right-0"> 30%</span>
              </motion.span>
            </span>
          </div>
          {/*  */}
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Figma</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className=" absolute -top-7 right-0"> 70%</span>
              </motion.span>
            </span>
          </div>
          {/*  */}
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">photoshot</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className=" absolute -top-7 right-0"> 100%</span>
              </motion.span>
            </span>
          </div>
          {/*  */}
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">photoshot</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className=" absolute -top-7 right-0"> 100%</span>
              </motion.span>
            </span>
          </div>
          {/*  */}
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">photoshot</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className=" absolute -top-7 right-0"> 100%</span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>
      {/* development Skil */}
      <div className=" w-1/2">
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">Features</p>
          <h2 className="text-4xl font-bold">Development Skill</h2>
        </div>
        {/* development Skil */}
        <div className="mt-14 w-full ">
        <div className="mt-14 w-full flex flex-col gap-6 ">
          <div className=" overflow-x-hidden">
            <p className="text-sm uppercase font-medium">photoshot</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[30%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className=" absolute -top-7 right-0"> 30%</span>
              </motion.span>
            </span>
          </div>
          {/*  */}
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Figma</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className=" absolute -top-7 right-0"> 70%</span>
              </motion.span>
            </span>
          </div>
          {/*  */}
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">photoshot</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className=" absolute -top-7 right-0"> 100%</span>
              </motion.span>
            </span>
          </div>
          {/*  */}
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">photoshot</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className=" absolute -top-7 right-0"> 100%</span>
              </motion.span>
            </span>
          </div>
          {/*  */}
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">photoshot</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className=" absolute -top-7 right-0"> 100%</span>
              </motion.span>
            </span>
          </div>
        </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skils;
