import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { FaTwitter, FaLinkedin, FaTelegram, FaMedium } from 'react-icons/fa';
import './index.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
} from 'reactstrap';

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <Container>
            <Navbar light expand="md">
                <NavbarBrand href="/"><img
                    alt="Persistence"
                    className="logo"
                    src={logo} /></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse navbar isOpen={isOpen}>
                    <Nav navbar className="mr-auto nav_align">
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://medium.com/@PersistenceOne" rel="nofollow" target="_blank">Blog</NavLink>
                        </NavItem>
                        <NavItem>
                            <ul className="social_icons">
                                <li>|</li>
                                <li><a rel="noopener noreferrer" href="https://twitter.com/PersistenceOne" target="_blank" title="Twitter"><FaTwitter /></a></li>
                                <li><a rel="noopener noreferrer" href="https://www.linkedin.com/company/persistenceone/" target="_blank" title="Linkedin"><FaLinkedin /></a></li>
                                <li><a rel="noopener noreferrer" href="https://t.me/PersistenceOne" target="_blank" title="Telegram"><FaTelegram /></a></li>
                                <li><a rel="noopener noreferrer" href="https://medium.com/@PersistenceOne" target="_blank" title="Medium"><FaMedium /></a></li>
                            </ul>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </Container>
    );
};

export default Example;
