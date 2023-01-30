import { useEffect } from "react";
import { useSetChain } from "@web3-onboard/react";
import { getWalletsByChain } from "../utils/getWalletsByChain";
import { getChainId } from "../utils/getChainId";
import { useConnectWallet } from "@web3-onboard/react";
import { SupportedChainId } from "constants/chains";

export const useChainChange = () => {
  const [{ connectedChain }] = useSetChain();
  const [, , , , setWalletModules] = useConnectWallet();
  const chainId = getChainId(connectedChain);

  useEffect(() => {
    // Set wallet options supported by chain
    const walletOptions = getWalletsByChain(
      chainId || SupportedChainId.MAINNET
    );

    setWalletModules(walletOptions);
  }, [chainId, setWalletModules]);
};
