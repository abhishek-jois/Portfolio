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
  SiMatplotlib,
  SiHuggingface, // Transformer
  SiStabilityai, // Diffusion
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="VS Code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Blender">
        <SiBlender />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Transformer (Hugging Face)">
        <SiHuggingface />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Diffusion (Stability AI)">
        <SiStabilityai />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Matplotlib">
        <SiMatplotlib />
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
