import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIconLinkedin from '../assets/img/nav-icon-linkedin.svg';
import navIconGithub from '../assets/img/nav-icon-github.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon footer-social-icon">
                <a href="https://www.linkedin.com/in/raphael-jaiswal/"><img src={navIconLinkedin} alt="Linkedin Icon" /></a>
                <a href="https://github.com/rjaisw12"><img src={navIconGithub} alt="Github Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
