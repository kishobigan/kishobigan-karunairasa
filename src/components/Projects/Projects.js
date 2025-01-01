import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import projectData from '../../data/projectData'
import highlightText from "../HighlighetedText";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectData.map((project, index) => (
              <Col md={4} className="project-card" key={index}>
                <ProjectCard
                    isBlog={project.isBlog}
                    title={project.title}
                    description={highlightText(project.description, project.keywords)}
                    ghLink={project.gitLink}
                />
              </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
