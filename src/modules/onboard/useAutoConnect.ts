import { OnboardAPI } from "@web3-onboard/core";
import { WALLET_STORAGE_KEY } from "../../constants/wallets";

export const useAutoConnect = async (onboard: OnboardAPI) => {
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
};
