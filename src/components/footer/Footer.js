import React from "react";
import { TiSocialLinkedin } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa";
import { IoLogoBitcoin } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import logo from "../../assets/img/logo.jfif";
import { Link, useLocation } from "react-router-dom";

import { FaTwitter } from "react-icons/fa";
export default function Footer() {
  const { pathname } = useLocation();

  return (
    <>
      <div className={`bg-[#290b3a] w-full flex py-10  flex-col homeFontNormal  items-center justify-center shadow-md shadow-black px-5`}>
        <div className="container flex flex-col items-center justify-between w-full md:flex-row gap-y-3">
          <img src={logo} alt="" className=" h-[150px]  rounded-full shadow-md shadow-[#d102c3]" />

          <div className="flex flex-col items-center justify-center gap-y-1 font-semibold text-[16px] md:text-[18px] lg:flex-row gap-x-3">
          <Link to="/"
            
              className="no-underline text-white/90 hover:no-underline hover:text-[#e647bf] transition-all "
            >
              Home
            </Link>
            <a
              href="#tokenomics"
              className={`${pathname === '/' ? 'inline-block' : 'hidden'} no-underline text-white/90 hover:no-underline hover:text-[#e647bf] transition-colors `}
            >
              Tokenomics
            </a>
            <a
              href="#nfts"
              className={`${pathname === '/' ? 'inline-block' : 'hidden'} no-underline text-white/90 hover:no-underline hover:text-[#e647bf] transition-colors `}
            >
              NFTs
            </a>
            <a
              href="#staking"
              className="no-underline text-white/90 hover:no-underline hover:text-[#e647bf] transition-colors "
            >
              Contact
            </a>
            
          </div>

          <div className="flex flex-col items-center py-3 pb-5 md:items-start gap-y-1 text-md lg:py-0">
            <h6 className="text-lg font-bold text-center md:text-2xl ">Stay Connected</h6>
            <div className="flex flex-wrap items-center mt-1 gap-x-3 gap-y-4">
             
              <AiFillInstagram
                size={40}
                className="p-2 border-[1px] border-[#e647bf] hover:text-[#e647bf] transition duration-300  cursor-pointer rounded-full "
              />
              <a href="https://t.me/therabbitsnetwork" target="_blank"><FaTelegramPlane
                size={40}
                className="p-2 hover:text-[#e647bf] transition duration-300  border-[1px] border-[#e647bf]  cursor-pointer rounded-full "
              /></a>
              <FaTwitter
                size={40}
                className="p-2 hover:text-[#e647bf] transition duration-300  border-[1px] border-[#e647bf]  cursor-pointer rounded-full "
              />
              <FaDiscord
                size={40}
                className="p-2 border-[1px] border-[#e647bf]  cursor-pointer hover:text-[#e647bf] transition duration-300  rounded-full "
              />
              <a target="_blank" href="https://www.facebook.com/profile.php?id=61564441334055&mibextid=ZbWKwL"><FaFacebookF
                size={40}
                className={` p-2 border-[1px] border-[#e647bf] hover:text-[#e647bf] transition duration-300 cursor-pointer rounded-full `}
              /></a>
            </div>
          </div>
        </div>

        <div className="mt-4 text-sm text-center homeFontNormal opacity-90 ">
          Copyrights © 2024 Reserved.
        </div>
      </div>
    </>
  );
}
