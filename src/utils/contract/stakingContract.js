export const NFTStakingAddress = "0x5CcAA50cEfAdB7C6760Eaa338D975b64321cb0e9";
export const NFTStakingAbi = [
    {
        inputs: [
            { internalType: "address", name: "_rewardToken", type: "address" },
            {
                internalType: "address",
                name: "_rabbitNFTContract",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [{ internalType: "address", name: "owner", type: "address" }],
        name: "OwnableInvalidOwner",
        type: "error",
    },
    {
        inputs: [{ internalType: "address", name: "account", type: "address" }],
        name: "OwnableUnauthorizedAccount",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "stakeTime",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "enum NFTStaking.NFTType",
                name: "nftType",
                type: "uint8",
            },
        ],
        name: "NFTStaked",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "unstakeTime",
                type: "uint256",
            },
        ],
        name: "NFTUnstaked",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "rewardAmount",
                type: "uint256",
            },
        ],
        name: "RewardClaimed",
        type: "event",
    },
    {
        inputs: [],
        name: "BASE_REWARD_PER_DAY",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
        name: "claimRewards",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "user", type: "address" }],
        name: "getStakedNFTs",
        outputs: [
            {
                components: [
                    { internalType: "address", name: "user", type: "address" },
                    {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "stakeTime",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "rewardsClaimed",
                        type: "uint256",
                    },
                    {
                        internalType: "enum NFTStaking.NFTType",
                        name: "nftType",
                        type: "uint8",
                    },
                    { internalType: "bool", name: "isStaked", type: "bool" },
                    {
                        internalType: "bool",
                        name: "isRewardClaimed",
                        type: "bool",
                    },
                ],
                internalType: "struct NFTStaking.StakedNFT[]",
                name: "",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        name: "isStaked",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "rabbitNFT",
        outputs: [
            { internalType: "contract IERC721", name: "", type: "address" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "rabbitNFTContract",
        outputs: [
            { internalType: "contract IRabbitNFT", name: "", type: "address" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "rewardToken",
        outputs: [
            { internalType: "contract IERC20", name: "", type: "address" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "tokenIds", type: "uint256" },
        ],
        name: "stakeNFTs",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "", type: "address" },
            { internalType: "uint256", name: "", type: "uint256" },
        ],
        name: "stakedNFTs",
        outputs: [
            { internalType: "address", name: "user", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
            { internalType: "uint256", name: "stakeTime", type: "uint256" },
            {
                internalType: "uint256",
                name: "rewardsClaimed",
                type: "uint256",
            },
            {
                internalType: "enum NFTStaking.NFTType",
                name: "nftType",
                type: "uint8",
            },
            { internalType: "bool", name: "isStaked", type: "bool" },
            { internalType: "bool", name: "isRewardClaimed", type: "bool" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
        name: "unstakeNFT",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_baserewardPerDay",
                type: "uint256",
            },
        ],
        name: "updateBaseReward",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_rewardTokenAddress",
                type: "address",
            },
        ],
        name: "updateRewardToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
