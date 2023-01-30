import { SupportedChainId } from "constants/chains";
import { ConnectedChain } from "@web3-onboard/core";
import {
  MAINET_HEX,
  GOERLI_HEX,
  POLYGON_HEX,
  GNOSIS_CHAIN_HEX,
} from "constants/chains";

export const getChainId = (
  chain: ConnectedChain | null
): SupportedChainId | null => {
  if (!chain) {
    return null;
  }

  switch (chain.id) {
    case MAINET_HEX:
      return SupportedChainId.MAINNET;
    case GOERLI_HEX:
      return SupportedChainId.GOERLI;
    case POLYGON_HEX:
      return SupportedChainId.POLYGON;
    case GNOSIS_CHAIN_HEX:
      return SupportedChainId.GNOSIS_CHAIN;
    default:
      return null;
  }
};
