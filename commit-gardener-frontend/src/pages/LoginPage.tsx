import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import PushNotification from "../push-notification";
import qs from "qs";
import "whatwg-fetch";

const LoginPage: React.FC = () => {
  const [error, setError] = useState(null);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      // Parse 'code' value from Github OAuth callback
      const { search } = location;
      const { code } = qs.parse(search, { ignoreQueryPrefix: true });

      try {
        // Wait until the user allows permission to use notifications
        const token = await PushNotification.askForPermissionToReceiveNotifications();
        console.log(token);
        // Send 'code' and device token to server
        const res: Response = await fetch("http://localhost:8080/v1/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            code,
            token
          })
        });

        //localStorage.setItem("access_token", res);
        console.log(res);

        // Redirect to Login Page
        history.push("/");
      } catch (e) {
        // If PERMISSION_DENIED or error occured, show error and make user start log-in again.
        setError(e.message);
      }
    })();
  }, [history, location]);

  if (error) {
    return <div>Error! Start from beginning!</div>;
  }

  return (
    <>
      <p>Press Allow for receiving notifications</p>
    </>
  );
};

export { LoginPage };
