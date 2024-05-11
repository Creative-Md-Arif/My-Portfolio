import Title from "../layout/Title";
import Slider from "react-slick";
// eslint-disable-next-line no-unused-vars
import { testimonialOne } from "../../assets/image";

const Testimonial = () => {
  const settings = {
    className: "",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-black border-opacity-25 "
    >
      <div className="flex justify-center items-center text-center">
        <Title title="WHAT CLIENTS SAY" des="Testimonial" />
      </div>
      {/* slider Start */}
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {/* slider one start */}
          <div className="w-full">
            <div className="w-full h-[500px] flex justify-between">
              <div className="w-[35%] h-full bg-gradient-to-t from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
                <img
                  className=" h-72 rounded-lg object-cover bg-slate-800"
                  src={testimonialOne}
                  alt="testimonialOne"
                />
                <div>
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">Lorem, ipsum.</p>
                  <h3 className="text-2xl font-bold">Mohammad Amir</h3>
                  <p className="text-base tracking-wide text-gray-500">Operation Officer</p>
                </div>
              </div>
              {/* div 2 right side */}
              <div className="w-[60%] h-full border"></div>
            </div>
          </div>
          {/* slider one END */}
          {/* <div>
        <h3>2</h3>
      </div> */}
        </Slider>
      </div>
      {/* slider end */}
    </section>
  );
};

export default Testimonial;
