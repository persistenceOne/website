import React from "react";
import animation from "../../assets/NewStack.mp4";
import {useTranslation} from "react-i18next";

const Animation = () => {
    const {t} = useTranslation();
    return (
        <section className="animation-section" data-aos="fade-up">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 left-section">
                        <div className="content-box">
                            <h3> {t("PRODUCTS")}</h3>
                        </div>
                    </div>
                    <div className="col-md-7 right-section">
                        <div className="animation-container">
                            <video className="video" autoPlay="autoplay" preload="true" loop="loop"
                                   muted src={animation}>
                                <source type="video/webm" src={animation}/>
                                <source type="video/mp4" src={animation}/>
                                <source type="video/ogg" src={animation}/>
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Animation;