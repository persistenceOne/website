import React from "react";
import ascendbitmaxlogo from "../../assets/images1/ascendbitmaxlogo.png";
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
                               
                              
                                <p>{t("ACQUIRE_XPRT_TITLE_2")} <a href="https://ascendex.com/en/basic/cashtrade-spottrading/usdt/xprt" target="_blank" rel="noopener noreferrer">{t("ACQUIRE_XPRT_TITLE_3")}</a></p>
                                <p>{t("ACQUIRE_XPRT_TITLE_1")}</p>
                                <p>{t("ACQUIRE_XPRT_TITLE_4")} <a href="https://t.me/PersistenceOneChat" target="_blank" rel="noopener noreferrer">{t("ACQUIRE_XPRT_TITLE_6")}</a> {t("ACQUIRE_XPRT_TITLE_7")}</p>
                                <div className="info-form">
                                    <div className="text">Fill in your XPRT auction confirmation number from AscendEX <a
                                        href="https://auction.persistence.one"
                                        rel="noopener noreferrer"
                                        target="_blank">here.</a></div>
                                </div>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </section>
        </>
    )
};
export default AcquireXPRT;