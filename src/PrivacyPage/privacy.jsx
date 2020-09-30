import React from "react";
import "../ContactPage/Contact.css";
import {
  Form,
  Input,
  Button,
  Select,
  Card,
  DatePicker,
  Space,
  Row,
  Col,
  Divider,
} from "antd";
import Header from "../HeaderPage/Header";
import Footer from "../FooterPage/Footer";
import "../PrivacyPage/Privacy.css";

export default function Privacy() {
  return (
    <div>
      <Header />

      <div className="Privacy-main">
        <Row>
          <Col span={18} offset={3}>
            <div className="Private">
              <h5>Privacy</h5>
            </div>
            <Divider />
            <div>
              <Row gutter={(2, 4)}>
                <Col span={24} style={{ textAlign: "justify" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur animi consectetur nobis fugit suscipit doloremque
                  commodi quos dolores vitae laboriosam, quae iste nulla fugiat
                  adipisci voluptatibus similique esse aut necessitatibus! Quae
                  quasi quam dolorum, laudantium doloremque, aspernatur
                  architecto excepturi inventore ex distinctio non obcaecati
                  dolore est expedita? Illum totam quam natus consequuntur
                  doloremque nemo. Praesentium aut esse architecto doloribus
                  maiores! Deserunt veniam vero repellendus harum facilis animi
                  dicta quas eligendi aliquam necessitatibus atque impedit
                  placeat totam ab, rem vitae soluta? Ullam corrupti asperiores
                  necessitatibus neque nisi. Praesentium inventore officia
                  asperiores! Corporis obcaecati veniam possimus saepe, mollitia
                  architecto nulla quasi perspiciatis labore, animi accusamus?
                  Magni excepturi ad perspiciatis sunt quae quia fugiat odio,
                  atque officia sint consequatur similique debitis alias ipsum!
                  Veritatis, quisquam voluptates voluptas quam tempore et
                  nesciunt. Tenetur iusto numquam a dolorum id earum sint eum
                  ipsa, voluptas non saepe soluta accusantium esse aut minus,
                  vel iure at facilis. Qui iure consequatur ipsam dicta fugit
                  odio, facilis laborum vitae laboriosam, modi dolores placeat
                  temporibus exercitationem doloremque molestias impedit sit
                  fugiat doloribus assumenda? Laudantium molestiae quos ad cum
                  doloribus! Ipsam? Nesciunt cumque qui tenetur placeat,
                  architecto a sunt enim aliquam esse molestias eaque veritatis
                  quia illum, repudiandae possimus atque iste mollitia
                  distinctio obcaecati voluptas, iusto necessitatibus aperiam?
                  Veritatis, quaerat molestias. Vero recusandae laudantium
                  fugit, consequuntur rerum reprehenderit deserunt alias porro
                  unde, molestiae voluptas dolorem? Laudantium ea ducimus autem
                  praesentium nemo modi deleniti enim et non, minus
                  necessitatibus dolore distinctio cum. Asperiores laudantium
                  beatae consequatur odio nisi. Rerum asperiores nulla
                  voluptatibus ex illo, delectus quisquam unde voluptatum
                  nesciunt, similique illum corporis totam explicabo eveniet,
                  aut perferendis? Asperiores sed rem vitae quia! Sit soluta
                  quis sed, ratione, nisi, ipsam neque tempore ad quos placeat
                  quibusdam illo a voluptas voluptatum dolorem obcaecati maiores
                  omnis itaque. Velit explicabo qui perspiciatis officiis
                  accusantium fugit ullam.
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
