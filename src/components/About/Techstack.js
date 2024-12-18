import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {

    DiJava, DiPhp
} from "react-icons/di";
import {
    SiC, SiCsharp,
    SiDjango, SiDotnet,
     SiHtml5, SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs,  SiPlotly,
     SiPython, SiR, SiReact,  SiSpringboot, SiTypescript,
} from "react-icons/si";
import { FaBrain } from "react-icons/fa"; // Deep Learning
import { TbChartBar } from "react-icons/tb"; // Seaborn
import { MdShowChart } from "react-icons/md"; // Matplotlib
import { BsGraphUp } from "react-icons/bs"; //

function Techstack() {
  return (
      <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
          <h4>Programming Languages</h4>
          <Col xs={4} md={2} className="tech-icons"><SiPython/></Col>
          <Col xs={4} md={2} className="tech-icons"><DiJava/></Col>
          <Col xs={4} md={2} className="tech-icons"><SiR/></Col>
          <Col xs={4} md={2} className="tech-icons"><SiC/></Col>
          <Col xs={4} md={2} className="tech-icons"><SiCsharp/></Col>
          <Col xs={4} md={2} className="tech-icons"><CgCPlusPlus/></Col>
          <Col xs={4} md={2} className="tech-icons"><DiPhp/></Col>
          <Col xs={4} md={2} className="tech-icons"><SiJavascript/></Col>
          <Col xs={4} md={2} className="tech-icons"><SiTypescript/></Col>
          <Col xs={4} md={2} className="tech-icons"><SiHtml5/></Col>

          {/* Frontend Frameworks */}
          <h4>Frontend Frameworks</h4>
          <Col xs={4} md={2} className="tech-icons"><SiReact/></Col>
          <Col xs={4} md={2} className="tech-icons"><SiNextdotjs/></Col>

          {/* Backend Frameworks */}
          <h4>Backend Frameworks</h4>
          <Col xs={4} md={2} className="tech-icons"><SiDjango/></Col>
          <Col xs={4} md={2} className="tech-icons"><SiSpringboot/></Col>
          <Col xs={4} md={2} className="tech-icons"><SiDotnet/></Col>
          <Col xs={4} md={2} className="tech-icons"><SiNodedotjs/></Col>

          {/* Databases */}
          <h4>Databases</h4>
          <Col xs={4} md={2} className="tech-icons"><SiMysql/></Col>
          <Col xs={4} md={2} className="tech-icons"><SiMongodb/></Col>

          {/* Data Science and Visualization */}
          <h4>Data Science and Visualization</h4>
          <Col xs={4} md={2} className="tech-icons"><SiPlotly/></Col>
          <Col xs={4} md={2} className="tech-icons"><TbChartBar title="Seaborn"/></Col>
          <Col xs={4} md={2} className="tech-icons"><MdShowChart title="Matplotlib"/></Col>
          <Col xs={4} md={2} className="tech-icons"><BsGraphUp title="Machine Learning"/></Col>
          <Col xs={4} md={2} className="tech-icons"><FaBrain title="Deep Learning"/></Col>
      </Row>
  );
}

export default Techstack;
