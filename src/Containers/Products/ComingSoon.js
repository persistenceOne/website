import React from "react";
import mantle from "../../assets/images1/mantle_white.svg"

import {useTranslation} from "react-i18next";

const ComingSoon = () => {
    const {t} = useTranslation();
    return (
       
            <section className="product-info-section ">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 product-info audit">
                    <img src={mantle} alt="mantle-logo"/>
                    </div>
                    <div className="col-md-8">
                        <div className="cards">
                            <p className="text">{t("NF_MARKET_FRAMEWORK")}</p>
                            
                            <div className="button-list">
                                <a href="https://twitter.com/AssetMantle" className="button-primary button" rel="noopener noreferrer"
                                   target="_blank">{t("LEARN_MORE")}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
        
    )
};
export default ComingSoon;