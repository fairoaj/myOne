import React, { useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Divider, Grid, TextField } from "@material-ui/core";
import "../../BusTravellersComponent/OwneroneComponent/OnwerOne.css";
import { Row, Col, Tooltip } from "antd";
import Header from "../../HeaderPage/Header";
import Footer from "../../FooterPage/Footer";
import Form from "../../FormPage/Form";

export default function OnwerOne() {
  return (
    <div>
      <Header />

      <div className="Onwerone">
        <h5>Onwerons bus booking</h5>
        <Divider />
        <Form />
      </div>

      <div className="Onwer-one-data">
        <h5>Onwerone data</h5>
      </div>

      <div className="Onwer-one-footer">
        <Footer />
      </div>
    </div>
  );
}
