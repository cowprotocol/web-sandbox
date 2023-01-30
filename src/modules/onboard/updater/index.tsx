import { useAutoConnect } from "../hooks/useAutoConnect";
import { useSaveWallets } from "../hooks/useSaveWallets";
import { useChainChange } from "../hooks/useChainChange";

export function OnboardUpdater() {
  useSaveWallets();
  useAutoConnect();
  useChainChange();

  return null;
}
