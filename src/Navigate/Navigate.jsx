import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Help from "../HelpPage/Help";
import HomePage from "../HomePage/HomePage";

export default function Navigation() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/Help">
            <Help />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
