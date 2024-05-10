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
      <div className=" grid grid-cols-3 gap-20">
        <Card
          title="Mern Stack Development"
          des="MERN stack: MongoDB, Express.js, React, Node.js. It's a framework for building full-stack web applications, covering everything from the database to the user interface."
          icon={<FaNodeJs />}
        />
        <Card
          title="Python Django"
          des="Python Django: High-level web framework for rapid app development, emphasizing security and scalability."
          icon={<FaPython />}
        />
        <Card
          title="App Development"
          des="App development is creating software for mobile, desktop, or web platforms. It involves designing, coding, testing"
          icon={<GrAppsRounded />}
        />
        <Card
          title="Ux Design"
          des="UI/UX design enhances digital product usability and aesthetics, integrating UI for visuals and UX for smooth experiences across websites, apps, and platforms."
          icon={<SiAltiumdesigner />}
        />
        <Card
          title="Graphics design"
          des="Graphics design: visually communicating messages through typography, imagery, and layout for print, digital, or multimedia."
          icon={<SiMaterialdesignicons />}
        />

        <Card
          title="Hosting Website"
          des="Hosting a website: Storing and serving its files on a server for online access. It involves managing server resources and ensuring uptime and security."
          icon={<SiHostinger />}
        />
      </div>
    </section>
  );
};

export default Features;
