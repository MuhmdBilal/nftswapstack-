import React, { useContext, useEffect } from 'react'
import { AuthUserContext } from './context';
import { useAccount } from 'wagmi';
// import {
//     useWeb3ModalAccount,
//     createWeb3Modal,
//     defaultConfig,
//   } from "@web3modal/ethers/react";

//   const projectId = "57c3ed3f7633af987eda789d503edfee";
// const chains = [
//   // {
//   //   chainId: 84532,
//   //   name: "Base Sepolia Testnet",
//   //   currency: "ETH",
//   //   explorerUrl: "https://base-sepolia.blockscout.com",
//   //   rpcUrl: "https://sepolia.base.org",
//   // },
//   {
//     chainId: 97,
//     name: "BSC Testnet",
//     currency: "BNB",
//     explorerUrl: "https://explorer.binance.org/smart-testnet",
//     rpcUrl: "https://data-seed-prebsc-1-s1.binance.org:8545",
//   },
// ];

// const ethersConfig = defaultConfig({
//   metadata: {
//     name: "Web3Modal",
//     description: "Web3Modal Laboratory",
//     url: "https://web3modal.com",
//     icons: ["https://avatars.githubusercontent.com/u/37784886"],
//   },
//   defaultChainId: 1,
//   rpcUrl: "https://cloudflare-eth.com",
// });
// createWeb3Modal({
//   ethersConfig,
//   chains,
//   projectId,
//   enableAnalytics: true,
//   themeMode: "dark",
//   themeVariables: {
//     "--w3m-accent": "#e647bf",
//   }
// });
  
const WalletConnection = () => {
    const { setWalletAddress } = useContext(AuthUserContext);
    const { address, isConnected } = useAccount();
    useEffect(() => {
      console.log("address", address, isConnected);
      
      if (isConnected && address) {
        setWalletAddress(address);
      }
    }, [isConnected, address]);
  return (
    <div className="d-flex justify-content-center" >
      <div className='p-0' style={{ backgroundColor: 'transparent',color: 'white', borderRadius: '5px' }}>
      <w3m-button />
      </div>
    </div>
  )
}

export default WalletConnection