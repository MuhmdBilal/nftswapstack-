import React, { useContext, useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import nft1 from "../../assets/img/nft1.jfif";
import nft2 from "../../assets/img/nft2.jfif";
import nft3 from "../../assets/img/nft3.jfif";
import Web3 from "web3";
import {
    rabbitNFTAbi,
    rabbitNFTAddress,
} from "../../utils/contract/rabbitNFTContract";
import { AuthUserContext } from "../../context";
import {
    ERC721ContractAbi,
    ERC721MarketplaceAddress,
} from "../../utils/contract/marketplaceContract";
export default function Team() {
    const web3 = new Web3(window.ethereum);
    const { walletAddress } = useContext(AuthUserContext);
    const [allNft, setAllNft] = useState([]);
    const [loading, setLoading] = useState(false);
    const rabbitNFTIntegrateContract = () => {
        const rabbitNFT_Contract = new web3.eth.Contract(
            rabbitNFTAbi,
            rabbitNFTAddress
        );
        return rabbitNFT_Contract;
    };
    const marketplaceIntegrateContract = () => {
        const marketplace_Contract = new web3.eth.Contract(
            ERC721ContractAbi,
            ERC721MarketplaceAddress
        );
        return marketplace_Contract;
    };
    const getNFT = async () => {
        try {
            setLoading(true);
            const rabbitNFTContract = rabbitNFTIntegrateContract();
            const marketplaceContract = marketplaceIntegrateContract();
            const owner = await rabbitNFTContract.methods.owner().call();
            const walletOfOwner = await rabbitNFTContract.methods
                .walletOfOwner(owner)
                .call();
            const array = [];
            for (const mintId of walletOfOwner) {
                const tokenURI = await rabbitNFTContract.methods
                    .tokenURI(Number(mintId))
                    .call();
                const response = await fetch(tokenURI);
                const metadata = await response.json();
                const getListing = await marketplaceContract.methods
                    .getListing(rabbitNFTAddress, Number(mintId))
                    .call();
                const object = {
                    image: metadata.image,
                    mintId: Number(mintId),
                    buyerAddress: getListing.buyer,
                    price: Number(getListing.price),
                    sold: getListing.sold,
                    paymentToken: getListing.paymentToken,
                    seller: getListing.seller,
                };
                array.push(object);
            }
            setAllNft(array);
        } catch (e) {
            console.log("e", e);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        getNFT();
    }, []);
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
        {
            id: 4,
            imgSrc: nft1,
        },
        {
            id: 5,
            imgSrc: nft2,
        },
        {
            id: 6,
            imgSrc: nft3,
        },
        {
            id: 7,
            imgSrc: nft2,
        },
        {
            id: 8,
            imgSrc: nft3,
        },
    ];

    return (
        <div className="flex items-center justify-center homeFontNormal">
            <div className="overflow-hidden bg-[#1D0729] py-48 flex flex-col items-center justify-center w-full  px-3  ">
                <h6 className="text-[26px] sm:text-[32px] md:text-[40px] font-bold capitalize pb-3">
                    NFTs MarketPlace
                </h6>

                <p className="text-[14px] md:text-[17px] w-[97%] sm:w-[90%] md:w-[85%] lg:w-[70%] xl:w-[65%] pb-6 text-center text-white/70">
                    Each NFT offers different reward rates, with rarer NFTs
                    providing higher rewards.
                </p>
                <div className="flex  w-full flex-wrap items-center justify-around px-2 py-6 bg-[#e647bf]/10 rounded-lg gap-x-5 gap-y-16 flex-row">
                    {loading ? (
                        <div className="w-full flex justify-center mt-24 mb-24">
                            <div role="status">
                                <svg
                                    aria-hidden="true"
                                    class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                    viewBox="0 0 100 101"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill"
                                    />
                                </svg>
                            </div>
                        </div>
                    ) : (
                        <>
                            {allNft.length > 0 ? (
                                <>
                                    {allNft.map((data, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-col items-center shadow-md  shadow-[#e647bf]/30"
                                        >
                                            <div className="relative  bg-[#e647bf]/50 border-[1px] border-[#e647bf]/40  pb-[0%]   group overflow-hidden rounded-lg transition-shadow duration-300 ease-in-out ">
                                                <img
                                                    src={data.image}
                                                    alt=""
                                                    className="object-cover transition-transform duration-300 transform  sm:h-[280px] sm:w-[220px] md:h-[300px] lg:w-[260px] lg:h-[320px] w-[300px] h-[300px] md:w-[240px] group-hover:scale-125 "
                                                />
                                                <button data-modal-target="select-modal" data-modal-toggle="select-modal" className=" relative z-10 px-4 cursor-pointer font-semibold w-full text-center  py-2 bg-[#d459b6] hover:bg-[#e647bf] text-white rounded-lg">
                                                   {
                                                    data.sold ? "Listed" : "List"
                                                   } 
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            ) : (
                                <div className="w-full flex justify-center mt-24 mb-24">
                                    <div className="text-[24px] text-white/70 font-bold">
                                        No NFT Found
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
            <div id="select-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    Open positions
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="select-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <div class="p-4 md:p-5">
                <p class="text-gray-500 dark:text-gray-400 mb-4">Select your desired position:</p>
                <ul class="space-y-4 mb-4">
                    <li>
                        <input type="radio" id="job-1" name="job" value="job-1" class="hidden peer" required />
                        <label for="job-1" class="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500">                           
                            <div class="block">
                                <div class="w-full text-lg font-semibold">UI/UX Engineer</div>
                                <div class="w-full text-gray-500 dark:text-gray-400">Flowbite</div>
                            </div>
                            <svg class="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
                        </label>
                    </li>
                    <li>
                        <label for="job-2" class="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500">
                            <div class="block">
                                <div class="w-full text-lg font-semibold">React Developer</div>
                                <div class="w-full text-gray-500 dark:text-gray-400">Alphabet</div>
                            </div>
                            <svg class="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
                        </label>
                    </li>
                    <li>
                        <label for="job-3" class="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500">
                            <div class="block">
                                <div class="w-full text-lg font-semibold">Full Stack Engineer</div>
                                <div class="w-full text-gray-500 dark:text-gray-400">Apple</div>
                            </div>
                            <svg class="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
                        </label>
                    </li>
                </ul>
                <button class="text-white inline-flex w-full justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Next step
                </button>
            </div>
        </div>
    </div>
</div> 
        </div>
    );
}
