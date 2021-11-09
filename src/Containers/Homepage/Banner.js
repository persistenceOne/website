import React from "react";
import Icon from "../../components/Icon";
import {useTranslation} from "react-i18next";
import curvedBorder from '../../assets/images1/curvedBorder.svg';
import homepageBanner from '../../assets/images1/homepage_banner.png';
import Scroll from 'react-scroll';
import {EXCHANGE_URL, 
    PERSISTENCEONE_TWITTER_URL,
    PERSISTENCEONE_TELEGRAM_URL,
    PERSISTENCEONE_TELEGRAM_ANNOUNCEMENTS_URL,
    PERSISTENCEONE_DISCORD_URL,
    PERSISTENCEONE_REDDIT_URL,
    PERSISTENCEONE_YOUTUBE_URL,
    PERSISTENCEONE_MEDIUM_URL
} from "../../constants/config";




let scroll = Scroll.animateScroll;
const Banner = () => {
    const {t} = useTranslation();
    const handleScroll = () =>{
        scroll.scrollTo(700);
    };
    return (
        <section className="banner-section" data-aos="fade-up">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                       
                        <h1 className="banner-heading">{t("BANNER_HEADING")} <span>{t("BANNER_HEADING_LINE_2")}</span></h1>
                        <p className="caption">{t("BANNER_CAPTION")}</p>

                        <div className="banner-buttons">
                           
                            <a rel="noopener noreferrer" target="_blank" className="button xprt" href={EXCHANGE_URL}>Buy&nbsp;X<p>PRT</p></a>
                            <a rel="noopener noreferrer" target="_blank" className="button white-paper" href={PERSISTENCEONE_MEDIUM_URL}>{t("BLOG")}</a>
                        </div>
                        <div className="social-icons">
                            <ul className="list-unstyled first-section-social-icons">
                                <a href={PERSISTENCEONE_TWITTER_URL} rel="noopener noreferrer" target="_blank"
                                   title="Twitter">
                                    <li><Icon viewClass="social_icon_imgg" icon="twitter-logo"/></li>
                                </a>
                                <a href={PERSISTENCEONE_TELEGRAM_ANNOUNCEMENTS_URL} rel="noopener noreferrer" target="_blank"
                                   title="Announcements">
                                    <li><Icon viewClass="social_icon_imgg" icon="announcements"/></li>
                                </a>
                                <a href={PERSISTENCEONE_TELEGRAM_URL} rel="noopener noreferrer" target="_blank"
                                   title="Community Chat">
                                    <li><Icon viewClass="social_icon_imgg" icon="telegram-plane"/></li>
                                </a>
                                <a href={PERSISTENCEONE_YOUTUBE_URL} rel="noopener noreferrer" target="_blank"
                                   title="Youtube">
                                    <li><Icon viewClass="social_icon_imgg" icon="youtube"/></li>
                                </a>
                                <a href={PERSISTENCEONE_REDDIT_URL} rel="noopener noreferrer" target="_blank"
                                   title="Reddit">
                                    <li><Icon viewClass="social_icon_imgg" icon="reddit-round"/></li>
                                </a>
                                <a href={PERSISTENCEONE_DISCORD_URL} rel="noopener noreferrer" target="_blank"
                                   title="Discord">
                                    <li><Icon viewClass="social_icon_imgg" icon="discord"/></li>
                                </a>
                            </ul>
                        </div>
                        <div className="mouse-section">
                            <Icon viewClass="social_icon_imgg" icon="mouse"/>
                            <p onClick={handleScroll}>{t("SCROLL_DOWN")}</p>
                        </div>

                    </div>
                    <div className="col-md-6 col-sm-12 content">
                        <div>
                        <img src={homepageBanner} alt="curvedBorder" className="banner-video"/>
                        </div>
                        <div className="content-box">
                        <p className="banner-content">{t("BANNER_SUB_TEXT")}</p>
                        <img src={curvedBorder} alt="curvedBorder" className="curve"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default Banner;