import React, {useState} from "react";
import jason from "../../assets/images1/pics/advisers/jason.svg";
import sandeep from "../../assets/images1/pics/advisers/sandeep.svg";
import jeffrey from "../../assets/images1/pics/advisers/jeffrey.svg";
import luchang from "../../assets/images1/pics/advisers/luchang.svg";
import hartej from "../../assets/images1/pics/advisers/hartej.svg";
import scott from "../../assets/images1/pics/advisers/scott.svg";
import marcus from "../../assets/images1/pics/advisers/marcus.svg";
import zhihao from "../../assets/images1/pics/advisers/zhihao.svg";

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
                                       rel="noopener noreferrer" target="_blank"><Icon viewClass="social_icon_imgg"
                                                                                       icon="linkedin-footer"/></a>
                                </div>
                            </div>
                            <div className="margin-left-xs text-center">
                                <p className="profile-name">Jason Choi</p>
                                <p className="designation-name">Head of Research,&nbsp;
                                    <a  href="http://spartangroup.io/index.html" rel="noopener noreferrer" target="_blank"> Spartan Capital</a>
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
                                    <a className="icon-box" href="https://www.linkedin.com/in/sandeep-nailwal-60709a33/"
                                       rel="noopener noreferrer" target="_blank"><Icon viewClass="social_icon_imgg"
                                                                                       icon="linkedin-footer"/></a>
                                </div>
                            </div>
                            <div className="margin-left-xs text-center">
                                <p className="profile-name">Sandeep Nailwal </p>
                                <p className="designation-name">Co-founder and COO,&nbsp;
                                    <a  href="https://polygon.technology/" rel="noopener noreferrer" target="_blank"> Polygon (Matic Network)</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="proileContainer" data-aos="fade-up">
                        <div className="bg-advisors">
                            <div className="profile-picture">
                                <img src={jeffrey} alt="pic1"/>
                                <div className="social-icons">
                                    <a className="icon-box" href="https://twitter.com/sandeepnailwal"
                                       rel="noopener noreferrer"
                                       target="_blank"><Icon viewClass="social_icon_imgg" icon="twitter-logo"/></a>
                                    <a className="icon-box" href="https://twitter.com/hu_zhiwei"
                                       rel="noopener noreferrer" target="_blank"><Icon viewClass="social_icon_imgg"
                                                                                       icon="linkedin-footer"/></a>
                                </div>
                            </div>
                            <div className="margin-left-xs text-center">
                                <p className="profile-name">Jeffrey Hu</p>
                                <p className="designation-name">Director,&nbsp;
                                    <a  href="https://irisnet.org/" rel="noopener noreferrer" target="_blank">Iris Network</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row profiles-group">
                    <div className="proileContainer" data-aos="fade-up">
                        <div className="bg-advisors">
                            <div className="profile-picture">
                                <img src={luchang} alt="luchang"/>
                                <div className="social-icons">
                                    <a className="icon-box" href="https://www.linkedin.com/in/luciazheng/"
                                       rel="noopener noreferrer" target="_blank"><Icon viewClass="social_icon_imgg"
                                                                                       icon="linkedin-footer"/></a>
                                </div>
                            </div>
                            <div className="margin-left-xs text-center">
                                <p className="profile-name">Luchang Zheng</p>
                                <p className="designation-name">Founding Partner,&nbsp;
                                    <a  href="https://www.arcanum.capital/" rel="noopener noreferrer" target="_blank">Arcanum Capital</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="proileContainer" data-aos="fade-up">
                        <div className="bg-advisors">
                            <div className="profile-picture">
                                <img src={zhihao} alt="zhihao"/>
                                <div className="social-icons">
                                    <a className="icon-box" href="https://twitter.com/loyzhihao"
                                       rel="noopener noreferrer"
                                       target="_blank"><Icon viewClass="social_icon_imgg" icon="twitter-logo"/></a>
                                    <a className="icon-box" href="https://www.linkedin.com/in/loyzhihao/"
                                       rel="noopener noreferrer" target="_blank"><Icon viewClass="social_icon_imgg"
                                                                                       icon="linkedin-footer"/></a>
                                </div>
                            </div>
                            <div className="margin-left-xs text-center">
                                <p className="profile-name">Zhi Hao Loy</p>
                                <p className="designation-name">Senior Associate,&nbsp;
                                    <a  href="https://dentons.rodyk.com/" rel="noopener noreferrer" target="_blank">Dentons Rodyk</a>
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
                                       rel="noopener noreferrer" target="_blank"><Icon viewClass="social_icon_imgg"
                                                                                       icon="linkedin-footer"/></a>
                                </div>
                            </div>
                            <div className="margin-left-xs text-center">
                                <p className="profile-name">Marcus Maute</p>
                                <p className="designation-name">Managing Partner,&nbsp;
                                    <a  href="https://www.tavis-digital.com/" rel="noopener noreferrer" target="_blank">Tavis Digital</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row profiles-group">
                    <div className="proileContainer" data-aos="fade-up">
                        <div className="bg-advisors">
                            <div className="profile-picture">
                                <img src={scott} alt="scott"/>
                                <div className="social-icons">
                                    <a className="icon-box" href="https://www.linkedin.com/in/scottdalittlewood/"
                                       rel="noopener noreferrer" target="_blank"><Icon viewClass="social_icon_imgg"
                                                                                       icon="linkedin-footer"/></a>
                                </div>
                            </div>
                            <div className="margin-left-xs text-center">
                                <p className="profile-name">Scott Littlewood</p>
                                <p className="designation-name">Asia Head of BD and Ops,&nbsp;
                                    <a  href="https://tezos.com/" rel="noopener noreferrer" target="_blank">Tezos APAC</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="proileContainer" data-aos="fade-up">
                        <div className="bg-advisors">
                            <div className="profile-picture">
                                <img src={hartej} alt="pic1"/>
                                <div className="social-icons">
                                    <a className="icon-box" href="https://twitter.com/hartejsawney  "
                                       rel="noopener noreferrer"
                                       target="_blank"><Icon viewClass="social_icon_imgg" icon="twitter-logo"/></a>
                                    <a className="icon-box" href="https://www.linkedin.com/in/hartej/"
                                       rel="noopener noreferrer" target="_blank"><Icon viewClass="social_icon_imgg"
                                                                                       icon="linkedin-footer"/></a>
                                </div>
                            </div>
                            <div className="margin-left-xs text-center">
                                <p className="profile-name">Hartej Sawney</p>
                                <p className="designation-name">Co-Founder and CEO,&nbsp;
                                    <a  href="https://www.zokyo.io/" rel="noopener noreferrer" target="_blank">Zokyo</a>
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