import React from "react";
import visionbg from "../../assets/images1/visionbg.svg";
import curved_line from "../../assets/images1/curvedBorder.svg"
import {useTranslation} from "react-i18next";

const Banner = () => {
    const {t} = useTranslation();
    return (
        <section className="vision-banner-section" data-aos="fade-up">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 content">
                        <h3 className="heading">{t("MISSION_BANNER_HEADING")}</h3>
                        <p>{t("MISSION_BANNER_TEXT1")}</p>
                        <p>{t("MISSION_BANNER_TEXT2")}</p>
                        <div className="quote-section">
                            <p className="quote-text">{t("MISSION_BANNER_QUOTE1")}
                                <span>{t("MISSION_BANNER_QUOTE2")}</span>
                            </p>
                            <img src={curved_line} alt="curved_line"/>
                        </div>
                    </div>
                    <div className="col-md-4 image-section text-right">
                        <img src={visionbg} alt="visionbg"/>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default Banner;