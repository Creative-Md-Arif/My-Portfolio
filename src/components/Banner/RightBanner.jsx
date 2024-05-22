import { arifImg,  } from "../../assets/image"


const RightBanner = () => {
  return (
    <div className="w-full  lgl:w-1/2 flex justify-center xl:justify-end items-center relative ">
    <img
      className="w-[300px] lgl:w-[500px] h-[450px]  lgl:h-[800px] z-10"
      src={arifImg}
      alt=""
    />
    <div className=" absolute bottom-0 w-[310px] lgl:w-[500px] h-[250px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center">

    </div>
  </div>
  )
}

export default RightBanner
