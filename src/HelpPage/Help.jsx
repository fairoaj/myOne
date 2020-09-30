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
import Header from "../HeaderPage/Header";
import Footer from "../FooterPage/Footer";

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
      <Header />
      {/* <div className="header-section">
        <h1
          style={{
            display: "flex",
            color: "white",
            marginLeft: 200,
          }}
        >
          BusBook.com
        </h1>
      </div> */}
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

      <div>
        <Footer />
      </div>
    </div>
  );
}
