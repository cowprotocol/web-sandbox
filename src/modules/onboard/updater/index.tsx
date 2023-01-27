import { useAutoConnect } from "../hooks/useAutoConnect";
import { useSaveWallets } from "../hooks/useSaveWallets";

export function OnboardUpdater() {
  useSaveWallets();
  useAutoConnect();

  return null;
}
