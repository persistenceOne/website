import React from "react";
import audit_white from "../../assets/images1/logos/audit_white.svg";
import {useTranslation} from "react-i18next";

const Audit = () => {
    const {t} = useTranslation();
    return (
        <section className="product-info-section product-audit">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 product-info audit">
                        <img src={audit_white} alt="audit_white_logo"/>
                    </div>
                    <div className="col-md-8">
                        <div className="cards">
                            <p className="text">{t("PRODUCT_AUDIT_DESCRIPTION")}</p>
                            <div className="row1">
                                <div className="data-card text-center">
                                    <p className="value">$250M+</p>
                                    <p className="name">{t("ASSETS_UNDER_DELEGATION")}</p>
                                </div>
                                <div className="data-card side-border text-center">
                                <p className="value">10 </p>
                                    <p className="name">{t("NETWORKS_SECURED")}</p>
                                   
                                </div>
                                {/* <div className="data-card text-center">
                                    <p className="value">10 </p>
                                    <p className="name">{t("NETWORKS_SECURED")}</p>
                                </div> */}
                            </div>
                            <div className="button-list">
                                <a href="https://audit.one/" className="button-primary button" rel="noopener noreferrer"
                                   target="_blank">{t("AUDIT_ONE")}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default Audit;