import { WalletState } from "@web3-onboard/core";

export const stringifyWallets = (wallets: WalletState[]) => {
  return JSON.stringify(wallets.map(({ label }) => label));
};
