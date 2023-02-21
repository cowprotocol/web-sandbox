import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { LedgerConnector } from "wagmi/connectors/ledger";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { mainnet, gnosis, goerli } from "wagmi/chains";
import { Connector } from "wagmi";
import { Buffer } from "buffer";
import CoinbaseIcon from "assets/icons/coinbase.svg";
import MetamaskIcon from "assets/icons/metamask.png";
import WalletConnectIcon from "assets/icons/walletconnect.svg";
import ZengoIcon from "assets/icons/zengo.svg";
import LedgerIcon from "assets/icons/ledger.svg";
import styled from "styled-components";

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

type ConnectType = {
  connector: Connector;
  name: string;
  icon: string;
};

const ConnectButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 1px solid blue;
  border-radius: 5px;
  background: transparent;
  width: auto;
  margin-right: 10px;
  cursor: pointer;

  img {
    margin-right: 5px;
    max-width: 30px;
  }
`;

const ConnectOption = ({ connector, name, icon }: ConnectType) => {
  const { connect } = useConnect({ connector });
  const { disconnect } = useDisconnect();
  const { isConnecting, isConnected, connector: c } = useAccount();

  const isThisConnected = isConnected && connector.id === c?.id;
  const isThisConnecting = isConnecting && connector.id === c?.id;

  return (
    <ConnectButton
      disabled={isConnecting}
      onClick={() => (isThisConnected ? disconnect() : connect())}
    >
      <img src={icon} alt={`${name} icon`} />
      <span>
        {isThisConnecting
          ? "connecting"
          : isThisConnected
          ? "disconnect"
          : `${name}`}
      </span>
    </ConnectButton>
  );
};

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
