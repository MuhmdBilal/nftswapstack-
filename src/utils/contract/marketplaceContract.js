export const ERC721MarketplaceAddress =
    "0x87cb4087D5e6B8693E03c6b3981F53eE11B7BF84";
export const ERC721ContractAbi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_rewardsWallet",
                type: "address",
            },
            {
                internalType: "address",
                name: "_marketingWallet",
                type: "address",
            },
            { internalType: "address", name: "_usdtToken", type: "address" },
            { internalType: "address", name: "_rabbitToken", type: "address" },
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
                name: "nftContract",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
        ],
        name: "NFTDelisted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "nftContract",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "seller",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "price",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "paymentToken",
                type: "address",
            },
        ],
        name: "NFTListed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "nftContract",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "buyer",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "price",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "paymentToken",
                type: "address",
            },
        ],
        name: "NFTPurchased",
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
        inputs: [
            { internalType: "address", name: "nftContract", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
        ],
        name: "buyNFT",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "nftContract", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
        ],
        name: "delistNFT",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "nftContract", type: "address" },
        ],
        name: "getAllListedNFTs",
        outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "user", type: "address" },
            { internalType: "address", name: "nftContract", type: "address" },
        ],
        name: "getUserListedNFTs",
        outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "nftContract", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
            { internalType: "uint256", name: "price", type: "uint256" },
            { internalType: "address", name: "paymentToken", type: "address" },
        ],
        name: "listNFT",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "", type: "address" },
            { internalType: "uint256", name: "", type: "uint256" },
        ],
        name: "listings",
        outputs: [
            { internalType: "address", name: "seller", type: "address" },
            { internalType: "uint256", name: "price", type: "uint256" },
            { internalType: "address", name: "buyer", type: "address" },
            { internalType: "bool", name: "sold", type: "bool" },
            { internalType: "address", name: "paymentToken", type: "address" },
            { internalType: "uint256", name: "timestamp", type: "uint256" },
            { internalType: "bool", name: "isListed", type: "bool" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "marketingWallet",
        outputs: [{ internalType: "address", name: "", type: "address" }],
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
        name: "rabbitToken",
        outputs: [{ internalType: "address", name: "", type: "address" }],
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
        inputs: [
            { internalType: "address", name: "erc721Address", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
        ],
        name: "rescueNFT",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "tokenAddress", type: "address" },
            { internalType: "address", name: "receiver", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "rescueToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "rewardsWallet",
        outputs: [{ internalType: "address", name: "", type: "address" }],
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
        inputs: [
            {
                internalType: "address",
                name: "newMarketingWallet",
                type: "address",
            },
        ],
        name: "updateMarketingWallet",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newRabbitToken",
                type: "address",
            },
        ],
        name: "updateRabbitToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newRewardsWallet",
                type: "address",
            },
        ],
        name: "updateRewardsWallet",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "newUsdtToken", type: "address" },
        ],
        name: "updateUsdtToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "usdtToken",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
];
