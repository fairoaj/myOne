import React from "react";
import { Divider, IconButton } from "@material-ui/core";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";

import "../FooterPage/Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <Divider />

      <div className="footer">
        <div className="footer__item">
          <a href="Help" className="footer__item--link">
            FAQ
          </a>
          <a href="Contact" className="footer__item--link">
            Contact Us
          </a>
          <a href="#" className="footer__item--link">
            About Us
          </a>
          <a href="#" className="footer__item--link">
            Privacy
          </a>
          <a href="#" className="footer__item--link">
            Terms and Conditions
          </a>
        </div>

        <div className="footer__item">
          <a href="#" className="footer__item--link">
            Offers
          </a>
          <a href="#" className="footer__item--link">
            Agents
          </a>
          <a href="BusOperater" className="footer__item--link">
            Bus Operators
          </a>
          <a href="#" className="footer__item--link">
            Routes
          </a>
          <a href="#" className="footer__item--link">
            Service Updates
          </a>
        </div>

        <div className="footer__item">
          <p>Have Question?</p>
          <p>(+94) 77 123 456 7</p>
          <p>info@name.lk</p>
        </div>

        <div className="footer__item">
          <a href="#" className="facebook-link">
            <FormatQuoteIcon />
            <span>BusBooking</span>
          </a>
        </div>
      </div>
    </div>
  );
}
