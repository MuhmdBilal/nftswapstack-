import React from "react";
import { GoDotFill } from "react-icons/go";
import { IoCheckmarkSharp } from "react-icons/io5";
import image2 from "../../assets/img/roadmap2.jfif";

const Phase2 = () => {
  return (
    <div className="flex flex-col relative bottom-10 bg-[#1D0729] items-center justify-center w-full py-3  rounded-t-[75px] gap-y-8 ">
      <div
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-delay="100"
        className="flex flex-col-reverse  items-center justify-between w-full gap-y-10 md:w-[90%] lg:w-[82%]  py-20 xl:w-[80%] md:gap-0 md:flex-row "
      >
        <img
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-delay="100"
          src={image2}
          className="lg:w-[370px] w-[270px] h-[270px] sm:w-[300px] sm:h-[290px] xl:w-[390px] rounded-lg shadow-2xl shadow-[#E647BF] lg:h-[350px] xl:h-[380px]"
          alt=""
        />
        <div className="flex flex-col items-center  md:items-start justify-center gap-y-8 w-full  md:w-[36%]">
          <h1 className=" text-[white] text-3xl md:text-4xl  xl:text-6xl font-extrabold text-gray-200 ">
            Phase 2
          </h1>
          <div className="flex flex-col items-start gap-y-2">
            <div className="flex items-center gap-x-2">
              <IoCheckmarkSharp size={30} className="text-green-400" />{" "}
              <h6>Partnering with Twitter influencers</h6>
            </div>
            <div className="flex items-center gap-x-2">
              <IoCheckmarkSharp size={30} className="text-green-400" />{" "}
              <h6>Launch of DEX advertisements</h6>
            </div>
            <div className="flex items-center gap-x-2">
              <IoCheckmarkSharp size={30} className="text-green-400" />{" "}
              <h6>Sponsored ads on Twitter</h6>
            </div>
            <div className="flex items-center gap-x-2">
              <IoCheckmarkSharp size={30} className="text-green-400" />{" "}
              <h6>Achieve a market cap of $1M</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phase2;
