import { Link } from "react-router-dom";
import rabbits from "../../assets/img/oneRabbit.jfif";

export default function Hero() {
  return (
    <>
      

<div className='w-full mx-auto '>
        <div className='max-h-[1300px] min-h-[600px] relative'>
        {/* Overlay */}
        {/* <div className='absolute w-full h-full text-[#EEEEEE] max-h-[1300px] min-h-[280px] bg-[#040404]/75  flex flex-col justify-center duration-300 '>
            <h1 className='px-4 text-4xl font-bold capitalize sm:text-5xl md:text-6xl lg:text-7xl'>Lets work together</h1>
            <h1 className='relative px-4 md:ml-[46px] text-4xl font-bold bottom-1 md:bottom-1 sm:text-5xl md:text-6xl lg:text-7xl capitalize'>bring your vision to life!</h1>
            <p className=' text-[15px] lg:text-[17px] xl:text-[19px]  text-[#aeaeae]  px-[30px] relative md:bottom-0 '>Get connected with me, work together, and know how to reach out for projects.</p>
        </div> */}
          <div className="flex absolute w-full h-full text-[#EEEEEE] max-h-[1300px] min-h-[600px] bg-[#040404]/70 flex-col justify-center duration-300  items-center  px-1   overflow-hidden  gap-y-5 home-hero-section md:py-32 md:mb-10">
        <div
          className="flex sm:relative bottom-16 flex-column items-center justify-center w-[100%] md:w-[80%] lg:w-[60%]  xl:w-[80%]  gap-y-6"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="100"
        >
          <h1 className="px-3 text-[40px] sm:text-[45px] font-extrabold leading-none text-center text-white/90 md:text-[70px] xl:text-[80px]">
            Welcome to <span className="text-[#e647bf]">The Rabbits</span>{" "}
            EcosystemNFT's{" "}
          </h1>
          <p className=" text-[15px] lg:text-[17px] xl:text-[19px] capitalize px-2 text-white/70 text-center  ">
          Use Rabbit token to purchase NFTs and enjoy high rewards by usdt
          </p>
          <div className="flex flex-col gap-y-2 sm:flex-row  px-2 w-full sm:w-auto items-center gap-x-[5px] sm:gap-x-2 ">
            
          {/* <Link to={"/"} className='w-full sm:w-auto'> */}
            <a href="https://pancakeswap.finance/swap?outputCurrency=0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82&inputCurrency=BNB" target="_blank" style={{textDecoration: "none"}} className=" px-4  w-full sm:w-auto md:px-3 text-[12px] md:text-sm border-[1px] border-[white]/30 rounded-lg py-2  md:py-[13px] text-center transition-all duration-300 text-white font-semibold bg-[#d140ad]/10 hover:bg-[#e647bf]/30 ">
              Buy The Rabbits
            </a>
          {/* </Link> */}
          <Link to={"/learn-more"} className='w-full sm:w-auto'>
            <button className=" px-4 w-full sm:w-auto md:px-3 text-[12px] md:text-sm border-[1px] border-[white]/30 rounded-lg  py-2  md:py-[13px]  transition-all duration-300 text-white font-semibold bg-[#d140ad]/10 hover:bg-[#e647bf]/30  ">
              Learn More
            </button>
          </Link>

          <Link to={"/market-place"} className='w-full sm:w-auto'>
            <button className=" px-4 w-full sm:w-auto md:px-3 text-[12px] md:text-sm border-[1px] border-[white]/30 rounded-lg py-2  md:py-[13px]  transition-all duration-300 text-white font-semibold bg-[#d140ad]/10 hover:bg-[#e647bf]/30 ">
              Explore NFTs
            </button>
          </Link>
          </div>
        </div>

        {/* <img data-aos="zoom-in"
          data-aos-offset="100"
          data-aos-delay="100" src={rabbits} className="w-[60%] shadow-xl shadow-[#d102c3] sm:w-[400px] md:w-auto md:h-[400px]  lg:h-[500px]  xl:h-[600px] rounded-2xl" alt="" /> */}
      </div>
        <img className='object-cover max-h-[1300px] w-full  min-h-[600px]' src={rabbits} alt="" />
        </div>
    </div>
    </>
  );
}
