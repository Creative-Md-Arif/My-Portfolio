/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Features from "./components/features/Features";
import Projects from "./components/project/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
      <div className="max-w-screen-2xl mx-auto px-16">
        <Banner />
        <Features />
        <Projects />
        <Resume/>
        <Testimonial/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
