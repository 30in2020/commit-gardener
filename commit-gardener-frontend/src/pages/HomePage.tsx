import React, { useCallback } from "react";
import { Button } from "../components";

const HomePage: React.FC = () => {
  const handleClick = useCallback(() => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`;
  }, []);
  return (
    <>
      <header>Home</header>
      <Button onClick={handleClick} label="Login with Github" />
    </>
  );
};

export { HomePage };
