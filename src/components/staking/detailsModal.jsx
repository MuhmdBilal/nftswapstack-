import React from "react";
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
} from "@headlessui/react";
const DetailsModal = ({ openModal, setOpenModal, singleNFtDetails }) => {

    return (
        <div>
            <Dialog
                open={openModal}
                onClose={() => setOpenModal(true)}
                className="relative z-10"
            >
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-black/60  transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex items-end justify-center w-full min-h-full p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-[#2a0b3b] text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 w-[90%] sm:w-[750px] data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                        >
                            <div className="px-4 bg-[#2a0b3b] text-white pt-4 sm:pt-0 sm:p-6 sm:pb-1">
                                <div className="sm:flex sm:items-start">
                                    <div className="w-full text-start sm:mt-0 sm:text-left">
                                        <DialogTitle
                                            as="h3"
                                            className="text-2xl font-bold leading-6 text-center md:text-3xl "
                                        >
                                            Staked NFT Details
                                        </DialogTitle>
                                        <div className="w-full mt-4  flex">
                                            <div className="w-5/12 mb-4 ">
                                                <img
                                                    src={
                                                        singleNFtDetails?.image
                                                    }
                                                    alt="nftImage"
                                                />
                                            </div>
                                            <div className="w-7/12  m-3">
                                                <div className=" flex justify-between align-center">
                                                    <span className="text-lg font-bold">
                                                        NFT Id
                                                    </span>
                                                    <span>{singleNFtDetails?.mintId}</span>
                                                </div>
                                                <div className="flex justify-center mt-3">
                                                    <div className="border-b w-full"></div>
                                                </div>
                                                <div className=" mt-3 flex justify-between align-center">
                                                    <span className="text-lg font-bold">
                                                        Claim Reward
                                                    </span>
                                                    <span>{singleNFtDetails?.stakedData?.rewardsClaimed ? singleNFtDetails?.stakedData?.rewardsClaimed: " -"} RBT</span>
                                                </div>
                                                <div className="flex justify-center mt-3">
                                                    <div className="border-b w-full"></div>
                                                </div>
                                                <div className=" mt-3 flex justify-between align-center">
                                                    <span className="text-lg font-bold">
                                                        Stake Time
                                                    </span>
                                                    <span>{singleNFtDetails?.stakedData?.stakeTime ? singleNFtDetails?.stakedData?.stakeTime : "-"}</span>
                                                </div>
                                                <div className="flex justify-center mt-3">
                                                    <div className="border-b w-full"></div>
                                                </div>
                                                <div className=" mt-3 flex justify-between align-center">
                                                    <span className="text-lg font-bold">
                                                        NFT Type
                                                    </span>
                                                    <span>{singleNFtDetails?.stakedData?.stakeTime === 1 ? "Rare" : singleNFtDetails?.stakedData?.stakeTime === 2 ? "Epic" : "Legendary"}</span>
                                                </div>
                                                <div className="flex justify-center mt-3">
                                                    <div className="border-b w-full"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-3 bg-[#2a0b3b] flex flex-col gap-y-3 gap-x-3 sm:flex-row-reverse sm:px-6">
                                {/* <button
                                    type="button"
                                    onClick={handleListNFT}
                                    className="flex items-center justify-center py-3  w-full px-3 text-lg font-semibold text-white bg-[#D459B6] rounded-md shadow-sm  hover:bg-[#d84ab4] "
                                    disabled={listNftLoading}
                                >
                                    {listNftLoading ? (
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
                                        "List NFT"
                                    )}
                                </button> */}
                                <button
                                    type="button"
                                    onClick={() => setOpenModal(false)}
                                    className="flex justify-center w-full px-4 py-3 text-lg font-bold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                >
                                    Cancel
                                </button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

export default DetailsModal;
