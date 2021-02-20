import React from "react";
import Icon from "../../components/Icon";
import {useTranslation} from "react-i18next";
import square from "../../assets/images1/float_blocks/square.svg";
import circle from "../../assets/images1/float_blocks/circle.svg";
import triangle from "../../assets/images1/float_blocks/triangle.svg";

const Aims = () => {
    const {t} = useTranslation();
    return (
        <section className="aim-section">
            <h3 className="section-title">{t("AIM_SECTION_TITLE")}</h3>
            <div className="container">
                <div className="row row-margin-nft">
                            <div className="col-md-12 col-lg-6 img-section">
                                {/*<img src={aimbg} alt="aim_bg"/>*/}
                                <img src={square} alt="square" className="square"/>
                                <img src={circle} alt="circle" className="circle"/>
                                <img src={triangle} alt="triangle" className="triangle"/>
                            </div>
                            <div className="col-md-12 col-lg-6">
                                <div className="services-list">
                                    <div className="serial">
                                        <p>01</p>
                                    </div>
                                    <div className="serviceBody">
                                        <div className="icon-section">
                                        <Icon viewClass="accessibility" icon="accessibility"/>
                                        </div>
                                        <div className="media-body">
                                            <h5 className="primary-white-color">{t("ACCESSIBILITY")}</h5>
                                            <p className="pt-2">{t("ACCESSIBILITY_INFO")}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="services-list">
                                    <div className="serial">
                                        <p>02</p>
                                    </div>
                                    <div className="serviceBody">
                                        <div className="icon-section">
                                        <Icon viewClass="liquidity" icon="liquidity"/>
                                        </div>
                                        <div className="media-body">
                                            <h5 className="primary-white-color">{t("LIQUIDITY")}</h5>
                                            <p className="pt-2">{t("LIQUIDITY_INFO")}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="services-list sustain">
                                    <div className="serial">
                                        <p>03</p>
                                    </div>
                                    <div className="serviceBody">
                                        <div className="icon-section">
                                        <Icon viewClass="sustainability" icon="sustainability"/>
                                        </div>
                                        <div className="media-body">
                                            <h5 className="primary-white-color">{t("SUSTAINABILITY")}</h5>
                                            <p className="pt-2">{t("SUSTAINABILITY_INFO")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </div>
            </div>
        </section>
    )
}
export default Aims;