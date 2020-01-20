import React from "react";
import { askForPermissionToReceiveNotifications } from "../push-notification";

const NotificationButton = () => (
  <button onClick={askForPermissionToReceiveNotifications}>
    Click to receive notifications
  </button>
);

export default NotificationButton;
