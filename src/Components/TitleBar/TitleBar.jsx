import React from "react";

import "./styles.css";

export default function TitleBar({ departure, arrival, date, travels }) {
  return (
    <div className="booking-info">
      <h2>
        {departure}-{arrival} | {date} | {travels}
      </h2>
    </div>
  );
}