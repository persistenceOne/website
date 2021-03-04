import React from "react";
import mantle from "../../assets/images1/mantle_white.svg"
import plend from "../../assets/images1/logos/plend_white.svg";
import {useTranslation} from "react-i18next";

const ComingSoon = () => {
    const {t} = useTranslation();
    return (
        <section className="coming-soon-section">
            <div className="container">
                <h3 className="heading">{t("COMING_SOON")}</h3>
                <div className="products">
                    <div className="product">
                        <img src={mantle} alt="mantle-logo"/>
                        <p>{t("NF_MARKET_FRAMEWORK")}</p>
                        <a href="https://twitter.com/AssetMantle" rel="noopener noreferrer"
                           target="_blank">{t("LEARN_MORE")}</a>
                    </div>
                    <div className="product mt-10">
                        <img src={plend} alt="mantle-logo"/>
                        <p>{t("PLEND_TAB_CONTENT")}</p>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default ComingSoon;