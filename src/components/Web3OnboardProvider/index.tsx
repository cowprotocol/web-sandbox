import { ReactNode } from "react";
import { Web3OnboardProvider as Provider } from "@web3-onboard/react";
import { useInitOnboard } from "../../modules/onboard/useInitOnboard";

export function Web3OnboardProvider({ children }: { children: ReactNode }) {
  return <Provider web3Onboard={useInitOnboard()}>{children}</Provider>;
}
