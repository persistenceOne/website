import React from "react";
import BackersTabs from "../../components/backers";
import {useTranslation} from "react-i18next";

const Backers = () => {
    const {t} = useTranslation();
    return (
        <section className="our-backers">
            <h3 className="section-title">{t("BACKER_SECTION_TITLE")}</h3>
            <div className="container">
                <BackersTabs/>
            </div>
        </section>
    )
};
export default Backers;