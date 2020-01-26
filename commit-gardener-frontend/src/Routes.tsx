import React from "react";
import { HomePage, LoginPage } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
