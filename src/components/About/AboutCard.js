import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import resumeData from "../../data/ResumeData"
import aboutData from "../../data/aboutData";

function AboutCard() {

  const { introduction, strengths } = aboutData[0];

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">{resumeData[0].fullName} </span>
            from <span className="purple"> {resumeData[0].address}</span>
            <br />
            {introduction.map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
            ))}
          </p>
          <ul>
            {
              strengths.map((strength, index) => (
                  <li className="about-activity" key={index}>
                    <ImPointRight style={{ marginRight: "8px" }} />{strength}
                  </li>
              ))
            }
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
