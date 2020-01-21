import React, { useEffect } from "react";
import {
  askForPermissionToReceiveNotifications,
  getMessage
} from "../push-notification";

const NotificationButton = () => {
  useEffect(() => {
    getMessage();
  }, []);
  return (
    <button onClick={askForPermissionToReceiveNotifications}>
      Click to receive notifications
    </button>
  );
};

export default NotificationButton;
