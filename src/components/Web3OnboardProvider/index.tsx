import { ReactNode } from "react";
import { Web3OnboardProvider as Provider } from "@web3-onboard/react";
import { createOnboard } from "../../modules/onboard/hooks/createOnboard";

export const web3Onboard = createOnboard();

export function Web3OnboardProvider({ children }: { children: ReactNode }) {
  return <Provider web3Onboard={web3Onboard}>{children}</Provider>;
}
