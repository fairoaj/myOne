import React from "react";
import { Tooltip } from "antd";
import { Button } from "@material-ui/core";

import "../../Component/SeatsComponent/Seats.css";

export default function Seats({
  isForLadies,
  isBookingProgress,
  isAvailable,
  isBooked,
  seatNumber,
  onClickHandler,
}) {
  var backgroundColor = "";
  var color = "";
  if (isAvailable) {
    backgroundColor = "#5cb85c";
    color = "#fff";

    if (isBooked) {
      backgroundColor = "#d2d2d2";
      color = "#000";
    } else if (isForLadies) {
      backgroundColor = "#84bdff";
      color = "#fff";
    }
  } else {
    if (isBookingProgress) {
      backgroundColor = "#2d2d2d";
      color = "#fff";
    }
    backgroundColor = "#f5f5dc";
    color = "#000";
  }
  return (
    <button
      disabled={!isAvailable || isBooked}
      style={{ backgroundColor: backgroundColor, color: color }}
      onClick={onClickHandler}
      className="seat-item"
    >
      {seatNumber}
    </button>
  );
}
