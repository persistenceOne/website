import React, { useState, useEffect } from 'react';
import { NavLink, withRouter, Link } from 'react-router-dom';
import logo from '../../assets/images1/pstakesymbolblack.svg'
import logotwo from '../../assets/images1/logo.svg'
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import { useTranslation } from "react-i18next";

import Icon from "../Icon";
import {
    PERSISTENCEONE_GITHUB_URL,
    PERSISTENCEONE_TELEGRAM_URL,
    PERSISTENCEONE_TWITTER_URL,
    PERSISTENCEONE_MEDIUM_URL,
    PERSISTENCEONE_REDDIT_URL

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
        url:  PERSISTENCEONE_GITHUB_URL ,
        iconName: 'github',
        tooltip: 'github'
    }, {
        url: PERSISTENCEONE_REDDIT_URL ,
        iconName: 'reddit-round',
        tooltip: 'reddit'
    },{
        url:  PERSISTENCEONE_MEDIUM_URL ,
        iconName: 'mediumlink',
        tooltip: 'medium'
    }
];

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const { t } = useTranslation();
    useEffect(() => {
        document.body.classList = "";
        window.addEventListener("scroll", scrollNavigation, true);
        setIsActive(current => !current);


    }, []);

    const toggleMenu = () => {
        // setIsOPen(!isOpen);
        setMobileMenu(!mobileMenu);
        if (document.getElementById('nab-bar-toggle').classList.contains('collapsed')) {
            document.getElementById('nab-bar-toggle').classList.remove('collapsed');
        } else {
            document.getElementById('nab-bar-toggle').classList.add('collapsed');
        }
    };
    const scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 50) {
            document.getElementById('nav-bar').classList.add('sticky-dark');
        }
        else {

            document.getElementById('nav-bar').classList.remove('sticky-dark');
        }
    }

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
            <Navbar className="navbar-custom fixed-top" expand="lg" expanded={mobileMenu} id="nav-bar">
                <div className="container p-0">
                <Navbar.Brand href="#home">
                    <NavLink to="/">
                        <img src={logotwo} alt="logo" />
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"  className="navbar-toggler x" id="nab-bar-toggle"  onClick={toggleMenu}>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">


                        <NavDropdown className={isActive ? 'custom-dropdown' : ''} title={learnTitle} id="learn-dropdown">
                          <div className="container nav-dropdown-items learn-items pr-0 pl-0">
                              <div className="nav-dropdown-item">
                                <p className="header">Developers</p>
                                  <div className="inner-items">
                                      <div className="inner-item-container">
                                          <a href="https://github.com/persistenceOne/persistenceCore" rel="noopener noreferrer"
                                             target="_blank" className="inner-item">Persistence SDK <Icon viewClass="social_icon_imgg"
                                                                                                          icon={'exlink'} /></a>
                                      </div>
                                      <div className="inner-item-container">
                                      <a href="https://github.com/persistenceOne" rel="noopener noreferrer"
                                         target="_blank" className="inner-item">Github Repository <Icon viewClass="social_icon_imgg"
                                                                                                        icon={'exlink'} /></a>
                                      </div>
                                      <div className="inner-item-container">
                                      <a href="https://drive.google.com/file/d/12cjxcyqFdVDY55i4Wh_31k9viVciemRr/view" rel="noopener noreferrer"
                                         target="_blank" className="inner-item">Ecosystem Grants <Icon viewClass="social_icon_imgg"
                                                                                                          icon={'exlink'} /></a>
                                      </div>
                                      <div className="inner-item-container">
                                      <a href="https://discord.com/invite/qXRmTTGcYD" rel="noopener noreferrer"
                                         target="_blank" className="inner-item">Developer Discord Channel <Icon viewClass="social_icon_imgg"
                                                                                                                icon={'exlink'} /></a>
                                      </div>
                                  </div>
                              </div>
                              <div className="nav-dropdown-item">
                                  <p className="header">Validators</p>
                                  <div className="inner-items">
                                      <div className="inner-item-container">
                                      <a href="https://github.com/persistenceOne/awesome-persistence/blob/main/Validator.md"
                                         target="_blank" rel="noopener noreferrer" className="inner-item">Become a Validator <Icon viewClass="social_icon_imgg"
                                                                                                         icon={'exlink'} /></a>
                                      </div>
                                      <div className="inner-item-container">
                                      <a href="https://drive.google.com/file/d/1FRFNZxh894K5LIfvZ5n5zvXTXZ_YF3Qt/view?usp=sharing"
                                         className="inner-item" target="_blank" rel="noopener noreferrer">Foundation Delegation Program <Icon viewClass="social_icon_imgg"
                                                                                                                icon={'exlink'} /></a>
                                      </div>
                                      <div className="inner-item-container">
                                      <a href="https://rpc.core.persistence.one/" target="_blank" rel="noopener noreferrer" className="inner-item">RPC End Points <Icon viewClass="social_icon_imgg"
                                                                                                                                                                        icon={'exlink'} /></a>
                                      </div>
                                      <div className="inner-item-container">
                                      <a href="https://discord.com/login?redirect_to=%2Fchannels%2F796174129077813248%2F844460782447362048"
                                         target="_blank" rel="noopener noreferrer" className="inner-item">Validator Discord Channel <Icon viewClass="social_icon_imgg"
                                                                                                                                          icon={'exlink'} /></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                        </NavDropdown>
                        <NavDropdown className={isActive ? 'custom-dropdown' : ''} title={ecoSystemTitle} id="ecosystem-dropdown">
                            <div className="container nav-dropdown-items ecosystem-items pl-0 pr-0">
                                <div className="nav-dropdown-item">
                                    <div className="inner-items firstone">
                                        <div className="inner-item-container">
                                        <a href="https://pstake.finance/" rel="noopener noreferrer"
                                           target="_blank" className="inner-item m-0">
                                            <img src={logo} alt="pstakeLogo"/>
                                            <p className="header logo m-0">Liquid Staking Protocol</p>

                                        </a>
                                        </div>
                                    </div>
                                    <div className="inner-items mt-2">
                                        <div className="inner-item-container">
                                        <p className="inner-item ml-3 mb-0">
                                            BORROWING & LENDING
                                            <p className="header logo inner m-0 p-0">Coming Soon</p>
                                        </p>
                                        </div>
                                    </div>
                                    <div className="inner-items">
                                        <div className="inner-item-container">
                                        <p className="inner-item ml-3 mb-0">
                                            INTERCHAIN DEX
                                            <p className="header logo inner m-0 p-0">Coming Soon</p>
                                        </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="nav-dropdown-item">
                                    <p className="header">EXPLORER</p>
                                    <div className="inner-items">
                                        <div className="inner-item-container">
                                        <a href="https://explorer.persistence.one/" rel="noopener noreferrer"
                                           target="_blank" className="inner-item">Persistence Explorer&nbsp;
                                            <Icon viewClass="social_icon_imgg"
                                                  icon={'exlink'} />
                                        </a>
                                        </div>
                                        <div className="inner-item-container">
                                        <a href="https://www.mintscan.io/persistence" rel="noopener noreferrer"
                                           target="_blank" className="inner-item">Mintscan  <Icon viewClass="social_icon_imgg"
                                                                                                  icon={'exlink'} /></a>
                                        </div>
                                        <div className="inner-item-container">
                                        <a href="https://hubble.figment.io/persistence/chains/core-1" rel="noopener noreferrer"
                                           target="_blank" className="inner-item">Hubble  <Icon viewClass="social_icon_imgg"
                                                                                                icon={'exlink'} /></a>
                                        </div>

                                    </div>
                                </div>
                                <div className="nav-dropdown-item">
                                    <p className="header">WALLETS</p>
                                    <div className="inner-items">
                                        <div className="inner-item-container">
                                        <a href="https://wallet.keplr.app/#/dashboard" rel="noopener noreferrer"
                                           target="_blank" className="inner-item">Keplr <Icon viewClass="social_icon_imgg"
                                                                                              icon={'exlink'} /></a>
                                        </div>
                                        <div className="inner-item-container">

                                        <a href="https://www.cosmostation.io/" rel="noopener noreferrer"
                                           target="_blank" className="inner-item">Cosmostation <Icon viewClass="social_icon_imgg"
                                                                                                     icon={'exlink'} /></a>
                                        </div>
                                        <div className="inner-item-container">
                                        <a href="https://coin98.com/" rel="noopener noreferrer"
                                           target="_blank" className="inner-item">Coin98 <Icon viewClass="social_icon_imgg"
                                                                                               icon={'exlink'} /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="nav-dropdown-item buttoneco">

                                    <a href="/ecosystem" rel="noopener noreferrer"
                                       className="inner-item">Explore All Apps </a>
                                </div>
                            </div>
                        </NavDropdown>
                        <NavDropdown className={isActive ? 'custom-dropdown' : ''} title={communityTitle} id="community-dropdown">
                            <div className="container nav-dropdown-items community-items pl-0 pr-0">
                                <div className="nav-dropdown-item">

                                    <p className="header">PROGRAM</p>
                                    <div className="inner-items">
                                        <div className="inner-item-container">
                                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeeewzYI2E3HXDZaZHa2KH3NULw30HnRmiu33EYL75H1op-Dw/viewform" rel="noopener noreferrer"
                                           target="_blank" className="inner-item">Guardians Program <Icon viewClass="social_icon_imgg"
                                                                                              icon={'exlink'} /></a>
                                        </div>
                                        <div className="inner-item-container m-none">
                                            <Link className="inner-item">&nbsp;</Link>
                                        </div>
                                        <div className="inner-item-container m-none">
                                            <Link className="inner-item">&nbsp;</Link>
                                        </div>


                                    </div>
                                </div>
                                <div className="nav-dropdown-item">
                                    <p className="header">tutorials</p>
                                    <div className="inner-items">
                                        <div className="inner-item-container">
                                        <a href="https://medium.com/persistence-blog/persistence-xprt-staking-guide-4504cf9a19df" rel="noopener noreferrer"
                                           target="_blank" className="inner-item">Stake $XPRT <Icon viewClass="social_icon_imgg"
                                                                                              icon={'exlink'} /></a>
                                        </div>
                                        <div className="inner-item-container">
                                        <a href="https://www.youtube.com/watch?v=QG7VCqGFc_8" rel="noopener noreferrer"
                                           target="_blank" className="inner-item">Provide Liquidity <Icon viewClass="social_icon_imgg"
                                                                                                     icon={'exlink'} /></a>
                                        </div>
                                        <div className="inner-item-container">
                                        <a href="https://medium.com/persistence-blog/persistence-xprt-wallet-guide-dbf5e27100f3" rel="noopener noreferrer"
                                           target="_blank" className="inner-item">Setup XPRT wallet <Icon viewClass="social_icon_imgg"
                                                                                               icon={'exlink'} /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="nav-dropdown-item">
                                    <p className="header">forum</p>
                                    <div className="inner-items">
                                        <div className="inner-item-container">
                                        <a href="https://forum.persistence.one/" rel="noopener noreferrer"
                                           target="_blank" className="inner-item">Community Forum <Icon viewClass="social_icon_imgg"
                                                                                                        icon={'exlink'} /></a>
                                        </div>
                                        <div className="inner-item-container">
                                        <a href="/faq" rel="noopener noreferrer"
                                            className="inner-item">Community FAQs <Icon viewClass="social_icon_imgg"
                                                                                                       icon={'exlink'} /></a>
                                        </div>
                                        <div className="inner-item-container">
                                            <Link className="inner-item">&nbsp;</Link>
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
                                            <a href={item.url} onClick={() => socialIcon(item.iconName)} rel="noopener noreferrer"
                                               target="_blank"><Icon viewClass="social_icon_imgg"
                                                                     icon={item.iconName} /></a>
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
