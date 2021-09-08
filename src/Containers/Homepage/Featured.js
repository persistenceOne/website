import React from "react";
import cointelegraph from "../../assets/images1/featured/CT.png";
import financemagnet from "../../assets/images1/featured/FM.png";
import chainnews from "../../assets/images1/featured/chainnews.png";
import dsa from "../../assets/images1/featured/dsa.png";
import e27 from "../../assets/images1/featured/e27.png";
import blockbeats from "../../assets/images1/featured/blockbeats.png";
import odaily from "../../assets/images1/featured/Odaily.svg";
import Image from "../../components/elements/Image";
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
                                    <img className="logo-img" src={cointelegraph} alt="Cointelegraph"/>
                            </a>
                            <a href={AS_SEEN_ON2_URL} target="_blank" rel="noopener noreferrer" data-aos="fade" data-aos-duration="1000">
                                <Image
                                    src={require('../../assets/images1/featured/coindesk01.png')}
                                    alt="Coindesk"
                                />
                            </a>

                            <a href={AS_SEEN_ON3_URL}
                               target="_blank" rel="noopener noreferrer" data-aos="fade" data-aos-duration="1000">
                                <img className="logo-img"
                                  src={financemagnet}
                                  alt="Finance Magnates"/>
                            </a>
                            <a href={AS_SEEN_ON4_URL} target="_blank"
                               rel="noopener noreferrer" data-aos="fade" data-aos-duration="1000">
                                <img className="logo-img"
                                     src={chainnews}
                                     alt="ChainNews"/>
                            </a>
                            <a href={AS_SEEN_ON5_URL}
                               target="_blank" rel="noopener noreferrer" data-aos="fade" data-aos-duration="1000">
                                    <img className="logo-img"
                                         src={dsa}
                                         alt="dsa"/>
                                </a>
                            <a href={AS_SEEN_ON6_URL}
                               target="_blank" rel="noopener noreferrer" data-aos="fade" data-aos-duration="1000">
                                <img className="logo-img"
                                     src={e27}
                                     alt="e27"/>
                            </a>
                            <a href={AS_SEEN_ON7_URL} target="_blank"
                               rel="noopener noreferrer" data-aos="fade" data-aos-duration="1000">
                                <img className="logo-img"
                                     src={blockbeats}
                                     alt="blockbeats"/>
                            </a>
                            <a href={AS_SEEN_ON8_URL} target="_blank"
                               rel="noopener noreferrer" data-aos="fade" data-aos-duration="1000">
                                <img className="logo-img"
                                     src={odaily}
                                     alt="odaily"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default Featured;