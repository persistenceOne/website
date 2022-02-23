import React, { useState, useEffect } from 'react';
import { NavLink, withRouter, useHistory } from 'react-router-dom';
import logo from '../../assets/images1/logo.png'
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import { useMediaQuery } from 'react-responsive'
import { useTranslation } from "react-i18next";
import walletLogo from "../../assets/images/logos/wallet.svg";
import explorerLogo from "../../assets/images/logos/explorer.svg";
import bridgeLogo from "../../assets/images/logos/bridge.svg";
import pstakeLogo from "../../assets/images/logos/pstake.svg";
import assetMantleLogo from "../../assets/images/logos/assetMantle.svg";
import auditLogo from "../../assets/images/logos/audit.svg";
import comdexLogo from "../../assets/images/logos/comdex.svg";

import Icon from "../Icon";




let explorerURL = process.env.REACT_APP_EXPLORER_URL;
const Header = () => {

    let history = useHistory();
    const [mobileMenu, setMobileMenu] = useState(false);
  
    const [activeTab, setActiveTabs] = useState('intenft-tab');
    const [productActiveTab, setProductActiveTab] = useState('comdex-tab');
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState('English');
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 992px)'
    })

    const isLandScape = useMediaQuery({
        query: '(max-width: 991px)'
    })

    useEffect(() => {
        const languageType = localStorage.getItem('language');
        if (languageType !== '') {
            setLanguage(languageType);
        }
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

    const handleRoute = (route) =>{
        setMobileMenu(false);
        history.push(route);
    }
    return (
        <React.Fragment>
            <Navbar className="navbar-custom" sticky="top" expand="lg" expanded={mobileMenu}>
                <div className="container p-0">
                <Navbar.Brand href="#home">
                    <NavLink to="/">
                        <img src={logo} alt="logo" /></NavLink>
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
                                      <a href="/faq" className="inner-item">Introduction Persistence</a>
                                      <a href="/faq" className="inner-item">Multiproduct Vision</a>
                                      <a href="/faq" className="inner-item">Redefining “Defi”</a>
                                      <a href="/faq" className="inner-item">Disrupting Proof-of-Stake</a>
                                  </div>
                              </div>
                              <div className="nav-dropdown-item">
                                  <p className="header">FAQS</p>
                                  <div className="inner-items">
                                      <a href="/faq" className="inner-item">Wallet</a>
                                      {/*<p className="inner-item" onClick={()=>handleRoute('/faq')}>Wallet</p>*/}
                                      <a href="/faq" className="inner-item">Explorer</a>
                                      <a href="/faq" className="inner-item">Map of Zones</a>
                                      <a href="/faq" className="inner-item">XPRT</a>
                                      <a href="/faq" className="inner-item">Bridge</a>
                                  </div>
                              </div>
                          </div>
                        </NavDropdown>
                        <NavDropdown title={networkTitle} id="network-dropdown">
                            <div className="nav-dropdown-items network-items">
                                <div className="nav-dropdown-item">
                                    <p className="header">Wallet</p>
                                    <div className="inner-items">
                                        <a href="/faq" className="inner-item">
                                            <img src={walletLogo} alt="walletLogo"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="nav-dropdown-item">
                                    <p className="header">Explorer</p>
                                    <div className="inner-items">
                                        <a href="/faq" className="inner-item">
                                            <img src={explorerLogo} alt="explorerLogo"/>
                                        </a>

                                    </div>
                                </div>
                                <div className="nav-dropdown-item">
                                    <p className="header">Map of Zones</p>
                                    <div className="inner-items">
                                        <a href="/faq" className="inner-item">Persistence SDK</a>
                                    </div>
                                </div>
                                <div className="nav-dropdown-item">
                                    <p className="header">XPRT</p>
                                    <div className="inner-items">
                                        <a href="/faq" className="inner-item">Persistence SDK</a>
                                    </div>
                                </div>
                                <div className="nav-dropdown-item">
                                    <p className="header">Bridge</p>
                                    <div className="inner-items">
                                        <a href="/faq" className="inner-item">
                                            <img src={bridgeLogo} alt="bridgeLogo"/>
                                        </a>
                                        <p className="inner-item">Persistence SDK</p>
                                    </div>
                                </div>
                            </div>
                        </NavDropdown>
                        <NavDropdown title={ecoSystemTitle} id="ecosystem-dropdown">
                            <div className="nav-dropdown-items ecosystem-items">
                                <div className="nav-dropdown-item">
                                    <p className="header">PSTAKE</p>
                                    <div className="inner-items">
                                        <a href="/faq" className="inner-item">
                                            <img src={pstakeLogo} alt="pstakeLogo"/>
                                        </a>
                                        <p className="inner-item">Liquid Staking</p>
                                    </div>
                                </div>
                                <div className="nav-dropdown-item">
                                    <p className="header">Audit</p>
                                    <div className="inner-items">
                                        <a href="/faq" className="inner-item">
                                            <img src={auditLogo} alt="auditLogo"/>
                                        </a>
                                        <p className="inner-item">PoS Validator</p>
                                    </div>
                                </div>
                                <div className="nav-dropdown-item">
                                    <p className="header">Asset Mantel</p>
                                    <div className="inner-items">
                                        <a href="/faq" className="inner-item">
                                            <img src={assetMantleLogo} alt="assetMantleLogo"/>
                                        </a>
                                        <p className="inner-item">NFT Marketplace</p>
                                    </div>
                                </div>
                                <div className="nav-dropdown-item">
                                    <p className="header">Comdex</p>
                                    <div className="inner-items">
                                        <a href="/faq" className="inner-item">
                                            <img src={comdexLogo} alt="comdexLogo"/>
                                        </a>
                                        <p className="inner-item">Persistenk SDK</p>
                                    </div>
                                </div>
                                <div className="nav-dropdown-item">
                                    <p className="header">stakedrop</p>
                                    <div className="inner-items">
                                        <a href="/faq" className="inner-item">
                                            Persistenk SDK
                                        </a>
                                    </div>
                                </div>
                                <div className="nav-dropdown-item">
                                    <p className="header">Grant</p>
                                    <div className="inner-items">
                                        <p className="inner-item">Have an exciting Idea?
                                            Apply for a grant.</p>
                                        <a href="" className="button-primary button">
                                            Apply
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </NavDropdown>
                        <NavDropdown title={communityTitle} id="community-dropdown">
                            <div className="nav-dropdown-items community-items">
                                <div className="nav-dropdown-item">
                                    <p className="header">Guides & Tutorials</p>
                                    <div className="inner-items">
                                        <p className="inner-item">Intro3</p>
                                    </div>
                                </div>
                                <div className="nav-dropdown-item">
                                    <p className="header">social media</p>
                                    <div className="inner-items">
                                        <p className="inner-item">Twitter</p>
                                    </div>
                                </div>
                            </div>
                        </NavDropdown>
                        <NavLink className="nav-link dropdown-toggle" to="/products"
                                 data-toggle="dropdown" aria-haspopup="true"
                                 aria-expanded="false">
                            {t("BLOG")}
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
                </div>
            </Navbar>

            {/*<div id="is-sticky">*/}

            {/*    <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky" id="nav-bar"*/}
            {/*        data-aos="fade-down">*/}
            {/*        <div className="container-fluid bannernav-section">*/}
            {/*          */}


            {/*        </div>*/}
            {/*        <div className="container">*/}

            {/*            <Nav.Link className="navbar-brand logo text-uppercase" href="/">*/}
            {/*                <img src={logo} alt="logo" /></Nav.Link>*/}
            {/*            <button className="navbar-toggler x collapsed" id="nab-bar-toggle" type="button"*/}
            {/*                data-toggle="collapse" onClick={toggleMenu}*/}
            {/*                data-target="#navbarsExample05" aria-controls="navbarsExample05"*/}
            {/*                aria-expanded="false" aria-label="Toggle navigation">*/}
            {/*                <span className="icon-bar"></span>*/}
            {/*                <span className="icon-bar"></span>*/}
            {/*                <span className="icon-bar"></span>*/}
            {/*            </button>*/}
            {/*            <div*/}
            {/*                className={isOpen ? "collapse navbar-collapse show" : "collapse navbar-collapse"}*/}
            {/*                id="navbarCollapse">*/}
            {/*                <ul className="navbar-nav ml-auto navbar-left"*/}
            {/*                    id="mySidenav">*/}
            {/*                    <li className="nav-item dropdown company">*/}
            {/*                        <NavLink className="nav-link dropdown-toggle" to="/vision"*/}
            {/*                            id="company-nav-dropdown"*/}
            {/*                            role="button" data-toggle="dropdown" aria-haspopup="true"*/}
            {/*                            aria-expanded="false">*/}
            {/*                            {t("COMPANY")}*/}
            {/*                        </NavLink>*/}
            {/*                        <div className="dropdown-menu company-menu"*/}
            {/*                            aria-labelledby="company-nav-dropdown">*/}
            {/*                            <NavLink className="nav-link dropdown-item" to="/vision"*/}
            {/*                                onClick={() => setActiveTab('/vision')}>*/}
            {/*                                {t("ABOUT")}*/}
            {/*                            </NavLink>*/}
            {/*                            <NavLink className="nav-link dropdown-item" to="/roadmap"*/}
            {/*                                onClick={() => setActiveTab('/roadmap')}>*/}
            {/*                                {t("ROADMAP")}*/}
            {/*                            </NavLink>*/}
            {/*                        </div>*/}

            {/*                    </li>*/}

            {/*                    <li className="nav-item dropdown ecosystem">*/}
            {/*                        <NavLink className="nav-link dropdown-toggle" to="/products"*/}
            {/*                            id="products-nav-dropdown"*/}
            {/*                            onClick={() => setActiveTab('/products')}*/}
            {/*                            role="button" data-toggle="dropdown" aria-haspopup="true"*/}
            {/*                            aria-expanded="false">*/}
            {/*                            {t("PRODUCTS")}*/}
            {/*                        </NavLink>*/}
            {/*                        <div className="dropdown-menu ecosystem-dropdown"*/}
            {/*                            aria-labelledby="ecosystem-nav-dropdown">*/}
            {/*                            <div className="dropdown-content">*/}
            {/*                                <div className="items">*/}
            {/*                                    <a className="nav-link dropdown-item primary-medium-color"*/}
            {/*                                        onMouseOver={() => onHoverProducts('comdex-tab')}*/}
            {/*                                        href={COMDEX_URL}*/}
            {/*                                        rel="noopener noreferrer"*/}
            {/*                                        target="_blank">*/}
            {/*                                        <div className="dropdown-image">*/}
            {/*                                            <img src={dropdown_comdex} alt="dropdown_asset" />*/}
            {/*                                        </div>*/}
            {/*                                        {t("COMDEX")}*/}
            {/*                                    </a>*/}
            {/*                                    <a className="nav-link dropdown-item primary-medium-color"*/}
            {/*                                        onMouseOver={() => onHoverProducts('audit-tab')}*/}
            {/*                                        href={AUDIT_URL}*/}
            {/*                                        rel="noopener noreferrer"*/}
            {/*                                        target="_blank">*/}
            {/*                                        <div className="dropdown-image">*/}
            {/*                                            <img src={dropdown_audit} alt="dropdown_asset" />*/}
            {/*                                        </div>*/}
            {/*                                        {t("AUDIT_ONE")}*/}
            {/*                                    </a>*/}
            {/*                                    <a className="nav-link dropdown-item primary-medium-color"*/}
            {/*                                        onMouseOver={() => onHoverProducts('pstake-tab')}*/}
            {/*                                        href={PSTAKE_WEB_URL}*/}
            {/*                                        rel="noopener noreferrer"*/}
            {/*                                        target="_blank">*/}
            {/*                                        <div className="dropdown-image">*/}
            {/*                                            <img src={dropdown_pstake} alt="dropdown_asset" />*/}
            {/*                                        </div>*/}
            {/*                                        {t("PSTAKE")}*/}
            {/*                                    </a>*/}
            {/*                                    <a className="nav-link dropdown-item primary-medium-color"*/}
            {/*                                        onMouseOver={() => onHoverProducts('mantle-tab')}*/}
            {/*                                        href={ASSETMANTLE_TWITTER_URL}*/}
            {/*                                        rel="noopener noreferrer"*/}
            {/*                                        target="_blank">*/}
            {/*                                        <div className="dropdown-image">*/}
            {/*                                            <img src={dropdown_asset} alt="dropdown_asset" />*/}
            {/*                                        </div>*/}
            {/*                                        {t("ASSET_MANTLE")}*/}
            {/*                                    </a>*/}

            {/*                                </div>*/}
            {/*                                <div className="items-content">*/}
            {/*                                    <div className="item internft show" id="comdex-tab">*/}
            {/*                                        <p>{t("COMDEX_TAB_CONTENT")} </p>*/}
            {/*                                        <a href={COMDEX_URL} rel="noopener noreferrer"*/}
            {/*                                            target="_blank"*/}
            {/*                                            className="button">{t("LEARN_MORE")}</a>*/}
            {/*                                    </div>*/}
            {/*                                    <div className="item stake-drop" id="audit-tab">*/}
            {/*                                        <p>{t("AUDIT_TAB_CONTENT")}</p>*/}

            {/*                                        <a href={AUDIT_URL} rel="noopener noreferrer"*/}
            {/*                                            target="_blank"*/}
            {/*                                            className="button">{t("LEARN_MORE")}</a>*/}
            {/*                                    </div>*/}
            {/*                                    <div className="item stake-drop" id="pstake-tab">*/}
            {/*                                        <p> {t("PSTAKE_TAB_CONTENT")}*/}
            {/*                                        </p>*/}
            {/*                                        <a href={PSTAKE_WEB_URL}*/}
            {/*                                            rel="noopener noreferrer"*/}
            {/*                                            target="_blank"*/}
            {/*                                            className="button">{t("LEARN_MORE")}</a>*/}
            {/*                                    </div>*/}
            {/*                                    <div className="item stake-drop" id="mantle-tab">*/}
            {/*                                        <p>{t("MANTLE_TAB_CONTENT")}</p>*/}
            {/*                                        <a href={ASSETMANTLE_TWITTER_URL}*/}
            {/*                                            rel="noopener noreferrer"*/}
            {/*                                            target="_blank"*/}
            {/*                                            className="button">{t("LEARN_MORE")}</a>*/}
            {/*                                    </div>*/}
            {/*                                    <div className="item stake-drop" id="plend-tab">*/}
            {/*                                        <p>{t("PLEND_TAB_CONTENT")}</p>*/}
            {/*                                        <button className="button">{t("COMING_SOON")}</button>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </li>*/}

            {/*                    <li className="nav-item"><NavLink className="nav-link primary-medium-color"*/}
            {/*                        to="/technology"*/}
            {/*                        onClick={() => setActiveTab('/technology')}>{t("TECHNOLOGY")}</NavLink>*/}
            {/*                    </li>*/}
            {/*                    <li className="nav-item dropdown ecosystem">*/}
            {/*                        <NavLink className="nav-link dropdown-toggle" to="/ecosystem"*/}
            {/*                            id="ecosystem-nav-dropdown"*/}
            {/*                            onClick={() => setActiveTab('/ecosystem')}*/}
            {/*                            role="button" data-toggle="dropdown" aria-haspopup="true"*/}
            {/*                            aria-expanded="false">*/}
            {/*                            {t("ECOSYSTEMS")}*/}
            {/*                        </NavLink>*/}
            {/*                        <div className="dropdown-menu ecosystem-dropdown"*/}
            {/*                            aria-labelledby="ecosystem-nav-dropdown">*/}
            {/*                            <div className="dropdown-content">*/}
            {/*                                <div className="items">*/}
            {/*                                    <NavLink className="nav-link dropdown-item primary-medium-color"*/}
            {/*                                        onMouseOver={() => onHover('intenft-tab')}*/}
            {/*                                        to="/ecosystem"*/}
            {/*                                        onClick={() => scrollToID("section-nft", "ecosystem")}>*/}
            {/*                                        <div className="dropdown-image">*/}
            {/*                                            <Icon*/}
            {/*                                                viewClass="arrow-right"*/}
            {/*                                                icon="dropdown-square" />*/}
            {/*                                        </div>*/}
            {/*                                        {t("INTER_NFT")}*/}
            {/*                                    </NavLink>*/}
            {/*                                    <NavLink*/}
            {/*                                        className="nav-link dropdown-item stake-drop-link primary-medium-color"*/}
            {/*                                        onMouseOver={() => onHover('stake-drop-tab')}*/}
            {/*                                        to="/stakedrop" onClick={() => setActiveTab('/stakedrop')}>*/}
            {/*                                        <div className="dropdown-image">*/}
            {/*                                            <Icon*/}
            {/*                                                viewClass="arrow-right"*/}
            {/*                                                icon="dropdown-triangle" />*/}
            {/*                                        </div>*/}
            {/*                                        {t("STAKEDROP")}*/}
            {/*                                    </NavLink>*/}
            {/*                                    <NavLink className="nav-link dropdown-item primary-medium-color"*/}
            {/*                                        onMouseOver={() => onHover('validators-tab')}*/}
            {/*                                        to="/ecosystem"*/}
            {/*                                        onClick={() => scrollToID("section-validators", "ecosystem")}>*/}
            {/*                                        <div className="dropdown-image">*/}
            {/*                                            <Icon*/}
            {/*                                                viewClass="arrow-right"*/}
            {/*                                                icon="dropdown-polygon" />*/}
            {/*                                        </div>*/}
            {/*                                        {t("HEADVALIDATOR")}*/}
            {/*                                    </NavLink>*/}
            {/*                                    <NavLink className="nav-link dropdown-item primary-medium-color"*/}
            {/*                                        onMouseOver={() => onHover('xprt-tab')}*/}
            {/*                                        to="/ecosystem"*/}
            {/*                                        onClick={() => scrollToID("section-xprt", "ecosystem")}>*/}
            {/*                                        <div className="dropdown-image">*/}
            {/*                                            <Icon*/}
            {/*                                                viewClass="dropdown-icon"*/}
            {/*                                                icon="dropdown-circle" />*/}
            {/*                                        </div>*/}
            {/*                                        {t("XPRT_TOKEN")}*/}
            {/*                                    </NavLink>*/}
            {/*                                </div>*/}
            {/*                                <div className="items-content">*/}
            {/*                                    <div className="item internft show" id="intenft-tab">*/}
            {/*                                        <p>{t("NFT_TAB_CONTENT")}</p>*/}
            {/*                                        <a href={INTERNFT_URL} rel="noopener noreferrer"*/}
            {/*                                            target="_blank"*/}
            {/*                                            className="button">{t("LEARN_MORE")}</a>*/}
            {/*                                    </div>*/}
            {/*                                    <div className="item stake-drop" id="stake-drop-tab">*/}
            {/*                                        <p>{t("STAKEDROP_TAB_CONTENT")}*/}
            {/*                                        </p>*/}
            {/*                                        <a href="/stakedrop" rel="noopener noreferrer"*/}
            {/*                                            target="_blank"*/}
            {/*                                            className="button">{t("OPEN_APP")}</a>*/}
            {/*                                    </div>*/}
            {/*                                    <div className="item stake-drop" id="validators-tab">*/}
            {/*                                        <p>{t("VALIDATORS_TAB_CONTENT")}</p>*/}
            {/*                                        <a href={BECOME_VALIDATOR}*/}
            {/*                                            rel="noopener noreferrer"*/}
            {/*                                            target="_blank"*/}
            {/*                                            className="button">{t("BECOME_VALIDATOR")}</a>*/}
            {/*                                        <a href={`${explorerURL}`} rel="noopener noreferrer"*/}
            {/*                                            target="_blank"*/}
            {/*                                            className="button ml-10">Explorer</a>*/}
            {/*                                    </div>*/}
            {/*                                    <div className="item stake-drop" id="xprt-tab">*/}
            {/*                                        <p>{t("XPRT_TAB_CONTENT")}</p>*/}
            {/*                                        <NavLink to='/xprttoken'*/}
            {/*                                            className="button">{t("LEARN_MORE")}</NavLink>*/}
            {/*                                       */}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </li>*/}
            {/*                    <li className="nav-item wallet-button">*/}
            {/*                        <a href={PERSISTENCE_WALLET} onClick={onClickWallet} rel="noopener noreferrer" target="_blank" className="button-primary button">Wallet</a>*/}
            {/*                    </li>*/}
            {/*                    <li className="nav-item wallet-button">*/}
            {/*                        <a href={`${explorerURL}`} onClick={onClickExplorer} rel="noopener noreferrer" target="_blank" className="button-primary button">Explorer</a>*/}
            {/*                    </li>*/}
            {/*                    <li className="nav-item dropdown company language-dropdown">*/}

            {/*                        <div className="dropdown-menu company-menu"*/}
            {/*                            aria-labelledby="company-nav-dropdown">*/}
            {/*                            <p className={language === "English" ? "nav-link dropdown-item active" : "nav-link dropdown-item"}*/}
            {/*                                onClick={() => handleLanguage('English')}>*/}
            {/*                                English*/}
            {/*                            </p>*/}
            {/*                            <p className={language === "Russian" ? "nav-link dropdown-item active" : "nav-link dropdown-item"}*/}
            {/*                                onClick={() => handleLanguage('Russian')}>*/}
            {/*                                Russian*/}
            {/*                            </p>*/}
            {/*                            <p className={language === "Chinese" ? "nav-link dropdown-item active" : "nav-link dropdown-item"}*/}
            {/*                                onClick={() => handleLanguage('Chinese')}>*/}
            {/*                                Chinese*/}
            {/*                            </p>*/}
            {/*                            <p className={language === "Korean" ? "nav-link dropdown-item active" : "nav-link dropdown-item"}*/}
            {/*                                onClick={() => handleLanguage('Korean')}>*/}
            {/*                                Korean*/}
            {/*                            </p>*/}
            {/*                        </div>*/}

            {/*                    </li>*/}
            {/*                </ul>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </nav>*/}
            {/*</div>*/}
        </React.Fragment>
    )
};

export default withRouter(Header);
