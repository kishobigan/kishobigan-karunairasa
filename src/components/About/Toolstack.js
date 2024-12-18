import React from "react";
import {Col, Row} from "react-bootstrap";
import {
    SiLinux, SiVisualstudiocode, SiJetbrains, SiPostman, SiSlack, SiTrello,
    SiCanva, SiAndroidstudio, SiMicrosoftoffice, SiGithub, SiFigma, SiTableau,
    SiPowerbi, SiApachehadoop, SiDocker, SiJira, SiMicrosoftexcel, SiWindows
} from "react-icons/si";
import {DiSpark} from "react-icons/di"; // Apache Spark
import {BsFillFileEarmarkTextFill} from "react-icons/bs"; // Overleaf
import {MdOutlineBugReport} from "react-icons/md"; // Selenium
import {BiTestTube} from "react-icons/bi"; // JMeter and TestNG
function Toolstack() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            {/* Version Control and Collaboration */}
            <h4>Version Control and Collaboration</h4>
            <Col xs={4} md={2} className="tech-icons"><SiGithub title="Git/GitHub"/></Col>
            <Col xs={4} md={2} className="tech-icons"><SiSlack title="Slack"/></Col>
            <Col xs={4} md={2} className="tech-icons"><SiTrello title="Trello"/></Col>
            <Col xs={4} md={2} className="tech-icons"><SiJira title="JIRA"/></Col>

            {/* IDEs and Development Tools */}
            <h4>IDEs and Development Tools</h4>
            <Col xs={4} md={2} className="tech-icons"><SiJetbrains title="JetBrains IDEs"/></Col>
            <Col xs={4} md={2} className="tech-icons"><SiVisualstudiocode title="VS Code"/></Col>
            <Col xs={4} md={2} className="tech-icons"><SiDocker title="Docker"/></Col>


            {/* Operating Systems */}
            <h4>Operating Systems</h4>
            <Col xs={4} md={2} className="tech-icons"><SiLinux title="Linux"/></Col>
            <Col xs={4} md={2} className="tech-icons"><SiWindows title="Windows"/></Col>

            {/* Testing Tools */}
            <h4>Testing Tools</h4>
            <Col xs={4} md={2} className="tech-icons"><SiPostman title="Postman"/></Col>
            <Col xs={4} md={2} className="tech-icons"><BiTestTube title="JMeter & TestNG"/></Col>
            <Col xs={4} md={2} className="tech-icons"><MdOutlineBugReport title="Selenium"/></Col>

            {/* Data Analysis and Visualization */}
            <h4>Data Analysis and Visualization</h4>
            <Col xs={4} md={2} className="tech-icons"><SiMicrosoftexcel title="Excel"/></Col>
            <Col xs={4} md={2} className="tech-icons"><SiTableau title="Tableau"/></Col>
            <Col xs={4} md={2} className="tech-icons"><SiPowerbi title="Power BI"/></Col>

            {/* Big Data Tools */}
            <h4>Big Data Tools</h4>
            <Col xs={4} md={2} className="tech-icons"><DiSpark title="Apache Spark"/></Col>
            <Col xs={4} md={2} className="tech-icons"><SiApachehadoop title="Hadoop"/></Col>

            {/* Design and Documentation */}
            <h4>Design and Documentation</h4>
            <Col xs={4} md={2} className="tech-icons"><SiFigma title="Figma"/></Col>
            <Col xs={4} md={2} className="tech-icons"><SiCanva title="Canva"/></Col>
            <Col xs={4} md={2} className="tech-icons"><BsFillFileEarmarkTextFill title="Overleaf"/></Col>
            <Col xs={4} md={2} className="tech-icons"><SiMicrosoftoffice title="Microsoft Office"/></Col>
        </Row>
    );
}

export default Toolstack;
