import React, { useEffect } from "react";
import PushNotification from "../push-notification";

const NotificationButton = () => {
  return (
    <button
      onClick={e =>
        PushNotification.sendNotification(
          e,
          localStorage.getItem("token") as string
        )
      }
    >
      Click to send notifications
    </button>
  );
};

export { NotificationButton };
