import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const LearnMore = () => {
  const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);
  return (
    <div className='w-full pb-20 overflow-hidden text-white/70 pt-36 homeFontNormal'>
          <div className="flex flex-col items-center justify-center w-full py-3 gap-y-2">
                   
                    

                    <div className="w-full lg:w-[96%] xl:w-[80%] pb-2 pt-3 px-3 lg:mt-4">
                       
                        <div className='items-center w-full relative lg:left-10 text-[25px] md:text-[35px] font-semibold text-white/90 capitalize'>How is working: </div>
                        {/* info */}
                        <div className="flex flex-col gap-y-5 lg:flex-row items-start justify-around w-full text-[14px] sm:text-[16px] md:text-lg  py-4">
                            <p
                                className="lg:max-w-[400px]"
                                data-aos="fade-right"
                                data-aos-offset="100"
                                data-aos-delay="100"
                            >
                               When you purchase our NFTs, 20% of the purchase value is burned, reducing the total supply. Another 20% is allocated to the rewards fund, 20% goes to the buyback wallet for tokens, 20% is directed to the marketing wallet, and the remaining 20% is used for game development.{" "}
                               
                            </p>

                            <p
                                className="lg:max-w-[220px]"
                                data-aos="fade-right"
                                data-aos-offset="100"
                                data-aos-delay="200"
                            >
                             Our NFTs are limited to 10,000 per year. Initially, only the team can create these NFTs. Afterward, investors can buy and sell them on the marketplace. {" "}
                              
                                
                            </p>

                            <p
                                className="lg:max-w-[180px]"
                                data-aos="fade-right"
                                data-aos-offset="100"
                                data-aos-delay="300"
                            >
                               Each NFT offers different reward rates, with rarer NFTs providing higher rewards.
                            </p>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default LearnMore