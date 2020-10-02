import React, { useState } from "react";
import { Grid, TextField, Snackbar } from "@material-ui/core";
import { Tooltip } from "antd";
import { Autocomplete, Alert } from "@material-ui/lab/";

import ActionButton from "../../Components/Button/Button";
import Header from "../../Components/Header/Header";
import "./style.css";

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

export default function HomePage() {
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

  const [openSnackbar, setOpenSnackbar] = useState(false);

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
    } else if (departure.value === arrival.value) {
      setOpenSnackbar(true);
      return;
    }

    window.location = `/checkout/${departure.value}/${arrival.value}/${journeyTime}`;
  };

  return (
    <div className="custom-container">
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="warning">
          Departure and Arrival should be different!
        </Alert>
      </Snackbar>
      <Header />
      {/* <div className="container__logo">
        <a href="/" className="container__link">
          <img
            className="container__image"
            src={require("../../assets/app-logo.png")}
            alt="Logo"
          />

          <p className="container__link-text">BusBooking.lk</p>
        </a>
      </div> */}

      {/* <div className="travels">
        <h1>Travel to</h1>
      </div> */}

      <div className="booking-form">
        <h2 className="booking-form__heading">
          The simplest way to book your bus tickets in Sri Lanka
        </h2>
        <div className="booking-form__container">
          <Grid container spacing={1}>
            <Grid item sm={3} xs={12}>
              <p style={{ color: "#777", fontWeight: "600" }}>FROM</p>
              <Tooltip
                placement="bottom"
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
                placement="bottom"
                onVisibleChange={() => setArrivalEmpty({ showTooltips: false })}
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
              <p style={{ color: "#777", fontWeight: "600" }}>JOURNEY DATE</p>
              <Tooltip
                placement="bottom"
                onVisibleChange={() => setJourneyEmpty({ showTooltips: false })}
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
              <ActionButton text="Find Buses" onClick={handleSubmit} />
            </Grid>
          </Grid>
        </div>
        <a className="booking-form__link" href="#">
          Need Help?
        </a>
      </div>
    </div>
  );
}
