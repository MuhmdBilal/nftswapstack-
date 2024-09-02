import React from "react";
import { GoDotFill } from "react-icons/go";
import { IoCheckmarkSharp } from "react-icons/io5";
import chart from "../../assets/img/chart.png";

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="flex flex-col overflow-hidden bg-[#300931]/70 items-center justify-center w-full py-3  rounded-t-[75px] gap-y-8 ">
      <h6 className="text-[35px] sm:text-[50px] md:text-[65px] font-bold capitalize ">
        Tokenomics
      </h6>

      <div
        data-aos="fade-left"
        data-aos-offset="100"
        data-aos-delay="100"
        className="flex flex-col-reverse gap-x-5 items-center md:items-start justify-between w-full gap-y-10 md:w-[90%] lg:w-[82%]  py-16 xl:w-[80%] md:gap-0 md:gap-x-4 xl:gap-x-0 md:flex-row "
      >
        

        <img
          data-aos="zoom-in"
          data-aos-offset="100"
          data-aos-delay="100"
          src={chart}
          className=" w-[90%] md:w-auto lg:w-auto sm:h-[330px]  xl:w-auto rounded-lg shadow-xl shadow-[#E647BF] lg:h-[350px] xl:h-[380px]"
          alt=""
          />
        <div className="flex flex-col text-center items-center  md:items-start justify-center gap-y-5 w-[96%]  md:w-[49%]">
          <h1 className=" text-[white]  text-3xl w-full md:text-4xl  xl:text-6xl font-extrabold py-1 border-[#E647BF]/40 border-[1px] bg-[#d140ad]/10 hover:bg-[#e647bf]/30 ">
          $RABBIT
          </h1>
          <div className="flex flex-col items-center w-full text-center gap-y-2">
            <div className="flex items-center border-[#E647BF]/40 border-[1px] bg-[#d140ad]/10 hover:bg-[#e647bf]/30  justify-center px-3 text-[12px] sm:text-base  w-full  py-2 text-center gap-x-2">
              <h6 className="font-bold ">Total Supply:</h6>
              <h6 className="text-white/70">100 billion</h6>
            </div>
            <div className="flex items-center border-[#E647BF]/40 border-[1px] bg-[#d140ad]/10 hover:bg-[#e647bf]/30  justify-center text-[12px] sm:text-base  px-2 w-full  py-2 text-center gap-x-1">
              <h6 className="font-bold ">Buy Fees:</h6>
              <h6 className="text-white/70"> 4% (3% rewards to holders, 1% marketing)</h6>
            </div>
            <div className="flex items-center border-[#E647BF]/40 border-[1px] bg-[#d140ad]/10 hover:bg-[#e647bf]/30 text-[12px] sm:text-base  justify-center px-2 w-full  py-2 text-center gap-x-1">
              <h6 className="font-bold ">Sell Fees:</h6>
              <h6 className="text-white/70">5% (3% rewards to holders, 1% buyback, 1% marketing)</h6>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
