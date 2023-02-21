import { InjectedConnector } from "wagmi/connectors/injected";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { LedgerConnector } from "wagmi/connectors/ledger";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { mainnet, gnosis, goerli } from "wagmi/chains";
import { Buffer } from "buffer";
import { ConnectOption } from "./ConnectOption";
import CoinbaseIcon from "assets/icons/coinbase.svg";
import MetamaskIcon from "assets/icons/metamask.png";
import WalletConnectIcon from "assets/icons/walletconnect.svg";
import LedgerIcon from "assets/icons/ledger.svg";

// polyfill Buffer for client
if (!window.Buffer) {
  window.Buffer = Buffer;
}

const injected = new InjectedConnector({
  chains: [mainnet, gnosis, goerli],
});

const coinbase = new CoinbaseWalletConnector({
  chains: [mainnet, gnosis, goerli],
  options: {
    appName: "wagmi.sh",
    jsonRpcUrl: "https://eth-mainnet.alchemyapi.io/v2/yourAlchemyId",
  },
});

const ledger = new LedgerConnector({
  chains: [mainnet, gnosis, goerli],
});

const walletConnect = new WalletConnectConnector({
  options: {
    qrcode: true,
  },
});

export const WalletDetails = () => {
  return (
    <>
      <ConnectOption
        icon={MetamaskIcon}
        connector={injected}
        name={"Injected"}
      />
      <ConnectOption
        icon={CoinbaseIcon}
        connector={coinbase}
        name={"Coinbase"}
      />
      <ConnectOption icon={LedgerIcon} connector={ledger} name={"Ledger"} />
      <ConnectOption
        icon={WalletConnectIcon}
        connector={walletConnect}
        name={"WalletConnect"}
      />
    </>
  );
};
