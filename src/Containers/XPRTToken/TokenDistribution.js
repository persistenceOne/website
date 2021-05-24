import React from "react";
import token_distribution from "../../assets/images1/token_distribution.svg";
import {useTranslation} from "react-i18next";
const TokenDistribution = () => {
    const {t} = useTranslation();
    return (
        <>
            <section className="token_distribution internft-section">
                <div className="title-line-section">
                    <h3 className="section-title">{t("TOKEN_DISTRIBUTION_TITLE")}</h3>
                </div>
                <div className="container">
                    <div className="row">
                       
                        <div className="col-md-6 right-section">
                            <div className="info">
                                <p><span>{t("TOKEN_DISTRIBUTION_TITLE_1_SUB")}</span>{t("TOKEN_DISTRIBUTION_TITLE_1")}</p>
                                <p><span>{t("TOKEN_DISTRIBUTION_TITLE_2_SUB")}</span>{t("TOKEN_DISTRIBUTION_TITLE_2")}</p>
                                <p><span>{t("TOKEN_DISTRIBUTION_TITLE_3_SUB")}</span>{t("TOKEN_DISTRIBUTION_TITLE_3")}</p>
                                <p><span>{t("TOKEN_DISTRIBUTION_TITLE_4_SUB")}</span>{t("TOKEN_DISTRIBUTION_TITLE_4")}</p>
                                <p><span>{t("TOKEN_DISTRIBUTION_TITLE_5_SUB")}</span>{t("TOKEN_DISTRIBUTION_TITLE_5")}</p>
                                <p><span>{t("TOKEN_DISTRIBUTION_TITLE_6_SUB")}</span>{t("TOKEN_DISTRIBUTION_TITLE_6")}</p>
                                <p><span>{t("TOKEN_DISTRIBUTION_TITLE_7_SUB")}</span>{t("TOKEN_DISTRIBUTION_TITLE_7")}</p>
                                <p><span>{t("TOKEN_DISTRIBUTION_TITLE_8_SUB")}</span>{t("TOKEN_DISTRIBUTION_TITLE_8")}</p>
                                <p><span>{t("TOKEN_DISTRIBUTION_TITLE_9_SUB")}</span>{t("TOKEN_DISTRIBUTION_TITLE_9")}</p>
                              
                            </div>
                        </div>
                        <div className="col-md-6 logos">
                            <img src={token_distribution} alt="internft_logos" className="internft-logos"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
export default TokenDistribution;