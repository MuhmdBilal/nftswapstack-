import React, { useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { FaFilePdf } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";
// import image from '../../../public/'
const WhitePaper = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

 
  return (
    <div className="flex items-center justify-center w-full pb-20 overflow-hidden pt-44 text-white/70 homeFontNormal">
      <div className="flex items-center justify-center w-full">
        <div
          className="flex flex-column items-center justify-center w-[100%] sm:[60%] md:w-[55%] lg:w-[50%]  xl:w-[45%]  gap-y-6"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="100"
        >
          <FaFilePdf size={50} />
          <h1 className="px-3 text-[25px] sm:text-[30px] font-extrabold leading-none text-center text-white/90 md:text-[40px] xl:text-[50px]">
            Download Our Free{" "}
            <span className="text-[#e647bf] underline">White Paper</span>{" "}
          </h1>
          <a href="/whitepaper.pdf" download className="no-underline hover:no-underline">
            <button
              className=" px-4  md:px-2 mt-3 text-[18px]  border-[1px] border-[white]/30 rounded-lg py-2  md:py-[13px]  transition-all duration-300 text-white font-semibold bg-[#d140ad]/10 hover:bg-[#e647bf]/30  flex gap-x-3 items-center"
            >
              <MdDownload size={20} /> White Paper
            </button>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhitePaper;
