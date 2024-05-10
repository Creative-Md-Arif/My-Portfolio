// eslint-disable-next-line no-unused-vars
import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex gap-20"
    >
      {/* education part */}
      <div className="">
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-4xl font-bold">Company Experience</h2>
        </div>
        {/* Resume Card */}
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="N/A"
            subTitle="N/A"
            result="Success"
            des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          />
          <ResumeCard
            title="N/A"
            subTitle="N/A"
            result="Success"
            des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          />
          <ResumeCard
            title="N/A"
            subTitle="N/A"
            result="Success"
            des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          />
        </div>
      </div>
      {/* Experience Part */}
      <div className="">
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        {/* Resume Card */}
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="N/A"
            subTitle="N/A"
            result="Success"
            des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          />
          <ResumeCard
            title="N/A"
            subTitle="N/A"
            result="Success"
            des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          />
          <ResumeCard
            title="N/A"
            subTitle="N/A"
            result="Success"
            des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
