import React from "react";
import ascendbitmaxlogo from "../../assets/images1/ascendbitmaxlogo.svg";
import {useTranslation} from "react-i18next";
const AcquireXPRT = () => {
    const {t} = useTranslation();
    return (
        <>
            <section className="acquire_xprt internft-section">
                <div className="title-line-section">
                    <h3 className="section-title">{t("ACQUIRE_XPRT")}</h3>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 logos">
                            <img src={ascendbitmaxlogo} alt="internft_logos" className="internft-logos"/>
                        </div>
                        <div className="col-md-6 right-section">
                            <div className="info">
                                <p>{t("ACQUIRE_XPRT_TITLE_1")}</p>
                                <p>{t("ACQUIRE_XPRT_TITLE_2")} <a href="https://bitmax.io/en/global-digital-asset-platform" target="_blank" rel="noopener noreferrer">{t("ACQUIRE_XPRT_TITLE_3")}</a></p>
                                <p>{t("ACQUIRE_XPRT_TITLE_4")}</p>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </section>
        </>
    )
};
export default AcquireXPRT;