import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I’m a tech enthusiast with a deep interest in solving real-world problems through intelligent systems and efficient infrastructure.
              <br />
              <br />I am proficient in languages like
              <i>
                <b className="purple"> Machine Learning frameworks and tools, </b>
              </i>
              <br />
              <br />
              I actively explore the fields of &nbsp;
              <i>
                <b className="purple">AI and ML  </b> by reading{" "}
                <b className="purple">
                research papers and staying updated with the latest developments.
                </b>
              </i>
              <br />
              <br />
              I'm also interested in<b className="purple">DevOps</b>  and have a solid understanding of concepts like
              <i>
                <b className="purple">
                  {" "}
                  automation, CI/CD, and modern infrastructure tools.
                </b>
              </i>
              &nbsp; 
              <i>
                <b className="purple"></b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/abhi29032004"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
  <a
    href="mailto:abhiaklapura@gmail.com"
    target="_blank"
    rel="noreferrer"
    className="icon-colour home-social-icons"
  >
    <FaEnvelope />
  </a>
</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
