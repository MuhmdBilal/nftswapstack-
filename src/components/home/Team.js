import React from "react";
import { Container } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import nft1 from "../../assets/img/nft1.jfif";
import nft2 from "../../assets/img/nft2.jfif";
import nft3 from "../../assets/img/nft3.jfif";

export default function Team() {
  const nftData = [
    {
      id: 1,
      imgSrc: nft1,
    },
    {
      id: 2,
      imgSrc: nft2,
    },
    {
      id: 3,
      imgSrc: nft3,
    },
  ];

  return (
    <section id="nfts" className="relative z-10 overflow-hidden bg-[#1D0729] flex flex-col items-center justify-center w-full pt-12 px-3 pb-0 rounded-t-[90px] bottom-20 ">
      <h6 className="text-[26px] sm:text-[32px] md:text-[40px] font-bold capitalize pb-5">
        PURCHASE NFTs
      </h6>
      <p className='text-[14px] md:text-[17px] w-[97%] sm:w-[90%] md:w-[85%] lg:w-[70%] xl:w-[69%] pb-1 text-center text-white/70'>
      Our NFTs are limited to 10,000 per year. Initially, only the team can create these NFTs. Afterward, investors can buy and sell them on the marketplace. 

Each NFT offers different reward rates, with rarer NFTs providing higher rewards.
      </p>
      <p className='text-[14px] md:text-[17px] w-[97%] sm:w-[90%] md:w-[85%] lg:w-[70%] xl:w-[65%] pb-4 text-center text-white/70'>

Each NFT offers different reward rates, with rarer NFTs providing higher rewards.
      </p>
      <div className="flex flex-col flex-wrap items-center justify-around gap-x-5 gap-y-5 md:flex-row">
        {nftData.map((data) => (
          <div
            key={data.id}
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-delay="100"
            className="flex flex-col items-center shadow-md  shadow-[#e647bf]/30"
          >
            <div className="relative  bg-[#e647bf]/50 border-[1px] border-[#e647bf]/40  pb-[0%]   group overflow-hidden rounded-lg transition-shadow duration-300 ease-in-out ">
              <img
                src={data.imgSrc}
                alt=""
                className="object-cover transition-transform duration-300 transform cursor-pointer sm:h-[290px] sm:w-[290px] md:h-[400px] lg:w-[330px] lg:h-[400px] w-[300px] h-[300px] md:w-[350px] group-hover:scale-125 "
              />

              <div className="absolute bottom-0 left-0 right-0 border-b-[6px] border-transparent transform -translate-x-full transition-transform duration-700 group-hover:translate-x-0 group-hover:border-[#e647bf]"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
