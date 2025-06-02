import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import Heart from "../../Assets/Projects/Heart.png";
import download from "../../Assets/Projects/download.jpg";
import wine from "../../Assets/Projects/wine.jpg";

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
              imgPath={chatify}
              isBlog={false}
              title="Plant Disease Prediction using Machine Learning"
              ghLink="https://github.com/abhi29032004/Disease-Prediction-for-Plants"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Pharmacy Management System"
              ghLink="https://github.com/abhi29032004/PharmacyManagementSystem"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Meta Learning"
              ghLink="https://github.com/abhi29032004/MetaLearning"         
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Heart}
              isBlog={false}
              title="4D Heart Model"
              ghLink="https://github.com/abhi29032004/4DHeart_Model"         
            />
          </Col> 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={download}
              isBlog={false}
              title="Word2Vec"
              ghLink="https://github.com/abhi29032004/Word2vec"         
            />
          </Col> 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wine}
              isBlog={false}
              title="Wine Quality"
              ghLink="https://github.com/abhi29032004/Wine-Quality-End-to-End-ML"         
            />
          </Col> 
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
