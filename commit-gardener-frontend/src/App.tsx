import React from "react";
import "./App.css";
import {
  GetGithubAccessTokenButton,
  GetFirebaseTokenButton,
  NotificationButton
} from "./components/";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <GetGithubAccessTokenButton />
        <GetFirebaseTokenButton />
        <NotificationButton />
      </header>
    </div>
  );
};

export default App;
