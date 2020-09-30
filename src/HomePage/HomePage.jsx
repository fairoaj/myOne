import React, { useState } from "react";
import "../HomePage/HomePage.css";
import Imagedata from "../Data/ImageData.json";
import SelectoptionData from "../Data/SelectoptionData.json";
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
import {
  CaretRightOutlined,
  FacebookOutlined,
  TwitterOutlined,
  GooglePlusOutlined,
} from "@ant-design/icons";
import Item from "antd/lib/list/Item";
import Footer from "../FooterPage/Footer";
import { Snackbar } from "@material-ui/core";
import Header from "../HeaderPage/Header";
import Form from "../FormPage/Form";

import Autocomplete from "@material-ui/lab/Autocomplete";
import { Grid, TextField } from "@material-ui/core";

import { Tooltip } from "antd";

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

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default function HomePage() {
  const [openSnackbar, setOpenSnackbar] = useState(false);

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

  // const { Option } = Select;

  // function onChange(value) {
  //   console.log(`selected ${value}`);
  // }

  // function onBlur() {
  //   console.log("blur");
  // }

  // function onFocus() {
  //   console.log("focus");
  // }

  // function onSearch(val) {
  //   console.log("search:", val);
  // }

  // const onFinish = (values) => {
  //   console.log("Success:", values);
  // };

  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };
  // function onChange(date, dateString) {
  //   console.log(date, dateString);
  // }

  // let selectdata = [];
  // {
  //   SelectoptionData.map((item) => {
  //     selectdata.push(<Option value={item.departure}>{item.departure}</Option>);
  //   });
  // }

  return (
    <div>
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
        <div className="booking-form">
          <h2 className="booking-form__heading">
            The simplest way to book your bus tickets in Sri Lanka
          </h2>
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
                <p style={{ color: "#777", fontWeight: "600" }}>JOURNEY DATE</p>
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
      </div>

      {/* <div className="title-bar">
        <div style={{ height: 10 }}></div>
        <Row span={3}>
          <Col span={12} offset={2}>
            <h2>BusBook.com</h2>
          </Col>
        </Row>

        <div style={{ height: 100 }}></div>

        <Row span={3}>
          <Col span={12} offset={4}>
            <h2 style={{ fontSize: 50 }}>For best Travelling</h2>
          </Col>
        </Row>

        <Row>
          <Col span={12} offset={6}>
            <div className="site-card-border-less-wrapper">
              <Card className="card-box" title="Bus Booking" bordered={false}>
                <Form
                  {...layout}
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <Form.Item>
                    <label style={{ fontWeight: "bold" }}>Departure</label>
                    <Select
                      className="select-option"
                      showSearch
                      style={{ marginTop: 10, marginLeft: 50 }}
                      placeholder="Select Departure place"
                      optionFilterProp="children"
                      onChange={onChange}
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onSearch={onSearch}
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      {selectdata}
                    </Select>
                  </Form.Item>

                  <Form.Item>
                    <label style={{ fontWeight: "bold" }}>Arrival</label>
                    <Select
                      className="select-option"
                      showSearch
                      style={{ marginTop: 10, marginLeft: 50 }}
                      placeholder="Select Arrival place"
                      optionFilterProp="children"
                      onChange={onChange}
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onSearch={onSearch}
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      {selectdata}
                    </Select>
                  </Form.Item>

                  <Form.Item>
                    <Space direction="vertical">
                      <label style={{ fontWeight: "bold" }}>Choice Date</label>
                      <DatePicker onChange={onChange} />
                    </Space>
                  </Form.Item>

                  <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                      select seat
                    </Button>
                  </Form.Item>
                  <a href="/Help" style={{ marginLeft: 220 }}>
                    Need help..?
                  </a>
                </Form>
              </Card>
            </div>
          </Col>
        </Row>
      </div> */}
      <div className="contant1">
        <div style={{}}>
          <h1
            style={{
              fontWeight: "bold",
              fontSize: 30,
              marginLeft: 250,
              marginRight: 150,
            }}
          >
            Bus Booking Made Easy and Efficient in Sri Lanka
          </h1>
          <h3 style={{ fontSize: 20, marginLeft: 300, marginRight: 200 }}>
            Plan journey, Reserve bus seats, Reach destination.
          </h3>
        </div>
        <div className="booking-detailes">
          <p>
            We provide full fledged online bus booking platform to buy and sell
            bus seats. The passenger can purchase bus tickets online and in
            return to confirm the seat reservation, a text message with the
            details of travel will be be sent.
          </p>
        </div>
        <div className="booking-detailes">
          <p>
            With the efficient bus reservation system from BusSeat.lk, plan your
            journey early, save your valuable time in buying bus tickets, avoid
            waiting in long queues, find to your boarding place easily and enjoy
            your happy journey with comfort.
          </p>
        </div>
      </div>
      <div className="contant2" style={{ marginTop: 40 }}>
        <div>
          <h2 className="text-center" style={{ fontSize: 30 }}>
            Partnered Bus Service Providers
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginRight: 100,
            marginLeft: 100,
          }}
        >
          {Imagedata.slice(0, 4).map((item) => (
            <img
              className="col-lg-2 col-sm-3 col-md-2 col-xs-12"
              style={{ width: 100 }}
              src={item.img}
              alt=""
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginRight: 100,
            marginLeft: 100,
            marginTop: 20,
          }}
        >
          {Imagedata.slice(4, 7).map((item) => (
            <img
              className="col-lg-2 col-sm-3 col-md-2 col-xs-12"
              style={{ width: 100 }}
              src={item.img}
              alt=""
            />
          ))}
        </div>
      </div>
      <div className="footer1" style={{ marginTop: 40 }}>
        <div className="">
          <div className="" />
          <h2 className="text-center">Multiple Payment Options</h2>
          <div className="">
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginRight: 100,
                marginLeft: 100,
              }}
            >
              <div className="">
                <img
                  style={{ width: 100 }}
                  alt="Visa Card"
                  src="https://img.favpng.com/6/18/12/credit-card-debit-card-mastercard-logo-visa-png-favpng-Dr8ZuXU7Db5sQ39iMeCh8ZxC8.jpg"
                  className=""
                />
                <p className="text-center">Credit / Debit Card</p>
              </div>
              <div className="">
                <img
                  style={{ width: 100 }}
                  alt="Master Card"
                  src="data:image/png;base64,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"
                  className=""
                />
                <p className="text-center">Credit / Debit Card</p>
              </div>
              <div className="">
                <img
                  style={{ width: 100 }}
                  alt="Amex Card"
                  src="https://www.pngitem.com/pimgs/m/179-1792533_credit-card-clipart-american-express-amex-logo-png.png"
                  className=""
                />
                <p className="text-center">Credit / Debit Card</p>
              </div>
              <div className="">
                <img
                  style={{ width: 100 }}
                  alt="eZ Cash"
                  src="https://www.readme.lk/wp-content/uploads/2013/03/Dialog-eZ-Cash.png"
                  className=""
                />
                <p className="text-center">Dialog / Mobitel / Etisalat</p>
              </div>
              <div className="">
                <img
                  style={{ width: 100 }}
                  alt="Bank Transfer"
                  src="https://youchampapp.com/wp-content/uploads/2019/02/pay-direct-money-transfer-app-share-costs.png"
                  className=""
                />
                <p className="text-center">Bank Transfer</p>
              </div>
              <div className="">
                <img
                  style={{ width: 100 }}
                  alt="Dialog 444 Booking"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Dialog_Axiata_logo.svg/1200px-Dialog_Axiata_logo.svg.png"
                  className=""
                />
                <p className="text-center">444 Services</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contant2" style={{ marginTop: 40 }}>
        <div className="">
          <div className="" />
          <h2 className="text-center">Why Book with BusSeat?</h2>
          <div className="col-lg-12 col-sm-12 col-md-12 col-xs-12">
            <div
              className=""
              data-gutter={60}
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginRight: 100,
                marginLeft: 100,
              }}
            >
              <div className="" style={{ height: 200, width: 150 }}>
                <img
                  style={{ width: 100 }}
                  alt="More choices"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDzVx-rm5FrMJW2i-Sg-XRZyjzFEOomlMCDA&usqp=CAU"
                  className=""
                />
                <h3>
                  <a className="text-darken">More Choices</a>
                </h3>
                <p>
                  We give you maximum choices across all the routes to choose
                  your bus.
                </p>
              </div>
              <div className="" style={{ height: 200, width: 150 }}>
                <img
                  style={{ width: 100 }}
                  alt="Customer support service"
                  src="https://www.pinclipart.com/picdir/big/97-971002_headset-icon-clipart.png"
                  className=""
                />
                <h3>
                  <a className="text-darken">Customer Support</a>
                </h3>
                <p>We help you to make your journey better.</p>
              </div>
              <div className="" style={{ height: 200, width: 150 }}>
                <img
                  style={{ width: 100 }}
                  alt="Best price"
                  src="https://thumbs.dreamstime.com/b/fast-cash-icon-beautiful-meticulously-designed-120048035.jpg"
                  className=""
                />
                <h3>
                  <a className="text-darken">Best Price</a>
                </h3>
                <p>We always offer best bus ticket price in the market.</p>
              </div>
              <div className="" style={{ height: 200, width: 150 }}>
                <img
                  style={{ width: 100 }}
                  alt="Google map location"
                  src="https://cdn.vox-cdn.com/thumbor/pOMbzDvdEWS8NIeUuhxp23wi_cU=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19700731/googlemaps.png"
                  className=""
                />
                <h3>
                  <a className="text-darken">Google Map Location</a>
                </h3>
                <p>
                  We send you the boarding place and destination place link in
                  google map.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="Growing"
        // style={{
        //   marginTop: 130,
        //   height: 180,
        //   display: "flex",
        //   alignItems: "center",
        //   justifyContent: "space-around",
        // }}
      >
        <div className="">
          <div className="Growing-detailes">
            <div className="" />
            <h2 className="text-center">We are growing</h2>
            <div className="">
              <div
                className="growing-amount"
                // style={{
                //   display: "flex",
                //   justifyContent: "space-around",
                //   gap: 200,
                // }}
              >
                <div className=" ">
                  <h2 className="text-center">
                    <span className="label-success">100+ Schedules</span>
                  </h2>
                </div>
                <div className=" ">
                  <h2 className="text-center">
                    <span className="label-danger">167+ Places</span>
                  </h2>
                </div>
                <div className=" ">
                  <h2 className="text-center">
                    <span className="label-primary">974,867+ Seats</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="gap" />
          </div>
        </div>
      </div>

      <div className="contant2">
        <div className="">
          <div className="" />
          <h2 className="text-center" style={{ marginTop: 30 }}>
            Top Bus Routes
          </h2>
          <div className="gap">
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginRight: 100,
                marginLeft: 100,
              }}
            >
              <div className="col-lg-3 col-sm-3 col-md-3 col-xs-12">
                <ul className="list-unstyled">
                  <li>
                    <a href="/buses/Jaffna/Colombo">Jaffna - Colombo</a>
                  </li>
                  <li>
                    <a href="/buses/Point%20Pedro/Colombo">
                      Point Pedro - Colombo
                    </a>
                  </li>
                  <li>
                    <a href="/buses/Kilinochchi/Colombo">
                      Kilinochchi - Colombo
                    </a>
                  </li>
                  <li>
                    <a href="/buses/Vavuniya/Colombo">Vavuniya - Colombo</a>
                  </li>
                  <li>
                    <a href="/buses/Anuradhapura/Colombo">
                      Anuradhapura - Colombo
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-sm-3 col-md-3 col-xs-12">
                <ul className="list-unstyled">
                  <li>
                    <a href="/buses/Batticaloa/Colombo">Batticaloa - Colombo</a>
                  </li>
                  <li>
                    <a href="/buses/Akkaraipattu/Colombo">
                      Akkaraipattu - Colombo
                    </a>
                  </li>
                  <li>
                    <a href="/buses/Ampara/Colombo">Ampara - Colombo</a>
                  </li>
                  <li>
                    <a href="/buses/Dambulla/Colombo">Dambulla - Colombo</a>
                  </li>
                  <li>
                    <a href="/buses/Polonnaruwa/Colombo/">
                      Polannaruwa - Colombo
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-sm-3 col-md-3 col-xs-12">
                <ul className="list-unstyled">
                  <li>
                    <a href="/buses/Hatton/Colombo/">Hatton - Colombo</a>
                  </li>
                  <li>
                    <a href="/buses/Matale/Colombo">Matale - Colombo</a>
                  </li>
                  <li>
                    <a href="/buses/Nuwaraeliya/Colombo">
                      Nuwara Eliya - Colombo
                    </a>
                  </li>
                  <li>
                    <a href="/buses/Welimada/Colombo/">Welimada - Colombo</a>
                  </li>
                  <li>
                    <a href="/buses/Kandy/Colombo">Kandy - Colombo</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-sm-3 col-md-3 col-xs-12">
                <ul className="list-unstyled">
                  <li>
                    <a href="/buses/Kataragama/Colombo/">
                      Kataragama - Colombo
                    </a>
                  </li>
                  <li>
                    <a href="/buses/Matara/Colombo/">Matara - Colombo</a>
                  </li>
                  <li>
                    <a href="/buses/Kamburupitiya/Colombo">
                      Kamburupitiya - Colombo
                    </a>
                  </li>
                  <li>
                    <a href="/buses/Panandura/Colombo">Panandura - Matara</a>
                  </li>
                  <li>
                    <a href="/buses/Badulla/Colombo">Badulla - Colombo</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="gap-small" />
        </div>
      </div>

      <Footer />
    </div>
  );
}
