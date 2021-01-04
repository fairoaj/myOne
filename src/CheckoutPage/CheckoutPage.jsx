import React from "react";
import { useParams } from "react-router";
import { Grid, Divider, Hidden } from "@material-ui/core";
import { Tooltip } from "antd";

import ActionButton from "../Component/ButtonComponent/Button";
import Header from "../HeaderPage/Header";
import Footer from "../FooterPage/Footer";
import TitleBar from "../Component/TitleBarComponent/TitleBar";

import BusInfo from "../Data/BusInfo";

import "../CheckoutPage/CheckoutPage.css";

export default function CheckoutPage() {
  const { departure, arrival, date } = useParams();
  return (
    <div className="main-container">
      <Header />

      <TitleBar departure={departure} arrival={arrival} date={date} />

      <div className="buses-info">
        {BusInfo.map((item) => (
          <>
            <Grid
              style={{ padding: 10 }}
              key={item.id}
              container
              spacing={10}
              alignItems="center"
            >
              <Grid item sm={3} xs={12}>
                <div className="bus-info">
                  <h2 id="travelName">{item.travelName}</h2>
                  <h2>{item.busType}</h2>
                  <p>Bus number {item.busNumber}</p>
                  <p>Route Number {item.routeNumber}</p>
                </div>
              </Grid>

              <Grid item sm={3} xs={12}>
                <div>
                  <div className="travel-route">
                    <p>{departure}</p>
                    <p>{arrival}</p>
                  </div>

                  <div className="travel-route">
                    <div className="circle-wrap">
                      <div className="circle-dot" />
                    </div>
                    <div className="route-line" />
                    <div className="circle-wrap">
                      <div className="circle-dot" />
                    </div>
                  </div>

                  <div className="travel-timedate">
                    <h2>{item.departureTime}</h2>
                    <h2>{item.arrivalTime}</h2>
                  </div>
                </div>
              </Grid>

              <Grid item sm={3} xs={12}>
                <p>Features</p>
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
                  <ActionButton
                    text="View Seats"
                    onClick={() =>
                      (window.location = `/seats/${item.id}/${departure}/${arrival}/${date}`)
                    }
                  />
                </div>
              </Grid>
            </Grid>
            {!(item.id === BusInfo.length) && <Divider />}
          </>
        ))}
      </div>

      <Footer />
    </div>
  );
}
