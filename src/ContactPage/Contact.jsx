import React from "react";
import "../ContactPage/Contact.css";
import {
  Form,
  Input,
  Button,
  Select,
  Card,
  DatePicker,
  Space,
  Row,
  Col,
  Divider,
} from "antd";
import Header from "../HeaderPage/Header";
import Footer from "../FooterPage/Footer";

export default function Contact() {
  return (
    <div>
      <Header />

      <div>
        <Row>
          <Col span={18} offset={4}>
            <div className="site-card-border-less-wrapper">
              <Card className="card-box" title="" bordered={false}>
                <Row>
                  <h3>Cuntact Us</h3>
                </Row>
                <Divider />
                <Row gutter={(4, 4)}>
                  <Col
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "left",
                    }}
                    span={12}
                  >
                    <h5>
                      Reach us for any of the following matters, we reply each
                      and every calls, messages, emails, everything
                    </h5>
                    <br />
                    <ul>
                      <li>
                        <p style={{ fontSize: 20 }}>
                          {" "}
                          <b> Passengers</b>
                        </p>

                        <p>
                          Looking for bus ticket booking and reservation in Sri
                          Lanka. You are at the right place
                        </p>
                      </li>

                      <li>
                        <p style={{ fontSize: 20 }}>
                          {" "}
                          <b> Bus operators</b>
                        </p>

                        <p>
                          Increase your bus ticket booking sales enabling more
                          visibility? Contact us to add your bus into our online
                          platform
                        </p>
                      </li>

                      <li>
                        <p style={{ fontSize: 20 }}>
                          {" "}
                          <b> Travel agents</b>
                        </p>

                        <p>
                          Willing to earn money being bus booking agent? Contact
                          us to register yourself
                        </p>
                      </li>

                      <li>
                        <p style={{ fontSize: 20 }}>
                          {" "}
                          <b> Bus Booking Startups in other countries</b>
                        </p>

                        <p>
                          Interested in our bus booking management software? Buy
                          now from us with full fledged features and kickstart
                          business immediately without wasting time in
                          developing software
                        </p>
                      </li>
                    </ul>
                  </Col>

                  <Col style={{ display: "flex" }} span={12}>
                    <Divider
                      style={{ color: "black", height: 500 }}
                      type="vertical"
                    />
                    <ul>
                      <li>
                        <p style={{ fontSize: 20 }}>Phone Number</p>

                        <p>077............</p>
                      </li>
                      <br />
                      <li>
                        <p style={{ fontSize: 20 }}>Email</p>

                        <p>........@.com</p>
                      </li>
                      <br />
                      <li>
                        <p style={{ fontSize: 20 }}>FaceBook Messenger</p>

                        <p>
                          <a href="">Chat with us</a>
                        </p>
                      </li>
                      <br />
                      <li>
                        <p style={{ fontSize: 20 }}>WatsApp</p>

                        <p>WatsApp us to 077.....</p>
                      </li>
                      <br />
                      <li>
                        <p style={{ fontSize: 20 }}>Address</p>

                        <p>................</p>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Card>
            </div>
          </Col>
        </Row>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
