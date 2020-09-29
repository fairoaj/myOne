import React from "react";

import "./styles.css";

export default function CheckoutPage() {
  return (
    <div>
      <div className="header">
        <a href="/">
          <div className="header__logo">
            <div>
              <img
                className="header__image"
                src={require("../../assets/app-logo.png")}
                alt="Logo"
              />
            </div>
            <div>
              <p className="header__link-text">BusBooking.lk</p>
            </div>
          </div>
        </a>
      </div>

      <div className="booking-info">
        <h2>Departure-Arrival | Date</h2>
      </div>
    </div>
  );
}
