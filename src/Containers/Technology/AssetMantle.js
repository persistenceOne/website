import React from "react";
import mantle_white from "../../assets/images1/technology_mantle.svg";
import {useTranslation} from "react-i18next";

const AssetMantle = () => {
    const {t} = useTranslation();
    return (
        <>
            <section className="section-asset-mantle">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 left-section">
                            <p className="sub-text">{t("BUILD_YOUR_NFT")}</p>
                            <h3 className="title">{t("ASSET_MANTLE")}</h3>
                            <p className="text">{t("ASSET_MANTLE_INFO")}
                            </p>
                            <div className="button-list">
                                <a href="https://github.com/persistenceOne/assetMantle"
                                   className="button-primary button" rel="noopener noreferrer"
                                   target="_blank">{t("GITHUB")}</a>
                                <a href="https://docs.internft.org/" className="button-secondary button"
                                   rel="noopener noreferrer" target="_blank">{t("DOCS")}</a>
                            </div>
                        </div>
                        <div className="col-md-6 right-section">
                            <div className="logo">
                                <img src={mantle_white} alt="sdk_logo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AssetMantle;