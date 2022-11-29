import React from 'react';
import icon from '../../../assets/images1/persistencefooterlogo.svg'
import Mailchimp from "./MailChimp";
import ReactGa from 'react-ga';
import Icon from "../../Icon";
import { useTranslation } from "react-i18next";
import {
    PERSISTENCEONE_DISCORD_URL,
    PERSISTENCEONE_TWITTER_URL,
    PERSISTENCEONE_TELEGRAM_URL,
    PERSISTENCEONE_TELEGRAM_ANNOUNCEMENTS_URL,
    PERSISTENCEONE_REDDIT_URL,
    PERSISTENCEONE_YOUTUBE_URL,
    PERSISTENCEONE_MEDIUM_URL,
    PERSISTENCEONE_LINKEDIN_URL
} from "../../../constants/config";


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
        iconName: 'mediumlink',
        tooltip: 'medium'
    }, {
        url: PERSISTENCEONE_LINKEDIN_URL ,
        iconName: 'linkedin-footer',
        tooltip: 'linkedIn'
    },
];

const Footer = (props) => {
    const { t } = useTranslation();

    const socialIcon = (iconName) => {
        ReactGa.event({
            category: 'Sociallinks',
            action: 'Clicked on ' + iconName
        })
    }

    return (
        <>


            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-12">
                            <div className="row m-0">
                                <div className="col-lg-4 col-md-4 col-sm-12 margin-t-20 ">
                                    <h6>{t("General")}</h6>
                                    <div className="text-muted mt-30">
                                        <ul className="list-unstyled footer-list">
                                            <li><a href="/xprt"
                                                   rel="noopener noreferrer">XPRT</a></li>
                                            <li><a href="/ecosystem"
                                                   rel="noopener noreferrer">Ecosystem</a></li>
                                            <li><a href="https://angel.co/company/persistence-one-1" target="_blank"
                                                rel="noopener noreferrer">Careers</a></li>
                                            <li><a href="https://drive.google.com/drive/folders/19JZsrnyMZDamjNMJCVxxYOvYPRO3dkUp?usp=sharing" target="_blank"
                                                   rel="noopener noreferrer">Press & Brand</a></li>
                                            <li><a href="/summary"
                                                   rel="noopener noreferrer">Persistence summary</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 margin-t-20">
                                    <h6>{t("Community")}</h6>
                                    <div className="text-muted mt-30">
                                        <ul className="list-unstyled footer-list">
                                            <li><a href="https://drive.google.com/file/d/1gEdSvITrKA6wTtujOf9EIzl6M0QtltRV/view?usp=sharing" rel="noopener noreferrer" target="_blank">{t("Grants ")}</a></li>
                                            <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSeeewzYI2E3HXDZaZHa2KH3NULw30HnRmiu33EYL75H1op-Dw/viewform" rel="noopener noreferrer" target="_blank">{t("Guardians Program")}</a></li>
                                            <li><a href="https://drive.google.com/file/d/1ZhbBaViq0a6_ZR2_CSmzrWjfQ4_klzj8/view" rel="noopener noreferrer" target="_blank">{t("Foundation Delegation")}</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 margin-t-20">
                                    <h6>Connect With Us</h6>
                                    <div className="contact-us">
                                        <div>
                                            <div className="contact-box">
                                                <div className="form-container mt-30">
                                                    <p className="footer-text">{t("SUBSCRIBE_NOTE")}</p>
                                                    <Mailchimp />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 m-0 row">
                            <div className="contact-us">
                                <div>
                                    <div className="contact-box">
                                        <h6 className="title"> {t("FOLLOW_US")}</h6>

                                    </div>
                                    <div className="social-links-section">
                                        <ul className="list-unstyled footer-list">
                                            {
                                                socialList.map((item, index) => (
                                                    <a href={item.url} onClick={() => socialIcon(item.iconName)} rel="noopener noreferrer"
                                                        target="_blank"><Icon viewClass="social_icon_imgg"
                                                            icon={item.iconName} /></a>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container footer-bottom-section">
                    <div className="col-lg-6 footer-logo-section container ">
                        <img className="dark-logo" src={icon} alt="icon-logo" title="logo" />&emsp;
                        {/*<span className="copy-rights mb-sm-0">{new Date().getFullYear()} © {t("Persistence.one | Privacy | Security")}</span>*/}

                    </div>
                    <div className={'col-lg-6 text-right'}>
                        {/*<p className="copy-rights mb-sm-0">Built with <Icon viewClass="social_icon_imgg"*/}
                        {/*                                                    icon={'love'} /></p>*/}
                    </div>
                </div>
                <div>
                    <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.425 2.83202C13.4335 2.95544 13.4335 3.07886 13.4335 3.20342C13.4335 6.99878 10.5485 11.376 5.27301 11.376V11.3737C3.71463 11.376 2.18861 10.9289 0.876709 10.086C1.10331 10.1133 1.33105 10.127 1.55935 10.1275C2.85081 10.1287 4.10536 9.69471 5.12137 8.8956C3.89409 8.87228 2.81787 8.07089 2.44191 6.90095C2.87183 6.98399 3.31481 6.96692 3.73678 6.85147C2.39875 6.58073 1.43611 5.4034 1.43611 4.03609C1.43611 4.02358 1.43611 4.01163 1.43611 3.99969C1.8348 4.22208 2.28119 4.3455 2.7378 4.35915C1.47757 3.51567 1.08911 1.83668 1.85013 0.52398C3.30629 2.31843 5.45475 3.40931 7.76109 3.52477C7.52994 2.52716 7.84571 1.48178 8.59082 0.780492C9.74598 -0.306983 11.5628 -0.251244 12.6486 0.905051C13.291 0.778217 13.9066 0.54218 14.47 0.207748C14.2559 0.872631 13.8078 1.43741 13.2092 1.7963C13.7777 1.72919 14.3331 1.57676 14.8562 1.34414C14.4711 1.922 13.9861 2.42535 13.425 2.83202Z" fill="#787878"/>
                    </svg>

                </div>
            </footer>
        </>
    )
};


export default Footer;
