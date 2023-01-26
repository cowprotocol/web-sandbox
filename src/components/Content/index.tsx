import { useAppState } from "@web3-onboard/react";
import { useWallets } from "@web3-onboard/react";
import { Notifications } from "../Notifications";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  padding: 1rem;
`;

export function Content() {
  const appState = useAppState();
  const wallets = useWallets();
  const [wallet] = wallets;

  console.log("app state", appState);

  return (
    <Wrapper>
      {wallet ? (
        <div>
          <div>
            <span>Connected wallet: </span>
            <strong>
              {wallet.accounts[0].address} - {wallet.label}
            </strong>
          </div>

          <div>
            <span>Chain: </span>
            <strong>
              {wallet.chains[0].id} - {wallet.chains[0].namespace}
            </strong>
          </div>

          <Notifications />
        </div>
      ) : (
        "Not connected"
      )}
    </Wrapper>
  );
}
