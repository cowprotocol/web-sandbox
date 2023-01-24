import { init, useConnectWallet } from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";

const INFURA_KEY = process.env.REACT_APP_INFURA_KEY;
const MAINNET_RPC_URL = `https://mainnet.infura.io/v3/${INFURA_KEY}`;

const ethereumMainet = {
  id: "0x1",
  token: "ETH",
  label: "Ethereum Mainnet",
  rpcUrl: MAINNET_RPC_URL,
};

const polygonMainnet = {
  id: "0x89",
  token: "MATIC",
  label: "Polygon",
  rpcUrl: "https://matic-mainnet.chainstacklabs.com",
};

const chains = [ethereumMainet, polygonMainnet];
const wallets = [injectedModule()];

const appMetadata = {
  name: "CoW Swap",
  icon: "/images/cow-logo.svg",
  description: "Moooooooooooo",
};

export const web3Onboard = init({
  wallets,
  chains,
  appMetadata,
});

export const WalletDetails = () => {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();

  return (
    <button
      disabled={connecting}
      onClick={() => (wallet ? disconnect(wallet) : connect())}
    >
      {connecting ? "connecting" : wallet ? "disconnect" : "connect"}
    </button>
  );
};
