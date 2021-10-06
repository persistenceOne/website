import React from "react";

import kucoin from "../../assets/images1/exchanges/kucoin.svg";
import huobipool from "../../assets/images1/exchanges/huobipool.svg";
import ascendex from "../../assets/images1/exchanges/ascendex.svg";
import gateio from "../../assets/images1/exchanges/gateio.svg";
import {useTranslation} from "react-i18next";
import {EXCHANGE_ONE,
    EXCHANGE_TWO,
    EXCHANGE_THREE,
    EXCHANGE_FOUR
    
} from "../../constants/config";
const AcquireXPRT = () => {
    const {t} = useTranslation();
    return (
        <>
            <section className="acquire_xprt internft-section">
                <div className="title-line-section">
                    <h3 className="section-title">{t("CENTRALISED_EXCHANGE")}</h3>
                </div>
                <div className="container">
                    <div className="row">
                    <div className="logos">
                            <a href={EXCHANGE_ONE}
                               target="_blank" rel="noopener noreferrer" data-aos="fade" data-aos-duration="1000">
                                    <img className="logo-img" src={kucoin} alt="Kucoin"/>
                            </a>
                          

                            <a href={EXCHANGE_TWO}
                               target="_blank" rel="noopener noreferrer" data-aos="fade" data-aos-duration="1000">
                                <img className="logo-img"
                                  src={huobipool}
                                  alt="HuobiPool"/>
                            </a>
                            <a href={EXCHANGE_THREE} target="_blank"
                               rel="noopener noreferrer" data-aos="fade" data-aos-duration="1000">
                                <img className="logo-img"
                                     src={ascendex}
                                     alt="Ascendex"/>
                            </a>
                            <a href={EXCHANGE_FOUR}
                               target="_blank" rel="noopener noreferrer" data-aos="fade" data-aos-duration="1000">
                                    <img className="logo-img"
                                         src={gateio}
                                         alt="Gateio"/>
                                </a>
                             
                        </div>
                        
                      
                    </div>
                </div>
            </section>
        </>
    )
};
export default AcquireXPRT;