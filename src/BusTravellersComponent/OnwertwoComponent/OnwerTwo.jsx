import React, { useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Divider, Grid, TextField } from "@material-ui/core";
import "../../BusTravellersComponent/OnwertwoComponent/OnwerTwo.css";
import { Row, Col, Tooltip } from "antd";
import Footer from "../../FooterPage/Footer";
import Header from "../../HeaderPage/Header";
import Form from "../../FormPage/Form";

export default function OnwerTwo() {
  return (
    <div>
      <Header />

      <div className="Onwerone">
        <h5>OnwerTwo bus booking</h5>
        <Divider />
        <Form />
      </div>

      <div className="Onwer-two-data">
        <h5>OnwerTwo data</h5>
      </div>

      <div className="Onwer-two-footer">
        <Footer />
      </div>
    </div>
  );
}
