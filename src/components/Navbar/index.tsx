import { WalletDetails } from "../WalletDetails";
import styled from "styled-components";

const Wrapper = styled.nav`
  background: #e0e0e0;
  padding: 1rem;
`;

export function Navbar() {
  return (
    <Wrapper>
      <WalletDetails />
    </Wrapper>
  );
}
