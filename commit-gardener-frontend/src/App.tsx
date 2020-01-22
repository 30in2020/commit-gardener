import React from "react";
import "./App.css";
import { GetTokenButton, NotificationButton } from "./components/";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <GetTokenButton />
        <NotificationButton />
      </header>
    </div>
  );
};

export default App;
