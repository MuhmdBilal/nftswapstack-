import React from "react";
import { GoDotFill } from "react-icons/go";
import { IoCheckmarkSharp } from "react-icons/io5";
import image1 from "../../assets/img/roadmap1.jfif";

const Phase1 = () => {
  return (
    <div className="flex flex-col bg-[#300931]/70 items-center justify-center w-full py-3  rounded-t-[75px] gap-y-8 ">
      <h6 className="text-[35px] sm:text-[50px] md:text-[65px] font-bold capitalize pb-5">
        Road Map
      </h6>

      {/* phase 1 */}
      <div
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-delay="100"
        className="flex flex-col items-center justify-between w-full gap-y-10 md:w-[90%] lg:w-[82%]  py-16 xl:w-[75%] md:gap-0 md:flex-row "
      >
        <div className="flex flex-col items-center  md:items-start justify-center gap-y-8 w-full  md:w-[50%]">
          <h1 className=" text-[white] text-3xl md:text-4xl  xl:text-6xl font-extrabold text-gray-200 ">
            Phase 1
          </h1>
          <div className="flex flex-col items-start gap-y-2">
            <div className="flex items-center gap-x-2">
              <IoCheckmarkSharp size={30} className="text-green-400" />{" "}
              <h6>Launch of the token</h6>
            </div>
            <div className="flex items-center gap-x-2">
              <IoCheckmarkSharp size={30} className="text-green-400" />{" "}
              <h6>Website goes live</h6>
            </div>
            <div className="flex items-center gap-x-2">
              <IoCheckmarkSharp size={30} className="text-green-400" />{" "}
              <h6>NFT collection with built-in utility</h6>
            </div>
            <div className="flex items-center gap-x-2">
              <IoCheckmarkSharp size={30} className="text-green-400" />{" "}
              <h6>Staking options for NFTs</h6>
            </div>
            <div className="flex items-center gap-x-2">
              <IoCheckmarkSharp size={30} className="text-green-400" />{" "}
              <h6>Launch of the marketplace</h6>
            </div>
            <div className="flex items-center gap-x-2">
              <IoCheckmarkSharp size={30} className="text-green-400" />{" "}
              <h6>Achieve a market cap of $500k</h6>
            </div>
          </div>
        </div>
        <img
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-delay="100"
          src={image1}
          className="lg:w-[370px] w-[270px] h-[270px] sm:w-[300px] sm:h-[290px] xl:w-[390px] rounded-lg shadow-2xl shadow-[#E647BF] lg:h-[350px] xl:h-[380px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default Phase1;
