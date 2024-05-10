/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Features from "./components/features/Features";
import Projects from "./components/project/Projects";
import Resume from "./components/resume/Resume";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="max-w-screen-2xl mx-auto px-16">
        <Navbar />
        <Banner />
        <Features />
        <Projects />
        <Resume/>
      </div>
    </div>
  );
}

export default App;
