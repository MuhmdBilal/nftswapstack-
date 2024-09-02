import React, { useState, useContext } from "react";
import Header from "../header/Header";
import { AuthUserContext } from "../../context";
import Web3 from "web3";
import {
    rabbitNFTAbi,
    rabbitNFTAddress,
} from "../../utils/contract/rabbitNFTContract";
import { toast } from "react-toastify";
const OwnerMint = () => {
    const [quantity, setQuantity] = useState("");
    const { walletAddress } = useContext(AuthUserContext);
    const [errorMessage, setErrorMessage] = useState(false);
    const [loading, setLoading] = useState(false);
    const web3 = new Web3(window.ethereum);
    const rabbitNFTIntegrateContract = () => {
        const rabbitNFT_Contract = new web3.eth.Contract(
            rabbitNFTAbi,
            rabbitNFTAddress
        );
        return rabbitNFT_Contract;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const rabbitNFTContract = rabbitNFTIntegrateContract();
            if (!quantity) {
                setErrorMessage(true);
                return;
            }
            if (walletAddress) {
                setLoading(true);
                const mint = await rabbitNFTContract.methods
                    .mint(quantity)
                    .send({ from: walletAddress });
                    console.log("mint", mint);
                    
                if (mint) {
                    toast.success("Rabbit NFTs Minted Successfully!");
                    setQuantity("");
                    setErrorMessage(false);
                }
            } else {
                toast.error("Please Wallet Connect First!");
            }
        } catch (e) {
            console.log("e", e);
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <div className="flex items-center justify-center w-full overflow-hidden h-[100vh] text-white/70 bg-picture homeFontNormal">
                <div className="flex flex-col items-center justify-center w-full py-10 text-white">
                    <div className="bg-[#1D0729]/90 w-[80%] sm:w-[80%] p-6 rounded-lg shadow-2xl md:w-[450px] lg:w-[450px] mx-2 md:mx-0">
                        <h2 className="mb-8 text-xl font-extrabold text-center md:text-3xl ">
                            Owner Mint
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold">
                                    Amount
                                </label>
                                <input
                                    type="number"
                                    id="quantity"
                                    name="quantity"
                                    placeholder="Enter Amount"
                                    value={quantity}
                                    onChange={(e) =>
                                        setQuantity(e.target.value)
                                    }
                                    min={1}
                                    className="w-full placeholder-white px-3 py-3 text-white bg-[#e647bf]/40 text-sm border-none focus:outline-none rounded"
                                />
                                {errorMessage && !quantity && (
                                    <span className="error-message">
                                        Please Enter Amount
                                    </span>
                                )}
                            </div>

                            <div className="flex items-center justify-center">
                                <button
                                    type="submit"
                                    className="flex transition-all duration-300  text-white items-center justify-center w-full px-4 py-[12px] font-semibold rounded   bg-[#e04ebc] hover:bg-[#f137c3] focus:outline-none"
                                    disabled={loading}
                                >
                                    {loading ? (
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
                                        "MINT"
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OwnerMint;
