import { Col, Divider, Row } from "antd";
import React from "react";
import "../App.css";
import Footer from "../FooterPage/Footer";
import Header from "../HeaderPage/Header";
import "../TermAndConditionPage/TermAndCondition.css";

export default function TermsAndCondition() {
  return (
    <React.Fragment>
      <Header />
      <Row justify="center">
        <Col style={{ width: "100vw" }} lg={20} sm={22} md={22} xs={22}>
          <div className="page-header">
            <h1 className="h1">Terms and Conditions</h1>
            <Divider />
          </div>
        </Col>
      </Row>
      <Row justify="center">
        <Col
          style={{ width: "100vw" }}
          lg={20}
          sm={22}
          md={22}
          xs={22}
          className="terms-para"
        >
          <p>
            These terms and conditions, as may be amended from time to time,
            apply to all our services directly or indirectly (through
            distributors) made available online, through any mobile device, by
            email or by telephone. By accessing, browsing and using our website
            or any of our applications through whatever platform (hereafter
            collectively referred to as the "website") and/or by completing a
            reservation, you acknowledge and agree to have read, understood and
            agreed to the terms and conditions set out below (including the
            privacy statement).
          </p>
          <p>
            <strong>Heading 1</strong>
          </p>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>
          <p>
            <strong>Heading 2</strong>
          </p>
          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?"
          </p>
        </Col>
      </Row>
      <Footer />
    </React.Fragment>
  );
}
