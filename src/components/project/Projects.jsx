/* eslint-disable no-unused-vars */
import React from "react";
import Title from "../layout/Title";
import ProjectCard from "./ProjectCard";
import {
  alermImg,
  chattImg,
  ecommerceOneImg,
  ecommerceTwoImg,
  hangmanImg,
  todoList,
} from "../../assets/image";


const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black border-opacity-25"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>

      {/* project card */}
      <div className=" grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectCard
          src={chattImg}
          title="Chatting App"
          des="Connect instantly with our React Chat App. Effortless messaging, customizable rooms, and emoji support make staying in touch a breeze. Join the conversation now!"
          href="https://github.com/Creative-Md-Arif/ChatApp"
          
        
        />
        <ProjectCard
          title="E-commerce Website"
          src={ecommerceTwoImg}
          des="Shop smarter with our ReactJS Ecommerce site powered by Firebase. Secure transactions, vast product selection, and easy order tracking. Start shopping now!"
          href="https://github.com/Creative-Md-Arif/e-commerce-website"
          to="https://simplereact-c-w.netlify.app/"
          
          
        />
        <ProjectCard
          title="E-commerce Website"
          src={ecommerceOneImg}
          des="Shop smarter with our ReactJS Ecommerce site. Secure transactions, vast product selection, and easy order tracking. Start shopping now!"
          href="https://github.com/Creative-Md-Arif/e-commerce-website"
          to="https://simplereact-c-w.netlify.app/"
        />
        <ProjectCard
          title="React Todo List"
          src={todoList}
          des="Shop smarter with our ReactJS Ecommerce site. Secure transactions, vast product selection, and easy order tracking. Start shopping now!"
          href="https://github.com/Creative-Md-Arif/todo-app-react"
          to="https://react-t-list.netlify.app/"
        />
        <ProjectCard
          title="Hang Man Game"
          src={hangmanImg}
          des="Play Hangman with JavaScript! Guess letters, solve words, and avoid the hangman's noose. A fun and addictive challenge!"
          href="https://github.com/Creative-Md-Arif/HangMan-Game"
          to="https://hang-man-game-chi.vercel.app/"
        />
        <ProjectCard
          title="Alarm Clock App"
          src={alermImg}
          des="Wake up on time with our JavaScript Alarm Clock. Set alarms, choose your tune, and start your day punctually. Simple and effective."
          href="https://github.com/Creative-Md-Arif/alarm-clock"
          to="https://alarm-clock-tau.vercel.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
