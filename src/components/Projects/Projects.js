import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


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
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="OmniBiz - Backend"
              description={`Developed a multi-business management platform
                using <span class="purple">Django</span> and <span class="purple">MySql</span>, implementing separate
                databases for each business with dynamic database
                manipulation. Integrated <span class="purple">Simple-JWT</span> for secure token
                based authentication, <span class="purple">Celery</span> for automated task
                management, and <span class="purple">Django Channels</span> to enable real-time
                updates on the dashboard.`}
              ghLink="https://github.com/kishobigan/OmniBiz-Backend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Vehicle Vista"
              description=
                  {`Vehicle Service Station Connector is a web application
                    that connects vehicle owners with nearby service
                    stations. Built using <span class="purple">React</span>, <span class="purple">PHP</span>, and <span class="purple">MySql</span>, the
                    platform allows users to search for service stations,
                    book appointments, and manage service history.
                    Service stations can efficiently handle bookings and
                    customer information,streamlining operation`}

              ghLink="https://github.com/kishobigan/vehicleVista"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Handy Hero"
              description=
                  {`Built a field worker hiring application using <span class="purple">Angular</span>
                    for the frontend, <span class="purple">ASP.Net Core</span> for the backend, and
                    <span class="purple">MSSQL</span> for database management. The system
                    streamlines the process of hiring and managing field
                    workers, offering a user-friendly interface and
                    efficient backend operations`}

              ghLink="https://github.com/kishobigan/HandyHero"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="LinkedUp"
              description=
                  {`Developed a complete social media web application
                    using <span class="purple">PHP, Html, Css and MySql</span>, featuring user
                    profiles, interactions, and real-time content sharing,
                    with a focus on responsive design and smooth user
                    experience.`}

              ghLink="https://github.com/kishobigan/LinkedUp"

            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="E-Commerce"
              description=
                  {`using <span class="purple">Django, Html, Css and MySql</span>, providing
                    features like product listings, user authentication,
                    shopping carts, and secure transactions.`}

              ghLink="https://github.com/kishobigan/e-commerce-django"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                isBlog={false}
                title="E-Bank"
                description=
                    {`Developed a command-line interface application for e
                      banking using <span class="purple">Java</span>, implementing file handling
                      methods for data storage and management instead of a
                      traditional database, enabling secure transactions and
                      account management.`}

                ghLink="https://github.com/kishobigan/E-Banking-Java"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                isBlog={false}
                title="Basic Calculator"
                description=
                    {`Developed a basic calculator application using <span class="purple">Python</span>
                      as a command-line interface (CLI) tool, enabling users
                      to perform standard arithmetic operations efficiently.`}

                ghLink="hhttps://github.com/kishobigan/Basic_Caluculator"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                isBlog={false}
                title="NIC"
                description=
                    {`Developed a command-line interface application using
                      <span class="purple">C Programming</span> language to retrieve citizen details
                      based on the NIC number in Sri Lanka, providing
                      quick access to essential identification information.`}

                ghLink="https://github.com/kishobigan/Basic_Caluculator"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
