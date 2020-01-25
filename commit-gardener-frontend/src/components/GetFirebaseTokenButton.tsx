import React, { useState, useEffect } from "react";
import PushNotification from "../push-notification";
import { useCallback } from "react";

const GetFirebaseTokenButton = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    PushNotification.getMessage();
  }, []);
  const handleGetToken = useCallback(async () => {
    await PushNotification.askForPermissionToReceiveNotifications();
    setToken(localStorage.getItem("token") || "");
  }, []);
  return (
    <>
      <button onClick={handleGetToken}>Click to receive notifications</button>
      {token}
    </>
  );
};

export { GetFirebaseTokenButton };
