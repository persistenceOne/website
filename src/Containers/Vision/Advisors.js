import React, {useState} from "react";
import jason from "../../assets/images1/pics/advisers/jason.svg";
import sandeep from "../../assets/images1/pics/advisers/sandeep.svg";
import jeffrey from "../../assets/images1/pics/advisers/jeffrey.svg";
import luchang from "../../assets/images1/pics/advisers/luchang.svg";
import hartej from "../../assets/images1/pics/advisers/hartej.svg";
import scott from "../../assets/images1/pics/advisers/scott.svg";
import marcus from "../../assets/images1/pics/advisers/marcus.svg";
import zhihao from "../../assets/images1/pics/advisers/zhihao.svg";
import ajith from "../../assets/images1/pics/advisers/Ajith.png";
import sam from "../../assets/images1/pics/advisers/Sam.png";

import {useTranslation} from "react-i18next";
import Icon from "../../components/Icon";
import Modal from "./Modals";
let ADVISORONE_TWITTER_URL = process.env.REACT_APP_ADVISORONE_TWITTER_URL;
let ADVISORONE_LINKEDIN_URL= process.env.REACT_APP_ADVISORONE_LINKEDIN_URL;
let ADVISORONE_URL =process.env.REACT_APP_ADVISORONE_URL;
let ADVISORTWO_TWITTER_URL =process.env.REACT_APP_ADVISORTWO_TWITTER_URL;
let ADVISORTWO_LINKEDIN_URL= process.env.REACT_APP_ADVISORTWO_LINKEDIN_URL;
let ADVISORTWO_URL =process.env.REACT_APP_ADVISORTWO_URL;
let ADVISORTHREE_TWITTER_URL =process.env.REACT_APP_ADVISORTHREE_TWITTER_URL;
let ADVISORTHREE_LINKEDIN_URL =process.env.REACT_APP_ADVISORTHREE_LINKEDIN_URL;
let ADVISORTHREE_URL =process.env.REACT_APP_ADVISORTHREE_URL;
let ADVISORFOUR_URL =process.env.REACT_APP_ADVISORFOUR_URL;
let ADVISORFIVE_TWITTER_URL= process.env.REACT_APP_ADVISORFIVE_TWITTER_URL;
let ADVISORFIVE_URL =process.env.REACT_APP_ADVISORFIVE_URL;
let ADVISORSIX_LINKEDIN_URL= process.env.REACT_APP_ADVISORSIX_LINKEDIN_URL;
let ADVISORSIX_URL =process.env.REACT_APP_ADVISORSIX_URL;
let ADVISORSEVEN_TWITTER_URL =process.env.REACT_APP_ADVISORSEVEN_TWITTER_URL;
let ADVISORSEVEN_LINKEDIN_URL =process.env.REACT_APP_ADVISORSEVEN_LINKEDIN_URL;
let ADVISORSEVEN_URL =process.env.REACT_APP_ADVISORSEVEN_URL;
let ADVISOREIGHT_TWITTER_URL =process.env.REACT_APP_ADVISOREIGHT_TWITTER_URL;
let ADVISOREIGHT_LINKEDIN_URL =process.env.REACT_APP_ADVISOREIGHT_LINKEDIN_URL;
let ADVISOREIGHT_URL =process.env.REACT_APP_ADVISOREIGHT_URL;
let ADVISORNINE_LINKEDIN_URL =process.env.REACT_APP_ADVISORNINE_LINKEDIN_URL;
let ADVISORNINE_URL =process.env.REACT_APP_ADVISORNINE_URL;
let ADVISORTEN_TWITTER_URL =process.env.REACT_APP_ADVISORTEN_TWITTER_URL;
let ADVISORTEN_LINKEDIN_URL= process.env.REACT_APP_ADVISORTEN_LINKEDIN_URL;
let ADVISORTEN_URL =process.env.REACT_APP_ADVISORTEN_URL;
const Advisors = () => {
    const {t} = useTranslation();
    const [name, setName] = useState("");
    return (
        <section className="adviser-section">
            <div className="container">
                <h3 className="section-title">
                    {t("ADVISORS")}
                </h3>
                <div className="adviser-text">
                    <p>{t("ADVISORS_INFO")}</p>
                </div>
                <div className="advisers-profiles-container">
                    <div className="advisers-profiles">
                        <div className="row profiles-group">
                            <div className="proileContainer" data-aos="fade-up">
                                <div className="bg-advisors">
                                    <div className="profile-picture">
                                        <img src={jason} alt="pic1"/>
                                        <div className="social-icons">
                                            <a className="icon-box" href={`${ADVISORONE_TWITTER_URL}`}
                                               rel="noopener noreferrer"
                                               target="_blank"><Icon viewClass="social_icon_imgg" icon="twitter-logo"/></a>
                                            <a className="icon-box" href={`${ADVISORONE_LINKEDIN_URL}`}
                                               rel="noopener noreferrer" target="_blank"><Icon
                                                viewClass="social_icon_imgg"
                                                icon="linkedin-footer"/></a>
                                        </div>
                                    </div>
                                    <div className="margin-left-xs text-center">
                                        <p className="profile-name">{t("JASON")}</p>
                                        <p className="designation-name">{t("HEAD_RESEARCH")}&nbsp;
                                            <a href={`${ADVISORONE_URL}`} rel="noopener noreferrer"
                                               target="_blank">{t("SPARTAN")}</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="proileContainer" data-aos="fade-up">
                                <div className="bg-advisors">
                                    <div className="profile-picture">
                                        <img src={sandeep} alt="pic1"/>
                                        <div className="social-icons">
                                            <a className="icon-box" href={`${ADVISORTWO_TWITTER_URL}`}
                                               rel="noopener noreferrer"
                                               target="_blank"><Icon viewClass="social_icon_imgg" icon="twitter-logo"/></a>
                                            <a className="icon-box"
                                               href={`${ADVISORTWO_LINKEDIN_URL}`}
                                               rel="noopener noreferrer" target="_blank"><Icon
                                                viewClass="social_icon_imgg"
                                                icon="linkedin-footer"/></a>
                                        </div>
                                    </div>
                                    <div className="margin-left-xs text-center">
                                        <p className="profile-name">{t("SANDEEP")} </p>
                                        <p className="designation-name">{t("COO_CO_FOUNDER")}&nbsp;
                                            <a href={`${ADVISORTWO_URL}`} rel="noopener noreferrer"
                                               target="_blank">{t("POLYGON")}</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="proileContainer" data-aos="fade-up">
                                <div className="bg-advisors">
                                    <div className="profile-picture">
                                        <img src={ajith} alt="pic1"/>
                                        <div className="social-icons">
                                           
                                            <a className="icon-box" href={`${ADVISORTHREE_TWITTER_URL}`}
                                               rel="noopener noreferrer" target="_blank"><Icon
                                                viewClass="social_icon_imgg"
                                                icon="twitter-logo"/></a>
                                                 <a className="icon-box"
                                               href={`${ADVISORTHREE_LINKEDIN_URL}`}
                                               rel="noopener noreferrer" target="_blank"><Icon
                                                viewClass="social_icon_imgg"
                                                icon="linkedin-footer"/></a>
                                        </div>
                                    </div>
                                    <div className="margin-left-xs text-center">
                                        <p className="profile-name">{t("AJITH")}</p>
                                        <p className="designation-name">{t("HEAD_OF_INSTITUTIONAL")},&nbsp;
                                            <a href={`${ADVISORTHREE_URL}`} rel="noopener noreferrer"
                                               target="_blank">{t("AAVE")}</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="proileContainer" data-aos="fade-up">
                                <div className="bg-advisors">
                                    <div className="profile-picture">
                                        <img src={sam} alt="pic1"/>
                                        <div className="social-icons">
                                        <span className="icon-box">&nbsp;</span>
                                           
                                        </div>
                                    </div>
                                    <div className="margin-left-xs text-center">
                                        <p className="profile-name">{t("SAM")}</p>
                                        <p className="designation-name">{t("INVESTMENT_ASSOCIATE")},&nbsp;
                                            <a href={`${ADVISORFOUR_URL}`} rel="noopener noreferrer"
                                               target="_blank">{t("TENDERMINT_SAM")}</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="proileContainer" data-aos="fade-up">
                                <div className="bg-advisors">
                                    <div className="profile-picture">
                                        <img src={jeffrey} alt="pic1"/>
                                        <div className="social-icons">
                                            <a className="icon-box" href={`${ADVISORFIVE_TWITTER_URL}`}
                                               rel="noopener noreferrer" target="_blank"><Icon
                                                viewClass="social_icon_imgg"
                                                icon="twitter-logo"/></a>
                                        </div>
                                    </div>
                                    <div className="margin-left-xs text-center">
                                        <p className="profile-name">{t("JEFFREY")}</p>
                                        <p className="designation-name">{t("DIRECTOR")},&nbsp;
                                            <a href={`${ADVISORFIVE_URL}`} rel="noopener noreferrer"
                                               target="_blank">{t("IRIS")}</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="proileContainer" data-aos="fade-up">
                                <div className="bg-advisors">
                                    <div className="profile-picture">
                                        <img src={luchang} alt="luchang"/>
                                        <div className="social-icons">
                                            <a className="icon-box" href={`${ADVISORSIX_LINKEDIN_URL}`}
                                               rel="noopener noreferrer" target="_blank"><Icon
                                                viewClass="social_icon_imgg"
                                                icon="linkedin-footer"/></a>
                                        </div>
                                    </div>
                                    <div className="margin-left-xs text-center">
                                        <p className="profile-name">{t("LUCHANGE")}</p>
                                        <p className="designation-name">{t("FOUNDING_PARTNER")}&nbsp;
                                            <a href={`${ADVISORSIX_URL}`} rel="noopener noreferrer"
                                               target="_blank">{t("ARCANUM")}</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row profiles-group">
                          
                            <div className="proileContainer" data-aos="fade-up">
                                <div className="bg-advisors">
                                    <div className="profile-picture">
                                        <img src={zhihao} alt="zhihao"/>
                                        <div className="social-icons">
                                            <a className="icon-box" href={`${ADVISORSEVEN_TWITTER_URL}`}
                                               rel="noopener noreferrer"
                                               target="_blank"><Icon viewClass="social_icon_imgg" icon="twitter-logo"/></a>
                                            <a className="icon-box" href={`${ADVISORSEVEN_LINKEDIN_URL}`}
                                               rel="noopener noreferrer" target="_blank"><Icon
                                                viewClass="social_icon_imgg"
                                                icon="linkedin-footer"/></a>
                                        </div>
                                    </div>
                                    <div className="margin-left-xs text-center">
                                        <p className="profile-name">{t("ZHI_HAO")}</p>
                                        <p className="designation-name">{t("SENIOR_ASSOCIATE")}&nbsp;
                                            <a href={`${ADVISORSEVEN_URL}`} rel="noopener noreferrer"
                                               target="_blank">{t("DENTONS")}</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="proileContainer" data-aos="fade-up">
                                <div className="bg-advisors">
                                    <div className="profile-picture">
                                        <img src={marcus} alt="marcus"/>
                                        <div className="social-icons">
                                            <a className="icon-box" href={`${ADVISOREIGHT_TWITTER_URL}`}
                                               rel="noopener noreferrer"
                                               target="_blank"><Icon viewClass="social_icon_imgg" icon="twitter-logo"/></a>
                                            <a className="icon-box" href={`${ADVISOREIGHT_LINKEDIN_URL}`}
                                               rel="noopener noreferrer" target="_blank"><Icon
                                                viewClass="social_icon_imgg"
                                                icon="linkedin-footer"/></a>
                                        </div>
                                    </div>
                                    <div className="margin-left-xs text-center">
                                        <p className="profile-name">{t("MARCUS")}</p>
                                        <p className="designation-name">{t("COO")}&nbsp;
                                            <a href={`${ADVISOREIGHT_URL}`} rel="noopener noreferrer"
                                               target="_blank">{t("BRIDGE_TOWER")}</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="proileContainer" data-aos="fade-up">
                                <div className="bg-advisors">
                                    <div className="profile-picture">
                                        <img src={scott} alt="scott"/>
                                        <div className="social-icons">
                                            <a className="icon-box"
                                               href={`${ADVISORNINE_LINKEDIN_URL}`}
                                               rel="noopener noreferrer" target="_blank"><Icon
                                                viewClass="social_icon_imgg"
                                                icon="linkedin-footer"/></a>
                                        </div>
                                    </div>
                                    <div className="margin-left-xs text-center">
                                        <p className="profile-name">{t("SCOTT")}</p>
                                        <p className="designation-name">{t("ASIA_HEAD_BD")}&nbsp;
                                            <a href={`${ADVISORNINE_URL}`} rel="noopener noreferrer"
                                               target="_blank">{t("TEZOS")}</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row profiles-group">
                           
                            <div className="proileContainer" data-aos="fade-up">
                                <div className="bg-advisors">
                                    <div className="profile-picture">
                                        <img src={hartej} alt="pic1"/>
                                        <div className="social-icons">
                                            <a className="icon-box" href={`${ADVISORTEN_TWITTER_URL}`}
                                               rel="noopener noreferrer"
                                               target="_blank"><Icon viewClass="social_icon_imgg" icon="twitter-logo"/></a>
                                            <a className="icon-box" href={`${ADVISORTEN_LINKEDIN_URL}`}
                                               rel="noopener noreferrer" target="_blank"><Icon
                                                viewClass="social_icon_imgg"
                                                icon="linkedin-footer"/></a>
                                        </div>
                                    </div>
                                    <div className="margin-left-xs text-center">
                                        <p className="profile-name">{t("HARTEJ")}</p>
                                        <p className="designation-name">{t("CEO_CO_FOUNDER")},&nbsp;
                                            <a href={`${ADVISORTEN_URL}`} rel="noopener noreferrer"
                                               target="_blank">{t("ZOKYO")}</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    name ?
                        <Modal setName={setName} name={name}/> :
                        null
                }

            </div>
        </section>
    )
};
export default Advisors;