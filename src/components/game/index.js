import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const Game = () => {
const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);
    
     
  return (
    <div className="flex min-h-[100vh] items-center justify-center w-full pb-20 overflow-hidden pt-44 text-white/70 homeFontNormal">
    <div className="flex items-center justify-center w-full">
      <div
        className="flex flex-column items-center justify-center w-[100%] sm:[60%] md:w-[55%] lg:w-[50%]  xl:w-[45%]  gap-y-6"
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-delay="100"
      >
        <h1 className="px-3 text-[25px] sm:text-[30px] font-extrabold leading-none text-center text-white/90 md:text-[40px] xl:text-[50px]">
          Rabbit Taxi  <span className="text-[#e647bf] ">Simulator</span> P2E{" "}
          <span className="text-[#e647bf] ">Game</span>{" "}
        </h1>
      
      </div>
    </div>
  </div>
  )
}

export default Game