import React from "react";
import circle from "../../assets/images1/technology/circle.svg"
import square from "../../assets/images1/technology/square.svg"
import triangle from "../../assets/images1/technology/triangle.svg"
import {useTranslation} from "react-i18next";

const Boxes = () => {
    const {t} = useTranslation();
    return (
        <section className="technology-section-boxes">
            <div className="container ">
                <div className="boxes">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="box">
                        <img src={circle} alt="box_build"/>
                        <p>{t("CHAIN_SOVEREIGNTY")}</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="box box2">
                        <img src={square} alt="box_build"/>
                        <p>{t("BUSINESS_USABILITY")}</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="box">
                        <img src={triangle} alt="box_build"/>
                        <p>{t("ABSTRACTION_OF_COMPLEXITIES")}</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
};
export default Boxes;