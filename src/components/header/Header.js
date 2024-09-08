import React, { useContext, useEffect, useState } from "react";
import { MdSunny } from "react-icons/md";
import logo from "../../assets/img/logo.jfif";
import { IoCloseSharp } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { MdDarkMode } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import WalletConnection from "../../walletConnection";
import Web3 from "web3";
import {
    rabbitNFTAbi,
    rabbitNFTAddress,
} from "../../utils/contract/rabbitNFTContract";
import { AuthUserContext } from "../../context";
const Header = () => {
    // const web3 = new Web3(window.ethereum);
    const bscTestnetUrl = "https://data-seed-prebsc-1-s1.binance.org:8545/"; // BSC testnet RPC
    const web3 = new Web3(new Web3.providers.HttpProvider(bscTestnetUrl));

    const [isScroll, setIsScroll] = useState(false);
    const [nav, setnav] = useState(false);
    const { walletAddress } = useContext(AuthUserContext);
    const [isOwner, setIsOwner] = useState(false);
    const { pathname } = useLocation();
    console.log("walletAddress", walletAddress);
    
    const rabbitNFTIntegrateContract = () => {
        const rabbitNFT_Contract = new web3.eth.Contract(
            rabbitNFTAbi,
            rabbitNFTAddress
        );
        return rabbitNFT_Contract;
    };
    const ownerCheck = async () => {
        try {
            const rabbitNFTContract = rabbitNFTIntegrateContract();
            console.log("rabbitNFTContract", rabbitNFTContract);
            
            const owner = await rabbitNFTContract.methods.owner().call();
            console.log("owner",  owner);
            
            if (owner === walletAddress) {
                setIsOwner(true);
            } else{
              setIsOwner(false);
            }
        } catch (e) {
            console.log("e", e);
        }
    };
    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        ownerCheck();
    }, [walletAddress]);
    return (

        <header className="flex justify-center headerFont">
            <div
                className={`${
                    isScroll
                        ? "bg-[#37104d]/50 text-white/90 shadow-md "
                        : `${
                              pathname === "/"
                                  ? ""
                                  : "bg-[#37104d]/50 text-white/90 shadow-md"
                          }`
                }  container fixed top-0 pb-[7px] mt-2 rounded-[30px] mx-auto flex justify-between items-center transition-colors duration-500 pt-1  px-8 z-20`}
            >
                <div className="flex items-center cursor-pointer">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="logo"
                            className="mr-3 h-[70px] sm:h-[80px] rounded-full shadow-md shadow-[#d102c3]"
                        />
                    </Link>
                </div>
                <div className="items-center hidden font-semibold gap-x-10 lg:flex">
                    <div className="flex items-center space-x-4  text-[18px]">
                        <Link
                            to="/"
                            className={`no-underline text-white/90 hover:no-underline hover:text-[#e647bf] transition-all `}
                        >
                            Home
                        </Link>
                        <a
                            href="#roadmap"
                            className={`${
                                pathname === "/" ? "inline-block" : "hidden"
                            } no-underline text-white/90 hover:no-underline hover:text-[#e647bf] transition-colors `}
                        >
                            Roadmap
                        </a>
                        <Link
                            to="/white-paper"
                            href="#whitepaper"
                            className={` no-underline text-white/90 hover:no-underline hover:text-[#e647bf] transition-colors `}
                        >
                            Whitepaper
                        </Link>
                        <a
                            href="#tokenomics"
                            className={`${
                                pathname === "/" ? "inline-block" : "hidden"
                            } no-underline text-white/90 hover:no-underline hover:text-[#e647bf] transition-colors `}
                        >
                            Tokenomics
                        </a>
                        <a
                            href="#nfts"
                            className={`${
                                pathname === "/" ? "inline-block" : "hidden"
                            } no-underline text-white/90 hover:no-underline hover:text-[#e647bf] transition-colors `}
                        >
                            NFTs
                        </a>
                        <Link
                            to="/staking"
                            className="no-underline text-white/90 hover:no-underline hover:text-[#e647bf] transition-colors "
                        >
                            Staking
                        </Link>
                        <Link
                            to="/market-place"
                            className="no-underline text-white/90 hover:no-underline hover:text-[#e647bf] transition-colors "
                        >
                            Marketplace
                        </Link>
                        {isOwner && (
                            <Link
                                to="/owner-mint"
                                className="no-underline text-white/90 hover:no-underline hover:text-[#e647bf] transition-colors "
                            >
                                Mint
                            </Link>
                        )}

                        <Link
                            to="/about-us"
                            className={`${
                                pathname === "/" ? "inline-block" : "hidden"
                            } no-underline text-white/90 hover:no-underline hover:text-[#e647bf] transition-colors `}
                        >
                            About Us
                        </Link>
                        <Link
                            to="/play-game"
                            className="no-underline text-white/90 hover:no-underline hover:text-[#e647bf] transition-colors "
                        >
                            Play Game
                        </Link>
                    </div>
                </div>
                <WalletConnection />
                {/* <button className="no-underline text-[18px] border-[1px] border-[#e647bf] px-3 py-[6px] rounded-2xl text-white/90 hover:no-underline hover:bg-[#e647bf] transition-all hidden lg:inline-block ">Connect Wallet</button> */}
                <FiMenu
                    onClick={() => setnav(!nav)}
                    size={33}
                    className="cursor-pointer lg:hidden"
                />
            </div>
            {/* Mobile Menu */}
            {/* overlay */}

            {nav ? (
                <div className="fixed top-0 left-0 z-20 w-full h-screen bg-black/50" />
            ) : (
                ""
            )}

            {/* Side Drawer Menu */}

            <div
                className={
                    nav
                        ? "bg-[#1d0729] fixed top-0 left-0 w-full  h-screen text-white/90 z-30 duration-300"
                        : "fixed top-0 left-[-100vh] w-[300px] h-screen  z-30 duration-300"
                }
            >
                <div className="container flex items-center justify-between px-3 py-4 ">
                    <div className="flex items-center cursor-pointer">
                        <img
                            src={logo}
                            alt="logo"
                            className="mr-3 h-[80px] rounded-full"
                        />
                    </div>
                    <IoCloseSharp
                        onClick={() => setnav(!nav)}
                        className="cursor-pointer "
                        size={35}
                    />
                </div>
                <nav className="container">
                    <div className="flex flex-col p-2 no-underline py-4 font-semibold  gap-y-3 text-[18px] ">
                        <Link
                            to="/"
                            onClick={() => setnav(!nav)}
                            className="hover:no-underline hover:text-[#e647bf]"
                        >
                            <h6 className="cursor-pointer">Home</h6>
                        </Link>
                        <a
                            href="#roadmap"
                            onClick={() => setnav(!nav)}
                            className={`${
                                pathname === "/" ? "inline-block" : "hidden"
                            } hover:no-underline hover:text-[#e647bf]`}
                        >
                            <h6 className="cursor-pointer">Roadmap</h6>
                        </a>
                        <Link
                            to="/white-paper"
                            onClick={() => setnav(!nav)}
                            className="hover:no-underline hover:text-[#e647bf]"
                        >
                            <h6 className="cursor-pointer">Whitepaper</h6>
                        </Link>
                        <a
                            href="#tokenomics"
                            onClick={() => setnav(!nav)}
                            className={`${
                                pathname === "/" ? "inline-block" : "hidden"
                            } hover:no-underline hover:text-[#e647bf]`}
                        >
                            <h6 className="cursor-pointer">Tokenomics</h6>
                        </a>
                        <a
                            href="#nfts"
                            onClick={() => setnav(!nav)}
                            className={`${
                                pathname === "/" ? "inline-block" : "hidden"
                            } hover:no-underline hover:text-[#e647bf]`}
                        >
                            <h6 className="cursor-pointer">NFTs</h6>
                        </a>
                        <Link
                            to="/staking"
                            onClick={() => setnav(!nav)}
                            className="hover:no-underline hover:text-[#e647bf]"
                        >
                            <h6 className="cursor-pointer">Staking</h6>
                        </Link>

                        <Link
                            to="/market-place"
                            onClick={() => setnav(!nav)}
                            className="hover:no-underline hover:text-[#e647bf]"
                        >
                            <h6 className="cursor-pointer">Marketplace</h6>
                        </Link>

                        <Link
                            to="/about-us"
                            onClick={() => setnav(!nav)}
                            className={`${
                                pathname === "/" ? "inline-block" : "hidden"
                            } hover:no-underline hover:text-[#e647bf]`}
                        >
                            <h6 className="cursor-pointer">About Us</h6>
                        </Link>
                        <Link
                            to="/play-game"
                            onClick={() => setnav(!nav)}
                            className="hover:no-underline hover:text-[#e647bf]"
                        >
                            <h6 className="cursor-pointer">Play Game</h6>
                        </Link>
                        {/* <button className="no-underline text-[18px] border-[1px] border-[#e647bf] px-3 py-[6px] rounded-2xl text-white/90 hover:no-underline hover:bg-[#e647bf] transition-all ">Connect Wallet</button> */}
                        <WalletConnection />
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
