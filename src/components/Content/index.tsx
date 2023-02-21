import styled from "styled-components";
import { useAccount, useNetwork } from "wagmi";
import { WalletDetails } from "../WalletDetails";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export function Content() {
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();

  return (
    <Wrapper>
      <WalletDetails />

      <div>
        {isConnected ? (
          <div>
            <div>
              <span>Connected wallet: </span>
              <strong>{address}</strong>
            </div>

            <div>
              <span>Chain: </span>
              <strong>
                {chain?.id} - {chain?.name}
              </strong>
            </div>
          </div>
        ) : (
          "Not connected"
        )}
      </div>
    </Wrapper>
  );
}
