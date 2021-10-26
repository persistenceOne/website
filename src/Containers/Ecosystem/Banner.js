import React, { useState } from "react";
import Icon from "../../components/Icon";
import Modal from "./Modal";
import { useTranslation } from "react-i18next";
import {PERSISTENCEONE_TELEGRAM_URL, 
    PERSISTENCEONE_TELEGRAM_ANNOUNCEMENTS_URL,
    PERSISTENCEONE_DISCORD_URL,
    PERSISTENCEONE_TWITTER_URL,
    PERSISTENCEONE_YOUTUBE_URL,
    PERSISTENCEONE_REDDIT_URL
} from "../../constants/config";




const Banner = () => {
    const [name, setName] = useState("");
    const { t } = useTranslation();
    const handleModalData = (name) => {
        setName(name)
    };
    return (
        <section className="section-ecosystem-banner" data-aos="fade-up">
            <div className="container">
                <h1 className="section-title">{t("ECOSYSTEM")}</h1>
                <div className="social-links">
                    <div className="link">
                        <a className="text" href={PERSISTENCEONE_TELEGRAM_URL} rel="noopener noreferrer"
                            target="_blank">
                            <div className="outer-box">
                                <div className="icon-box">
                                    <Icon viewClass="social_icon_imgg" icon="telegram-plane" />
                                </div>
                            </div>
                        </a>
                        <p className="text">{t("COMMUNITY_CHAT")}</p>
                    </div>
                    <div className="link">
                        <a className="text" href={PERSISTENCEONE_TELEGRAM_ANNOUNCEMENTS_URL} rel="noopener noreferrer"
                            target="_blank">
                            <div className="outer-box">
                                <div className="icon-box">
                                    <Icon viewClass="social_icon_imgg" icon="announcements" />
                                </div>
                            </div>
                        </a>
                        <p className="text">{t("ANNOUNCEMENTS")}</p>
                    </div>
                    <div className="link">
                        <a className="text" href={PERSISTENCEONE_DISCORD_URL} rel="noopener noreferrer"
                            target="_blank">
                            <div className="outer-box">
                                <div className="icon-box">
                                    <Icon viewClass="social_icon_imgg" icon="chat" />
                                </div>
                            </div>
                        </a>
                        <p className="text">{t("DEV_CHAT")}</p>
                    </div>
                    <div className="link">
                        <a className="text" href={PERSISTENCEONE_TWITTER_URL} rel="noopener noreferrer"
                            target="_blank">
                            <div className="outer-box">
                                <div className="icon-box">
                                    <Icon viewClass="social_icon_imgg" icon="twitter-logo" />
                                </div>
                            </div>
                        </a>
                        <p className="text">{t("TWITTER")}</p>
                    </div>
                    <div className="link">
                        <a className="text" href={PERSISTENCEONE_YOUTUBE_URL}
                            rel="noopener noreferrer" target="_blank">
                            <div className="outer-box">
                                <div className="icon-box">
                                    <Icon viewClass="social_icon_imgg" icon="youtube" />
                                </div>
                            </div>
                        </a>
                        <p className="text">{t("YOUTUBE")}</p>
                    </div>
                    <div className="link">
                        <a className="text" href={PERSISTENCEONE_REDDIT_URL} rel="noopener noreferrer"
                            target="_blank">
                            <div className="outer-box">
                                <div className="icon-box">
                                    <Icon viewClass="social_icon_imgg" icon="reddit-round" />
                                </div>
                            </div>
                        </a>
                        <p className="text">{t("REDDIT")}</p>
                    </div>
                    <div className="link">
                        <div className="outer-box regional-link" onClick={handleModalData}>
                            <div className="icon-box">
                                <Icon viewClass="social_icon_imgg" icon="regional" />
                            </div>
                        </div>
                        <p className="text" >{t("REGIONAL")}</p>
                    </div>
                </div>
            </div>
            {
                name ?
                    <Modal setName={setName} /> :
                    null
            }
        </section>
    )
};
export default Banner;