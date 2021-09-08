import React from "react";
import mantle_white from "../../assets/images1/technology_mantle.svg";
import {useTranslation} from "react-i18next";
let ASSETMANTLE_GITHUB_URL = process.env.REACT_APP_ASSETMANTLE_GITHUB_URL;
let INTERNFT_DOCS_URL = process.env.REACT_APP_INTERNFT_DOCS_URL;
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
                                <a href={`${ASSETMANTLE_GITHUB_URL}`}
                                   className="button-primary button" rel="noopener noreferrer"
                                   target="_blank">{t("GITHUB")}</a>
                                <a href={`${INTERNFT_DOCS_URL}`} className="button-secondary button"
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