import React from "react";
import xprt_bg from "../../assets/images1/xprt_bg.svg";
import {useTranslation} from "react-i18next";
import { NavLink } from 'react-router-dom';
const Xprt = () => {
    const {t} = useTranslation();
    return (
        <>
            <section className="xprt-section" id="section-xprt">
                <div className="container">
                    <h3 className="section-title">X<span>P</span>RT Token</h3>
                    <div className="row">
                        <div className="col-md-6 info-section">
                            <div className="info">
                                <p>{t("XPRT_TOKEN_INFO")}
                                </p>
                                <NavLink to="/xprttoken" className="button-primary button">{t("LEARN_MORE")}</NavLink>
                            </div>
                        </div>
                        <div className="col-md-6 text-center">
                            <img src={xprt_bg} alt="xprt_bg"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Xprt;