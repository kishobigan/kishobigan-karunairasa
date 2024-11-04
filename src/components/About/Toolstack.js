import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiPostman,
    SiSlack,
    SiLinux, SiJetbrains, SiTrello, SiCanva, SiAndroidstudio,
    SiMicrosoftoffice,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiJetbrains />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTrello />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiCanva />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiAndroidstudio />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiMicrosoftoffice />
        </Col>
    </Row>
  );
}

export default Toolstack;
