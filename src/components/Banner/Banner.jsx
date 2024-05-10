// eslint-disable-next-line no-unused-vars
import React from "react";
import LeftBanner from "./LeftBanner";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full py-28 flex items-center  border-b-[1px] font-titleFont border-b-black"
    >
      {/* 1nd  div left Banner */}
      <LeftBanner />
      {/* 1nd div left banner */}

      <div className="w-1/2 flex justify-center items-center relative ">
        <img
          className="w-[500px] h-[680px] z-10"
          src="/src/assets/bannerImg.png"
          alt=""
        />
        <div className=" absolute bottom-0 w-[500px] h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
      </div>
      {/* 2nd div left banner end */}
    </section>
  );
};

export default Banner;
