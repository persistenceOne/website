import React, { useState, useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import logotwo from "../../assets/images1/logo.svg";
import { Nav, Navbar } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import Icon from "../Icon";
import {
  PERSISTENCEONE_TELEGRAM_URL,
  PERSISTENCEONE_TWITTER_URL,
  PERSISTENCEONE_YOUTUBE_URL,
  PERSISTENCEONE_DISCORD_URL
} from "../../constants/config";
import ReactGa from "react-ga4";

const socialList = [
  {
    url: PERSISTENCEONE_TWITTER_URL,
    iconName: "twitter-logo",
    tooltip: "twitter"
  },
  {
    url: PERSISTENCEONE_TELEGRAM_URL,
    iconName: "telegram-plane",
    tooltip: "telegram"
  },
  {
    url: PERSISTENCEONE_DISCORD_URL,
    iconName: "discord",
    tooltip: "discord"
  },
  {
    url: PERSISTENCEONE_YOUTUBE_URL,
    iconName: "youtube",
    tooltip: "youtube"
  }
];

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const { t } = useTranslation();
  useEffect(() => {
    document.body.classList = "";
    window.addEventListener("scroll", scrollNavigation, true);
    setIsActive((current) => !current);
  }, []);

  const toggleMenu = () => {
    // setIsOPen(!isOpen);
    setMobileMenu(!mobileMenu);
    if (
      document.getElementById("nab-bar-toggle").classList.contains("collapsed")
    ) {
      document.getElementById("nab-bar-toggle").classList.remove("collapsed");
    } else {
      document.getElementById("nab-bar-toggle").classList.add("collapsed");
    }
  };
  const scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 50) {
      document.getElementById("nav-bar").classList.add("sticky-dark");
    } else {
      document.getElementById("nav-bar").classList.remove("sticky-dark");
    }
  };

  const socialIcon = (iconName) => {
    ReactGa.event({
      category: "Sociallinks",
      action: "Clicked on " + iconName
    });
  };

  return (
    <React.Fragment>
      <Navbar
        className="navbar-custom fixed-top"
        expand="lg"
        expanded={mobileMenu}
        id="nav-bar"
      >
        <div className="container p-0">
          <NavLink to="/" className="navbar-brand">
            <img src={logotwo} alt="logo" />
          </NavLink>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="navbar-toggler x"
            id="nab-bar-toggle"
            onClick={toggleMenu}
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <NavLink to="/ecosystem" className="nav-link dropdown-toggle">
                Ecosystem
              </NavLink>
              <NavLink to="/xprt" className="nav-link dropdown-toggle">
                XPRT
              </NavLink>
              <NavLink to="/faq" className="nav-link dropdown-toggle">
                FAQ
              </NavLink>
              <Nav.Link
                className="nav-link dropdown-toggle"
                rel="noopener noreferrer"
                target="_blank"
                href="http://blog.persistence.one/"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {t("BLOG")}
              </Nav.Link>
            </Nav>
            <div className="nav-dropdown-item">
              <div className="inner-items">
                <div className="links">
                  {socialList.map((item, index) => (
                    <a
                      href={item.url}
                      onClick={() => socialIcon(item.iconName)}
                      rel="noopener noreferrer"
                      target="_blank"
                      key={index}
                    >
                      <Icon viewClass="social_icon_imgg" icon={item.iconName} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </React.Fragment>
  );
};

export default withRouter(Header);
