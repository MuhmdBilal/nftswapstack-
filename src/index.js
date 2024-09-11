import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/css/style.css"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
  import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from "wagmi";
import { bscTestnet } from "wagmi/chains";
const projectId = "e4a6242bade4a887be47b8ec368c958c";

const chains = [bscTestnet];
const queryClient = new QueryClient();
const metadata = {
  name: 'AppKit',
  description: 'AppKit Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const wagmiConfig = defaultWagmiConfig({
  projectId,
  chains,
  auth: {
    email: false,
    socials: [],
  }
});

createWeb3Modal({
  chains,
  themeVariables: {
        "--w3m-accent": "#e647bf",
      },
  projectId,
  metadata,
  wagmiConfig: wagmiConfig,
  allWallets: 'SHOW',
  includeWalletIds: [
    "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
    '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0',
    "971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",
    "8a0ee50d1f22f6651afcae7eb4253e52a3310b90af5daef78a8c4929a9bb99d4",
    "15c8b91ade1a4e58f3ce4e7a0dd7f42b47db0c8df7e0d84f63eb39bcb96c4e0f"
  ]


});
ReactDOM.render(
  <React.StrictMode>
  <WagmiProvider config={wagmiConfig}>
    <QueryClientProvider client={queryClient}>
    <App />
    <ToastContainer autoClose={3000} />
  </QueryClientProvider>
  </WagmiProvider>
</React.StrictMode>,
  document.getElementById('root')
);