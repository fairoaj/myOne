import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "../Pages/HomePage/HomePage";
import CheckoutPage from "../Pages/CheckoutPage/CheckoutPage";

export default function AppRoute() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route path="/checkout" component={CheckoutPage} />
    </Router>
  );
}
