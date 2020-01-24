import React, { useEffect } from "react";
import PushNotification from "../push-notification";

const GetFirebaseTokenButton = () => {
  useEffect(() => {
    PushNotification.getMessage();
  }, []);
  return (
    <button onClick={PushNotification.askForPermissionToReceiveNotifications}>
      Click to receive notifications
    </button>
  );
};

export { GetFirebaseTokenButton };
