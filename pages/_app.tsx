import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import {Chain, getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import type { AppProps } from 'next/app';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  
  polygonMumbai,sepolia,baseGoerli,optimismGoerli
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';


const xrpSideChain: Chain = {
  id: 1440002,
  name: ' XRPL EVM Sidechain',
  network: ' XRPL EVM Sidechain',
  iconBackground: '#3e6957',
  nativeCurrency: {
    decimals: 18,
    name: 'XRP',
    symbol: 'XRP',
  },
  rpcUrls: {
    public: { http: ['https://rpc-evm-sidechain.xrpl.org/'] },
    default: { http: ['https://rpc-evm-sidechain.xrpl.org/'] },
  },
  blockExplorers: {
    default: { name: 'XRPL', url: 'https://evm-sidechain.xrpl.org' },
    etherscan: { name: 'XRPL', url: 'https://evm-sidechain.xrpl.org' },
  },

  testnet: true,
};
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
   
   xrpSideChain
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
