import React from 'react';
import icon from '../../../assets/images1/footer_logo.svg'
import whitepaper from '../../../assets/images1/whitepaper.pdf'
import Mailchimp from "./MailChimp";
import {Link} from 'react-router-dom';
import {OverlayTrigger, Tooltip} from 'react-bootstrap'
import Icon from "../../Icon";
import Scroll from 'react-scroll';
import {useTranslation} from "react-i18next";
let scroll = Scroll.animateScroll;

const socialList = [
    {
        url: 'https://twitter.com/PersistenceOne',
        iconName: 'twitter-logo',
        tooltip:'twitter'
    },
    {
        url: 'https://t.me/PersistenceOneChat',
        iconName: 'telegram-plane',
        tooltip:'telegram'
    },
    {
        url: 'https://t.me/PersistenceOne',
        iconName: 'announcements',
        tooltip:'announcements'
    }, {
        url: 'https://discord.gg/SaBKpjbnhH',
        iconName: 'discord',
        tooltip:'discord'
    }, {
        url: 'https://www.reddit.com/r/PersistenceOne/',
        iconName: 'reddit-round',
        tooltip:'reddit'
    }, {
        url: 'https://www.youtube.com/channel/UC5wqI1ZRdkCjWWVOCQdhxLQ/featured',
        iconName: 'youtube',
        tooltip:'youtube'
    }, {
        url: 'https://medium.com/persistence-blog',
        iconName: 'medium-m',
        tooltip:'medium'
    }, {
        url: 'https://www.linkedin.com/company/persistenceone/',
        iconName: 'linkedin-footer',
        tooltip:'linkedIn'
    },
];

const Footer = (props) => {
    const {t} = useTranslation();
    const scrollTop = () =>{
        scroll.scrollToTop();
    };

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
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 margin-t-20">
                                    <h6>{t("PRODUCTS")}</h6>
                                    <div className="text-muted mt-30">
                                        <ul className="list-unstyled footer-list">
                                            <li><a href="https://comdex.sg/" rel="noopener noreferrer" target="_blank">{t("COMDEX")}</a></li>
                                            <li><a href="https://audit.one/" rel="noopener noreferrer" target="_blank">{t("AUDIT_ONE")}</a></li>
                                            <li><a href="https://twitter.com/pStakeFinance" rel="noopener noreferrer" target="_blank">{t("PSTAKE")}</a></li>
                                            <li><a href="https://twitter.com/AssetMantle" rel="noopener noreferrer" target="_blank">{t("ASSET_MANTLE")}</a></li>
                                            <li><p className="inactive" title="Coming Soon">{t("PLEND")}</p></li>
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
                                            <Mailchimp/>
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
                                                        <a href={item.url} rel="noopener noreferrer"
                                                           target="_blank"><Icon viewClass="social_icon_imgg"
                                                                                 icon={item.iconName}/></a>
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
                        <img className="dark-logo" src={icon} alt="icon-logo" title="logo"/>
                        <p className="copy-rights mb-sm-0">{new Date().getFullYear()} © {t("PERSISTENCE")}</p>
                        <div>
                            <div className="go-top" onClick={scrollTop}>
                                <Icon viewClass="social_icon_imgg" icon="gotop"/>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
};


export default Footer;
