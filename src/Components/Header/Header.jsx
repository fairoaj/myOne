import React from "react";

import "./styles.css";

export default function Header() {
  return (
    <div className="header-container">
      <div className="logo-wrap">
        <div className="logo-container">
          <a href="/">
            <img
              className="logo"
              src={require("../../assets/app-logo.png")}
              alt="Logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
