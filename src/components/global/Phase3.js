import React from "react";
import { GoDotFill } from "react-icons/go";
import { IoCheckmarkSharp } from "react-icons/io5";
import image2 from "../../assets/img/roadmap3.jfif";

const Phase3 = () => {
  return (
    <div className="flex flex-col bg-[#300931]/70 items-center justify-center w-full py-3  rounded-t-[75px] gap-y-8 ">
      {/* Phase 3 */}
      <div
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-delay="100"
        className="flex flex-col items-center justify-between w-full gap-y-10 md:w-[90%] lg:w-[82%]  py-16 xl:w-[75%] md:gap-0 md:flex-row "
      >
        <div className="flex flex-col items-center  md:items-start justify-center gap-y-8 w-full  md:w-[50%]">
          <h1 className=" text-[white] text-3xl md:text-4xl  xl:text-6xl font-extrabold text-gray-200 ">
            Phase 3
          </h1>
          <div className="flex flex-col items-start gap-y-2">
            <div className="flex items-center gap-x-2">
              <IoCheckmarkSharp size={30} className="text-green-400" />{" "}
              <h6>Listing on CoinGecko</h6>
            </div>
            <div className="flex items-center gap-x-2">
              <IoCheckmarkSharp size={30} className="text-green-400" />{" "}
              <h6>Listing on CoinMarketCap (CMC)</h6>
            </div>
            <div className="flex items-center gap-x-2">
              <IoCheckmarkSharp size={30} className="text-green-400" />{" "}
              <h6>First centralized exchange (CEX) listing</h6>
            </div>
            <div className="flex items-center gap-x-2">
              <IoCheckmarkSharp size={30} className="text-green-400" />{" "}
              <h6>Grow Twitter community to 5K followers</h6>
            </div>
            <div className="flex items-center gap-x-2">
              <IoCheckmarkSharp size={30} className="text-green-400" />{" "}
              <h6>Grow Telegram group to 5K members</h6>
            </div>
            <div className="flex items-center gap-x-2">
              <IoCheckmarkSharp size={30} className="text-green-400" />{" "}
              <h6>Engage YouTube influencers</h6>
            </div>
            <div className="flex items-center gap-x-2">
              <IoCheckmarkSharp size={30} className="text-green-400" />{" "}
              <h6>Achieve a market cap of $10M</h6>
            </div>
          </div>
        </div>
        <img
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-delay="100"
          src={image2}
          className="lg:w-[370px] w-[270px] h-[270px] sm:w-[300px] sm:h-[290px] xl:w-[390px] rounded-lg shadow-2xl shadow-[#E647BF] lg:h-[350px] xl:h-[380px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default Phase3;
