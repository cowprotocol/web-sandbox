import { init } from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";
import walletConnectModule from "@web3-onboard/walletconnect";
import keystoneModule from "@web3-onboard/keystone";
import ledgerModule from "@web3-onboard/ledger";
import coinbaseWalletModule from "@web3-onboard/coinbase";

import { ethereumMainet, polygonMainnet } from "../constants/chains";

export const createOnboard = () => {
  const WC_BRIDGE_URL = "https://bridge.walletconnect.org";

  const chains = [ethereumMainet, polygonMainnet];

  const injected = injectedModule();
  const keystone = keystoneModule();
  const ledger = ledgerModule();
  const coinbaseWalletSdk = coinbaseWalletModule();

  const walletConnect = walletConnectModule({
    bridge: WC_BRIDGE_URL,
    qrcodeModalOptions: {
      mobileLinks: [
        "rainbow",
        "metamask",
        "argent",
        "trust",
        "imtoken",
        "pillar",
      ],
    },
    connectFirstChainId: true,
  });

  const wallets = [
    injected,
    walletConnect,
    keystone,
    ledger,
    coinbaseWalletSdk,
  ];

  const appMetadata = {
    name: "CoW Swap",
    icon: "/images/cow-logo.svg",
    description: "Moooooooooooo",
    recommendedInjectedWallets: [
      { name: "MetaMask", url: "https://metamask.io" },
      { name: "Coinbase", url: "https://wallet.coinbase.com/" },
    ],
  };

  const web3Onboard = init({
    wallets,
    chains,
    appMetadata,
  });

  return web3Onboard;
};
