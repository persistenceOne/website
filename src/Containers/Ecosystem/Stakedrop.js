import React from "react";
import stakedrop from "../../assets/images1/stakedrop.svg"
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Stakedrop = () => {
    const {t} = useTranslation();
    return (
        <>
            <section className="stakedrop-info-section">
                <div className="title-line-section">
                    <h3 className="section-title">{t("STAKEDROP")}</h3>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <img src={stakedrop} alt="stakedrop" className="stakedrop-image"/>
                        </div>
                        <div className="col-md-6 right-section">
                            <div className="info">
                                <p>{t("STAKEDROP_INFO")}</p>
                                <NavLink to="/stakedrop" className="button-primary button">{t("PARTICIPATE")}</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Stakedrop;