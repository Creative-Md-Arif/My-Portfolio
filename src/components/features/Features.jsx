/* eslint-disable no-unused-vars */
import React from "react";
import Title from "../layout/Title";
import Card from "./Card";
import { SiHostinger } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { GrAppsRounded } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa";
import { SiAltiumdesigner } from "react-icons/si";
import { SiMaterialdesignicons } from "react-icons/si";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="features" des="What I Do" />
      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Mern Stack Development"
          des="Master full-stack web development with our in-depth MERN Stack course, covering MongoDB, Express, React, and Node.js."
          icon={<FaNodeJs />}
        />
        <Card
          title="Python Django"
          des="Python Django: High-level web framework for rapid app development, emphasizing security and scalability."
          icon={<FaPython />}
        />
        <Card
          title="App Development"
          des="Transforming ideas into seamless mobile experiences with our expert app development services."
          icon={<GrAppsRounded />}
        />
        <Card
          title="Ux Design"
          des="Creating intuitive and engaging user experiences that enhance usability and delight users."
          icon={<SiAltiumdesigner />}
        />
        <Card
          title="Graphics design"
          des="Crafting visually compelling designs that elevate your brand and captivate your audience."
          icon={<SiMaterialdesignicons />}
        />

        <Card
          title="Hosting Website"
          des="Reliable web hosting services with 24/7 support, unlimited bandwidth, and robust security features."
          icon={<SiHostinger />}
        />
      </div>
    </section>
  );
};

export default Features;
