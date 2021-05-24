import React from "react";
import Icon from "../../components/Icon";
import square from "../../assets/images1/float_blocks/square.svg";
import circle from "../../assets/images1/float_blocks/circle.svg";
import triangle from "../../assets/images1/float_blocks/triangle.svg";
import {useTranslation} from "react-i18next";

const Aims = () => {
    const {t} = useTranslation();
    return (
        <section className="aim-section">
            <h3 className="section-title">{t("AIM_SECTION_HEADING")}</h3>
            <div className="container">
                <div className="row row-margin-nft">
                    <div className="col-md-12 col-lg-6 img-section">
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
                                    <Icon viewClass="accessibility" icon="defi"/>
                                </div>
                                <div className="media-body">
                                    <h5 className="primary-white-color">{t("FOCUS_DEFI_HEADING")}</h5>
                                    <p className="pt-2">{t("FOCUS_DEFI_TEXT")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="services-list">
                            <div className="serial">
                                <p>02</p>
                            </div>
                            <div className="serviceBody">
                                <div className="icon-section">
                                    <Icon viewClass="liquidity" icon="nft"/>
                                </div>
                                <div className="media-body">
                                    <h5 className="primary-white-color">{t("FOCUS_NFT_HEADING")}</h5>
                                    <p className="pt-2">{t("FOCUS_NFT_TEXT")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="services-list sustain">
                            <div className="serial">
                                <p>03</p>
                            </div>
                            <div className="serviceBody">
                                <div className="icon-section">
                                    <Icon viewClass="sustainability" icon="pos"/>
                                </div>
                                <div className="media-body">
                                    <h5 className="primary-white-color">{t("FOCUS_POS_HEADING")}</h5>
                                    <p className="pt-2">{t("FOCUS_POS_TEXT")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default Aims;