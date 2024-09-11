import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Import CSS here
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/css/style.css"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
  import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from "wagmi";
import { bscTestnet } from "wagmi/chains";

// Replace this project ID with yours
// from cloud.walletconnect.com
const projectId = "2a2a5978a58aad734d13a2d194ec469a";

const chains = [bscTestnet];
const queryClient = new QueryClient();
const wagmiConfig = defaultWagmiConfig({
  projectId,
  chains,
  // metadata: {
  //   name: "test",
  // },
});

createWeb3Modal({
  chains,
  themeVariables: {
        "--w3m-accent": "#e647bf",
      },
  projectId,
  wagmiConfig,
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