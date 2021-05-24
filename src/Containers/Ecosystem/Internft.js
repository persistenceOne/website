import React from "react";
import internft_logos from "../../assets/images1/internft_logos.svg";
import {useTranslation} from "react-i18next";
const Internft = () => {
    const {t} = useTranslation();
    return (
        <>
            <section className="internft-section" id="section-nft">
                <div className="title-line-section">
                    <h3 className="section-title">{t("INTER_NFT")}</h3>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 logos">
                            <img src={internft_logos} alt="internft_logos" className="internft-logos"/>
                        </div>
                        <div className="col-md-6 right-section">
                            <div className="info">
                                <p>{t("INTERNFT_INFO")}</p>
                                <a href="https://internft.org/" rel="noopener noreferrer" target="_blank" className="button-primary button">{t("INTERNFT_ORG")}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
export default Internft;