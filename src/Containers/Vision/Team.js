import React, {useState} from "react";
import Tushar from "../../assets/images1/pics/tushar.png"
import deepanshu from "../../assets/images1/pics/deepanshu.png"
import abhinav from "../../assets/images1/pics/abhinav.png"
import sudheer from "../../assets/images1/pics/sudheer.png"
import puneet from "../../assets/images1/pics/puneet.png"
import prashant from "../../assets/images1/pics/prashanth.png"
import raju from "../../assets/images1/pics/raju.png"
import mikhil from "../../assets/images1/pics/mikhil.png"
import abhitej from "../../assets/images1/pics/abhitej.png"
import klk from "../../assets/images1/pics/klk.png"
import aditi from "../../assets/images1/pics/aditi.png"
import Icon from "../../components/Icon";
import Modal from "./Modals";
import {useTranslation} from "react-i18next";

const Team = () => {
    const {t} = useTranslation();
    const [name, setName] = useState("");
    return (
        <section className="vision-section-team">
            <div className="container">
                <h3 className="section-title">{t("TEAM")}</h3>
                <div className="profiles">
                    <div className="profile" data-aos="fade-up">
                        <img src={Tushar} alt="box_build"/>
                        <p className="name">{t("TUSHAR")}</p>
                        <p className="role">{t("CEO_CO_FOUNDER")}</p>
                        <div className="image-overlay">
                            <div className="icons">
                                <a className="icon-box" href="https://twitter.com/Tushar307" rel="noopener noreferrer"
                                   target="_blank"><Icon viewClass="social_icon_imgg" icon="twitter-logo"/></a>
                                <a className="icon-box" href="https://www.linkedin.com/in/tushar-aggarwal-2823b02b/"
                                   rel="noopener noreferrer"
                                   target="_blank"><Icon viewClass="social_icon_imgg" icon="linkedin-footer"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="profile" data-aos="fade-up">
                        <img src={deepanshu} alt="box_build"/>
                        <p className="name">{t("DEEPANSHU")}</p>
                        <p className="role">{t("CTO_CO_FOUNDER")}</p>
                        <div className="image-overlay">
                            <div className="icons">
                                <a className="icon-box" href="https://twitter.com/deepanshutr" rel="noopener noreferrer"
                                   target="_blank"><Icon viewClass="social_icon_imgg" icon="twitter-logo"/></a>
                                <a className="icon-box" href="https://www.linkedin.com/in/deepanshutr/"
                                   rel="noopener noreferrer"
                                   target="_blank"><Icon viewClass="social_icon_imgg" icon="linkedin-footer"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="profile" data-aos="fade-up">
                        <img src={abhinav} alt="box_build"/>
                        <p className="name">{t("ABHINAV")}</p>
                        <p className="role">{t("SOFTWARE_DEVELOPER")}</p>
                        <div className="image-overlay">
                            <div className="icons">
                                <a className="icon-box" href="https://twitter.com/avkr003" rel="noopener noreferrer"
                                   target="_blank"><Icon viewClass="social_icon_imgg" icon="twitter-logo"/></a>
                                <a className="icon-box" href="https://www.linkedin.com/in/avkr003/"
                                   rel="noopener noreferrer"
                                   target="_blank"><Icon viewClass="social_icon_imgg" icon="linkedin-footer"/></a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="profiles" data-aos="fade-up">
                    <div className="profile">
                        <img src={prashant} alt="box_build"/>
                        <p className="name">{t("PRASHANTH")}</p>
                        <p className="role">{t("SOFTWARE_DEVELOPER")}</p>
                        <div className="image-overlay">
                            <div className="icons">
                                <a className="icon-box"
                                   href="https://www.linkedin.com/in/prashant-kumar-varun-79701aa4/"
                                   rel="noopener noreferrer"
                                   target="_blank"><Icon viewClass="social_icon_imgg" icon="linkedin-footer"/></a>
                            </div>
                        </div>
                    </div>

                    <div className="profile" data-aos="fade-up">
                        <img src={puneet} alt="box_build"/>
                        <p className="name">{t("PUNEET")}</p>
                        <p className="role">{t("SOFTWARE_DEVELOPER")}</p>
                        <div className="image-overlay">
                            <div className="icons">
                                <a className="icon-box" href="https://twitter.com/puneet_m_" rel="noopener noreferrer"
                                   target="_blank"><Icon viewClass="social_icon_imgg" icon="twitter-logo"/></a>
                                <a className="icon-box" href="https://www.linkedin.com/in/puneet-mahajan-/"
                                   rel="noopener noreferrer"
                                   target="_blank"><Icon viewClass="social_icon_imgg" icon="linkedin-footer"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="profile" data-aos="fade-up">
                        <img src={raju} alt="box_build"/>
                        <p className="name">{t("RAJU")}</p>
                        <p className="role">{t("FRON_END")}</p>
                        <div className="image-overlay">
                            <div className="icons">
                                <a className="icon-box" href="https://www.linkedin.com/in/rajuvemula/"
                                   rel="noopener noreferrer"
                                   target="_blank"><Icon viewClass="social_icon_imgg" icon="linkedin-footer"/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profiles" data-aos="fade-up">
                    <div className="profile">
                        <img src={sudheer} alt="box_build"/>
                        <p className="name">{t("SUDHEER")}</p>
                        <p className="role">{t("UX")}</p>
                    </div>
                    <div className="profile" data-aos="fade-up">
                        <img src={abhitej} alt="box_build"/>
                        <p className="name">{t("ABHITEJ")}</p>
                        <p className="role">{t("STRATEGY")}</p>
                        <div className="image-overlay">
                            <div className="icons">
                                <a className="icon-box" href="https://twitter.com/abhitezsingh"
                                   rel="noopener noreferrer"
                                   target="_blank"><Icon viewClass="social_icon_imgg" icon="twitter-logo"/></a>
                                <a className="icon-box" href="https://www.linkedin.com/in/abhitejsingh23/"
                                   rel="noopener noreferrer"
                                   target="_blank"><Icon viewClass="social_icon_imgg" icon="linkedin-footer"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="profile" data-aos="fade-up">
                        <img src={mikhil} alt="box_build"/>
                        <p className="name">{t("MIKHIL")}</p>
                        <p className="role">{t("STRATEGY_BD")}</p>
                        <div className="image-overlay">
                            <div className="icons">
                                <a className="icon-box" href="https://twitter.com/PandeyMikhil"
                                   rel="noopener noreferrer"
                                   target="_blank"><Icon viewClass="social_icon_imgg" icon="twitter-logo"/></a>
                                <a className="icon-box" href="https://www.linkedin.com/in/mikhilpandey/"
                                   rel="noopener noreferrer"
                                   target="_blank"><Icon viewClass="social_icon_imgg" icon="linkedin-footer"/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profiles" data-aos="fade-up">
                    <div className="profile">
                        <img src={klk} alt="box_build"/>
                        <p className="name"> {t("LAKSHMIKANTH")}</p>
                        <p className="role">{t("FRON_END")}</p>
                    </div>

                    <div className="profile" data-aos="fade-up">
                        <img src={aditi} alt="box_build"/>
                        <p className="name">{t("ADITI")}</p>
                        <p className="role">{t("SOFTWARE_DEVELOPER")}</p>
                        <div className="image-overlay">
                            <div className="icons">
                                <a className="icon-box" href="https://www.linkedin.com/in/aditi-maheshwari-a17906107/"
                                   rel="noopener noreferrer"
                                   target="_blank"><Icon viewClass="social_icon_imgg" icon="linkedin-footer"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="profile" data-aos="fade-up">
                        <div className="more-box">
                            <div>
                                <p>14+ {t("MORE")}</p>
                                <p className="more-text">{t("SECURITY_DESIGN")}</p>
                                <p className="more-text">{t("RESEARCH_MARKETING")}</p>
                                <p className="more-text">{t("FINANCE_OPERATIONS")}</p>
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
        </section>
    )
};
export default Team;