import React from 'react';
import {tooltrip} from "antd";
import "./offers.css"
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

export default function Offers(){
    return(
        <div>
          <Header/>
            <div className="container">
  <div className="page-header"><h1>Offers</h1></div>
  <div className="gap gap-small" />
  <div>
    <h3><span className="fa fa-hand-o-right" /> NDB Bank Cards (8th April to 30th April 2016)</h3>
    <ul>
      <li><h5>NDB Credit Cards : <strong>10%</strong> discount of bus fare</h5></li>
      <li><h5>NDB Debit Cards : <strong>5%</strong> discount of bus fare</h5></li>
    </ul>
    <hr />
  </div>
  <div className="gap gap-small" />
  <div>
    <h3><span className="fa fa-hand-o-right" /> OfferHut Loyal Members</h3>
    <ul>
      <li><h5>Dial <strong>#7722*4848#</strong> to become a loyal member of BusSeat.lk and receive offer via
          SMS
        </h5></li>
      <li><h5>Free for OfferHut registered users. Rs.2 + Tax per day for others. Dialog only.</h5></li>
    </ul>
    <hr />
  </div>
  <div className="gap gap-small" />
  <div>
    <h3><span className="fa fa-hand-o-right" /> BusSeat.lk Promo Code</h3>
    <ul>
      <li><h5>Coming soon !</h5></li>
    </ul>
  </div>
</div>
        <Footer/>
            </div>
    )
}