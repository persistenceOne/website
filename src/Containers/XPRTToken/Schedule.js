import React from "react";
import schedule from "../../assets/images1/schedule.svg";
import {useTranslation} from "react-i18next";
const Schedule = () => {
    const {t} = useTranslation();
    return (
        <>
            <section className="schedule_token internft-section">
                <div className="title-line-section">
                    <h3 className="section-title">{t("RELEASE_SEHEDULE")}</h3>
                </div>
                <div className="container">
                    <div className="row">
                       
                        <div className="col-md-12 right-section pb-3">
                            <div className="info text-center">
                                <p>{t("SCHEDULE_TITLE")} <a href="https://buff.ly/3feZxbw" rel="noopener noreferrer" target="_blank">{t("SCHEDULE_HERE")}</a></p>
                               
                              
                            </div>
                        </div>
                        <div className="col-md-12 logos">
                            <img src={schedule} alt="internft_logos" className="internft-logos"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
export default Schedule;