import { Col, Divider, Row } from 'antd';
import React from 'react';
import '../../App.css';
import './Privacy.css';

export default function Privacy() {

    return (
        <React.Fragment>
            <Row justify="center" >
                <Col style={{ width: "100vw" }} lg={20} sm={22} md={22} xs={22}>
                    <div className="page-header">
                        <h1 className="h1">Privacy</h1>
                        <Divider />
                    </div>
                </Col>
            </Row>
            <Row justify="center">
                <Col style={{ width: "100vw" }} lg={20} sm={22} md={22} xs={22} className="privacy-para">
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo.
                    </p>
                    <p>
                        <strong>Note</strong>
                    </p>
                    <p>
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC,
                        making it over 2000 years old. Richard McClintock, a Latin professor
                        at Hampden-Sydney College in Virginia, looked up one of the more
                        obscure Latin words, consectetur, from a Lorem Ipsum passage, and
                        going through the cites of the word in classical literature,
                        discovered the undoubtable source. Lorem Ipsum comes from sections
                        1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                        (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                        <ul>
                            <li>Lorem Ipsum comes from sections</li>
                            <li>Neque porro quisquam est, qui dolorem</li>
                            <li>Genuine, albeit rare, Latin word</li>
                        </ul>
                    </p>
                </Col>
            </Row>
        </React.Fragment>
    )
}