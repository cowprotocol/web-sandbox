import { OnboardAPI, WalletState } from "@web3-onboard/core";
import { useEffect } from "react";
import { WALLET_STORAGE_KEY } from "../../constants/wallets";

const parseWallets = (wallets: WalletState[]) => {
  return JSON.stringify(wallets.map(({ label }) => label));
};

export const useSaveWallets = (onboard: OnboardAPI) => {
  useEffect(() => {
    const walletsSub = onboard.state.select("wallets");

    const subscription = walletsSub.subscribe((wallets) => {
      window.localStorage.setItem(WALLET_STORAGE_KEY, parseWallets(wallets));
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [onboard]);
};
