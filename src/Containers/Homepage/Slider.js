import React from "react";
import CT from "../../assets/images/featured/cointelegraph.svg";
import coindex from "../../assets/images/featured/coindex.svg";
import yahoo from "../../assets/images/featured/yahoo.svg";
import finance from "../../assets/images/featured/finance.svg";
import chain from "../../assets/images/featured/chain.svg";
import deal_streat from "../../assets/images/featured/deal_streat.svg";
import e27 from "../../assets/images/featured/e27.svg";
import blockbeats from "../../assets/images/featured/blockbeats.svg";

import {useTranslation} from "react-i18next";
import {AS_SEEN_ON1_URL,
    AS_SEEN_ON2_URL,
    AS_SEEN_ON3_URL,
    AS_SEEN_ON4_URL,
    AS_SEEN_ON5_URL,
    AS_SEEN_ON6_URL,
    AS_SEEN_ON7_URL,
    AS_SEEN_ON8_URL
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
                                <img className="logo-img" src={CT} alt="CT"/>
                            </a>
                            <a href={AS_SEEN_ON2_URL} target="_blank" rel="noopener noreferrer" data-aos="fade" data-aos-duration="1000">

                                <img className="logo-img"
                                     src={coindex}
                                     alt="coindex"
                                />
                            </a>

                            <a href={AS_SEEN_ON3_URL}
                               target="_blank" rel="noopener noreferrer" data-aos="fade" data-aos-duration="1000">
                                <img className="logo-img"
                                     src={yahoo}
                                     alt="yahoo"/>
                            </a>
                            <a href={AS_SEEN_ON4_URL} target="_blank"
                               rel="noopener noreferrer" data-aos="fade" data-aos-duration="1000">
                                <img className="logo-img"
                                     src={finance}
                                     alt="finance"/>
                            </a>
                            <a href={AS_SEEN_ON5_URL}
                               target="_blank" rel="noopener noreferrer" data-aos="fade" data-aos-duration="1000">
                                <img className="logo-img"
                                     src={chain}
                                     alt="chain"/>
                            </a>
                            <a href={AS_SEEN_ON6_URL}
                               target="_blank" rel="noopener noreferrer" data-aos="fade" data-aos-duration="1000">
                                <img className="logo-img"
                                     src={deal_streat}
                                     alt="deal_streat"/>
                            </a>
                            <a href={AS_SEEN_ON7_URL}
                               target="_blank" rel="noopener noreferrer" data-aos="fade" data-aos-duration="1000">
                                <img className="logo-img"
                                     src={e27}
                                     alt="e27.com"/>
                            </a>
                            <a href={AS_SEEN_ON8_URL}
                               target="_blank" rel="noopener noreferrer" data-aos="fade" data-aos-duration="1000">
                                <img className="logo-img"
                                     src={blockbeats}
                                     alt="blockbeats"/>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default Featured;