import React from "react";
import "./App.css";
import NotificationButton from "./components/NotificationButton";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <NotificationButton />
      </header>
    </div>
  );
};

export default App;
