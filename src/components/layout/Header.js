import React, { useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import logo from '../../assets/images/logo.svg'
import {Nav, Navbar, NavDropdown, OverlayTrigger, Tooltip} from "react-bootstrap";
import { useTranslation } from "react-i18next";
import pstakeLogo from "../../assets/images/logos/pstake.svg";
import auditLogo from "../../assets/images/logos/audit.svg";

import Icon from "../Icon";
import {
    PERSISTENCEONE_DISCORD_URL, PERSISTENCEONE_LINKEDIN_URL, PERSISTENCEONE_MEDIUM_URL, PERSISTENCEONE_REDDIT_URL,
    PERSISTENCEONE_TELEGRAM_ANNOUNCEMENTS_URL,
    PERSISTENCEONE_TELEGRAM_URL,
    PERSISTENCEONE_TWITTER_URL, PERSISTENCEONE_YOUTUBE_URL
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
        url:  PERSISTENCEONE_TELEGRAM_ANNOUNCEMENTS_URL ,
        iconName: 'announcements',
        tooltip: 'announcements'
    }, {
        url:  PERSISTENCEONE_DISCORD_URL ,
        iconName: 'discord',
        tooltip: 'discord'
    }, {
        url: PERSISTENCEONE_REDDIT_URL ,
        iconName: 'reddit-round',
        tooltip: 'reddit'
    }, {
        url:  PERSISTENCEONE_YOUTUBE_URL ,
        iconName: 'youtube',
        tooltip: 'youtube'
    }, {
        url:  PERSISTENCEONE_MEDIUM_URL ,
        iconName: 'medium-m',
        tooltip: 'medium'
    }, {
        url: PERSISTENCEONE_LINKEDIN_URL ,
        iconName: 'linkedin-footer',
        tooltip: 'linkedIn'
    },
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
            Learn
             <Icon viewClass="icon" icon="chevron"/>
        </span>
    )

    const networkTitle = (
        <span>
            Network
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
                    <Nav className="ml-auto">
                        <NavDropdown title={learnTitle} id="learn-dropdown">
                          <div className="nav-dropdown-items learn-items">
                              <div className="nav-dropdown-item">
                                <p className="header">Guides & Tutorials</p>
                                  <div className="inner-items">
                                      <a href="https://www.youtube.com/watch?v=tRzPBszn5X4" rel="noopener noreferrer"
                                         target="_blank" className="inner-item">Introduction to Persistence</a>
                                      <a href="https://www.youtube.com/watch?v=5EfM_-0M7_g" rel="noopener noreferrer"
                                         target="_blank" className="inner-item">Multiproduct Vision</a>
                                      <a href="https://www.youtube.com/watch?v=x8FIkYiAPRo" rel="noopener noreferrer"
                                         target="_blank" className="inner-item">Redefining “Defi”</a>
                                      <a href="https://www.youtube.com/watch?v=1kTDDHvuWps" rel="noopener noreferrer"
                                         target="_blank" className="inner-item">Disrupting Proof-of-Stake</a>
                                  </div>
                              </div>
                              <div className="nav-dropdown-item">
                                  <p className="header">FAQS</p>
                                  <div className="inner-items">
                                      <a href="/faq" className="inner-item">What is Persistence?</a>
                                      {/*<p className="inner-item" onClick={()=>handleRoute('/faq')}>Wallet</p>*/}
                                      <a href="/faq" className="inner-item">What is XPRT?</a>
                                      <a href="/faq" className="inner-item">What is the Persistence vision?</a>
                                  </div>
                              </div>
                          </div>
                        </NavDropdown>
                        <NavDropdown title={networkTitle} id="network-dropdown">
                            <div className="nav-dropdown-items network-items">
                                <div className="nav-dropdown-item">
                                    <p className="header">Native</p>
                                    <div className="inner-items">
                                        <a href="https://github.com/persistenceOne" rel="noopener noreferrer"
                                           target="_blank" className="inner-item">Persistenk SDK</a>
                                        <a href="https://wallet.keplr.app/#/dashboard" rel="noopener noreferrer"
                                           target="_blank" className="inner-item">Persistence Wallet</a>
                                        <a href="https://explorer.persistence.one/" rel="noopener noreferrer"
                                           target="_blank" className="inner-item">Persistence explorer</a>
                                        <a href="https://bridge.persistence.one/" rel="noopener noreferrer"
                                           target="_blank"className="inner-item">Persistence Bridge</a>
                                        <a href="/xprttoken" rel="noopener noreferrer"
                                           target="_blank" className="inner-item">XPRT</a>
                                    </div>
                                </div>
                                <div className="nav-dropdown-item">
                                    <p className="header">External Tools</p>
                                    <div className="inner-items sub">
                                        <div className="sub-inner-items">
                                            <p className="sub-inner-items-title">Wallet</p>
                                            <a href="https://wallet.keplr.app/#/dashboard" rel="noopener noreferrer"
                                               target="_blank" className="inner-item">Keplr</a>
                                            <a href="https://wallet.cosmostation.io/persistence" rel="noopener noreferrer"
                                               target="_blank" className="inner-item">Cosmostation</a>
                                            <a href="https://www.ledger.com/" rel="noopener noreferrer"
                                               target="_blank" className="inner-item">Ledger</a>
                                            <a href="https://coin98.com/" rel="noopener noreferrer"
                                               target="_blank" className="inner-item">Coin98</a>
                                        </div>
                                        <div className="sub-inner-items">
                                            <p className="sub-inner-items-title">Explorers</p>
                                            <a href="https://www.mintscan.io/persistence" rel="noopener noreferrer"
                                               target="_blank" className="inner-item">Mintscan</a>
                                            <a href="https://hubble.figment.io/persistence/chains/core-1" rel="noopener noreferrer"
                                               target="_blank" className="inner-item">Hubble</a>
                                            <a href="https://persistence.aneka.io/" rel="noopener noreferrer"
                                               target="_blank" className="inner-item">Aneka</a>
                                            <a href="https://ping.pub/persistence" rel="noopener noreferrer"
                                               target="_blank" className="inner-item">Ping Explorer</a>
                                        </div>
                                        <div className="sub-inner-items">
                                            <p className="sub-inner-items-title">dashboard</p>
                                            <a href="https://mapofzones.com/zone?" rel="noopener noreferrer"
                                               target="_blank" className="inner-item">Map of Zones</a>
                                        </div>
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
                                            <img src={pstakeLogo} alt="pstakeLogo"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="nav-dropdown-item">
                                    <p className="header">PoS Validator</p>
                                    <div className="inner-items">
                                        <a href="https://audit.one/" rel="noopener noreferrer"
                                           target="_blank" className="inner-item">
                                            <img src={auditLogo} alt="auditLogo"/>
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
                </Navbar.Collapse>
                </div>
            </Navbar>
        </React.Fragment>
    )
};

export default withRouter(Header);
