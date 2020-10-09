import { Col, Row, Form, Input, Button, InputNumber, Checkbox, TimePicker, Divider, Select } from 'antd';
import React, { useState } from 'react';
import '../../App.css';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const { Option } = Select;

export default function Admin() {
    const [travalName, setTravalName] = useState("")
    const [busType, setBusType] = useState("")
    const [busNumber, setBusNumber] = useState([])
    const [routeNumber, setRouteNumber] = useState("")
    const [facility, setFacility] = useState([])
    const [price, setPrice] = useState(0)
    const [isDiscount, setIsDiscount] = useState(false)
    const [discount, setDiscount] = useState(0)
    const [totalSeat, setTotalSeat] = useState(0)
    const [availableSeat, setAvailableSeat] = useState(0)
    const [departureTime, setDepartureTime] = useState(0)
    const [arrivalTime, setArrivalTime] = useState(0)
    const [travelHours, setTravelHours] = useState(0)
    const [providedSeatNumbers, setProvidedSeatNumbers] = useState([])
    const [ladiesSeatNumber, setLadiesSeatNumber] = useState([])
    const [form] = Form.useForm();




    const facilities = [
        { id: 1, name: "Air Condition", icon: "fas fa-thermometer-quarter" },
        { id: 2, name: "Ajustable Seat", icon: "fas fa-sliders-h" },
        { id: 3, name: "Charging Point", icon: "fas fa-plug" },
        { id: 4, name: "Rest Stop", icon: "fas fa-map-marker-alt" },
        { id: 5, name: "Movie", icon: "fas fa-film" },
        { id: 6, name: "Cup Holder", icon: "fas fa-mug-hot" },
        { id: 7, name: "Emegency Exit", icon: "fas fa-external-link-square-alt" },
    ]

    

    function handleFacility(e) {
        // console.log(facility)
    //   console.log(typeof(facilities[0].name))
    const facilityName = []
     
          for(var j=0; j<e.length;j++){
            // console.log(e[j])
            for(var i=0;i<facilities.length;i++){
                // console.log(facilities[i].name)
                
                if(e[j] === facilities[i].name){
                    
                    facilityName.push(facilities[i])
                    // console.log(facilityName)
                    setFacility([])
                    facility.push(facilities[i])
                }
          } 
      }
      console.log(price)
    console.log(facility)
    }

    function onChange(time, timeString) {
        console.log(time, timeString);
      }

    const onFinish=(value)=>{
        // setTravalName(value.travalName)
        console.log(value)
    }

    return (
        <React.Fragment>
            <Row justify="center" >
                <Col style={{ width: "100vw" }} lg={20} sm={22} md={22} xs={22}>
                    <div className="page-header">
                        <h1 className="h1">Travels Registration</h1>
                        <Divider />
                    </div>
                </Col>
            </Row>

            <Row justify="center">
                <Col style={{ width: "100vw" }} lg={20} sm={22} md={22} xs={22}>
                    <Form 
                        onFinish={onFinish}
                        form={form}
                    >
                        <Row>
                            <Row style={{ width: "100vw" }} gutter={[24, 36]}>
                                <Col span={24}>
                                    <Form.Item
                                        label={<h2>Traval Name</h2>}
                                        name="travelName"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please specify your travel's name!",
                                            },
                                        ]}
                                    >
                                        <Input size="large" placeholder="Traval Name"
                                        // onChange={(e)=>setTravalName(e.target.value)}
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row style={{ width: "100vw" }} gutter={[24, 36]} >
                                <Col lg={8} md={12} xs={24} sm={24}>
                                    <Form.Item
                                        label={<h2>Bus Type</h2>}
                                        name="busType"
                                        rules={[
                                            {
                                              required: true,
                                              message: 'Please input Bus Type',
                                            },
                                          ]}
                                    >
                                        <Input size="large" placeholder="Bus Type" />
                                    </Form.Item>
                                </Col>
                                <Col lg={8} md={12} xs={24} sm={24}>
                                    <Form.Item
                                        label={<h2>Route Number</h2>}
                                        name="routeNumber"
                                        rules={[
                                            {
                                              required: true,
                                              message: 'Please input Route Number',
                                            },
                                          ]}
                                    >
                                        <Input size="large" placeholder="Route Number" />
                                    </Form.Item>
                                </Col>
                                <Col lg={8} md={24} xs={24} sm={24}>
                                    <Row justify="end" style={{ width: "100%" }}>
                                        <Col span={24}>
                                            <Form.List name="names">
                                                {(fields, { add, remove }) => {
                                                    return (
                                                        <div>
                                                            {fields.map((field, index) => (
                                                                <Form.Item
                                                                    // {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                                                                    label={index === 0 ? <h2>Bus Number</h2> : ''}
                                                                    name="busNumber"
                                                                    required={true}
                                                                    key={field.key}
                                                                >
                                                                    <Form.Item
                                                                        {...field}
                                                                        validateTrigger={['onChange', 'onBlur']}
                                                                        rules={[
                                                                            {
                                                                                required: true,
                                                                                whitespace: true,
                                                                                message: "Please input passenger's name or delete this field.",
                                                                            },
                                                                        ]}
                                                                        noStyle
                                                                    >
                                                                        <Input size="large" placeholder="Bus Number" style={{ width: '100%' }} onChange={e=>setBusNumber(e.target.value)}/>
                                                                    </Form.Item>
                                                                    {fields.length > 1 ? (
                                                                        <MinusCircleOutlined
                                                                            className="dynamic-delete-button"
                                                                            style={{ margin: '0 8px' }}
                                                                            onClick={() => {
                                                                                remove(field.name);
                                                                            }}
                                                                        />
                                                                    ) : null}
                                                                </Form.Item>
                                                            ))}
                                                            <Form.Item>
                                                                <Button
                                                                    type="dashed"
                                                                    onClick={() => {
                                                                        add();
                                                                    }}
                                                                    style={{ width: '100%' }}
                                                                >
                                                                    <PlusOutlined /> Add Bus Number
                                                            </Button>
                                                            </Form.Item>
                                                        </div>
                                                    );
                                                }}
                                            </Form.List>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row style={{ width: "100vw" }} gutter={[24, 36]}>
                                <Col lg={24} md={24} xs={24} sm={24}>
                                    <Form.Item
                                        label={<h2>Facility</h2>}
                                        name="facility"
                                        rules={[
                                            {
                                              required: true,
                                              message: 'Please input Facility',
                                            },
                                          ]}
                                    >
                                        <Select
                                            mode="multiple"
                                           
                                            placeholder="Facility"
                                            size="large"
                                        >
                                            {facilities.map(item => (
                                                <Option key={item.id} value={item.name}>{item.name}</Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row style={{ width: "100vw" }} gutter={[24, 36]}>
                                <Col lg={8} md={8} xs={24} sm={24}>
                                    <Form.Item
                                        label={<h2>Price</h2>}
                                        name="price"
                                        rules={[
                                            {
                                              required: true,
                                              message: 'Please input Price',
                                            },
                                          ]}
                                    >
                                        <InputNumber  size="large" placeholder="Price" style={{ width: "100%" }} />
                                    </Form.Item>
                                </Col>
                                <Col lg={8} md={8} xs={24} sm={24}>
                                    <Row justify="center">
                                        <Form.Item
                                            label={<h2>Is Discount</h2>}
                                            name="isDiscount"
                                        >
                                            <Checkbox onChange={() => setIsDiscount(!isDiscount)} />
                                        </Form.Item>
                                    </Row>
                                </Col>
                                <Col lg={8} md={8} xs={24} sm={24}>
                                    {(isDiscount ?
                                        <Form.Item
                                            label={<h2>Discount</h2>}
                                            name="discount"
                                            rules={[
                                                {
                                                  required: true,
                                                  message: 'Please input Discount',
                                                },
                                              ]}
                                        >
                                            <InputNumber size="large" placeholder="Discount" style={{ width: "100%" }} onChange={e=>setDiscount(e)}/>
                                        </Form.Item> :
                                        <h2 style={{ color: "red" }}>No Discount</h2>)}

                                </Col>
                            </Row>
                            <Row style={{ width: "100vw" }} gutter={[24, 36]}>
                                <Col lg={6} md={12} xs={24} sm={24}>
                                    <Form.Item
                                        label={<h2>Total Seat</h2>}
                                        name="totalSeat"
                                        rules={[
                                            {
                                              required: true,
                                              message: 'Please input Total Seats',
                                            },
                                          ]}
                                    >
                                        <InputNumber size="large" placeholder="Total Seat" style={{ width: "100%" }} onChange={e=>setTotalSeat(e)}/>
                                    </Form.Item>
                                </Col>
                                <Col lg={6} md={12} xs={24} sm={24}>
                                    <Form.Item
                                        label={<h2>Provided Seats</h2>}
                                        name="providedSeats"
                                        rules={[
                                            {
                                              required: true,
                                              message: 'Please input Provided Seats',
                                            },
                                          ]}
                                    >
                                        <InputNumber size="large" placeholder="Provided Seats" style={{ width: "100%" }} min={1} max={totalSeat} onChange={e=>setProvidedSeatNumbers(e)}/>
                                    </Form.Item>
                                </Col>
                                <Col lg={6} md={12} xs={24} sm={24}>
                                    <Form.Item
                                        label={<h2>Available Seat</h2>}
                                        name="availableSeat"
                                        rules={[
                                            {
                                              required: true,
                                              message: 'Please input Available Seats',
                                            },
                                          ]}
                                    >
                                        <InputNumber size="large" placeholder="Available Seat" style={{ width: "100%" }} min={0} max={providedSeatNumbers} onChange={e=>setAvailableSeat(e)}/>
                                    </Form.Item>
                                </Col>
                                <Col lg={6} md={12} xs={24} sm={24}>
                                    <Form.Item
                                        label={<h2>Ladies Seat</h2>}
                                        name="ladiesSeat"
                                        rules={[
                                            {
                                              required: true,
                                              message: 'Please input Ladies Seats',
                                            },
                                          ]}
                                    >
                                        <InputNumber size="large" placeholder="Ladies Seat" style={{ width: "100%" }} min={0} max={providedSeatNumbers} onChange={e => setLadiesSeatNumber(e)}/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row style={{ width: "100vw" }} gutter={[24, 36]} justify="center">
                                <Col lg={8} md={8} xs={24} sm={24}>
                                    <Form.Item
                                        label={<h2>Departure Time</h2>}
                                        name="depatureTime"
                                        // rules={[
                                        //     {
                                        //       required: true,
                                        //       message: 'Please input Departure Time',
                                        //     },
                                        //   ]}
                                    >
                                        <TimePicker size="large" use12Hours format="h:mm a" style={{ width: "100%" }} />
                                        {/* <InputNumber placeholder="Departure Time" /> */}
                                    </Form.Item>
                                </Col>
                                <Col lg={8} md={8} xs={24} sm={24}>
                                    <Form.Item
                                        label={<h2>Arrival Time</h2>}
                                        name="arrivalTime"
                                        // rules={[
                                        //     {
                                        //       required: true,
                                        //       message: 'Please input Arrival Time',
                                        //     },
                                        //   ]}
                                    >
                                        <TimePicker size="large" use12Hours format="h:mm a" style={{ width: "100%" }} />
                                    </Form.Item>
                                </Col>
                                
                            </Row>
                        </Row>
                        <Row justify="center">
                            <Col>
                                <Button size="large" type="primary" htmlType="submit">REGISTER</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>

        </React.Fragment>
    )
}