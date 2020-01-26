import React from "react";
import "./App.css";
import { GetFirebaseTokenButton, NotificationButton } from "./components/";
import Routes from "./Routes";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes />
      {/* 
      <header className="App-header">
        <GetGithubAccessTokenButton />
        <GetFirebaseTokenButton />
        <NotificationButton />
      </header>
    */}
    </div>
  );
};

export default App;
