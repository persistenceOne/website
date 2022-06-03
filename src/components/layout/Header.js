import React, { useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import logo from '../../assets/images1/logo.svg'
import {Nav, Navbar, NavDropdown, OverlayTrigger, Tooltip} from "react-bootstrap";
import { useTranslation } from "react-i18next";

import Icon from "../Icon";
import {
    PERSISTENCEONE_DISCORD_URL,
    PERSISTENCEONE_TELEGRAM_URL,
    PERSISTENCEONE_TWITTER_URL,
    PERSISTENCEONE_GITHUB_URL
} from "../../constants/config";
import ReactGa from "react-ga";

const socialList = [
    {
        url: PERSISTENCEONE_TWITTER_URL,
        iconName: 'twitter-logo',
        tooltip: 'twitter'
    },

    {
        url: PERSISTENCEONE_TELEGRAM_URL,
        iconName: 'telegram-plane',
        tooltip: 'telegram'
    },
   {
        url:  PERSISTENCEONE_DISCORD_URL ,
        iconName: 'discord',
        tooltip: 'discord'
    }, {
        url: PERSISTENCEONE_GITHUB_URL,
        iconName: 'github',
        tooltip: 'github'
    }
];

const Header = () => {

    const [mobileMenu, setMobileMenu] = useState(false);
  
    const { t } = useTranslation();

    const toggleMenu = () => {
        // setIsOPen(!isOpen);
        setMobileMenu(!mobileMenu);
        if (document.getElementById('nab-bar-toggle').classList.contains('collapsed')) {
            document.getElementById('nab-bar-toggle').classList.remove('collapsed');
        } else {
            document.getElementById('nab-bar-toggle').classList.add('collapsed');
        }
    };

    const learnTitle = (
        <span>
            Build
             <Icon viewClass="icon" icon="chevron"/>
        </span>
    )



    const ecoSystemTitle = (
        <span>
            Ecosystem
             <Icon viewClass="icon" icon="chevron"/>
        </span>
    )

    const communityTitle = (
        <span>
            Community
             <Icon viewClass="icon" icon="chevron"/>
        </span>
    )

    const socialIcon = (iconName) => {
        ReactGa.event({
            category: 'Sociallinks',
            action: 'Clicked on ' + iconName
        })

    }

    return (
        <React.Fragment>
            <Navbar className="navbar-custom" sticky="top" expand="lg" expanded={mobileMenu}>
                <div className="container p-0">
                <Navbar.Brand href="#home">
                    <NavLink to="/">
                        <img src={logo} alt="logo" />
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"  className="navbar-toggler x" id="nab-bar-toggle"  onClick={toggleMenu}>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <NavDropdown title={learnTitle} id="learn-dropdown">
                          <div className="nav-dropdown-items learn-items">
                              <div className="nav-dropdown-item">
                                <p className="header">Developers</p>
                                  <div className="inner-items">
                                      <a href="https://www.youtube.com/watch?v=tRzPBszn5X4" rel="noopener noreferrer"
                                         target="_blank" className="inner-item">Persistence SDK</a>
                                      <a href="https://www.youtube.com/watch?v=5EfM_-0M7_g" rel="noopener noreferrer"
                                         target="_blank" className="inner-item">Github Repository</a>
                                      <a href="https://www.youtube.com/watch?v=x8FIkYiAPRo" rel="noopener noreferrer"
                                         target="_blank" className="inner-item">Grants/Bug Bounties”</a>
                                      <a href="https://www.youtube.com/watch?v=1kTDDHvuWps" rel="noopener noreferrer"
                                         target="_blank" className="inner-item">Developer Discord Channel</a>
                                  </div>
                              </div>
                              <div className="nav-dropdown-item">
                                  <p className="header">Validators</p>
                                  <div className="inner-items">
                                      <a href="/faq" className="inner-item">Become a Validator</a>
                                      <a href="/faq" className="inner-item">Foundation Delegation Program</a>
                                      <a href="/faq" className="inner-item">RPC End Points</a>
                                      <a href="/faq" className="inner-item">Validator Discord Channel</a>
                                  </div>
                              </div>
                          </div>
                        </NavDropdown>
                        <NavDropdown title={ecoSystemTitle} id="ecosystem-dropdown">
                            <div className="nav-dropdown-items ecosystem-items">
                                <div className="nav-dropdown-item">
                                    <p className="header">Liquid Staking</p>
                                    <div className="inner-items">
                                        <a href="https://pstake.finance/" rel="noopener noreferrer"
                                           target="_blank" className="inner-item">
                                            <img src={logo} alt="pstakeLogo"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="nav-dropdown-item">
                                    <p className="header">PoS Validator</p>
                                    <div className="inner-items">
                                        <a href="https://audit.one/" rel="noopener noreferrer"
                                           target="_blank" className="inner-item">
                                            <img src={logo} alt="auditLogo"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="nav-dropdown-item">
                                    <p className="header">Other Initiatives</p>
                                    <div className="inner-items">
                                        <a href="https://assetmantle.one/" rel="noopener noreferrer"
                                           target="_blank" className="inner-item">AssetMantle</a>
                                        <a href="https://comdex.one/home" rel="noopener noreferrer"
                                           target="_blank" className="inner-item">Comdex</a>
                                        <a href="https://persistence.one/stakedrop" rel="noopener noreferrer"
                                           target="_blank" className="inner-item">Stakedrop</a>
                                        <a href="https://internft.org/" rel="noopener noreferrer"
                                           target="_blank" className="inner-item">interNFT</a>
                                    </div>
                                </div>
                                <div className="nav-dropdown-item">
                                    <p className="header">Grant</p>
                                    <div className="inner-items">
                                        <p className="inner-item">Have an exciting Idea?
                                            Apply for a grant.</p>
                                        <a href="/grants" rel="noopener noreferrer"
                                           target="_blank" className="button-primary button">
                                            Apply
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </NavDropdown>
                        <NavDropdown title={communityTitle} id="community-dropdown">
                            <div className="nav-dropdown-items community-items">
                                <div className="nav-dropdown-item">
                                    <p className="header">forum</p>
                                    <div className="inner-items">
                                        <a className="inner-item para" rel="noopener noreferrer"
                                           target="_blank" href="https://forum.persistence.one/">Engage with the Persistence Community to
                                            exchange and explore ideas for the ecosytem growth </a>
                                    </div>
                                </div>
                                <div className="nav-dropdown-item">
                                    <p className="header">social media</p>
                                    <div className="inner-items">
                                        <div className="links">
                                            {
                                                socialList.map((item, index) => (
                                                    <OverlayTrigger
                                                        key={item.iconName}
                                                        placement="bottom"
                                                        overlay={
                                                            <Tooltip id={`tooltip-${item.iconName}}`}>
                                                                {item.tooltip}
                                                            </Tooltip>
                                                        }
                                                    >
                                                        <a href={item.url} onClick={() => socialIcon(item.iconName)} rel="noopener noreferrer"
                                                           target="_blank"><Icon viewClass="social_icon_imgg"
                                                                                 icon={item.iconName} /></a>
                                                    </OverlayTrigger>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </NavDropdown>
                        <Nav.Link className="nav-link dropdown-toggle" rel="noopener noreferrer"
                                  target="_blank" href="https://medium.com/persistence-blog"
                                 data-toggle="dropdown" aria-haspopup="true"
                                 aria-expanded="false">
                            {t("BLOG")}
                        </Nav.Link>
                    </Nav>
                    <div className="nav-dropdown-item">
                        <div className="inner-items">
                            <div className="links">
                                {
                                    socialList.map((item, index) => (
                                        <OverlayTrigger
                                            key={item.iconName}
                                            placement="bottom"
                                            overlay={
                                                <Tooltip id={`tooltip-${item.iconName}}`}>
                                                    {item.tooltip}
                                                </Tooltip>
                                            }
                                        >
                                            <a href={item.url} onClick={() => socialIcon(item.iconName)} rel="noopener noreferrer"
                                               target="_blank"><Icon viewClass="social_icon_imgg"
                                                                     icon={item.iconName} /></a>
                                        </OverlayTrigger>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                </Navbar.Collapse>
                </div>
            </Navbar>
        </React.Fragment>
    )
};

export default withRouter(Header);
