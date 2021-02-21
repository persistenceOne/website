import React, {useState} from "react";
import pic3 from '../../assets/images1/pics/pic3.svg'
import pic4 from '../../assets/images1/pics/pic4.svg'
import pic5 from '../../assets/images1/pics/pic5.svg'
import {useTranslation} from "react-i18next";
import Icon from "../../components/Icon";
import Modal from "./Modals";

const Advisors = () => {
    const {t} = useTranslation();
    const [name, setName] = useState("");

    const handleModalData = (name) => {
        setName(name)
    };

    return (
        <section className="adviser-section">
            <div className="container">
                <h3 className="section-title">
                    {t("ADVISORS")}
                </h3>
                <div className="adviser-text">
                    <p>{t("ADVISORS_INFO")}</p>
                </div>
                <div className="profiles">
                    <div className="profile">
                        <img src={pic3} alt="box_build"/>
                        <div className="text-center">
                        <p className="name">Jason Choi</p>
                        <p className="role">Head of Research, Spartan Capital</p>
                        </div>
                        <div className="image-overlay">
                            <p onClick={() => handleModalData("jason")}>Read More</p>
                            <div className="icons">
                                <a className="icon-box" href="https://twitter.com/mrjasonchoi" rel="noopener noreferrer" target="_blank"><Icon viewClass="social_icon_imgg" icon="twitter-logo"/></a>
                                <a className="icon-box" href="https://www.linkedin.com/in/jasonhtchoi/" rel="noopener noreferrer"
                                   target="_blank"><Icon viewClass="social_icon_imgg" icon="linkedin-footer"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="profile">
                        <img src={pic4} alt="box_build"/>
                        <div className="text-center">
                        <p className="name">Sandeep Nailwal</p>
                        <p className="role">Co-founder and COO, Matic Network</p>
                        </div>
                        <div className="image-overlay">
                            <p onClick={() => handleModalData("sandeep")}>Read More</p>
                            <div className="icons">
                                <a className="icon-box" href="https://twitter.com/sandeepnailwal" rel="noopener noreferrer"
                                   target="_blank"><Icon viewClass="social_icon_imgg" icon="twitter-logo"/></a>
                                <a className="icon-box" href="https://www.linkedin.com/in/sandeep-nailwal-60709a33/"
                                   rel="noopener noreferrer" target="_blank"><Icon viewClass="social_icon_imgg" icon="linkedin-footer"/></a>

                            </div>
                        </div>
                    </div>
                    <div className="profile">
                        <img src={pic5} alt="box_build"/>
                        <div className="text-center">
                        <p className="name">Jeffrey Hu</p>
                        <p className="role">Director of Research, IRIS Network</p>
                        </div>
                        <div className="image-overlay">
                            <p onClick={() => handleModalData("jeffrey")}>Read More</p>
                            <div className="icons">
                                <a className="icon-box" href="https://twitter.com/hu_zhiwei" rel="noopener noreferrer" target="_blank"><Icon viewClass="social_icon_imgg" icon="twitter-logo"/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profiles">
                    <div className="profile">
                        <img src={pic3} alt="box_build"/>
                        <div className="text-center">
                            <p className="name">Jason Choi</p>
                            <p className="role">Head of Research, Spartan Capital</p>
                        </div>
                        <div className="image-overlay">
                            <p onClick={() => handleModalData("jason")}>Read More</p>
                            <div className="icons">
                                <a className="icon-box" href="https://twitter.com/mrjasonchoi" rel="noopener noreferrer" target="_blank"><Icon viewClass="social_icon_imgg" icon="twitter-logo"/></a>
                                <a className="icon-box" href="https://www.linkedin.com/in/jasonhtchoi/" rel="noopener noreferrer"
                                   target="_blank"><Icon viewClass="social_icon_imgg" icon="linkedin-footer"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="profile">
                        <img src={pic4} alt="box_build"/>
                        <div className="text-center">
                            <p className="name">Sandeep Nailwal</p>
                            <p className="role">Co-founder and COO, Matic Network</p>
                        </div>
                        <div className="image-overlay">
                            <p onClick={() => handleModalData("sandeep")}>Read More</p>
                            <div className="icons">
                                <a className="icon-box" href="https://twitter.com/sandeepnailwal" rel="noopener noreferrer"
                                   target="_blank"><Icon viewClass="social_icon_imgg" icon="twitter-logo"/></a>
                                <a className="icon-box" href="https://www.linkedin.com/in/sandeep-nailwal-60709a33/"
                                   rel="noopener noreferrer" target="_blank"><Icon viewClass="social_icon_imgg" icon="linkedin-footer"/></a>

                            </div>
                        </div>
                    </div>
                    <div className="profile">
                        <img src={pic5} alt="box_build"/>
                        <div className="text-center">
                            <p className="name">Jeffrey Hu</p>
                            <p className="role">Director of Research, IRIS Network</p>
                        </div>
                        <div className="image-overlay">
                            <p onClick={() => handleModalData("jeffrey")}>Read More</p>
                            <div className="icons">
                                <a className="icon-box" href="https://twitter.com/hu_zhiwei" rel="noopener noreferrer" target="_blank"><Icon viewClass="social_icon_imgg" icon="twitter-logo"/></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div className="card-deck">*/}
                {/*    <div className="margin-t-20 col-lg-4 proileContainer">*/}
                {/*        <div className="col-lg-12 bg-advisors">*/}
                {/*            <div className="profile-picture">*/}
                {/*                <img src={pic3} alt="pic1"/>*/}
                {/*                <div className="social-icons">*/}
                {/*                    <a href="https://twitter.com/mrjasonchoi" rel="noopener noreferrer" target="_blank"><i*/}
                {/*                        className="mdi mdi-twitter icon"></i></a>*/}
                {/*                    <a href="https://www.linkedin.com/in/jasonhtchoi/" rel="noopener noreferrer"*/}
                {/*                       target="_blank"><i className="mdi mdi-linkedin icon"></i></a>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="margin-left-xs">*/}
                {/*                <p className="profile-name">Jason Choi</p>*/}
                {/*                <p className="designation-name">Head of Research, <a>Spartan Capital</a></p>*/}
                {/*                <p className="company-name">{t("JASOI_CHAI_INFO")}</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*/!*    <div className="margin-t-20 col-lg-4 proileContainer">*!/*/}
                {/*        <div className="col-lg-12 bg-advisors">*/}
                {/*            <div className="profile-picture">*/}
                {/*                <img src={pic4} alt="pic2"/>*/}
                {/*                <div className="social-icons">*/}
                {/*                    <a href="https://twitter.com/sandeepnailwal" rel="noopener noreferrer"*/}
                {/*                       target="_blank"><i className="mdi mdi-twitter icon"/></a>*/}
                {/*                    <a href="https://www.linkedin.com/in/sandeep-nailwal-60709a33/"*/}
                {/*                       rel="noopener noreferrer" target="_blank"><i className="mdi mdi-linkedin icon"/></a>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="margin-left-xs">*/}
                {/*                <p className="profile-name">Sandeep Nailwal</p>*/}
                {/*                <p className="designation-name">Co-founder and COO, <a>Matic Network</a></p>*/}
                {/*                <p className="company-name">{t("SANDEEP_NARWAL_INFO")}</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="margin-t-20 col-lg-4  proileContainer">*/}
                {/*        <div className="col-lg-12 bg-advisors">*/}
                {/*            <div className="profile-picture">*/}
                {/*                <img src={pic5} alt="pic2"/>*/}
                {/*                <div className="social-icons">*/}
                {/*                    <a href="https://twitter.com/hu_zhiwei" rel="noopener noreferrer" target="_blank"><i*/}
                {/*                        className="mdi mdi-twitter icon"/></a>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="margin-left-xs">*/}
                {/*                <p className="profile-name">Jeffrey Hu</p>*/}
                {/*                <p className="designation-name">Director of Research, <a>IRIS Network</a></p>*/}
                {/*                <p className="company-name">{t("JEFFREY_INFO")} </p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {
                    name ?
                        <Modal setName={setName} name={name}/> :
                        null
                }

            </div>
        </section>
    )
}
export default Advisors;