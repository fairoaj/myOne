import React from "react";

import "../ButtonComponent/Button.css";

import "../../Component/ButtonComponent/Button.css";

export default function Button({ text, onClick }) {
  return (
    <button className="actionButton" onClick={onClick}>
      {text}
    </button>
  );
}
