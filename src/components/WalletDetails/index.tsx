import { useConnectWallet } from "@web3-onboard/react";

export const WalletDetails = () => {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();

  return (
    <button
      disabled={connecting}
      onClick={() => (wallet ? disconnect(wallet) : connect())}
    >
      {connecting ? "connecting" : wallet ? "disconnect" : "connect"}
    </button>
  );
};
