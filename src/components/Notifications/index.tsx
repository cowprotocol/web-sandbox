import { useCallback } from "react";
import { NotificationType } from "@web3-onboard/core/dist/types";
import { web3Onboard } from "../Web3OnboardProvider";

export const Notifications = () => {
  const handleClick = useCallback((type: NotificationType) => {
    web3Onboard.state.actions.customNotification({
      type,
      message: `This is ${type} notification type`,
      autoDismiss: 0,
    });
  }, []);

  return (
    <div>
      <h4>Notifications</h4>
      <button onClick={() => handleClick("hint")}>Hint</button>
      <button onClick={() => handleClick("pending")}>Pending</button>
      <button onClick={() => handleClick("error")}>Error</button>
      <button onClick={() => handleClick("success")}>Success</button>
    </div>
  );
};
