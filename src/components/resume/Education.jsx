/* eslint-disable no-unused-vars */
import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* education part */}
      <div className="">
        <div className="py-6 lgl:py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">2008-2024</p>
          <h2 className="text-3xl  md:text-4xl font-bold">Education Quality</h2>
        </div>
        {/* Resume Card */}
        <div className="mt-6
         lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Front-End Development With React"
            subTitle="Creative It Institute (Studying from 2023 onwards)"
            result="N/A"
            des="Front-End Development With React is a course that teaches essential React concepts for building modern web applications. Perfect for beginners and experienced developers alike."
          />
          <ResumeCard
            title="Bachelor of Philosophy"
            subTitle="Govt. Tolaram College (2022-2026)"
            result="N/A"
            des="A Bachelor of Philosophy degree provides a broad, interdisciplinary education focusing on critical thinking and analysis, preparing graduates for various career paths or further studies."
          />
          <ResumeCard
            title="Higher School Certificate"
            subTitle="Kabi Nozrul Govt. Collage (2019-2021)"
            result="4.5/5"
            des="The HSC (Higher Secondary Certificate) in Bangladesh is earned upon completing twelfth grade, marking the end of secondary education. It's a crucial milestone for pursuing further studies or entering the workforce."
          />
        </div>
      </div>
      {/* Experience Part */}
      <div className="">
        <div className=" py-6 lgl:py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">2023-2024</p>
          <h2 className="text-3xl  md:text-4xl font-bold">Job Experience</h2>
        </div>
        {/* Resume Card */}
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Front-End Developer"
            subTitle="Creative It Institute (2023-2024)"
            result="BanglaDesh"
            des="Front-End Development With React is a course that teaches essential React concepts for building modern web applications. Perfect for beginners and experienced developers alike."
          />
          <ResumeCard
            title="Front-End Developer"
            subTitle="Creative It Institute (2023-2024)"
            result="BanglaDesh"
            des="Front-End Development With React is a course that teaches essential React concepts for building modern web applications. Perfect for beginners and experienced developers alike."
          />
          <ResumeCard
            title="Front-End Developer"
            subTitle="Creative It Institute (2023-2024)"
            result="BanglaDesh"
            des="Front-End Development With React is a course that teaches essential React concepts for building modern web applications. Perfect for beginners and experienced developers alike."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
