import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiBlender,
  SiTensorflow,
  SiDocker,
  SiKubernetes,
  SiPandas,
  SiNumpy,
  SiKeras,
} from "react-icons/si";
import { FaRobot, FaBrain, FaChartLine } from "react-icons/fa"; // Alternative icons

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="VS Code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Blender">
        <SiBlender />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Transformer (AI)">
        <FaRobot />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Diffusion (AI)">
        <FaBrain />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Matplotlib">
        <FaChartLine />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="NumPy">
        <SiNumpy />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Pandas">
        <SiPandas />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Keras">
        <SiKeras />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="TensorFlow">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Docker">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Kubernetes">
        <SiKubernetes />
      </Col>
    </Row>
  );
}

export default Toolstack;