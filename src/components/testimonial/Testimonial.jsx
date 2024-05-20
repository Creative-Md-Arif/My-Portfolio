/* eslint-disable react/prop-types */
import Title from "../layout/Title";
import Slider from "react-slick";
// eslint-disable-next-line no-unused-vars
import { testimonialOne } from "../../assets/image";
import { MdOutlineFormatQuote } from "react-icons/md";
import { RiStarFill } from "react-icons/ri";
import { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

//NextArrow 
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute
       top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}
//PrevArrow
function SamplePrevArrow(props) {
  const {  onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center
       items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    ><HiArrowLeft/></div>
  );
}

const Testimonial = () => {
  const [dotActive, setDotActive] = useState(0);
  const settings = {
    className: "",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow/>,
    adaptiveHeight: true,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "#ff014f",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };

  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-black border-opacity-25 "
    >
      <div className="flex justify-center items-center text-center">
        <Title title="WHAT CLIENTS SAY" des="Testimonial" />
      </div>
      {/* ================== slider Start ==============================*/}
      <div className="mx-auto">
        <Slider {...settings}>
          {/* ======================slider one start ======================*/}
          <div className="w-full">
            <div className="w-full h-auto  flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-t from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col
               gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className=" h-72 md:h-32 lgl:h-72 rounded-lg object-cover bg-slate-800"
                  src={testimonialOne}
                  alt="testimonialOne"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Lorem, ipsum.
                  </p>
                  <h3 className="text-2xl font-bold">Mohammad Amir</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Operation Officer
                  </p>
                </div>
              </div>
              {/* div 2 right side */}
              <div className="w-full  lgl:w-[60%] h-full flex flex-col justify-between ">
                <span>
                  <MdOutlineFormatQuote className=" text-[70px] lgl:text-[120px] text-black" />
                </span>
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl  lgl:text-2xl font-medium tracking-wide">
                        Lorem, ipsum dolor.
                      </h3>
                      <p className="text-base text-gary-400">N/A</p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis quem dolor, adipisicing id voluptatem ducimus!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis quem dolor, adipisicing id voluptatem ducimus!{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*===================== slider two ===============================*/}
          <div className="w-full">
            <div className="w-full h-auto  flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-t from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col
               gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className=" h-72 md:h-32 lgl:h-72 rounded-lg object-cover bg-slate-800"
                  src={testimonialOne}
                  alt="testimonialOne"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Lorem, ipsum.
                  </p>
                  <h3 className="text-2xl font-bold">Mohammad Amir</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Operation Officer
                  </p>
                </div>
              </div>
              {/* ====================== div 2 right side ========================= */}
              <div className="w-full  lgl:w-[60%] h-full flex flex-col justify-between ">
                <span>
                  <MdOutlineFormatQuote className=" text-[70px] lgl:text-[120px] text-black" />
                </span>
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl  lgl:text-2xl font-medium tracking-wide">
                        Lorem, ipsum dolor.
                      </h3>
                      <p className="text-base text-gary-400">N/A</p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis quem dolor, adipisicing id voluptatem ducimus!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis quem dolor, adipisicing id voluptatem ducimus!{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* =============================== slider three  =============================== */}
          <div className="w-full">
            <div className="w-full h-auto  flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-t from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col
               gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className=" h-72 md:h-32 lgl:h-72 rounded-lg object-cover bg-slate-800"
                  src={testimonialOne}
                  alt="testimonialOne"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Lorem, ipsum.
                  </p>
                  <h3 className="text-2xl font-bold">Mohammad Amir</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Operation Officer
                  </p>
                </div>
              </div>
              {/* div 2 right side */}
              <div className="w-full  lgl:w-[60%] h-full flex flex-col justify-between ">
                <span>
                  <MdOutlineFormatQuote className=" text-[70px] lgl:text-[120px] text-black" />
                </span>
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl  lgl:text-2xl font-medium tracking-wide">
                        Lorem, ipsum dolor.
                      </h3>
                      <p className="text-base text-gary-400">N/A</p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis quem dolor, adipisicing id voluptatem ducimus!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis quem dolor, adipisicing id voluptatem ducimus!{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      {/* slider end */}
    </section>
  );
};

export default Testimonial;
