import React, { useContext, useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import Web3 from "web3";
import { FaPlus } from "react-icons/fa6";
import { FaThList } from "react-icons/fa";
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
import {
    rabbitTokenAddress,
    rabbitTokenAbi,
} from "../../utils/contract/rabbitTokenContract";
import { toast } from "react-toastify";
import {
    BEP40TokenAddress,
    EP40TokenAbi,
} from "../../utils/contract/usdtContract";

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
    const [ownerAddress, setOwnerAddress] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [nftsPerPage] = useState(100);
    const [loadingMintId, setLoadingMintId] = useState(null);

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
    const rabbitTokenIntegrateContract = () => {
        const token_Contract = new web3.eth.Contract(
            rabbitTokenAbi,
            rabbitTokenAddress
        );
        return token_Contract;
    };
    const usedtIntegrateContract = () => {
        const usdt_Contract = new web3.eth.Contract(
            EP40TokenAbi,
            BEP40TokenAddress
        );
        return usdt_Contract;
    };
    
    const fetchWithLimit = async (items, limit) => {
        const results = [];
        const executing = new Set();
    
    
        for (const item of items) {
            const promise = (async () => {
                const result = await fetchDataForMintId(Number(item));
                results.push(result);
            })();

            executing.add(promise);
            promise.finally(() => executing.delete(promise));
            if (executing.size >= limit) {
                await Promise.race(executing);
            }
        }
        await Promise.all(executing);
        return results;
    };

    const fetchDataForMintId = async (mintId) => {
        
        
        try {
            const bscTestnetUrl =
                "https://binance.llamarpc.com";
            const web3 = new Web3(
                new Web3.providers.HttpProvider(bscTestnetUrl)
            );
            const marketplace_Contract = new web3.eth.Contract(
                ERC721ContractAbi,
                ERC721MarketplaceAddress
            );
            const rabbitNFT_Contract = new web3.eth.Contract(
                rabbitNFTAbi,
                rabbitNFTAddress
            );
            const tokenURI = await rabbitNFT_Contract.methods
                .tokenURI(Number(mintId))
                .call();
            const getListing = await marketplace_Contract.methods
                .listings(rabbitNFTAddress, Number(mintId))
                .call();
            const response = await fetch(tokenURI);
            const metadata = await response.json();
            const price = Number(getListing.price) / 1e18;
             let nftType = '';
        if (mintId >= 1 && mintId <= 500) {
            nftType = "Rare";
        } else if (mintId >= 501 && mintId <= 800) {
            nftType = "Epic";
        } else if (mintId >= 801 && mintId <= 1000) {
            nftType = "Legendary";
        }
            return {
                image: metadata.image,
                mintId: Number(mintId),
                buyerAddress: getListing.buyer,
                price: Number(getListing.price),
                sold: getListing.sold,
                paymentToken: getListing.paymentToken,
                seller: getListing.seller,
                isListed: getListing.isListed,
                convertPrice: price.toFixed(2),
                nftType: nftType
            };
        } catch (error) {
            console.error(`Error fetching data for mintId ${mintId}:`, error);
            return null;
        }
    };

    const getNFT = async () => {
        try {
            setLoading(true);
            const bscTestnetUrl =
                "https://binance.llamarpc.com";
            const web3 = new Web3(
                new Web3.providers.HttpProvider(bscTestnetUrl)
            );
            const marketplace_Contract = new web3.eth.Contract(
                ERC721ContractAbi,
                ERC721MarketplaceAddress
            );
            const rabbitNFT_Contract = new web3.eth.Contract(
                rabbitNFTAbi,
                rabbitNFTAddress
            );
            const owner = await rabbitNFT_Contract.methods.owner().call();
            setOwnerAddress(owner);

            const usdtToken = await marketplace_Contract.methods
                .usdtToken()
                .call();
            setUsdtToken(usdtToken);

            const walletOfOwner = await rabbitNFT_Contract.methods
                .walletOfOwner(owner)
                .call();
            let nftData = await fetchWithLimit(walletOfOwner, 5);
            nftData = nftData
                .filter((item) => item !== null)
                .sort((a, b) => a.mintId - b.mintId);

            setAllNft(nftData);
        } catch (e) {
            console.log("Error fetching NFTs:", e);
        } finally {
            setLoading(false);
        }
    };

    const indexOfLastNFT = currentPage * nftsPerPage;
    const indexOfFirstNFT = indexOfLastNFT - nftsPerPage;
    const currentNFTs = allNft.slice(indexOfFirstNFT, indexOfLastNFT);

    const totalPages = Math.ceil(allNft.length / nftsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const previousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    const handleListNft = async (mintId) => {
        try {
            const marketplaceContract = marketplaceIntegrateContract();
            const usdtToken = usedtIntegrateContract();
            const rabbitTokenContract = rabbitTokenIntegrateContract();
            if (walletAddress) {
                setLoadingMintId(mintId.mintId);
                if (!mintId.isListed) {
                    setOpen(true);
                    setPerNftRecord(mintId);
                } else if (ownerAddress === walletAddress) {
                    const delistNFT = await marketplaceContract.methods
                        .delistNFT(rabbitNFTAddress, mintId.mintId)
                        .send({ from: walletAddress });
                    if (delistNFT) {
                        setTimeout(() => {
                            toast.success("NFT Delisting Successful!");
                            setLoadingMintId(null);
                            getNFT();
                        }, 4000);
                    }
                } else {
                    if (mintId.paymentToken === BEP40TokenAddress) {
                        const balanceOf = await usdtToken.methods
                            .balanceOf(walletAddress)
                            .call();
                        if (Number(balanceOf) > mintId?.price) {
                            const approve = await usdtToken.methods
                                .approve(ERC721MarketplaceAddress, mintId.price)
                                .send({ from: walletAddress });
                            if (approve) {
                                const buyNFT = await marketplaceContract.methods
                                    .buyNFT(rabbitNFTAddress, mintId.mintId)
                                    .send({ from: walletAddress });
                                if (buyNFT) {
                                    setTimeout(() => {
                                        toast.success("Buy NFT Successful!");
                                        setLoadingMintId(null);
                                        getNFT();
                                    }, 4000);
                                }
                            }
                        } else {
                            toast.error(
                                "You have insufficient balance to complete the NFT purchase. Please add funds to your wallet."
                            );
                            setLoadingMintId(null);
                        }
                    } else {
                        const balanceOf = await rabbitTokenContract.methods
                            .balanceOf(walletAddress)
                            .call();
                        if (Number(balanceOf) > mintId?.price) {
                            const approve = await rabbitTokenContract.methods
                                .approve(ERC721MarketplaceAddress, mintId.price)
                                .send({ from: walletAddress });

                            if (approve) {
                                const buyNFT = await marketplaceContract.methods
                                    .buyNFT(rabbitNFTAddress, mintId.mintId)
                                    .send({ from: walletAddress });
                                if (buyNFT) {
                                    setTimeout(() => {
                                        toast.success("Buy NFT Successful!");
                                        setLoadingMintId(null);
                                        getNFT();
                                    }, 4000);
                                }
                            }
                        } else {
                            toast.error(
                                "You have insufficient balance to complete the NFT purchase. Please add funds to your wallet."
                            );
                            setLoadingMintId(null);
                        }
                    }
                }
            } else {
                setLoadingMintId(null);
                toast.error("Please Wallet Connect First!");
            }
        } catch (e) {
            setLoadingMintId(null);
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
            const rabbitNFTContract = rabbitNFTIntegrateContract();
            const rabbitTokenContract = rabbitTokenIntegrateContract();
            const toweiAmount = Web3.utils.toWei(amount, "ether");
            const approve = await rabbitNFTContract.methods
                .setApprovalForAll(ERC721MarketplaceAddress, true)
                .send({ from: walletAddress });
            if (approve) {
                const listNFT = await marketplaceContract.methods
                    .listNFT(
                        rabbitNFTAddress,
                        perNftRecord.mintId,
                        toweiAmount,
                        selectedToken
                    )
                    .send({ from: walletAddress });

                if (listNFT) {
                    setError(false);
                    setTimeout(() => {
                        getNFT();
                        setOpen(false);
                        setAmount("");
                        setSelectedToken("");
                        toast.success("NFT Listing Successful!");
                        setLoadingMintId(null);
                        setListNftLoading(false);
                    }, 4000);
                }
            }
        } catch (e) {
            setLoadingMintId(null);
            setListNftLoading(false);
            console.log("e", e);
        } finally {
        }
    };
    useEffect(() => {
        getNFT();
    }, []);
  console.log("currentNFTs", currentNFTs);
  
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
                <div className="flex  w-full flex-wrap items-center justify-center px-2 py-6 bg-[#e647bf]/10 rounded-lg gap-x-5 gap-y-16 flex-row">
                    {loading ? (
                        <div className="flex justify-center w-full mt-24 mb-24">
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
                            {currentNFTs.length > 0 ? (
                                currentNFTs.map((data, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center shadow-md shadow-[#e647bf]/30"
                                    >
                                        <div className="relative bg-[#e647bf]/50 border-[1px] border-[#e647bf]/40 pb-[0%] group overflow-hidden rounded-lg transition-shadow duration-300 ease-in-out ">
                                            <img
                                                src={data.image}
                                                alt=""
                                                className="object-cover transition-transform duration-300 transform sm:h-[280px] sm:w-[250px] md:h-[300px] lg:w-[300px] lg:h-[320px] w-[300px] h-[300px] md:w-[280px] group-hover:scale-125 "
                                            />
                                            {/* Mint ID box */}
                                        
                                            {/* <div className="absolute px-2 py-1 font-bold text-[#44134e]/90 bg-white border border-gray-300 rounded-lg shadow-md top-2 right-2 text-md">
                                                <span className="text-sm">ID:</span> <span className="font-mono text-lg">{data.mintId}</span>
                                            </div> */}
                                            <div
                                                className="relative z-10 px-2  py-2 bg-[#c04ea4] flex w-full items-center justify-between  text-white rounded-lg"
                                            >
                                                <div>
                                                    <h6 className="text-[#fcfcfc] font-semibold mb-1">{data?.nftType}</h6>
                                                    <h6 className="font-mono text-sm font-bold text-[#44134e]/90 ">{data?.convertPrice} RBT</h6>
                                                </div>

                                                <button
                                                className="relative z-10 px-4 cursor-pointer font-semibold w-[150px] shadow-xl text-center py-2 bg-[#d459b6] hover:bg-[#e647bf] text-white rounded-lg"
                                                onClick={() =>
                                                    handleListNft(data)
                                                }
                                                disabled={
                                                    loadingMintId &&
                                                    loadingMintId !==
                                                        data.mintId
                                                }
                                            >
                                                {loadingMintId ===
                                                data.mintId ? (
                                                    <>
                                                        <svg
                                                            aria-hidden="true"
                                                            role="status"
                                                            className="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600"
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
                                                                fill="#1C64F2"
                                                            />
                                                        </svg>
                                                        Loading...
                                                    </>
                                                ) : (
                                                    <>
                                                        {data.isListed
                                                            ? walletAddress ===
                                                              data.seller
                                                                ? "Delist "
                                                                : " Buy NFT"
                                                            : "Sell"}
                                                    </>
                                                )}
                                            </button>
                                               
                                            </div>
                                            
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="flex justify-center w-full mt-24 mb-24">
                                    <div className="text-[24px] text-white/70 font-bold">
                                        No NFT Found
                                    </div>
                                </div>
                            )}
                            {currentNFTs.length > 0 && (
                                  <div className="flex justify-center w-full">
                                  <div className="flex items-center justify-between w-full mt-6 md:w-1/5">
                                      <button
                                          className="px-2 py-1 md:px-4 md:py-2 bg-[#d459b6] hover:bg-[#e647bf] text-white rounded-lg text-sm md:text-base"
                                          onClick={previousPage}
                                          disabled={currentPage === 1}
                                      >
                                          Previous
                                      </button>
                                      <span className="text-sm text-white md:text-base">
                                          Page {currentPage} of {totalPages}
                                      </span>
                                      <button
                                          className="px-2 py-1 md:px-4 md:py-2 bg-[#d459b6] hover:bg-[#e647bf] text-white rounded-lg text-sm md:text-base"
                                          onClick={nextPage}
                                          disabled={currentPage === totalPages}
                                      >
                                          Next
                                      </button>
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
