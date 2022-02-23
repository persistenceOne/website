import React from "react";
import CT from "../../assets/images1/featured/cointelegraph.png";
import forbes from "../../assets/images1/featured/forbes.png";
import nasdaq from "../../assets/images1/featured/nasdaq.png";
import yahoo from "../../assets/images/featured/yahoo.svg";
import coindesk from "../../assets/images1/featured/coindeskb.png";
import {useTranslation} from "react-i18next";
import {AS_SEEN_ON1_URL,
    AS_SEEN_ON2_URL,
    AS_SEEN_ON3_URL,
    AS_SEEN_ON4_URL,
    AS_SEEN_ON5_URL,
} from "../../constants/config";



const Featured = () => {
    const {t} = useTranslation();
    return (
        <section className="featured-on">
            <h3 className="section-title">{t("FEATURED_ON_SECTION_TITLE")}</h3>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="logos">
                            <a href={AS_SEEN_ON1_URL}
                               target="_blank" rel="noopener noreferrer" data-aos="fade" data-aos-duration="1000">
                                    <img className="logo-img" src={forbes} alt="Forbes"/>
                            </a>
                            <a href={AS_SEEN_ON4_URL} target="_blank"
                               rel="noopener noreferrer" data-aos="fade" data-aos-duration="1000">
                                <img className="logo-img"
                                     src={coindesk}
                                     alt="Coindesk"/>
                            </a>

                            <a href={AS_SEEN_ON5_URL}
                               target="_blank" rel="noopener noreferrer" data-aos="fade" data-aos-duration="1000">
                                    <img className="logo-img"
                                         src={CT}
                                         alt="Cointelegraph"/>
                                </a>

                            <a href={AS_SEEN_ON2_URL} target="_blank" rel="noopener noreferrer" data-aos="fade" data-aos-duration="1000">

                                <img className="logo-img"
                                     src={nasdaq}
                                     alt="Nasdaq"
                                />
                            </a>
                            <a href={AS_SEEN_ON3_URL}
                               target="_blank" rel="noopener noreferrer" data-aos="fade" data-aos-duration="1000">
                                <img className="logo-img"
                                     src={yahoo}
                                     alt="yahoo"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default Featured;