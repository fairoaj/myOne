import { Col, Divider, Row } from 'antd';
import React from 'react';
import '../../App.css';
import { FaRegHandPointRight } from 'react-icons/fa';
import './Offer.css';


export default function Offer() {



    let data = [
        {
            offerName: 'NDB Bank Cards (8th April to 30th April 2016)',
            offer: [
                'NDB Credit Cards : 10% discount of bus fare',
                'NDB Debit Cards : 5% discount of bus fare'
            ]
        },
        {
            offerName: 'OfferHut Loyal Members',
            offer: [
                'Dial #7722*4848# to become a loyal member of BusSeat.lk and receive offer via SMS',
                'Free for OfferHut registered users. Rs.2 + Tax per day for others. Dialog only.'
            ]
        },
        {
            offerName: 'BusSeat.lk Promo Code',
            offer: [
                'Coming soon !'
            ]
        }
    ]


    let offerData = [
        {
            offer: [
                "hi", "hello"
            ]
        },
        {
            offer: [
                "how", "fine"
            ]
        }
    ]
    const reptiles = ["alligator", "snake", "lizard"];


    return (
        <React.Fragment>
            <Row justify="center" >
                <Col style={{ width: "100vw" }} lg={20} sm={22} md={22} xs={22}>
                    <div className="page-header">
                        <h1 className="offer-page-head">Offers</h1>
                    </div>
                </Col>
            </Row>
            {/* <Row justify="center" >
                <Col style={{ width: "100vw" }} lg={20} sm={22} md={22} xs={22}>
                    <Divider />
                    <h3 className="offer-head">
                        <FaRegHandPointRight className="icon" />
                        NDB Bank Cards (8th April to 30th April 2016)
                    </h3>
                    <ul className="h5">
                        <li>NDB Credit Cards : 10% discount of bus fare</li>
                        <li>NDB Debit Cards : 5% discount of bus fare</li>
                    </ul>
                    <Divider/>
                    <h3 className="offer-head">
                        <FaRegHandPointRight className="icon" />
                        OfferHut Loyal Members
                    </h3>
                    <ul className="h5">
                        <li>Dial #7722*4848# to become a loyal member of BusSeat.lk and receive offer via SMS</li>
                        <li>Free for OfferHut registered users. Rs.2 + Tax per day for others. Dialog only.</li>
                    </ul>
                    <Divider/>
                    <h3 className="offer-head">
                        <FaRegHandPointRight className="icon" />
                        BusSeat.lk Promo Code
                    </h3>
                    <ul className="h5">
                        <li>Coming soon !</li>
                    </ul>
                </Col>
            </Row> */}
            <Row justify="center">
                <Col span={20}>
                    <Row>
                        {data.map(offer => (
                            <Col style={{ width: "100vw" }} lg={24} sm={23} md={23} xs={23}>
                                <Divider/>
                                <h3 className="h3">
                                    <FaRegHandPointRight className="icon" />
                                    {offer.offerName}
                                </h3>
                                <ul>
                                    {offer.offer.map(offers => (
                                        <li>{offers}</li>
                                    ))}
                                </ul>

                            </Col>
                        ))}

                    </Row>
                </Col>
            </Row>
        </React.Fragment>
    )
}