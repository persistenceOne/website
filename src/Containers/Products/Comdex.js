import React from "react";
import comdex_product from "../../assets/images1/comdex_product.svg";
import {useTranslation} from "react-i18next";
let explorerBlockURL = process.env.REACT_APP_BLOCK_EXPLORER_URL;
const Comdex = () => {
    const {t} = useTranslation();
    return (
        <section className="product-info-section product-comdex">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 product-info">
                        <img src={comdex_product} alt="comdex-logo"/>
                    </div>
                    <div className="col-md-8">
                        <div className="cards">
                            <p className="text">{t("PRODUCT_COMDEX_DESCRIPTION")}
                            </p>
                            <div className="row1">
                                <div className="data-card text-left">
                                    <p className="value">$55M+</p>
                                    <p className="name">{t("TRANSACTION_VALUME")}</p>
                                </div>
                                <div className="data-card side-border text-center">
                                    <p className="value">35+ </p>
                                    <p className="name">{t("INSTITUTIONAL_TRADE")}</p>
                                </div>
                                <div className="data-card text-center">
                                    <p className="value">4</p>
                                    <p className="name">{t("TRADING_HUBS")}</p>
                                </div>
                            </div>
                            <div className="button-list">
                                <a href="https://comdex.sg/" rel="noopener noreferrer" target="_blank" className="button-primary button">{t("COMDEX_SG")}</a>
                                <a href={`${explorerBlockURL}`} className="button-secondary button" rel="noopener noreferrer" target="_blank">{t("BLOCK_EXPLORER")}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Comdex;