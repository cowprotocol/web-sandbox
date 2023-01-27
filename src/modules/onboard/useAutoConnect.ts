import { WALLET_STORAGE_KEY } from "../../constants/wallets";
import { useWeb3Onboard } from "@web3-onboard/react/dist/context";
import { useCallback } from "react";

export const useAutoConnect = () => {
  const onboard = useWeb3Onboard();

  const connect = useCallback(async () => {
    const savedWallets = window.localStorage.getItem(WALLET_STORAGE_KEY);

    if (!savedWallets) {
      return;
    }

    const [previouslyConnectedWallet] = JSON.parse(savedWallets);

    if (previouslyConnectedWallet) {
      await onboard.connectWallet({
        autoSelect: { label: previouslyConnectedWallet, disableModals: true },
      });
    }
  }, [onboard]);

  connect();
};
