import { init } from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";
import walletConnectModule from "@web3-onboard/walletconnect";
import { ethereumMainet, polygonMainnet } from "../constants/chains";

export const createOnboard = () => {
  const WC_BRIDGE_URL = "https://bridge.walletconnect.org";

  const chains = [ethereumMainet, polygonMainnet];

  const injected = injectedModule();
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

  const wallets = [injected, walletConnect];

  const appMetadata = {
    name: "CoW Swap",
    icon: "/images/cow-logo.svg",
    description: "Moooooooooooo",
  };

  const web3Onboard = init({
    wallets,
    chains,
    appMetadata,
  });

  return web3Onboard;
};
