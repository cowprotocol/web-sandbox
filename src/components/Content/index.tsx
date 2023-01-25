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
          <span>Connected wallet: {wallet.accounts[0].address}</span>
        </div>
      ) : (
        "Not connected"
      )}
    </Wrapper>
  );
}
