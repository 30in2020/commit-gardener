import React, { useCallback } from "react";
import PushNotification from "../push-notification";

const GetGithubAccessTokenButton = () => {
  const handleClick = useCallback(() => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`;
  }, []);
  return <button onClick={handleClick}>Login with github</button>;
};

export { GetGithubAccessTokenButton };
