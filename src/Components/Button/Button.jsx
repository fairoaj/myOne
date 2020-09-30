import React from "react";

import "./styles.css";

export default function Button({ text, onClick }) {
  return (
    <button className="actionButton" onClick={onClick}>
      {text}
    </button>
  );
}
