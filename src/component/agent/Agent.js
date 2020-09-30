import { Col, Divider, Row } from 'antd';
import React from 'react';
import './Agent.css';
import '../../App.css';
// import BpkBlockquote from 'bpk-component-blockquote';


export default function Agent() {

    const agents = [
        {
            name: 'A.B.I Lanka',
            place: 'Nelliady',
        },
        {
            name: 'A.B.I Lanka',
            place: 'Nelliady',
        },
        {
            name: 'A.B.I Lanka',
            place: 'Nelliady',
        },
        {
            name: 'A.B.I Lanka',
            place: 'Nelliady',
        },
        {
            name: 'A.B.I Lanka',
            place: 'Nelliady',
        },
        {
            name: 'A.B.I Lanka',
            place: 'Nelliady',
        }
    ];


    return (
        <React.Fragment>
            <Row >
                <Col >
                    <Row justify="center" >
                        <Col style={{ width: "100vw" }} lg={20} sm={22} md={22} xs={22}>
                            <div className="page-header">
                                <h1 className="h1">Bus Booking Agent</h1>
                                <Divider />
                            </div>
                        </Col>
                    </Row>

                    <Row justify="center">
                        <Col style={{ width: "100vw" }} lg={20} sm={22} md={22} xs={22}>
                            <h4 className="h4">
                                t is a long established fact that a reader will be distracted
                                by the readable content of a page when looking at its layout.
                                The point of using Lorem Ipsum is that it has a more-or-less
                                normal distribution of letters, as opposed to using 'Content
                        here, content here',<a href="#" className="a">For Agent Registration</a> making it look like readable English. Many
                         desktop publishing packages and web page editors now use Lorem
                          Ipsum as their default model text, and a search for 'lorem ipsum'
                           will uncover many web sites still in their infancy.
                           </h4><h4 className="h4"> Various
                            versions have evolved over the years, sometimes by accident,
                            sometimes on purpose (injected humour and the like).
                        </h4>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="bg-holder">
                <Row justify="center">
                    <Col style={{ width: "90vw" }} lg={20} sm={22} md={22} xs={22}>
                        <Row justify="space-around">
                        <h1 className="feedback-head">
                            Why do agents love this app?
                        </h1>
                        </Row>
                       
                    </Col>
                </Row>
                <Row justify={"space-around"} >
                    <Col lg={20} sm={22} md={22} xs={22} >
                        <Row gutter={24} justify="center">
                            <Col lg={8} md={24} sm={24} xs={24}  >
                                <Row className="feedback-box">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                                    penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                </Row>
                                <Row className="feedback-author">
                                    Mr.Virat Kohli
                                </Row>
                                <Row className="feedback-author-cite">
                                    Mahaluxmy Booking Center, Wellawatta
                                </Row>
                            </Col>
                            <Col lg={8} md={24} sm={24} xs={24}>
                                <Row className="feedback-box">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                                    penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                </Row>
                                <Row className="feedback-author">
                                    Mr.Virat Kohli
                                </Row>
                                <Row className="feedback-author-cite">
                                    Mahaluxmy Booking Center, Wellawatta
                                </Row>
                            </Col>
                            <Col lg={8} md={24} sm={24} xs={24}>
                                <Row className="feedback-box">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                                    penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                </Row>
                                <Row className="feedback-author">
                                    Mr.Virat Kohli
                                </Row>
                                <Row className="feedback-author-cite">
                                    Mahaluxmy Booking Center, Wellawatta
                                </Row>

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Row>
            <Row justify="center">
                <Col style={{ width: "90vw" }} lg={17} sm={23} md={23} xs={23}>
                    <h1 className="well">Are you a bus booking agent? Get your account today - <a className="a">Contact Us</a> </h1>
                </Col>
            </Row>
            <Row>
                <Row justify="center">
                    <Col style={{ width: "90vw" }} lg={20} sm={23} md={23} xs={23}>
                        <h1 className="h1">Who are using?</h1>
                    </Col>
                </Row>

                <Row justify="center">
                    <Col span={20}>
                        <Row>
                            {agents.map(agent => (
                                <Col style={{ width: "90vw" }} lg={7} sm={23} md={23} xs={23} className="agent-box">
                                    <h4 className="agent-name">{agent.name}</h4>
                                    <address className="agent-location">{agent.place}</address>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col span={20}>
                        <Row>
                            <Col style={{ width: "90vw" }} span={20}>
                                <h4 className="h4">Conditions:</h4>
                            </Col>

                        </Row>
                        <Row>
                            <ul>
                                <li className="li">Bus operator has to approve you to be an agent for their buses</li>
                                <li className="li">Seat cancellation is allowed through bus operator</li>
                            </ul>
                        </Row>
                    </Col>
                </Row>
            </Row>

        </React.Fragment>
    )
}