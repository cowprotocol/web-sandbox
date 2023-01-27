import { WALLET_STORAGE_KEY } from "constants/wallets";
import { useConnectWallet } from "@web3-onboard/react";
import { useMemo } from "react";

export const useAutoConnect = () => {
  const [, connect] = useConnectWallet();

  useMemo(() => {
    const savedWallets = window.localStorage.getItem(WALLET_STORAGE_KEY);

    if (!savedWallets) {
      return;
    }

    const [previouslyConnectedWallet] = JSON.parse(savedWallets);

    if (previouslyConnectedWallet) {
      connect({
        autoSelect: { label: previouslyConnectedWallet, disableModals: true },
      });
    }
  }, [connect]);
};
