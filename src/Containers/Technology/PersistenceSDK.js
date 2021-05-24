import React from "react";
import sdk from "../../assets/images1/technology_psdk.svg";
import {useTranslation} from "react-i18next";
const PersistenceSDK = () => {
    const {t} = useTranslation();
    return (
            <section className="section-sdk">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 left-section">
                            <p className="sub-text">{t("BUILT_FOR_WEB")}</p>
                            <h3 className="title">{t("PERSISTENCE_SDK1")}</h3>
                            <p className="text">{t("PERSISTENCE_SDK_INFO")}
                            </p>
                            <div className="button-list">
                                <a href="https://github.com/persistenceOne/persistenceSDK" className="button-primary button" rel="noopener noreferrer" target="_blank">{t("GITHUB")}</a>
                                <a href="https://discord.gg/SaBKpjbnhH" className="button-secondary button" rel="noopener noreferrer" target="_blank">{t("DEV_CHAT")}</a>
                            </div>
                        </div>
                        <div className="col-md-6 right-section">
                            <div className="logo">
                                <img src={sdk} alt="sdk_logo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
};
export default PersistenceSDK;