import React from "react";
import img1 from "../../assets/img/partners-logo-1.png";
import img2 from "../../assets/img/partners-logo-2.png";
import img3 from "../../assets/img/partners-logo-3.png";
import img4 from "../../assets/img/partners-logo-4.png";
import img5 from "../../assets/img/partners-logo-5.png";
import img6 from "../../assets/img/partners-logo-6.png";
import img7 from "../../assets/img/partners-logo-7.png";
const Partners = () => {
  const partnerLogos = [
    {
      link: '/',
      id: 0,
      img: img1,
    },
    {
      link: '/',
      id: 1,
      img: img2,
    },
    {
      link: '/',
      id: 2,
      img: img3,
    },
    {
      link: '/',
      id: 3,
      img: img4,
    },
    {
      link: '/',
      id: 4,
      img: img5,
    },
    {
      link: 'https://www.pinksale.finance/',
      id: 5,
      img: img6,
    },
    {
      link: 'https://www.dexview.com/',
      id: 6,
      img: img7,
    },
  ];
  return (
    <section
      id="partner"
      className=" flex flex-col justify-center w-full bg-[#1D0729] relative rounded-t-[75px] px-4 pb-20 pt-10 bottom-6"
    >
      {/* <h6 className="container text-[12px] sm:text-sm  font-bold text-[#e647bf]/90">
        ________ <span className="relative top-[6px] ">OUR FRIENDS</span>
      </h6> */}
      <h6 className=" container text-center text-[35px] sm:text-[50px] md:text-[65px] font-bold pb-12">
        Partners
      </h6>
   
      {/* Partner Logos */}
      <div className="container flex flex-wrap items-center w-full pb-5 gap-x-3 sm:gap-x-10 gap-y-12 sm:gap-y-16 justify-evenly">
        {partnerLogos.map((data) => (
          <a href={data.link}  key={data.id} target="_blank" rel="noopener noreferrer" className={`${data.id === 5 ? 'rounded-full bg-white/20' : ''} `}>
          <img
            className="transition-all w-[119px] grayscale duration-300 cursor-pointer opacity-60 hover:opacity-90"
            src={data.img}
            alt=""
          />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Partners;
