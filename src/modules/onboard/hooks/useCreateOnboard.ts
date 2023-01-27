import { init } from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";
import walletConnectModule from "@web3-onboard/walletconnect";
import keystoneModule from "@web3-onboard/keystone";
import ledgerModule from "@web3-onboard/ledger";
import coinbaseWalletModule from "@web3-onboard/coinbase";

import { accountCenter } from "constants/accountCenter";
import { ethereumMainet, polygonMainnet } from "constants/chains";
import { appMetadata, defaultWCOptions, zenGoOptions } from "constants/wallets";

export const useCreateOnboard = () => {
  const chains = [ethereumMainet, polygonMainnet];

  // Injected
  const injected = injectedModule();
  const coinbaseWalletSdk = coinbaseWalletModule();

  // Wallet connect
  const walletConnect = walletConnectModule(defaultWCOptions);
  const zenGoWallet = walletConnectModule(zenGoOptions);

  // Hardware
  const keystone = keystoneModule();
  const ledger = ledgerModule();

  const wallets = [
    injected,
    walletConnect,
    keystone,
    ledger,
    coinbaseWalletSdk,
    zenGoWallet,
  ];

  const web3Onboard = init({
    wallets,
    chains,
    appMetadata,
    accountCenter,
  });

  return web3Onboard;
};
