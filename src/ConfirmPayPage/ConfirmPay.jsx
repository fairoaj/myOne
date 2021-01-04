import React from "react";
import "../ConfirmPayPage/ConfirmPay.css";
import Header from "../HeaderPage/Header";
import Footer from "../FooterPage/Footer";
import {
  Input,
  Button,
  Select,
  Card,
  DatePicker,
  Space,
  Row,
  Col,
  Alert,
} from "antd";
import { Divider } from "@material-ui/core";
import { lightGreen } from "@material-ui/core/colors";

import firebase from "../ConfigeFile/Configue";

export default function ConfirmPay() {
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  const id = "ae557e6-da53-2d82-b383-f31583ac2530";

  const getData = () => {
    firebase
      .database()
      .ref("BookingDetails/" + id)
      .on("value", (dataSnapshot) => {
        console.log(dataSnapshot.toJSON());
        setData(dataSnapshot.toJSON());
        setLoading(false);
      });
  };

  React.useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <strong>Loading...</strong>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="Confirm-pay">
        <Row>
          <Col span={16} offset={4}>
            <Row gutter={(2, 2)}>
              <Col span={14}>
                <div>
                  <div style={{ display: "flex", marginLeft: 20 }}>
                    <h4>Confirm And Pay</h4>
                  </div>
                  <p>
                    <img
                      src="https://www.payhere.lk/downloads/images/pay_with_payhere.png"
                      alt="Pay Here"
                      style={{ width: 150 }}
                    />
                  </p>
                  <div
                    style={{
                      display: "flex",
                      width: 400,
                      textAlign: "justify",
                      marginLeft: 20,
                      borderStyle: "outset",
                    }}
                  >
                    {" "}
                    <p>
                      The payment details need to be completed within 8 minutes,
                      else the seats will not be booked. For any help, call us
                      on 07.......
                    </p>
                  </div>
                  <div
                    style={{ display: "flex", marginLeft: 20, marginTop: 10 }}
                  >
                    {" "}
                    <h4>Cancellation Policy</h4>
                  </div>
                  <p style={{ width: 450 }}>
                    Service fees are refunded when cancellation happens due to
                    bus breakdowns.
                  </p>
                  <p style={{ width: 450 }}>
                    I agree to the{" "}
                    <a href="/TermsAndCondition"> Terms and Conditions</a>. I
                    also agree to pay the total amount shown, which includes
                    Service Fees.
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: 10,
                      justifyContent: "center",
                    }}
                  >
                    {" "}
                    <button className="button">Back</button>
                    <button
                      className="button"
                      style={{ backgroundColor: "green" }}
                    >
                      Confirm and Pay
                    </button>
                  </div>
                </div>
              </Col>
              <Col span={10}>
                <Card
                  size="large"
                  title={
                    <div
                      style={{
                        display: "flex",
                        marginLeft: 10,
                        flexDirection: "column",
                      }}
                    >
                      <p>
                        {data.departure} - {data.arrival} on 2020-10-07
                      </p>
                      <p>AL RASHITH TRAVELS</p>
                    </div>
                  }
                  style={{ width: 400 }}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p>Boarding</p>
                    <p>{data.boardingPoint}</p>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p>Destination</p>
                    <p>{data.distination}</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p className="mr-auto">Seats</p>
                    {Object.values(data.seats).map((item, index) => (
                      <p key={index} className="mr-1">
                        {item.seat + "-" + item.gender}
                      </p>
                    ))}
                    {/* <p>{data.seats[0]}</p>
                     */}
                    {/* <p className="d-flex">
                      {data.seats.map((seat, index) => (
                        <span key={index}>{seat}</span>
                      ))}
                    </p> */}
                  </div>

                  <Divider />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: 10,
                    }}
                  >
                    <p>Ticket fee</p>
                    <p>LKR{data.total}.00</p>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p>Service fee</p>
                    <p>LKR 100.00</p>
                  </div>

                  <Divider />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: 10,
                    }}
                  >
                    <p>Total</p>
                    <p>
                      {" "}
                      <b>LKR {data.total + 100}.00 </b>
                    </p>
                  </div>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}
