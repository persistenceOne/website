import React from "react";
// import ascendbitmaxlogo from "../../assets/images1/ascendbitmaxlogo.png";


import osmosis from "../../assets/images1/exchanges/osmosis.svg";
import emeris from "../../assets/images1/exchanges/emeris.svg";
import sifchain from "../../assets/images1/exchanges/sifchain.svg";
import {useTranslation} from "react-i18next";
import {DEXCHANGE_ONE,
    DEXCHANGE_TWO,
    DEXCHANGE_THREE
   
    
} from "../../constants/config";
const AcquireXPRT = () => {
    const {t} = useTranslation();
    return (
        <>
            <section className="acquire_xprt internft-section">
                <div className="title-line-section">
                    <h3 className="section-title">{t("DCENTRALISED_EXCHANGE")}</h3>
                </div>
                <div className="container">
                    <div className="row">
                    <div className="logos">
                            <a href={DEXCHANGE_ONE}
                               target="_blank" rel="noopener noreferrer" data-aos="fade" data-aos-duration="1000">
                                    <img className="logo-img" src={osmosis} alt="Osmosis"/>
                            </a>
                          

                            <a href={DEXCHANGE_TWO}
                               target="_blank" rel="noopener noreferrer" data-aos="fade" data-aos-duration="1000">
                                <img className="logo-img"
                                  src={emeris}
                                  alt="Emeris"/>
                            </a>
                            <a href={DEXCHANGE_THREE} target="_blank"
                               rel="noopener noreferrer" data-aos="fade" data-aos-duration="1000">
                                <img className="logo-img"
                                     src={sifchain}
                                     alt="Sifchain"/>
                            </a>
                            
                            
                        </div>
                      
                      
                    </div>
                </div>
            </section>
        </>
    )
};
export default AcquireXPRT;