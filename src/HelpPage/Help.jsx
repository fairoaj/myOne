import React from "react";
import "../HelpPage/Help.css";
import { Row, Col, Card, Collapse } from "antd";
import {
  CaretRightOutlined,
  FacebookOutlined,
  TwitterOutlined,
  GooglePlusOutlined,
} from "@ant-design/icons";
import Column from "antd/lib/table/Column";

export default function Help() {
  const { Panel } = Collapse;

  const text1 = (
    <div style={{ backgroundColor: "white" }}>
      <h2>How to book your bus tickets with BusSeat.lk?</h2>
      <ul>
        <li>Search buses as per your route and journey date</li>
        <li>Select preferred bus</li>
        <li>Choose preferred seats and give passenger details</li>
        <li>Pay</li>
        <li>Get tickets via SMS/Email</li>
      </ul>
    </div>
  );

  const text2 = (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "inline" }}>
        <b>Online Payments:</b> Any Credit cards (VISA, MASTER, AMEX), Debit
        cards (should be activated by your bank to do online payments), eZ Cash
        (Dialog, Etisalat, and Hutch), FriMi, mCash.
      </div>
      <div style={{ display: "inline", marginTop: 10 }}>
        <b>Offline Payments:</b> Deposit total amount to our bank accounts
        (Nation Trust Bank or Hatton National Bank) by calling our hotline to
        book the seats. But this is hassle for you to go to bank unless you have
        online banking to do CEFT trasnfers. We do not accept SLIPS transfer
        which will not be immediately credit money to our bank accounts{" "}
        <p>
          {" "}
          Partial deposits are not accepted and it will lead to cancellation if
          the full amount is not deposited{" "}
        </p>{" "}
        <p>
          {" "}
          We encourage online payments for hassle free and fast booking
          experiece
        </p>
      </div>
    </div>
  );

  const text3 = (
    <div
      style={{
        backgroundColor: "white",
      }}
    >
      <p>
        {" "}
        Call us <b> 076 676 4848</b> from 8 am to 5 pm daily to cancel your
        tickets. If you could not reach the hotline, Email us to{" "}
        <b> info@busseat.lk </b>with the details. Please read the terms and
        condtions to know about cancellation of booked tickets.
      </p>
    </div>
  );

  const text4 = (
    <div
      style={{
        backgroundColor: "white",
      }}
    >
      <div>
        <h2>How can I get refund in case I cancel my bus ticket?</h2>
        <p>
          Refund amount is calculated as per cancellation policy. The amount
          will be credited to any bank accounts in Sri Lanka or to a PayPal
          account. Unfortunately we are unable to refund to the original payment
          account
        </p>
      </div>
      <div style={{ display: "inline", marginTop: 10 }}>
        <h2>I have given wrong account for refund. What should I do?</h2>
        <p>
          You have to inform us and if the refund is not initiated at that time,
          we can process the refund to correct account. If the refund is already
          initiated and it is successful, we cannot do anything from our end.
          But if the refund is returned to us, we can process refund again with
          applicable charges occured
        </p>
      </div>
    </div>
  );
  return (
    <div>
      <div className="header-section">
        <h1
          style={{
            display: "flex",
            color: "white",
            marginLeft: 200,
          }}
        >
          BusBook.com
        </h1>
      </div>
      <div className="help-contant">
        <Row>
          <Col span={12} offset={6}>
            <Card
              className="help-card"
              title="FAQ - Frequently Asked Questions"
              bordered={false}
            >
              <Collapse
                bordered={false}
                defaultActiveKey={["1"]}
                className="site-collapse-custom-collapse"
                expandIcon={({ isActive }) => (
                  <CaretRightOutlined rotate={isActive ? 90 : 0} />
                )}
              >
                <Panel
                  header="BUS SEAT BOOKING"
                  key="1"
                  className="site-collapse-custom-panel"
                >
                  <p>{text1}</p>
                </Panel>
                <Panel
                  header="PAYMENT METHODS"
                  key="2"
                  className="site-collapse-custom-panel"
                >
                  <p>{text2}</p>
                </Panel>
                <Panel
                  header="CANCELLATION"
                  key="3"
                  className="site-collapse-custom-panel"
                >
                  <p>{text3}</p>
                </Panel>
                <Panel
                  header="REFUNDS"
                  key="4"
                  className="site-collapse-custom-panel"
                >
                  <p>{text4}</p>
                </Panel>
              </Collapse>
            </Card>
          </Col>
        </Row>
      </div>

      <div className="Last-footer">
        <div id="footer" style={{ marginTop: 50, marginBottom: 60 }}>
          <footer id="main-footer">
            <div className="">
              <div
                className="row row-wrap"
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginRight: 100,
                  marginLeft: 100,
                }}
              >
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                  <a className="logo" href="/">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSghkcVNB_8fLe7vVLEXR15LM5ZNl8LSSzLTw&usqp=CAU"
                      alt="BusSeat.lk color logo"
                      title="Logo Color"
                      height={120}
                      width={166}
                    />
                  </a>

                  <p className="mb20">Bus ticket booking made easy!</p>

                  <h1
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <a href="">
                      {" "}
                      <FacebookOutlined />{" "}
                    </a>
                    <a href="">
                      <TwitterOutlined />
                    </a>
                    <a href="">
                      <GooglePlusOutlined />
                    </a>
                  </h1>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                  <p>
                    <a href="/help">FAQ</a>
                  </p>
                  <p>
                    <a href="/contact-us">Contact Us</a>
                  </p>
                  <p>
                    <a href="/about-us">About Us</a>
                  </p>
                  <p>
                    <a href="/privacy">Privacy</a>
                  </p>
                  <p>
                    <a href="/terms-and-conditions">Terms and Conditions</a>
                  </p>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                  <p>
                    <a href="/offers">Offers</a>
                  </p>
                  <p>
                    <a href="/agents">Agents</a>
                  </p>
                  <p>
                    <a href="/bus-operators">Bus Operators</a>
                  </p>
                  <p>
                    <a href="/routes">Routes</a>
                  </p>
                  <p>
                    <a href="/service-updates">Service Updates</a>
                  </p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                  <h4>Have Questions?</h4>
                  <h4 className="text-color">(+94) 76 676 4848</h4>
                  <h4 className="text-color">info@busseat.lk</h4>
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  <i class="fa fa-quote-right" style={{ fontSize: 30 }}></i>
                  <a href="">
                    <h2 style={{ color: "lightblue" }}>Busbook.com </h2>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
