import { useEffect } from "react";
import { WALLET_STORAGE_KEY } from "constants/wallets";
import { useWeb3Onboard } from "@web3-onboard/react/dist/context";
import { stringifyWallets } from "../utils/stringifyWallets";

export const useSaveWallets = () => {
  const onboard = useWeb3Onboard();

  useEffect(() => {
    const walletsSub = onboard.state.select("wallets");

    const subscription = walletsSub.subscribe((wallets) => {
      window.localStorage.setItem(
        WALLET_STORAGE_KEY,
        stringifyWallets(wallets)
      );
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [onboard]);
};
