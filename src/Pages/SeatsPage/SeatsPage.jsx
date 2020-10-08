import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import {
  Grid,
  Dialog,
  DialogTitle,
  Button,
  Snackbar,
  IconButton,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { Tooltip } from "antd";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import ClearIcon from "@material-ui/icons/Clear";
import uuid from "react-uuid";

import firebase from "../../config/firebase";
import Header from "../../Components/Header/Header";
import TitleBar from "../../Components/TitleBar/TitleBar";
import Seats from "../../Components/Seats/Seats";
import Footer from "../../Components/Footer/Footer";
import ActionButton from "../../Components/Button/Button";
import BusInfo from "../../Data/BusInfo";
import "./styles.css";

const selectedSeat = [];

export default function SeatsPage() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [total, setTotal] = useState(0);
  const [selectedSeatNumber, setSelectedSeatNumber] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [passengerName, setPassengerName] = useState("");
  const [emptyName, setEmptyName] = useState({ isShow: false, message: "" });
  const [mobileNumber, setMobileNumber] = useState("");
  const [emptyMobileNumber, setEmptyMobileNumber] = useState({
    isShow: false,
    message: "",
  });
  const [email, setEmail] = useState("");
  const [noValidEmail, setNoValidEmail] = useState({
    isShow: false,
    message: "",
  });
  const [boardingPoint, setBoardingPoint] = useState("");
  const [emptyBoardingPoint, setEmptyBoardingPoint] = useState({
    isShow: false,
    message: "",
  });
  const [distination, setDistination] = useState("");
  const [emptyDistination, setEmptyDistination] = useState({
    isShow: false,
    message: "",
  });
  const [seatEmpty, setSeatEmpty] = useState({ isShow: false, message: "" });
  const [disableBtn, setDisableBtn] = useState(false);

  const { id, arrival, departure, date } = useParams();

  useEffect(() => {
    const getData = () => {
      BusInfo.map((item) => {
        if (item.id === parseInt(id, 10)) {
          setData(item);
          setLoading(false);
        }
      });
    };

    getData();
  }, []);

  useEffect(() => {
    if (selectedSeat.length > 0) {
      calculateTotal();
    }
  }, [selectedSeat.length]);

  const checkIsAvailable = (seatNumber) => {
    var isAvailable = false;
    data.providedSeatNumbers.map((number) => {
      if (number === seatNumber) {
        isAvailable = true;
      }
    });

    return isAvailable;
  };

  const checkIsForLadies = (seatNumber) => {
    var isForlady = false;
    data.ladiesSeatNumber.map((number) => {
      if (number === seatNumber) {
        isForlady = true;
      }
    });

    return isForlady;
  };

  const onClickHandler = (seatNumber) => {
    setSelectedSeatNumber(seatNumber);
    setOpen(true);
  };

  const onGenderClick = (gender) => {
    if (gender === "MALE") {
      if (checkIsForLadies(selectedSeatNumber)) {
        setAlertMessage("Allocated for ladies only. Please select other seat!");
        setShowAlert(true);
        setOpen(false);
        return;
      } else {
        //data.bookedSeatNumber.push(selectedSeatNumber);
        selectedSeat.push({ seat: selectedSeatNumber, gender: "M" });
        setOpen(false);
      }
    } else {
      if (!checkIsForLadies(selectedSeatNumber)) {
        setAlertMessage("Please select allocated seat!");
        setShowAlert(true);
        setOpen(false);
        return;
      } else {
        //data.bookedSeatNumber.push(selectedSeatNumber);
        selectedSeat.push({ seat: selectedSeatNumber, gender: "G" });
        setOpen(false);
      }
    }
  };

  const checkIsBooked = (seatNumber) => {
    var isBooked = false;
    data.bookedSeatNumber.map((number) => {
      if (number === seatNumber) {
        isBooked = true;
      }
    });

    return isBooked;
  };

  const checkIsSelected = (number) => {
    var isSelected = false;
    selectedSeat.map((item) => {
      if (item.seat === number) {
        isSelected = true;
      }
    });

    return isSelected;
  };

  const calculateTotal = () => {
    const costPerSeat = data.price - (data.isDiscount ? data.discount : 0);
    setTotal(costPerSeat * selectedSeat.length);
  };

  const onButtonClick = () => {
    const isNum = /^\d+$/.test(mobileNumber);
    const validEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(
      email
    );
    if (selectedSeat.length === 0) {
      setSeatEmpty({ isShow: true, message: "Please select your seat(s)" });
      return;
    } else if (!passengerName) {
      setEmptyName({ isShow: true, message: "Please fill out this field" });
      return;
    } else if (!mobileNumber) {
      setEmptyMobileNumber({
        isShow: true,
        message: "Please fill out this field",
      });
      return;
    } else if (mobileNumber.length > 10 || mobileNumber.length <= 1) {
      setEmptyMobileNumber({
        isShow: true,
        message: "Please provide valid mobile number",
      });
      return;
    } else if (!isNum) {
      setEmptyMobileNumber({
        isShow: true,
        message: "Please provide valid mobile number",
      });
      return;
    }
    if (email) {
      if (!validEmail) {
        setNoValidEmail({
          isShow: true,
          message: "Please provide valid email address",
        });
        return;
      }
    } else if (!boardingPoint || boardingPoint === "0") {
      setEmptyBoardingPoint({
        isShow: true,
        message: "Please select your boarding place",
      });
      return;
    } else if (!distination || distination === "0") {
      setEmptyDistination({
        isShow: true,
        message: "Please select your distination place",
      });
      return;
    }

    saveBookingData();
    setDisableBtn(true);
  };

  const saveBookingData = () => {
    setLoading(true);
    const id = uuid();
    const data = {
      id: id,
      seats: selectedSeat,
      total: total,
      passengerName: passengerName,
      mobileNumber: "+94" + mobileNumber.slice(1, mobileNumber.length),
      email: email,
      boardingPoint: boardingPoint,
      distination: distination,
      departure: departure,
      arrival: arrival,
      isCompletePayment: false,
    };

    firebase
      .database()
      .ref("BookingDetails/" + id)
      .set(data, (err) => {
        if (err) {
          console.log(err);
        } else {
          window.location = `/booking/${date}/${id}`;
          setLoading(false);
        }
      });
  };

  const clearSeat = (seat) => {
    selectedSeat.map((item, index) => {
      if (item.seat === seat) selectedSeat.splice(index, 1);
    });
    console.log(selectedSeat);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <strong>Loading...</strong>
      </div>
    );
  }

  return (
    <div className="seats-container">
      {/* Gender Selection Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Select your gender</DialogTitle>
        <Button
          onClick={() => onGenderClick("MALE")}
          style={{ backgroundColor: "#5bc0de", color: "#fff", margin: 5 }}
          variant="contained"
        >
          Male
        </Button>
        <Button
          onClick={() => onGenderClick("FEMALE")}
          style={{ backgroundColor: "#5bc0de", color: "#fff", margin: 5 }}
          variant="contained"
        >
          Female
        </Button>
      </Dialog>

      {/* Alert Message */}
      <Snackbar
        open={showAlert}
        autoHideDuration={6000}
        onClose={() => setShowAlert(false)}
      >
        <Alert onClose={() => setShowAlert(false)} severity="warning">
          {alertMessage}
        </Alert>
      </Snackbar>

      <Header />

      <TitleBar
        departure={departure}
        arrival={arrival}
        date={date}
        travels={id}
      />

      <div className="seats">
        <h1>Select seats & fill the form</h1>
        <Grid container spacing={10} direction="row">
          <Grid item lg={4} xs={12}>
            <div className="seats__front">
              <p>Front</p>
            </div>

            <Grid item>
              <div className="seat__rows">
                <div className="row">
                  <Seats
                    seatNumber={1}
                    isAvailable={checkIsAvailable(1)}
                    onClickHandler={() => onClickHandler(1)}
                    isForLadies={checkIsForLadies(1)}
                    isBooked={checkIsBooked(1)}
                  />
                  <Seats
                    seatNumber={2}
                    isAvailable={checkIsAvailable(2)}
                    onClickHandler={() => onClickHandler(2)}
                    isForLadies={checkIsForLadies(2)}
                    isBooked={checkIsBooked(2)}
                  />
                </div>

                <div className="row">
                  <Seats
                    seatNumber={3}
                    isAvailable={checkIsAvailable(3)}
                    onClickHandler={() => onClickHandler(3)}
                    isForLadies={checkIsForLadies(3)}
                    isBooked={checkIsBooked(3)}
                  />
                  <Seats
                    seatNumber={4}
                    isAvailable={checkIsAvailable(4)}
                    onClickHandler={() => onClickHandler(4)}
                    isForLadies={checkIsForLadies(4)}
                    isBooked={checkIsBooked(4)}
                  />
                </div>
              </div>
            </Grid>

            <Grid item>
              <div className="seat__rows">
                <div className="row">
                  <Seats
                    seatNumber={5}
                    isAvailable={checkIsAvailable(5)}
                    onClickHandler={() => onClickHandler(5)}
                    isForLadies={checkIsForLadies(5)}
                    isBooked={checkIsBooked(5)}
                  />
                  <Seats
                    seatNumber={6}
                    isAvailable={checkIsAvailable(6)}
                    onClickHandler={() => onClickHandler(6)}
                    isForLadies={checkIsForLadies(6)}
                    isBooked={checkIsBooked(6)}
                  />
                </div>

                <div className="row">
                  <Seats
                    seatNumber={7}
                    isAvailable={checkIsAvailable(7)}
                    onClickHandler={() => onClickHandler(7)}
                    isForLadies={checkIsForLadies(7)}
                    isBooked={checkIsBooked(7)}
                  />
                  <Seats
                    seatNumber={8}
                    isAvailable={checkIsAvailable(8)}
                    onClickHandler={() => onClickHandler(8)}
                    isForLadies={checkIsForLadies(8)}
                    isBooked={checkIsBooked(8)}
                  />
                </div>
              </div>
            </Grid>

            <Grid item>
              <div className="seat__rows">
                <div className="row">
                  <Seats
                    seatNumber={9}
                    isAvailable={checkIsAvailable(9)}
                    onClickHandler={() => onClickHandler(9)}
                    isForLadies={checkIsForLadies(9)}
                    isBooked={checkIsBooked(9)}
                  />
                  <Seats
                    seatNumber={10}
                    isAvailable={checkIsAvailable(10)}
                    onClickHandler={() => onClickHandler(10)}
                    isForLadies={checkIsForLadies(10)}
                    isBooked={checkIsBooked(10)}
                  />
                </div>

                <div className="row">
                  <Seats
                    seatNumber={11}
                    isAvailable={checkIsAvailable(11)}
                    onClickHandler={() => onClickHandler(11)}
                    isForLadies={checkIsForLadies(11)}
                    isBooked={checkIsBooked(11)}
                  />
                  <Seats
                    seatNumber={12}
                    isAvailable={checkIsAvailable(12)}
                    onClickHandler={() => onClickHandler(12)}
                    isForLadies={checkIsForLadies(12)}
                    isBooked={checkIsBooked(12)}
                  />
                </div>
              </div>
            </Grid>
            <Grid item>
              <div className="seat__rows">
                <div className="row">
                  <Seats
                    isAvailable={checkIsAvailable(13)}
                    seatNumber={13}
                    onClickHandler={() => onClickHandler(13)}
                    isForLadies={checkIsForLadies(13)}
                    isBooked={checkIsBooked(13)}
                    isSelected={checkIsSelected(13)}
                  />
                  <Seats
                    seatNumber={14}
                    isAvailable={checkIsAvailable(14)}
                    onClickHandler={() => onClickHandler(14)}
                    isForLadies={checkIsForLadies(14)}
                    isBooked={checkIsBooked(14)}
                  />
                </div>

                <div className="row">
                  <Seats
                    seatNumber={15}
                    isAvailable={checkIsAvailable(15)}
                    onClickHandler={() => onClickHandler(15)}
                    isForLadies={checkIsForLadies(15)}
                    isBooked={checkIsBooked(15)}
                  />
                  <Seats
                    seatNumber={16}
                    isAvailable={checkIsAvailable(16)}
                    onClickHandler={() => onClickHandler(16)}
                    isForLadies={checkIsForLadies(16)}
                    isBooked={checkIsBooked(16)}
                  />
                </div>
              </div>
            </Grid>
            <Grid item>
              <div className="seat__rows">
                <div className="row">
                  <Seats
                    seatNumber={17}
                    isAvailable={checkIsAvailable(17)}
                    onClickHandler={() => onClickHandler(17)}
                    isForLadies={checkIsForLadies(17)}
                    isBooked={checkIsBooked(17)}
                  />
                  <Seats
                    seatNumber={18}
                    isAvailable={checkIsAvailable(18)}
                    onClickHandler={() => onClickHandler(18)}
                    isForLadies={checkIsForLadies(18)}
                    isBooked={checkIsBooked(18)}
                  />
                </div>

                <div className="row">
                  <Seats
                    seatNumber={19}
                    isAvailable={checkIsAvailable(19)}
                    onClickHandler={() => onClickHandler(19)}
                    isForLadies={checkIsForLadies(19)}
                    isBooked={checkIsBooked(19)}
                  />
                  <Seats
                    seatNumber={20}
                    isAvailable={checkIsAvailable(20)}
                    onClickHandler={() => onClickHandler(20)}
                    isForLadies={checkIsForLadies(20)}
                    isBooked={checkIsBooked(20)}
                  />
                </div>
              </div>{" "}
            </Grid>
            <Grid item>
              <div className="seat__rows">
                <div className="row">
                  <Seats
                    seatNumber={21}
                    isAvailable={checkIsAvailable(21)}
                    onClickHandler={() => onClickHandler(21)}
                    isForLadies={checkIsForLadies(21)}
                    isBooked={checkIsBooked(21)}
                  />
                  <Seats
                    seatNumber={22}
                    isAvailable={checkIsAvailable(22)}
                    onClickHandler={() => onClickHandler(22)}
                    isForLadies={checkIsForLadies(22)}
                    isBooked={checkIsBooked(22)}
                  />
                </div>

                <div className="row">
                  <Seats
                    seatNumber={23}
                    isAvailable={checkIsAvailable(23)}
                    onClickHandler={() => onClickHandler(23)}
                    isForLadies={checkIsForLadies(23)}
                    isBooked={checkIsBooked(23)}
                  />
                  <Seats
                    seatNumber={24}
                    isAvailable={checkIsAvailable(24)}
                    onClickHandler={() => onClickHandler(24)}
                    isForLadies={checkIsForLadies(24)}
                    isBooked={checkIsBooked(24)}
                  />
                </div>
              </div>
            </Grid>

            <Grid item>
              <div className="seat__rows">
                <div className="row">
                  <Seats
                    seatNumber={25}
                    isAvailable={checkIsAvailable(25)}
                    onClickHandler={() => onClickHandler(25)}
                    isForLadies={checkIsForLadies(25)}
                    isBooked={checkIsBooked(25)}
                  />
                  <Seats
                    seatNumber={26}
                    isAvailable={checkIsAvailable(26)}
                    onClickHandler={() => onClickHandler(26)}
                    isForLadies={checkIsForLadies(26)}
                    isBooked={checkIsBooked(26)}
                  />
                </div>

                <div className="row">
                  <Seats
                    seatNumber={27}
                    isAvailable={checkIsAvailable(27)}
                    onClickHandler={() => onClickHandler(27)}
                    isForLadies={checkIsForLadies(27)}
                    isBooked={checkIsBooked(27)}
                  />
                  <Seats
                    seatNumber={28}
                    isAvailable={checkIsAvailable(28)}
                    onClickHandler={() => onClickHandler(28)}
                    isForLadies={checkIsForLadies(28)}
                    isBooked={checkIsBooked(28)}
                  />
                </div>
              </div>{" "}
            </Grid>

            <Grid item>
              <div className="seat__rows">
                <div className="row">
                  <Seats
                    seatNumber={29}
                    isAvailable={checkIsAvailable(29)}
                    onClickHandler={() => onClickHandler(29)}
                    isForLadies={checkIsForLadies(29)}
                    isBooked={checkIsBooked(29)}
                  />
                  <Seats
                    seatNumber={30}
                    isAvailable={checkIsAvailable(30)}
                    onClickHandler={() => onClickHandler(30)}
                    isForLadies={checkIsForLadies(30)}
                    isBooked={checkIsBooked(30)}
                  />
                </div>

                <div className="row">
                  <Seats
                    seatNumber={31}
                    isAvailable={checkIsAvailable(31)}
                    onClickHandler={() => onClickHandler(31)}
                    isForLadies={checkIsForLadies(31)}
                    isBooked={checkIsBooked(31)}
                  />
                  <Seats
                    seatNumber={32}
                    isAvailable={checkIsAvailable(32)}
                    onClickHandler={() => onClickHandler(32)}
                    isForLadies={checkIsForLadies(32)}
                    isBooked={checkIsBooked(32)}
                  />
                </div>
              </div>{" "}
            </Grid>

            <Grid item>
              <div className="seat__rows">
                <div className="row">
                  <Seats
                    seatNumber={33}
                    isAvailable={checkIsAvailable(33)}
                    onClickHandler={() => onClickHandler(33)}
                    isForLadies={checkIsForLadies(33)}
                    isBooked={checkIsBooked(33)}
                  />
                  <Seats
                    seatNumber={34}
                    isAvailable={checkIsAvailable(34)}
                    onClickHandler={() => onClickHandler(34)}
                    isForLadies={checkIsForLadies(34)}
                    isBooked={checkIsBooked(34)}
                  />
                </div>

                <div className="row">
                  <Seats
                    seatNumber={35}
                    isAvailable={checkIsAvailable(35)}
                    onClickHandler={() => onClickHandler(35)}
                    isForLadies={checkIsForLadies(35)}
                    isBooked={checkIsBooked(35)}
                  />
                  <Seats
                    seatNumber={36}
                    isAvailable={checkIsAvailable(36)}
                    onClickHandler={() => onClickHandler(36)}
                    isForLadies={checkIsForLadies(36)}
                    isBooked={checkIsBooked(36)}
                  />
                </div>
              </div>{" "}
            </Grid>

            <Grid item>
              <div className="seat__rows">
                <div className="row">
                  <Seats
                    seatNumber={37}
                    isAvailable={checkIsAvailable(37)}
                    onClickHandler={() => onClickHandler(37)}
                    isForLadies={checkIsForLadies(37)}
                    isBooked={checkIsBooked(37)}
                  />
                  <Seats
                    seatNumber={38}
                    isAvailable={checkIsAvailable(38)}
                    onClickHandler={() => onClickHandler(38)}
                    isForLadies={checkIsForLadies(38)}
                    isBooked={checkIsBooked(38)}
                  />
                </div>

                <div className="row">
                  <Seats
                    seatNumber={39}
                    isAvailable={checkIsAvailable(39)}
                    onClickHandler={() => onClickHandler(39)}
                    isForLadies={checkIsForLadies(39)}
                    isBooked={checkIsBooked(39)}
                  />
                  <Seats
                    seatNumber={40}
                    isAvailable={checkIsAvailable(40)}
                    onClickHandler={() => onClickHandler(40)}
                    isForLadies={checkIsForLadies(40)}
                    isBooked={checkIsBooked(40)}
                  />
                </div>
              </div>{" "}
            </Grid>

            <Grid item>
              <div className="seat__rows">
                <div className="row">
                  <Seats
                    seatNumber={41}
                    isAvailable={checkIsAvailable(41)}
                    onClickHandler={() => onClickHandler(41)}
                    isForLadies={checkIsForLadies(41)}
                    isBooked={checkIsBooked(41)}
                  />
                  <Seats
                    seatNumber={42}
                    isAvailable={checkIsAvailable(42)}
                    onClickHandler={() => onClickHandler(42)}
                    isForLadies={checkIsForLadies(42)}
                    isBooked={checkIsBooked(42)}
                  />
                </div>

                <div className="row">
                  <Seats
                    seatNumber={43}
                    isAvailable={checkIsAvailable(43)}
                    onClickHandler={() => onClickHandler(43)}
                    isForLadies={checkIsForLadies(43)}
                    isBooked={checkIsBooked(43)}
                  />
                  <Seats
                    seatNumber={44}
                    isAvailable={checkIsAvailable(44)}
                    onClickHandler={() => onClickHandler(44)}
                    isForLadies={checkIsForLadies(44)}
                    isBooked={checkIsBooked(44)}
                  />
                </div>
              </div>{" "}
            </Grid>

            <Grid item>
              <div className="seat__rows">
                <div className="row">
                  <Seats
                    seatNumber={45}
                    isAvailable={checkIsAvailable(45)}
                    onClickHandler={() => onClickHandler(45)}
                    isForLadies={checkIsForLadies(45)}
                    isBooked={checkIsBooked(45)}
                  />
                  <Seats
                    seatNumber={46}
                    isAvailable={checkIsAvailable(46)}
                    onClickHandler={() => onClickHandler(46)}
                    isForLadies={checkIsForLadies(46)}
                    isBooked={checkIsBooked(46)}
                  />
                </div>

                <Seats
                  seatNumber={47}
                  isAvailable={checkIsAvailable(47)}
                  onClickHandler={() => onClickHandler(47)}
                  isForLadies={checkIsForLadies(47)}
                  isBooked={checkIsBooked(47)}
                />

                <div className="row">
                  <Seats
                    seatNumber={48}
                    isAvailable={checkIsAvailable(48)}
                    onClickHandler={() => onClickHandler(48)}
                    isForLadies={checkIsForLadies(48)}
                    isBooked={checkIsBooked(48)}
                  />
                  <Seats
                    seatNumber={49}
                    isAvailable={checkIsAvailable(49)}
                    onClickHandler={() => onClickHandler(49)}
                    isForLadies={checkIsForLadies(49)}
                    isBooked={checkIsBooked(49)}
                  />
                </div>
              </div>{" "}
            </Grid>
          </Grid>

          <Grid item lg={4} xs={12}>
            <div className="form__container">
              <h2 className="mt-2">
                {selectedSeat.length > 1 ? "Seats" : "Seat"} details
              </h2>

              <div className="seat-info ml-3">
                <div className="seat-number d-flex align-items-center">
                  <Tooltip
                    placement="bottom"
                    visible={seatEmpty.isShow}
                    onVisibleChange={() => setSeatEmpty({ isShow: false })}
                    title={seatEmpty.message}
                  >
                    <p className="mr-5 font-weight-bold">Seats</p>
                  </Tooltip>
                  <p className="text-danger">
                    {selectedSeat.length > 0
                      ? selectedSeat.map((item, key) => (
                          <>
                            <span>{`${item.seat}-${item.gender}`} &nbsp;</span>
                            <Tooltip placement="bottom" title="clear">
                              <IconButton onClick={() => clearSeat(item.seat)}>
                                <ClearIcon fontSize="small" />
                              </IconButton>
                            </Tooltip>
                          </>
                        ))
                      : "Please select your seats"}{" "}
                  </p>
                </div>
                <div className="total d-flex">
                  <p className="mr-5 font-weight-bold">Total</p>
                  <p className="text-danger">
                    {total > 0 ? total + " LKR" : "0 LKR"}
                  </p>
                </div>
              </div>

              <div className="form-group">
                <label id="name" htmlFor="name">
                  Passenger Name{" "}
                  <Tooltip
                    placement="top"
                    title="Just fill your name to identify you. No need provide all passenger name"
                  >
                    <HelpOutlineIcon fontSize="small" />
                  </Tooltip>
                </label>

                <Tooltip
                  placement="bottom"
                  visible={emptyName.isShow}
                  onVisibleChange={() => setEmptyName({ isShow: false })}
                  title={emptyName.message}
                >
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your name"
                    required
                    value={passengerName}
                    onChange={(e) => setPassengerName(e.target.value)}
                  />
                </Tooltip>
              </div>

              <div className="form-group">
                <label id="mobile" htmlFor="mobile">
                  Mobile Number{" "}
                  <Tooltip
                    placement="top"
                    title="We do not send SMS to foreign numbers.Valid mobile number is needed as sometimes bus operator may contact you to find your location or to inform about any journey updates"
                  >
                    <HelpOutlineIcon fontSize="small" />
                  </Tooltip>
                </label>

                <Tooltip
                  placement="bottom"
                  visible={emptyMobileNumber.isShow}
                  onVisibleChange={() =>
                    setEmptyMobileNumber({ isShow: false })
                  }
                  title={emptyMobileNumber.message}
                >
                  <input
                    id="mobile"
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="077 123 456 7"
                    required
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                  />
                </Tooltip>
              </div>

              <div className="form-group">
                <label id="email" htmlFor="email">
                  Email Address<span className="text-muted">(Optional)</span>{" "}
                  <Tooltip
                    placement="top"
                    title="Even though optional, we highly suggest you to fill this as we send more details via email about your journey which cannot be accommodated via SMS."
                  >
                    <HelpOutlineIcon fontSize="small" />
                  </Tooltip>
                </label>

                <Tooltip
                  placement="bottom"
                  visible={noValidEmail.isShow}
                  onVisibleChange={() => setNoValidEmail({ isShow: false })}
                  title={noValidEmail.message}
                >
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="user@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Tooltip>
              </div>

              <div className="form-group">
                <label id="boarding" htmlFor="boarding">
                  Boarding Place{" "}
                  <Tooltip
                    placement="top"
                    title="Bus will pick you up from the listed boarding places only"
                  >
                    <HelpOutlineIcon fontSize="small" />
                  </Tooltip>
                </label>

                <Tooltip
                  placement="bottom"
                  visible={emptyBoardingPoint.isShow}
                  onVisibleChange={() =>
                    setEmptyBoardingPoint({ isShow: false })
                  }
                  title={emptyBoardingPoint.message}
                >
                  <select
                    name="boarding"
                    id="boarding"
                    className="form-control"
                    required
                    onChange={(e) => setBoardingPoint(e.target.value)}
                  >
                    <option value="0">Select your boarding place</option>
                    <option value="1">Boarding Point1</option>
                    <option value="2">Boarding Point2</option>
                    <option value="3">Boarding Point3</option>
                    <option value="4">Boarding Point4</option>
                    <option value="5">Boarding Point5</option>
                    <option value="6">Boarding Point6</option>
                  </select>
                </Tooltip>
              </div>

              <div className="form-group">
                <label id="distination" htmlFor="distination">
                  Destination Place{" "}
                  <Tooltip
                    placement="top"
                    title="You can get down at any bus stops along the bus route by informing the conductor even though if that place is not listed here"
                  >
                    <HelpOutlineIcon fontSize="small" />
                  </Tooltip>
                </label>

                <Tooltip
                  placement="bottom"
                  visible={emptyDistination.isShow}
                  onVisibleChange={() => setEmptyDistination({ isShow: false })}
                  title={emptyDistination.message}
                >
                  <select
                    name="distination"
                    id="distination"
                    className="form-control"
                    required
                    onChange={(e) => setDistination(e.target.value)}
                  >
                    <option value="0">Select your distination place</option>
                    <option value="1">Destination Point1</option>
                    <option value="2">Destination Point2</option>
                    <option value="3">Destination Point3</option>
                    <option value="4">Destination Point4</option>
                    <option value="5">Destination Point5</option>
                    <option value="6">Destination Point6</option>
                  </select>
                </Tooltip>
              </div>

              <ActionButton
                disable={disableBtn}
                text="Continue to pay"
                onClick={onButtonClick}
              />
            </div>
          </Grid>

          <Grid item lg={4} xs={12}>
            <div className="info-container">
              <div className="info">
                <div className="box" style={{ backgroundColor: "#84bdff" }} />
                <div className="ml-3">Available for Ladies Only</div>
              </div>

              <div className="info">
                <div className="box" style={{ backgroundColor: "#f5f5dc" }} />
                <div className="ml-3">Not Provided</div>
              </div>

              <div className="info">
                <div className="box" style={{ backgroundColor: "#2d2d2d" }} />
                <div className="ml-3">Booking In Progress</div>
              </div>

              <div className="info">
                <div className="box" style={{ backgroundColor: "#5cb85c" }} />
                <div className="ml-3">Available</div>
              </div>

              <div className="info">
                <div className="box" style={{ backgroundColor: "#d2d2d2" }} />
                <div className="ml-3">Already Booked</div>
              </div>

              <div className="info">
                <div className="box" style={{ backgroundColor: "#d9534f" }} />
                <div className="ml-3">Selected Seat</div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

      <Footer />
    </div>
  );
}
