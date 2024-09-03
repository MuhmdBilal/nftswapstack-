import React, { useContext, useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
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

import ListModal from "./listModal";
import { rabbitTokenAddress } from "../../utils/contract/rabbitTokenContract";
import { toast } from "react-toastify";

export default function Team() {
    const web3 = new Web3(window.ethereum);
    const { walletAddress } = useContext(AuthUserContext);
    const [allNft, setAllNft] = useState([]);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [usdtToken, setUsdtToken] = useState();
    const [amount, setAmount] = useState("");
    const [selectedToken, setSelectedToken] = useState("");
    const [error, setError] = useState(false);
    const [listNftLoading, setListNftLoading] = useState(false);
    const [perNftRecord, setPerNftRecord] = useState(null);
    const [ownerAddress,setOwnerAddress] = useState("");
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
            setOwnerAddress(owner)
            const usdtToken = await marketplaceContract.methods
                .usdtToken()
                .call();
            setUsdtToken(usdtToken);
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
    const handleListNft = async (mintId) => {
        try {
            console.log("11111", mintId);
            const marketplaceContract = marketplaceIntegrateContract();
            if (walletAddress) {
                if (!mintId.sold) {
                    setOpen(true);
                    setPerNftRecord(mintId);
                }else if(ownerAddress === walletAddress){
                    setListNftLoading(true)
                  const delistNFT = await marketplaceContract.methods.delistNFT(rabbitNFTAddress,mintId.mintId).send({ from: walletAddress });
                  if(delistNFT){
                    toast.success("NFT Delisting Successful!");
                    setListNftLoading(false);
                    getNFT();
                  } 
                } else{
                    setListNftLoading(true)
                  const buyNFT = await marketplaceContract.methods.buyNFT(rabbitNFTAddress,mintId.mintId).send({ from: walletAddress });
                  if(buyNFT){
                    toast.success("Buy NFT Successful!");
                    setListNftLoading(false);
                    getNFT();
                  } 
                }
            } else {
                toast.error("Please Wallet Connect First!");
            }
        } catch (e) {
            setListNftLoading(false);
            console.log("e", e);
        }
    };
    const handleListNFT = async () => {
        try {
            if (!amount || !selectedToken) {
                setError(true);
                return;
            }
            setListNftLoading(true);
            const marketplaceContract = marketplaceIntegrateContract();
            const toweiAmount = Web3.utils.toWei(amount, "ether");
            // console.log("Listing NFT with amount:", toweiAmount, rabbitNFTAddress,selectedToken);
            const listNFT = await marketplaceContract.methods
                .listNFT(
                    rabbitNFTAddress,
                    perNftRecord.mintId,
                    toweiAmount,
                    selectedToken
                )
                .send({ from: walletAddress });
            
            if (listNFT) {
                toast.success("NFT Listing Successful!");
                setOpen(false);
                setAmount("");
                setSelectedToken("");
                setError(false);
                getNFT();
            }
        } catch (e) {
            console.log("e", e);
        } finally {
            setListNftLoading(false);
        }
    };
    useEffect(() => {
        getNFT();
    }, []);

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
                                                <button
                                                    className=" relative z-10 px-4 cursor-pointer font-semibold w-full text-center  py-2 bg-[#d459b6] hover:bg-[#e647bf] text-white rounded-lg"
                                                    onClick={() =>
                                                        handleListNft(data)
                                                    }
                                                >
                                                    {data.sold
                                                        ? "Listed"
                                                        : "List"}
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
            <ListModal
                setOpen={setOpen}
                open={open}
                usdtToken={usdtToken}
                rabbitTokenAddress={rabbitTokenAddress}
                handleListNFT={handleListNFT}
                amount={amount}
                setAmount={setAmount}
                selectedToken={selectedToken}
                setSelectedToken={setSelectedToken}
                error={error}
                setError={setError}
                listNftLoading={listNftLoading}
            />
        </div>
    );
}
