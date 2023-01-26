import { useAppState } from "@web3-onboard/react";
import { useWallets } from "@web3-onboard/react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  padding: 1rem;
`;

export function Content() {
  const appState = useAppState();
  const [wallet] = useWallets();

  console.log("appState", appState);
  console.log("wallet", wallet);

  return (
    <Wrapper>
      {wallet ? (
        <div>
          <div>
            <span>Connected wallet: </span>
            <strong>{wallet.accounts[0].address}</strong>
          </div>

          <div>
            <span>Chain: </span>
            <strong>
              {wallet.chains[0].id} - {wallet.chains[0].namespace}
            </strong>
          </div>
        </div>
      ) : (
        "Not connected"
      )}
    </Wrapper>
  );
}
