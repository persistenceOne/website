import React from 'react';
import './index.css';
import logo from '../../assets/logo.png';
import { FaTwitter, FaLinkedin, FaTelegram, FaMedium } from "react-icons/fa";
import {
  Container, Row, Col
} from 'reactstrap';

const Footer = (props) => {
  return (
    <Container className="footer">
      <Row>
        <Col className="social_icons" md="4">
          <ul>
            <li><a rel="noopener noreferrer" href="https://twitter.com/PersistenceOne" title="Twitter" target="_blank"><FaTwitter /></a></li>
            <li><a rel="noopener noreferrer" href="https://www.linkedin.com/company/persistenceone/" title="Linkedin" target="_blank"><FaLinkedin /></a></li>
            <li><a rel="noopener noreferrer" href="https://t.me/PersistenceOne" title="Telegram" target="_blank"><FaTelegram /></a></li>
            <li><a rel="noopener noreferrer" href="https://medium.com/@PersistenceOne" title="Medium" target="_blank"><FaMedium /></a></li>
          </ul>
        </Col>
        <Col className="footer_img" md="4"><img className="logo"
          alt="Persistence" src={logo} />
        </Col>
        <Col className="copyright" md="4">© Persistence 2020 </Col>
      </Row>
    </Container>
  );
}

export default Footer;