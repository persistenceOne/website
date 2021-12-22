import React from "react";
import comdex from '../../assets/images1/logos/comdex_white.svg'
import pstake from '../../assets/images1/logos/pstake_white.svg'
import assetmantle from '../../assets/images1/mantle_white.svg'
import audit from '../../assets/images1/logos/audit_white.svg'
import Icon from "../../components/Icon";
import { useTranslation } from "react-i18next";
import {COMDEX_URL,
    AUDIT_URL,
    ASSETMANTLE_URL,
    PSTAKE_WEB_URL,
   
} from "../../constants/config";

const Products = () => {
    const { t } = useTranslation();
    return (
        <section className="product-section">
            <div className="container">
                <h3 className="section-title">{t("BUILDING_SECTION_TITLE")}</h3>
                <p className="section-info">{t("BUILDING_SECTION_DESCRIPTION")}</p>
            </div>
            <div className="">
                <div className="row">
                    <div className="col-md-3">
                        <div className="content comdex-info">
                            <div className="content-overlay"></div>
                            <div className="bg-overlay">
                                <div className="bg-overlay-image comdex">
                                </div>
                            </div>
                            <div className="">
                                <img className="image-logo" src={comdex} alt="comdex-logo" />
                                <p className="overlay-subtext">{t("COMDEX_CAPTION")}</p>
                            </div>
                            <a href={COMDEX_URL} rel="noopener noreferrer" target="_blank"
                                className="overlay-learn-more">
                                <p>{t("LEARN_MORE")}</p>
                                <div className="">
                                    <Icon
                                        viewClass="arrow-right"
                                        icon="arrow-right" />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="content audit-info">
                            <div className="content-overlay"></div>
                            <div className="bg-overlay">
                                <div className="bg-overlay-image audit">
                                </div>
                            </div>

                            <img className="image-logo" src={audit} alt="audit-logo" />
                            <p className="overlay-subtext">{t("AUDIT_ONE_CAPTION")}</p>
                            <a href={AUDIT_URL} rel="noopener noreferrer" target="_blank"
                                className="overlay-learn-more">
                                <p>{t("LEARN_MORE")}</p>
                                <div className="">
                                    <Icon
                                        viewClass="arrow-right"
                                        icon="arrow-right" />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="content pstake-info">
                            <div className="content-overlay"></div>
                            <div className="bg-overlay">
                                <div className="bg-overlay-image pstake">
                                </div>
                            </div>

                            <img className="image-logo" src={pstake} alt="pstake-logo" />
                            <p className="overlay-subtext">{t("LIQUID_STAKING")}</p>
                            <a href={PSTAKE_WEB_URL} rel="noopener noreferrer" target="_blank"
                                className="overlay-learn-more">
                                <p>{t("LEARN_MORE")}</p>
                                <div className="">
                                    <Icon
                                        viewClass="arrow-right"
                                        icon="arrow-right" />
                                </div>
                            </a>

                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="content mantle-info mantle-content">
                            <div className="content-overlay"></div>
                            <img className="image-logo" src={assetmantle} alt="assetmantle-logo" />
                            <p className="overlay-subtext">{t("ASSET_MANTLE_CAPTION")}</p>
                            <a href={ASSETMANTLE_URL} rel="noopener noreferrer" target="_blank"
                                className="overlay-learn-more">
                                <p>{t("LEARN_MORE")} </p>
                                <div className="">
                                    <Icon
                                        viewClass="arrow-right"
                                        icon="arrow-right" />
                                </div>
                            </a>



                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default Products;