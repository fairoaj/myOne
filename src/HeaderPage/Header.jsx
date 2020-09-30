import React from "react";

import "../HeaderPage/header.css";

export default function Header() {
  return (
    <div className="header-container">
      <div className="logo-wrap">
        <div className="logo-container">
          <a href="/">
            <img
              className="logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSghkcVNB_8fLe7vVLEXR15LM5ZNl8LSSzLTw&usqp=CAU"
              alt="Logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
