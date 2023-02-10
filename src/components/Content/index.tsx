import styled from "styled-components";
import { useAccount, useNetwork } from "wagmi";

const Wrapper = styled.div`
  display: flex;
  padding: 1rem;
`;

export function Content() {
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();

  return (
    <Wrapper>
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
    </Wrapper>
  );
}
