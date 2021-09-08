import React from "react";
import pstake_white from "../../assets/images1/logos/pstake_white.svg";
import {useTranslation} from "react-i18next";
let PSTAKE_TWITTER_URL = process.env.REACT_APP_PSTAKE_TWITTER_URL;
let PSTAKE_APP_URL = process.env.REACT_APP_PSTAKE_APP_URL;
const Pstake = () => {
    const {t} = useTranslation();
    return (
        <section className="product-info-section product-pstake">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 product-info pstake">
                        <img src={pstake_white} alt="pstake_-logo"/>
                    </div>
                    <div className="col-md-8">
                        <div className="cards">
                            <p className="text">{t("PRODUCT_PSTAKE_DESCRIPTION")}
                            </p>
                            <div className="row1">
                                <div className="data-card text-left">
                                    <p className="value"> $450B+</p>
                                    <p className="name">{t("TOTAL_ADDRESSABLE")}</p>
                                </div>
                                <div className="data-card text-center">
                                    <p className="value">$105B+ </p>
                                    <p className="name">{t("STAKED_ASSETS")}</p>
                                </div>
                            </div>
                            <div className="button-list">
                                <a href={`${PSTAKE_TWITTER_URL}`} rel="noopener noreferrer" target="_blank" className="button-primary button">{t("LEARN_MORE")}</a>
                               
                                <a href={`${PSTAKE_APP_URL}`} rel="noopener noreferrer" target="_blank" className="button-primary button">{t("OPEN_APP")}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Pstake;