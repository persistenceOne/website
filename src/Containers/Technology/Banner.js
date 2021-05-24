import React from "react";
import technology_bg from "../../assets/images1/technology/technolgy_banner.svg"
import curvedBorder from "../../assets/images1/left_curved.svg";
import {useTranslation} from "react-i18next";

const Banner = () => {
    const {t} = useTranslation();
    return (
        <section className="section-technology-banner" data-aos="fade-up">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 left-section">
                        <div className="content">
                            <div className="content-box">
                                <h3>{t("TECHNOLOGY")}</h3>
                                <p className="banner-content"> {t("TECHNOLOGY_BANNER_TEXT")}</p>
                                <img src={curvedBorder} alt="curvedBorder" className="curve"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 banner-image">
                        <img src={technology_bg} alt="technology_banner"/>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default Banner;