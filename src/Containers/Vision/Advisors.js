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
                                            <a className="icon-box" href="https://twitter.com/mrjasonchoi"
                                               rel="noopener noreferrer"
                                               target="_blank"><Icon viewClass="social_icon_imgg" icon="twitter-logo"/></a>
                                            <a className="icon-box" href="https://www.linkedin.com/in/jasonhtchoi/"
                                               rel="noopener noreferrer" target="_blank"><Icon
                                                viewClass="social_icon_imgg"
                                                icon="linkedin-footer"/></a>
                                        </div>
                                    </div>
                                    <div className="margin-left-xs text-center">
                                        <p className="profile-name">{t("JASON")}</p>
                                        <p className="designation-name">{t("HEAD_RESEARCH")}&nbsp;
                                            <a href="http://spartangroup.io/index.html" rel="noopener noreferrer"
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
                                            <a className="icon-box" href="https://twitter.com/sandeepnailwal"
                                               rel="noopener noreferrer"
                                               target="_blank"><Icon viewClass="social_icon_imgg" icon="twitter-logo"/></a>
                                            <a className="icon-box"
                                               href="https://www.linkedin.com/in/sandeep-nailwal-60709a33/"
                                               rel="noopener noreferrer" target="_blank"><Icon
                                                viewClass="social_icon_imgg"
                                                icon="linkedin-footer"/></a>
                                        </div>
                                    </div>
                                    <div className="margin-left-xs text-center">
                                        <p className="profile-name">{t("SANDEEP")} </p>
                                        <p className="designation-name">{t("COO_CO_FOUNDER")}&nbsp;
                                            <a href="https://polygon.technology/" rel="noopener noreferrer"
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
                                           
                                            <a className="icon-box" href="https://twitter.com/chainyoda"
                                               rel="noopener noreferrer" target="_blank"><Icon
                                                viewClass="social_icon_imgg"
                                                icon="twitter-logo"/></a>
                                                 <a className="icon-box"
                                               href="https://www.linkedin.com/in/ajitkt/"
                                               rel="noopener noreferrer" target="_blank"><Icon
                                                viewClass="social_icon_imgg"
                                                icon="linkedin-footer"/></a>
                                        </div>
                                    </div>
                                    <div className="margin-left-xs text-center">
                                        <p className="profile-name">{t("AJITH")}</p>
                                        <p className="designation-name">{t("HEAD_OF_INSTITUTIONAL")},&nbsp;
                                            <a href="https://aave.com/" rel="noopener noreferrer"
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
                                            <a href="https://tendermint.com" rel="noopener noreferrer"
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
                                            <a className="icon-box" href="https://twitter.com/hu_zhiwei"
                                               rel="noopener noreferrer" target="_blank"><Icon
                                                viewClass="social_icon_imgg"
                                                icon="linkedin-footer"/></a>
                                        </div>
                                    </div>
                                    <div className="margin-left-xs text-center">
                                        <p className="profile-name">{t("JEFFREY")}</p>
                                        <p className="designation-name">{t("DIRECTOR")},&nbsp;
                                            <a href="https://irisnet.org/" rel="noopener noreferrer"
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
                                            <a className="icon-box" href="https://www.linkedin.com/in/luciazheng/"
                                               rel="noopener noreferrer" target="_blank"><Icon
                                                viewClass="social_icon_imgg"
                                                icon="linkedin-footer"/></a>
                                        </div>
                                    </div>
                                    <div className="margin-left-xs text-center">
                                        <p className="profile-name">{t("LUCHANGE")}</p>
                                        <p className="designation-name">{t("FOUNDING_PARTNER")}&nbsp;
                                            <a href="https://www.arcanum.capital/" rel="noopener noreferrer"
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
                                            <a className="icon-box" href="https://twitter.com/loyzhihao"
                                               rel="noopener noreferrer"
                                               target="_blank"><Icon viewClass="social_icon_imgg" icon="twitter-logo"/></a>
                                            <a className="icon-box" href="https://www.linkedin.com/in/loyzhihao/"
                                               rel="noopener noreferrer" target="_blank"><Icon
                                                viewClass="social_icon_imgg"
                                                icon="linkedin-footer"/></a>
                                        </div>
                                    </div>
                                    <div className="margin-left-xs text-center">
                                        <p className="profile-name">{t("ZHI_HAO")}</p>
                                        <p className="designation-name">{t("SENIOR_ASSOCIATE")}&nbsp;
                                            <a href="https://dentons.rodyk.com/" rel="noopener noreferrer"
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
                                            <a className="icon-box" href="https://twitter.com/marcusmaute"
                                               rel="noopener noreferrer"
                                               target="_blank"><Icon viewClass="social_icon_imgg" icon="twitter-logo"/></a>
                                            <a className="icon-box" href="https://www.linkedin.com/in/marcusmaute/"
                                               rel="noopener noreferrer" target="_blank"><Icon
                                                viewClass="social_icon_imgg"
                                                icon="linkedin-footer"/></a>
                                        </div>
                                    </div>
                                    <div className="margin-left-xs text-center">
                                        <p className="profile-name">{t("MARCUS")}</p>
                                        <p className="designation-name">{t("MANAGING_PARTNER")}&nbsp;
                                            <a href="https://www.tavis-digital.com/" rel="noopener noreferrer"
                                               target="_blank">{t("TAVIS_DIGITAL")}</a>
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
                                               href="https://www.linkedin.com/in/scottdalittlewood/"
                                               rel="noopener noreferrer" target="_blank"><Icon
                                                viewClass="social_icon_imgg"
                                                icon="linkedin-footer"/></a>
                                        </div>
                                    </div>
                                    <div className="margin-left-xs text-center">
                                        <p className="profile-name">{t("SCOTT")}</p>
                                        <p className="designation-name">{t("ASIA_HEAD_BD")}&nbsp;
                                            <a href="https://tezos.com/" rel="noopener noreferrer"
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
                                            <a className="icon-box" href="https://twitter.com/hartejsawney  "
                                               rel="noopener noreferrer"
                                               target="_blank"><Icon viewClass="social_icon_imgg" icon="twitter-logo"/></a>
                                            <a className="icon-box" href="https://www.linkedin.com/in/hartej/"
                                               rel="noopener noreferrer" target="_blank"><Icon
                                                viewClass="social_icon_imgg"
                                                icon="linkedin-footer"/></a>
                                        </div>
                                    </div>
                                    <div className="margin-left-xs text-center">
                                        <p className="profile-name">{t("HARTEJ")}</p>
                                        <p className="designation-name">{t("CEO_CO_FOUNDER")},&nbsp;
                                            <a href="https://www.zokyo.io/" rel="noopener noreferrer"
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