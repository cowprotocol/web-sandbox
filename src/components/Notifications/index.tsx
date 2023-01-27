import { useCallback } from "react";
import { NotificationType } from "@web3-onboard/core/dist/types";
import { useNotifications } from "@web3-onboard/react";

export const Notifications = () => {
  const [, customNotification] = useNotifications();

  const handleClick = useCallback(
    (type: NotificationType) => {
      customNotification({
        type,
        message: `This is ${type} notification type`,
        autoDismiss: 0,
      });
    },
    [customNotification]
  );

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
