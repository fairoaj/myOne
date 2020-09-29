import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./HomePage/HomePage";
import "antd/dist/antd.css";
import Navigation from "./Navigate/Navigate";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;
