// eslint-disable-next-line no-unused-vars
import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full py-28 flex flex-col xl:flex-row items-center  gap-10 lgl:0  border-b-[1px]  font-titleFont border-b-black"
    >
      {/* 1nd  div left Banner */}
        <LeftBanner />
        <RightBanner/>
      {/* 1nd div left banner */}

    
      {/* 2nd div left banner end */}
    </section>
  );
};

export default Banner;
