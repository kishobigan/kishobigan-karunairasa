import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import resumeData from "../../ResumeData"

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">{resumeData[0].fullName} </span>
            from <span className="purple"> {resumeData[0].address}</span>
            <br />
            I’m currently pursuing my final year in Computer Science and Technology at Uva Wellassa University of Sri Lanka.
            <br />
            I have hands-on experience in software development through various projects
            <br />
            <br />
            and I’m passionate about backend development and data science.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Solving Challenging Problems
            </li>
            <li className="about-activity">
              <ImPointRight /> Browsing and staying up-to-date with tech trends
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new places and cultures
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
