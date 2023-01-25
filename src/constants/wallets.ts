export const appMetadata = {
  name: "CoW Swap",
  icon: "/images/cow-logo.svg",
  description: "Moooooooooooo",
  recommendedInjectedWallets: [
    { name: "MetaMask", url: "https://metamask.io" },
    { name: "Coinbase", url: "https://wallet.coinbase.com/" },
  ],
};

const WC_BRIDGE_URL = "https://bridge.walletconnect.org";

export const defaultWCOptions = {
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
};

export const zenGoOptions = {
  ...defaultWCOptions,
  label: "ZenGo",
  getIcon: async () => (await import("../assets/icons/zengo.svg")).default,
};
