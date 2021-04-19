import React, {useState, useEffect} from 'react';
import {NavLink, withRouter, useHistory} from 'react-router-dom';
import logo from '../../assets/images1/logo.png'
import {Nav} from "react-bootstrap";
import Icon from "../Icon";
import Alert from 'react-bootstrap/Alert'
import rightarrow from '../../assets/images1/right-arrow.svg'
import dropdown_asset from "../../assets/images1/dropdown_asset.svg"
import dropdown_comdex from "../../assets/images1/dropdown_comdex.svg"
import dropdown_audit from "../../assets/images1/dropdown_audit.svg"
import dropdown_pstake from "../../assets/images1/dropdown_pstake.svg"
import {useTranslation} from "react-i18next";

let explorerURL = process.env.REACT_APP_EXPLORER_URL;
const Header = () => {
    
    let history = useHistory();
    const [isOpen, setIsOPen] = useState(false);
    const [banner, setBanner] = useState(true);
    const [activeTab, setActiveTabs] = useState('intenft-tab');
    const [productActiveTab, setProductActiveTab] = useState('comdex-tab');
    const {t, i18n} = useTranslation();
    const [language, setLanguage] = useState('English');
    useEffect(() => {
        document.addEventListener('scroll', () => {
            var scrolled = document.scrollingElement.scrollTop;
            if (scrolled > 100) {
                document.getElementById('nav-bar').classList.add('scrolled');
                document.getElementById('nav-bar').classList.remove('not-scrolled');
            } else {
                document.getElementById('nav-bar').classList.add('not-scrolled');
                document.getElementById('nav-bar').classList.remove('scrolled');
            }
            if (scrolled) {
                document.getElementById('nav-bar').classList.add('bg-active');
                document.getElementById('nav-bar').classList.remove('bg-not-active');
            } else {
                document.getElementById('nav-bar').classList.add('bg-not-active');
                document.getElementById('nav-bar').classList.remove('bg-active');
            }
        });
        const languageType = localStorage.getItem('language');
        if (languageType !== '') {
            setLanguage(languageType);
        }
    }, []);
    const closeBanner = () => {
        setBanner(false);
    }
    const toggleMenu = () => {
        setIsOPen(!isOpen);
        if (document.getElementById('nab-bar-toggle').classList.contains('collapsed')) {
            document.getElementById('nab-bar-toggle').classList.remove('collapsed');
        } else {
            document.getElementById('nab-bar-toggle').classList.add('collapsed');
        }
    };

    const scrollToID = (id, route) => {
        if (history.location.pathname !== route) {
            history.push(`/${route}`)
            window.scrollTo(0, 0);
            const element = document.getElementById(id);
            if (element) {
                window.scrollTo(0, element.offsetTop - 150);
            }
        }
    };

    const onHoverProducts = (id) => {

        const curretnTab = productActiveTab;
        if (document.getElementById(curretnTab).classList.contains('show')) {
            document.getElementById(curretnTab).classList.remove('show');
            document.getElementById(id).classList.add('show');
            setProductActiveTab(id);
        }
    };
    const onHover = (id) => {
        const curretnTab = activeTab;
        if (document.getElementById(curretnTab).classList.contains('show')) {
            document.getElementById(curretnTab).classList.remove('show');
            document.getElementById(id).classList.add('show');
            setActiveTabs(id);
        }
    };
    const setActiveTab = (route) => {
        setIsOPen(!isOpen);
        if (document.getElementById('nab-bar-toggle').classList.contains('collapsed')) {
            document.getElementById('nab-bar-toggle').classList.remove('collapsed');
        } else {
            document.getElementById('nab-bar-toggle').classList.add('collapsed');
        }
        if (document.getElementById('navbarCollapse').classList.contains('show')) {
            document.getElementById('navbarCollapse').classList.remove('show');
        } else {
            document.getElementById('navbarCollapse').classList.add('show');
        }

        if (route === "/vision" || route === "/roadmap") {
            document.getElementById('company-nav-dropdown').classList.add('active');
        } else if (route === "/stakedrop") {
            document.getElementById('ecosystem-nav-dropdown').classList.add('active');
        } else {
            if (document.getElementById('company-nav-dropdown').classList.contains('active')) {
                document.getElementById('company-nav-dropdown').classList.remove('active');
            } else if (document.getElementById('ecosystem-nav-dropdown').classList.contains('active')) {
                document.getElementById('ecosystem-nav-dropdown').classList.remove('active');
            }
        }
    };
    const handleLanguage = (type) => {
        localStorage.setItem("language", type);
        const languageType = localStorage.getItem('language');
        setLanguage(languageType);
        i18n.changeLanguage(type);
        // setLanguage(type);
    };
    return (
        <React.Fragment>

            <div id="is-sticky">

                <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky" id="nav-bar"
                     data-aos="fade-down">
                    <div className="container-fluid bannernav-section">
                        {banner ?
                            <div className="container">
                                <Alert className="nav-banner" dismissible onClick={closeBanner}>
                                    <p>
                                        <a href="https://ascendex.com/en/basic/cashtrade-spottrading/usdt/xprt" rel="noopener noreferrer"
                                           target="_blank">
                                            <span>XPRT listed on AscendEX on April 1. Buy Now </span>&emsp;
                                            <img src={rightarrow} alt="arrow"/></a>
                                    </p>
                                </Alert>
                            </div>
                            : null}


                    </div>
                    <div className="container">

                        <Nav.Link className="navbar-brand logo text-uppercase" href="/">
                            <img src={logo} alt="logo"/></Nav.Link>
                        <button className="navbar-toggler x collapsed" id="nab-bar-toggle" type="button"
                                data-toggle="collapse" onClick={toggleMenu}
                                data-target="#navbarsExample05" aria-controls="navbarsExample05"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <div
                            className={isOpen ? "collapse navbar-collapse show" : "collapse navbar-collapse"}
                            id="navbarCollapse">
                            <ul className="navbar-nav ml-auto navbar-left"
                                id="mySidenav">
                                <li className="nav-item dropdown company">
                                    <NavLink className="nav-link dropdown-toggle" to="/vision"
                                             id="company-nav-dropdown"
                                             role="button" data-toggle="dropdown" aria-haspopup="true"
                                             aria-expanded="false">
                                        {t("COMPANY")}
                                    </NavLink>
                                    <div className="dropdown-menu company-menu"
                                         aria-labelledby="company-nav-dropdown">
                                        <NavLink className="nav-link dropdown-item" to="/vision"
                                                 onClick={() => setActiveTab('/vision')}>
                                            {t("ABOUT")}
                                        </NavLink>
                                        <NavLink className="nav-link dropdown-item" to="/roadmap"
                                                 onClick={() => setActiveTab('/roadmap')}>
                                            {t("ROADMAP")}
                                        </NavLink>
                                    </div>

                                </li>

                                <li className="nav-item dropdown ecosystem">
                                    <NavLink className="nav-link dropdown-toggle" to="/products"
                                             id="products-nav-dropdown"
                                             onClick={() => setActiveTab('/products')}
                                             role="button" data-toggle="dropdown" aria-haspopup="true"
                                             aria-expanded="false">
                                        {t("PRODUCTS")}
                                    </NavLink>
                                    <div className="dropdown-menu ecosystem-dropdown"
                                         aria-labelledby="ecosystem-nav-dropdown">
                                        <div className="dropdown-content">
                                            <div className="items">
                                                <a className="nav-link dropdown-item primary-medium-color"
                                                   onMouseOver={() => onHoverProducts('comdex-tab')}
                                                   href="https://comdex.sg/"
                                                   rel="noopener noreferrer"
                                                   target="_blank">
                                                    <div className="dropdown-image">
                                                        <img src={dropdown_comdex} alt="dropdown_asset"/>
                                                    </div>
                                                    {t("COMDEX")}
                                                </a>
                                                <a className="nav-link dropdown-item primary-medium-color"
                                                   onMouseOver={() => onHoverProducts('audit-tab')}
                                                   href="https://audit.one/"
                                                   rel="noopener noreferrer"
                                                   target="_blank">
                                                    <div className="dropdown-image">
                                                        <img src={dropdown_audit} alt="dropdown_asset"/>
                                                    </div>
                                                    {t("AUDIT_ONE")}
                                                </a>
                                                <a className="nav-link dropdown-item primary-medium-color"
                                                   onMouseOver={() => onHoverProducts('pstake-tab')}
                                                   href="https://twitter.com/pStakeFinance"
                                                   rel="noopener noreferrer"
                                                   target="_blank">
                                                    <div className="dropdown-image">
                                                        <img src={dropdown_pstake} alt="dropdown_asset"/>
                                                    </div>
                                                    {t("PSTAKE")}
                                                </a>
                                                <a className="nav-link dropdown-item primary-medium-color"
                                                   onMouseOver={() => onHoverProducts('mantle-tab')}
                                                   href="https://twitter.com/AssetMantle"
                                                   rel="noopener noreferrer"
                                                   target="_blank">
                                                    <div className="dropdown-image">
                                                        <img src={dropdown_asset} alt="dropdown_asset"/>
                                                    </div>
                                                    {t("ASSET_MANTLE")}
                                                </a>
                                                <NavLink
                                                    className="nav-link dropdown-item stake-drop-link primary-medium-color"
                                                    onMouseOver={() => onHoverProducts('plend-tab')}
                                                    to="/products" onClick={() => setActiveTab('/products')}>
                                                    <div className="dropdown-image">
                                                        <img src={dropdown_pstake} alt="dropdown_asset"/>
                                                    </div>
                                                    {t("PLEND")}
                                                </NavLink>
                                            </div>
                                            <div className="items-content">
                                                <div className="item internft show" id="comdex-tab">
                                                    <p>{t("COMDEX_TAB_CONTENT")} </p>
                                                    <a href="https://comdex.sg/" rel="noopener noreferrer"
                                                       target="_blank"
                                                       className="button">{t("LEARN_MORE")}</a>
                                                </div>
                                                <div className="item stake-drop" id="audit-tab">
                                                    <p>{t("AUDIT_TAB_CONTENT")}</p>

                                                    <a href="https://audit.one/" rel="noopener noreferrer"
                                                       target="_blank"
                                                       className="button">{t("LEARN_MORE")}</a>
                                                </div>
                                                <div className="item stake-drop" id="pstake-tab">
                                                    <p> {t("PSTAKE_TAB_CONTENT")}
                                                    </p>
                                                    <a href="https://twitter.com/pStakeFinance"
                                                       rel="noopener noreferrer"
                                                       target="_blank"
                                                       className="button">{t("LEARN_MORE")}</a>
                                                </div>
                                                <div className="item stake-drop" id="mantle-tab">
                                                    <p>{t("MANTLE_TAB_CONTENT")}</p>
                                                    <a href="https://twitter.com/AssetMantle"
                                                       rel="noopener noreferrer"
                                                       target="_blank"
                                                       className="button">{t("LEARN_MORE")}</a>
                                                </div>
                                                <div className="item stake-drop" id="plend-tab">
                                                    <p>{t("PLEND_TAB_CONTENT")}</p>
                                                    <button className="button">{t("COMING_SOON")}</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="nav-item"><NavLink className="nav-link primary-medium-color"
                                                                  to="/technology"
                                                                  onClick={() => setActiveTab('/technology')}>{t("TECHNOLOGY")}</NavLink>
                                </li>
                                <li className="nav-item dropdown ecosystem">
                                    <NavLink className="nav-link dropdown-toggle" to="/ecosystem"
                                             id="ecosystem-nav-dropdown"
                                             onClick={() => setActiveTab('/ecosystem')}
                                             role="button" data-toggle="dropdown" aria-haspopup="true"
                                             aria-expanded="false">
                                        {t("ECOSYSTEMS")}
                                    </NavLink>
                                    <div className="dropdown-menu ecosystem-dropdown"
                                         aria-labelledby="ecosystem-nav-dropdown">
                                        <div className="dropdown-content">
                                            <div className="items">
                                                <NavLink className="nav-link dropdown-item primary-medium-color"
                                                         onMouseOver={() => onHover('intenft-tab')}
                                                         to="/ecosystem"
                                                         onClick={() => scrollToID("section-nft", "ecosystem")}>
                                                    <div className="dropdown-image">
                                                        <Icon
                                                            viewClass="arrow-right"
                                                            icon="dropdown-square"/>
                                                    </div>
                                                    {t("INTER_NFT")}
                                                </NavLink>
                                                <NavLink
                                                    className="nav-link dropdown-item stake-drop-link primary-medium-color"
                                                    onMouseOver={() => onHover('stake-drop-tab')}
                                                    to="/stakedrop" onClick={() => setActiveTab('/stakedrop')}>
                                                    <div className="dropdown-image">
                                                        <Icon
                                                            viewClass="arrow-right"
                                                            icon="dropdown-triangle"/>
                                                    </div>
                                                    {t("STAKEDROP")}
                                                </NavLink>
                                                <NavLink className="nav-link dropdown-item primary-medium-color"
                                                         onMouseOver={() => onHover('validators-tab')}
                                                         to="/ecosystem"
                                                         onClick={() => scrollToID("section-validators", "ecosystem")}>
                                                    <div className="dropdown-image">
                                                        <Icon
                                                            viewClass="arrow-right"
                                                            icon="dropdown-polygon"/>
                                                    </div>
                                                    {t("VALIDATORS")}
                                                </NavLink>
                                                <NavLink className="nav-link dropdown-item primary-medium-color"
                                                         onMouseOver={() => onHover('xprt-tab')}
                                                         to="/ecosystem"
                                                         onClick={() => scrollToID("section-xprt", "ecosystem")}>
                                                    <div className="dropdown-image">
                                                        <Icon
                                                            viewClass="dropdown-icon"
                                                            icon="dropdown-circle"/>
                                                    </div>
                                                    {t("XPRT_TOKEN")}
                                                </NavLink>
                                            </div>
                                            <div className="items-content">
                                                <div className="item internft show" id="intenft-tab">
                                                    <p>{t("NFT_TAB_CONTENT")}</p>
                                                    <a href="https://internft.org/" rel="noopener noreferrer"
                                                       target="_blank"
                                                       className="button">{t("LEARN_MORE")}</a>
                                                </div>
                                                <div className="item stake-drop" id="stake-drop-tab">
                                                    <p>{t("STAKEDROP_TAB_CONTENT")}
                                                    </p>
                                                    <a href="/stakedrop" rel="noopener noreferrer"
                                                       target="_blank"
                                                       className="button">{t("OPEN_APP")}</a>
                                                </div>
                                                <div className="item stake-drop" id="validators-tab">
                                                    <p>{t("VALIDATORS_TAB_CONTENT")}</p>
                                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSe6kIw0ihP4gwA5OSqIMLS_hEodR76N4Y5Tblhl4S3ifxJZ8Q/viewform"
                                                       rel="noopener noreferrer"
                                                       target="_blank"
                                                       className="button">{t("BECOME_VALIDATOR")}</a>
                                                        <a href={`${explorerURL}`} rel="noopener noreferrer"
                                                       target="_blank"
                                                       className="button ml-10">Explorer</a>
                                                </div>
                                                <div className="item stake-drop" id="xprt-tab">
                                                    <p>{t("XPRT_TAB_CONTENT")}</p>
                                                    <NavLink to='/xprttoken'
                                                             className="button">{t("LEARN_MORE")}</NavLink>
                                                    <a href="https://auction.persistence.one/" rel="noopener noreferrer"
                                                       target="_blank"
                                                       className="button ml-10">XPRT Auction</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item wallet-button">
                                    <a href="https://wallet.persistence.one/" rel="noopener noreferrer" target="_blank" className="button-primary button">Wallet</a>
                                </li>
                                <li className="nav-item wallet-button">
                                    <a href={`${explorerURL}`} rel="noopener noreferrer" target="_blank" className="button-primary button">Explorer</a>
                                </li>
                                <li className="nav-item dropdown company language-dropdown">
                                    <p className="nav-link dropdown-toggle"
                                             id="company-nav-dropdown"
                                             role="button" data-toggle="dropdown" aria-haspopup="true"
                                             aria-expanded="false">
                                        <Icon
                                            viewClass="arrow-right"
                                            icon="language"/>
                                    </p>
                                    <div className="dropdown-menu company-menu"
                                         aria-labelledby="company-nav-dropdown">
                                        <p className={language ==="English" ? "nav-link dropdown-item active" : "nav-link dropdown-item"}
                                                 onClick={() => handleLanguage('English')}>
                                            English
                                        </p>
                                        <p className={language ==="Russian" ? "nav-link dropdown-item active" : "nav-link dropdown-item"}
                                                 onClick={() => handleLanguage('Russian')}>
                                            Russian
                                        </p>
                                        <p className={language ==="Chinese" ? "nav-link dropdown-item active" : "nav-link dropdown-item"}
                                                 onClick={() => handleLanguage('Chinese')}>
                                            Chinese
                                        </p>
                                        <p className={language ==="Korean" ? "nav-link dropdown-item active" : "nav-link dropdown-item"}
                                                 onClick={() => handleLanguage('Korean')}>
                                            Korean
                                        </p>
                                    </div>

                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    )
};

export default withRouter(Header);
