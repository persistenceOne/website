import React from "react";
import icon from "../../../assets/images1/persistencefooterlogo.svg";
import ReactGa from "react-ga4";
import Icon from "../../Icon";
import { useTranslation } from "react-i18next";
import {
  PERSISTENCEONE_DISCORD_URL,
  PERSISTENCEONE_TWITTER_URL,
  PERSISTENCEONE_TELEGRAM_URL,
  PERSISTENCEONE_TELEGRAM_ANNOUNCEMENTS_URL,
  PERSISTENCEONE_REDDIT_URL,
  PERSISTENCEONE_YOUTUBE_URL,
  PERSISTENCEONE_MEDIUM_URL
} from "../../../constants/config";

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
    url: PERSISTENCEONE_TELEGRAM_ANNOUNCEMENTS_URL,
    iconName: "announcements",
    tooltip: "announcements"
  },
  {
    url: PERSISTENCEONE_DISCORD_URL,
    iconName: "discord",
    tooltip: "discord"
  },
  {
    url: PERSISTENCEONE_REDDIT_URL,
    iconName: "reddit-round",
    tooltip: "reddit"
  },
  {
    url: PERSISTENCEONE_YOUTUBE_URL,
    iconName: "youtube",
    tooltip: "youtube"
  },
  {
    url: PERSISTENCEONE_MEDIUM_URL,
    iconName: "mediumlink",
    tooltip: "medium"
  }
];

const Footer = (props) => {
  const { t } = useTranslation();

  const socialIcon = (iconName) => {
    ReactGa.event({
      category: "Sociallinks",
      action: "Clicked on " + iconName
    });
  };

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row tiles">
            <div className="col-lg-6 col-md-12 tile">
              <div className="text-muted">
                <a
                  href="/ecosystem"
                  rel="noopener noreferrer"
                  className="footer-item"
                >
                  Docs
                </a>
                <a
                  href="https://angel.co/company/persistence-one-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-item"
                >
                  Careers
                </a>
                <a
                  href="http://mediakit.persistence.one/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-item"
                >
                  Media Kit
                </a>
                <a
                  href="/summary"
                  rel="noopener noreferrer"
                  className="footer-item"
                >
                  Summary
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 m-0 row justify-content-lg-end tile">
              <div className="social-links-section">
                <h6 className="title"> {t("FOLLOW_US")}</h6>
                <ul className="list-unstyled footer-list">
                  {socialList.map((item, index) => (
                    <a
                      href={item.url}
                      key={index}
                      onClick={() => socialIcon(item.iconName)}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Icon viewClass="social_icon_imgg" icon={item.iconName} />
                    </a>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container footer-bottom-section">
          <div className="col-lg-6 footer-logo-section container ">
            <img
              className="dark-logo"
              src={icon}
              alt="icon-logo"
              title="logo"
            />
            &emsp;
            {/*<span className="copy-rights mb-sm-0">{new Date().getFullYear()} © {t("Persistence.one | Privacy | Security")}</span>*/}
          </div>
          <div className={"col-lg-6 text-right"}>
            {/*<p className="copy-rights mb-sm-0">Built with <Icon viewClass="social_icon_imgg"*/}
            {/*                                                    icon={'love'} /></p>*/}
          </div>
        </div>
        <div></div>
      </footer>
    </>
  );
};

export default Footer;
