import { useCreateOnboard } from "./useCreateOnboard";
import { useSaveWallets } from "./useSaveWallets";
import { useAutoConnect } from "./useAutoConnect";

export const useInitOnboard = () => {
  const onboard = useCreateOnboard();

  useSaveWallets(onboard);
  useAutoConnect(onboard);

  return onboard;
};
