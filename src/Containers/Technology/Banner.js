import React from "react";
import technology_bg from "../../assets/images1/technology/technolgy_banner.svg"
import curvedBorder from "../../assets/images1/left_curved.svg";

const Banner = () => {
    return (
        <section className="section-technology-banner" data-aos="fade-up">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 left-section">
                        <div className="content">
                            <div className="content-box">
                                <h3>Technology</h3>
                                <p className="banner-content"> Persistence is an interoperable protocol that provides
                                    sovereign environments for decentralised/institutional finance applications to be
                                    developed and operated.</p>

                                <img src={curvedBorder} alt="curvedBorder" className="curve"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 banner-image">
                        <img src={technology_bg} alt="technology_banner"/>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default Banner;