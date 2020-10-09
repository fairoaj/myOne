import { Col, Divider, Row } from 'antd';
import React from 'react';
import '../../App.css';

export default function ServiceUpdate() {

    return (
        <React.Fragment>
            <Row justify="center" >
                <Col style={{ width: "100vw" }} lg={20} sm={22} md={22} xs={22}>
                    <div className="page-header">
                        <h1 className="h1">Service Updates</h1>
                        <Divider />
                    </div>
                </Col>
            </Row>
            <Row justify="center" >
                <Col style={{ width: "100vw" }} lg={20} sm={22} md={22} xs={22}>
                    <Row>
                        <Col lg={12} md={12} sm={24} xs={24}>
                            <div class="fb-page" data-href="https://www.facebook.com/inoovalabeducation/" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/inoovalabeducation/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/inoovalabeducation/">Inoovalab Education</a></blockquote></div>                        </Col>
                        <Col lg={12} md={12} sm={24} xs={24}>
                            <a class="twitter-timeline" data-width="500" data-height="700" data-theme="dark" href="https://twitter.com/BBCWorld?ref_src=twsrc%5Etfw">
                                Tweets by BBCWorld
                            </a>
                            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

                        </Col>
                    </Row>
                </Col>
            </Row>
        </React.Fragment>
    )
}