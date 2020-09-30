import React, { useState } from "react";
import "../BusOperater/BusOperater.css";
import { Col, Row } from "antd";
import OnwerData from "../Data/OnwersData.json";
import Header from "../HeaderPage/Header";
import Footer from "../FooterPage/Footer";

export default function BusOperater() {
  let onwerdata = [];
  {
    OnwerData.map((item) => {
      onwerdata.push(
        <a href={item.onwerone}>
          {" "}
          <li>{item.onwerone}</li>
        </a>
      );
    });
  }

  return (
    <div>
      <Header />

      <div className="busoperater">
        <Row>
          <Col span={8} offset={2}>
            <h5>Available bus Service Provider</h5>
            <ul>
              {onwerdata}
              {/* <a href="/OnwerOne">
                <li>Bus Routes1</li>
              </a>
              <a href="">
                <li>Bus Routes2</li>
              </a>
              <a href="">
                <li>Bus Routes3</li>
              </a> */}
            </ul>
          </Col>
        </Row>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
