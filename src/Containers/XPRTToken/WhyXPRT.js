import React from "react";
import stake_xprt from "../../assets/images1/stake_xprt.svg";
import {useTranslation} from "react-i18next";
const WhyXPRT = () => {
    const {t} = useTranslation();
    return (
        <>
            <section className="why_xprt internft-section">
                <div className="title-line-section">
                    <h3 className="section-title">{t("WHY_XPRT")}</h3>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 logos">
                            <img src={stake_xprt} alt="internft_logos" className="internft-logos"/>
                        </div>
                        <div className="col-md-6 right-section">
                            <div className="info">
                                <p>{t("WHY_XPRT_DES_1")}</p>
                                <p>{t("WHY_XPRT_DES_2")}</p>
                                <div className="button-list pt-3">
                                <a href="https://medium.com/persistence-blog/persistence-xprt-wallet-guide-dbf5e27100f3" className="button-primary button" rel="noopener noreferrer" target="_blank">{t("CREATE_WALLET")}</a>
                                &nbsp;<a href="https://medium.com/persistence-blog/persistence-xprt-staking-guide-4504cf9a19df" className="button-primary button" rel="noopener noreferrer" target="_blank">{t("STAKE_XPRT")}</a>
                              
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
export default WhyXPRT;