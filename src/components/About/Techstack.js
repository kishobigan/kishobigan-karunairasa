import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiJava, DiPhp, DiMysql, DiHtml5, DiCss3, DiAngularSimple,
} from "react-icons/di";
import {
    SiDjango,
    SiFirebase,
    SiPostgresql, SiRstudio, SiSpringboot, SiTypescript,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
            <SiRstudio />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiPython />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiJava />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiPhp />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiNodejs />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <CgCPlusPlus />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiDjango />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiSpringboot />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiMysql />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiMongodb />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiFirebase />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiPostgresql />
        </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiAngularSimple />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
    </Row>
  );
}

export default Techstack;
