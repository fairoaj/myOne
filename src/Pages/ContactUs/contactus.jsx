import { formatCountdown } from "antd/lib/statistic/utils";
import React, {UseState} from "react";
import {tooltrip} from "antd";
import "./contactus.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";


export default function ContractUs(){
    return(
    

    <div>
      <Header/>
       <div>
  <div id="nav-bar">
    <header id="main-header" className="fix">
      <div className="header-top header-top-passenger">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              
            </div>
            <div className="col-md-5"></div>
            <div className="col-md-4">
              {/*<div class="top-user-area clearfix">
                  <ul class="top-user-area-list list list-horizontal list-border">
                      <li><a href="/sign-in">Sign In</a>
                      </li>
                  </ul>
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
  <div className="container">
    <div className="page-header">
      <h1>Contact Us</h1>
    </div>
    <div className="gap gap-small" />
    <div className="row">
      <div className="col-md-7">
        <h4>
          Reach us for any of the following matters, we reply each and every
          calls, messages, emails, everything
        </h4>
        <ul>
          <li>
            <h3>Passengers</h3>
            <p>
              Looking for bus ticket booking and reservation in Sri Lanka. You
              are at the right place
            </p>
          </li>
          <li>
            <h3>Bus operators</h3>
            <p>
              Increase your bus ticket booking sales enabling more visibility?
              Contact us to add your bus into our online platform
            </p>
          </li>
          <li>
            <h3>Travel agents</h3>
            <p>
              Willing to earn money being bus booking agent? Contact us to
              register yourself
            </p>
          </li>
          <li>
            <h3>Bus Booking Startups in other countries</h3>
            <p>
              Interested in our bus booking management software? Buy now from us
              with full fledged features and kickstart business immediately
              without wasting time in developing software
            </p>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <aside className="sidebar-right">
          <ul className="address-list list">
            <li>
              <h5>Phone Number</h5>
              <a href="#">(+94) 76 676 4848</a>
            </li>
            <li>
              <h5>Email</h5>
              <a href="mailto:info@busseat.lk">info@busseat.lk</a>
            </li>
            <li>
              <h5>Facebook Messenger</h5>
              <a href="http://m.me/BusSeat.lk">Chat with us</a>
            </li>
            <li>
              <h5>WhatsApp</h5>
              <a href="https://wa.me/94766764848">
                WhatsApp us to +94 76 676 4848
              </a>
            </li>
            <li>
              <h5>Address</h5>
              <address>
                TechKitez Private Limited.
                <br />
                #479, 1/2, Galle Road
                <br />
                Colombo 00600
                <br />
                Sri Lanka
                <br />
              </address>
            </li>
          </ul>
        </aside>
      </div>
    </div>
    <div className="gap" />
  </div>
  </div>


<Footer/>
</div>
);
}