import React from "react";
import { useParams } from "react-router";
import { Grid, Divider, Hidden } from "@material-ui/core";
import { Tooltip } from "antd";

import ActionButton from "../../Components/Button/Button";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

import BusInfo from "../../Data/BusInfo";

import "./styles.css";

export default function CheckoutPage() {
  const { departure, arrival, date } = useParams();
  return (
    <div className="main-container">
      <Header />

      <div className="booking-info">
        <h2>
          {departure}-{arrival} | {date}
        </h2>
      </div>

      <div className="buses-info">
        {BusInfo.map((item) => (
          <>
            <Grid style={{ padding: 10 }} key={item.id} container spacing={1}>
              <Grid item sm={3} xs={12}>
                <div className="bus-info">
                  <h2 id="travelName">{item.travelName}</h2>
                  <h2>{item.busType}</h2>
                  <p>Bus number {item.busNumber}</p>
                  <p>Route Number {item.routeNumber}</p>
                </div>
              </Grid>

              <Grid item sm={3} xs={12}>
                Item12 - Travel Details
              </Grid>

              <Grid item sm={3} xs={12}>
                <Hidden only="lg">
                  <p>Features</p>
                </Hidden>
                {item.facilities.map((facility) => (
                  <Tooltip placement="top" title={facility.name}>
                    <i key={facility.id} className={facility.icon} />
                  </Tooltip>
                ))}
              </Grid>

              <Grid item sm={3} xs={12}>
                <Hidden only="lg">
                  <p>Payment</p>
                </Hidden>

                <div className="payment-info">
                  <h2>{item.price} LKR</h2>
                  {item.isDiscount && <p>Discount: {item.discount} LKR</p>}
                  <p>
                    Available seats: {`${item.availableSeat}/${item.totalSeat}`}
                  </p>
                  <ActionButton text="View Seats" />
                </div>
              </Grid>
            </Grid>
            <Divider />
          </>
        ))}
      </div>

      <Footer />
    </div>
  );
}
