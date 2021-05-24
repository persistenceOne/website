import React from "react";
import box_build from "../../assets/images1/box_build.svg"
import box_innovate from "../../assets/images1/box_innovate.svg"
import box_deliver from "../../assets/images1/box_deliver.svg"
import {useTranslation} from "react-i18next";

const Boxes = () => {
    const {t} = useTranslation();
    return (
        <section className="vision-section-boxes">
            <div className="container boxes">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="box">
                            <img src={box_innovate} alt="box_build"/>
                            <p>{t("MISSION_BOX1_INFO")}</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="box box2">
                            <img src={box_build} alt="box_build"/>
                            <p>{t("MISSION_BOX2_INFO")}</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">

                        <div className="box">
                            <img src={box_deliver} alt="box_build"/>
                            <p>{t("MISSION_BOX3_INFO")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default Boxes;