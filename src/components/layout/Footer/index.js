import React from 'react';
import icon from '../../../assets/images1/footer_logo.svg'
import whitepaper from '../../../assets/images1/whitepaper.pdf'
import Mailchimp from "./MailChimp";
import { Link } from 'react-router-dom';
import ReactGa from 'react-ga';
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import Icon from "../../Icon";
import Scroll from 'react-scroll';
import { useTranslation } from "react-i18next";
import {COMDEX_URL,
    AUDIT_URL,
    ASSETMANTLE_TWITTER_URL,
    PERSISTENCEONE_DISCORD_URL,
    PSTAKE_TWITTER_URL,
    PERSISTENCEONE_TWITTER_URL,
    PERSISTENCEONE_TELEGRAM_URL,
    PERSISTENCEONE_TELEGRAM_ANNOUNCEMENTS_URL,
    PERSISTENCEONE_REDDIT_URL,
    PERSISTENCEONE_YOUTUBE_URL,
    PERSISTENCEONE_MEDIUM_URL,
    FORUM_PERSISTENCE,
    PERSISTENCEONE_LINKEDIN_URL
} from "../../../constants/config";

let scroll = Scroll.animateScroll;

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

const Footer = (props) => {
    const { t } = useTranslation();
    const scrollTop = () => {
        scroll.scrollToTop();
    };
    const socialIcon = (iconName) => {
        ReactGa.event({
            category: 'Sociallinks',
            action: 'Clicked on ' + iconName
        })

    }

    return (
        <>
            <section className="contact-section">
                <div className="container">

                </div>
            </section>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="row m-0">
                                <div className="col-lg-4 col-md-4 col-sm-12 margin-t-20 ">
                                    <h6>{t("ABOUT")}</h6>
                                    <div className="text-muted mt-30">
                                        <ul className="list-unstyled footer-list">
                                            <li><Link to="/vision">{t("COMPANY")}</Link></li>
                                            <li><Link to="/roadmap">{t("ROADMAP")}</Link></li>
                                            <li><a href={whitepaper} target="_blank"
                                                rel="noopener noreferrer">{t("PROTOCOL_PAPER")}</a></li>
                                            <li><Link to="/ecosystem">{t("ECOSYSTEM")}</Link></li>
                                            <li><Link to="/technology">{t("TECHNOLOGY")}</Link></li>
                                            <li><a href={FORUM_PERSISTENCE} rel="noopener noreferrer" target="_blank">{t("FORUM")}</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 margin-t-20">
                                    <h6>{t("PRODUCTS")}</h6>
                                    <div className="text-muted mt-30">
                                        <ul className="list-unstyled footer-list">
                                            <li><a href={COMDEX_URL} rel="noopener noreferrer" target="_blank">{t("COMDEX_FOOTER")}</a></li>
                                            <li><a href={AUDIT_URL} rel="noopener noreferrer" target="_blank">{t("AUDIT_ONE")}</a></li>
                                            <li><a href={PSTAKE_TWITTER_URL} rel="noopener noreferrer" target="_blank">{t("PSTAKE")}</a></li>
                                            <li><a href={ASSETMANTLE_TWITTER_URL} rel="noopener noreferrer" target="_blank">{t("ASSET_MANTLE_FOOTER")}</a></li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 margin-t-20">
                                    <h6>{t("GET_IN_TOUCH")}</h6>
                                    <div className="text-muted mt-30 email">
                                        <a className="footer-text email" href="mailto:hello@persistence.one">hello@persistence.one</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 m-0 row">
                            <div className="contact-us">
                                <div>
                                    <div className="contact-box">
                                        <h6 className="title"> {t("SUBSCRIBE_HEADING")}</h6>
                                        <div className="form-container mt-30">
                                            <p className="footer-text">{t("SUBSCRIBE_NOTE")}</p>
                                            <Mailchimp />
                                        </div>
                                    </div>
                                    <div className="social-links-section">
                                        <h6>{t("FOLLOW_US")}</h6>
                                        <ul className="list-unstyled footer-list">
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

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-section">
                    <div className="footer-logo-section container ">
                        <img className="dark-logo" src={icon} alt="icon-logo" title="logo" />
                        <p className="copy-rights mb-sm-0">{new Date().getFullYear()} © {t("PERSISTENCE")}</p>
                        <div>
                            <div className="go-top" onClick={scrollTop}>
                                <Icon viewClass="social_icon_imgg" icon="gotop" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
};


export default Footer;
