import React, { useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Divider, Grid, TextField } from "@material-ui/core";
import "../../BusTravellersComponent/OwneroneComponent/OnwerOne.css";
import { Row, Col, Tooltip } from "antd";
import Header from "../../HeaderPage/Header";
import Footer from "../../FooterPage/Footer";
import Form from "../../FormPage/Form";

const options = [
  { value: "Jaffna", label: "Jaffna" },
  { value: "Puttalam", label: "Puttalam" },
  { value: "Kurunegala", label: "Kurunegala" },
  { value: "Colombo", label: "Colombo" },
  { value: "Polonnaruwa", label: "Polonnaruwa" },
  { value: "Galle", label: "Galle" },
  { value: "Matara", label: "Matara" },
  { value: "Kandy", label: "Kandy" },
  { value: "Badulla", label: "Badulla" },
  { value: "Trincomalee", label: "Trincomalee" },
  { value: "Nuwara Eliya", label: "Nuwara Eliya" },
  { value: "Ampara", label: "Ampara" },
].sort((a, b) => {
  var x = a.value.toLowerCase();
  var y = b.value.toLowerCase();
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
});

export default function OnwerOne() {
  const [departure, setDeparture] = useState();

  const [departureEmpty, setDepartureEmpty] = useState({
    showTooltips: false,
    focus: false,
    open: false,
  });
  const [arrival, setArrival] = useState();
  const [arrivalEmpty, setArrivalEmpty] = useState({
    showTooltips: false,
    focus: false,
    open: false,
  });
  const [journeyTime, setJourneyTime] = useState("");
  const [journeyEmpty, setJourneyEmpty] = useState({
    showTooltips: false,
    focus: false,
    open: false,
  });

  const handleSubmit = () => {
    if (!departure) {
      setDepartureEmpty({ showTooltips: true, focus: true, open: true });
      return;
    } else if (!arrival) {
      setArrivalEmpty({ showTooltips: true, focus: true, open: true });
      return;
    } else if (!journeyTime) {
      setJourneyEmpty({ showTooltips: true, focus: true, open: true });
      return;
    }

    window.location = "/checkout";
  };
  return (
    <div>
      <Header />

      <div className="Onwerone">
        <h5>Onwerons bus booking</h5>
        <Divider />
        <Row>
          <Col span={18} offset={3} style={{ borderStyle: "outset" }}>
            <h5>Book your bus Tickets</h5>
            <div>
              <div className="booking-form__container">
                <Grid container spacing={1}>
                  <Grid item sm={3} xs={12}>
                    <p style={{ color: "#777", fontWeight: "600" }}>FROM</p>
                    <Tooltip
                      placement="left"
                      onVisibleChange={() =>
                        setDepartureEmpty({ showTooltips: false })
                      }
                      visible={departureEmpty.showTooltips}
                      title="Please fill out this field"
                    >
                      <Autocomplete
                        //open={departureEmpty.open}
                        //value={departure}
                        onChange={(event, newValue) => setDeparture(newValue)}
                        options={options}
                        getOptionLabel={(option) => option.label}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            focused={departureEmpty.focus}
                            placeholder="Enter your departure station"
                            variant="outlined"
                          />
                        )}
                      />
                    </Tooltip>
                  </Grid>
                  <Grid item sm={3} xs={12}>
                    <p style={{ color: "#777", fontWeight: "600" }}>TO</p>
                    <Tooltip
                      placement="left"
                      onVisibleChange={() =>
                        setArrivalEmpty({ showTooltips: false })
                      }
                      visible={arrivalEmpty.showTooltips}
                      title="Please fill out this field"
                    >
                      <Autocomplete
                        //open={arrivalEmpty.open}
                        //value={arrival}
                        onChange={(event, newValue) => setArrival(newValue)}
                        options={options}
                        getOptionLabel={(option) => option.label}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            value={arrival}
                            onChange={(e) => setArrival(e.target.value)}
                            focused={arrivalEmpty.focus}
                            placeholder="Enter your arrival station"
                            variant="outlined"
                          />
                        )}
                      />
                    </Tooltip>
                  </Grid>
                  <Grid item sm={3} xs={12}>
                    <p style={{ color: "#777", fontWeight: "600" }}>
                      JOURNEY DATE
                    </p>
                    <Tooltip
                      placement="left"
                      onVisibleChange={() =>
                        setJourneyEmpty({ showTooltips: false })
                      }
                      visible={journeyEmpty.showTooltips}
                      title="Please select the journey date"
                    >
                      <TextField
                        value={journeyTime}
                        onChange={(e) => setJourneyTime(e.target.value)}
                        focused={journeyEmpty.focus}
                        fullWidth
                        variant="outlined"
                        type="date"
                        placeholder="Select journey date"
                      />
                    </Tooltip>
                  </Grid>
                  <Grid item sm={3} xs={12}>
                    <p style={{ color: "#777", fontWeight: "600" }}>Action</p>
                    <button
                      onClick={handleSubmit}
                      type="submit"
                      className="booking-form__btn"
                    >
                      Find Buses
                    </button>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Col>
        </Row>
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
