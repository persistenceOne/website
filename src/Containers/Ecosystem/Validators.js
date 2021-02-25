import React from "react";
import dokia from "../../assets/images1/backers/validators/dokiacapital.png";
import Cosmostation from "../../assets/images1/backers/validators/Cosmostation.png";
import audit from "../../assets/images1/backers/validators/audit.png";
import stakefish from "../../assets/images1/backers/validators/stakefish.png";
import FigmentNetworks from "../../assets/images1/backers/validators/figment.png";
import BHarvest from "../../assets/images1/backers/validators/BHarvest.png";
import sikka from "../../assets/images1/backers/validators/sikka.png";
import Iqlusion from "../../assets/images1/backers/validators/Iqlusion.png";
import StakeWithUs from "../../assets/images1/backers/validators/StakeWithUs.png";
import p2p_logo from "../../assets/images1/backers/validators/p2p.png";
import CertusOne from "../../assets/images1/backers/validators/CertusOne.png";
import HashQuark from "../../assets/images1/backers/validators/HashQuark.png";
import {useTranslation} from "react-i18next";

const Validators = () => {
    const {t} = useTranslation();
    return (
        <>
            <section className="validators-section" id="section-validators">
                <div className="title-line-section">
                    <h3 className="section-title">{t("VALIDATORS")}</h3>
                </div>
                <div className="container validators">
                    <div className="common-row first-row">
                        <a href="https://dokia.capital/" className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={dokia} alt="Dokia" /></a>
                        <a href="https://www.cosmostation.io/" className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={Cosmostation} alt="Cosmostation" /></a>
                        <a href="https://audit.one/" className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={audit} alt="audit" /></a>
                        <a href="https://stake.fish/en/" className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={stakefish} alt="Stakefish" /></a>
                    </div>
                    <div className="common-row second-row">
                        <a href="https://bharvest.io/" className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={BHarvest} alt="BHarvest" /></a>
                        <a href="https://www.sikka.tech/" className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={sikka} alt="sikka" /></a>
                        <a href="https://www.iqlusion.io/" className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={Iqlusion} alt="Iqlusion" /></a>
                        <a href="https://www.stakewith.us/" className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={StakeWithUs} alt="StakeWithUs" /></a>
                    </div>
                    <div className="common-row third-row">
                        <a href="https://figment.io/" className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={FigmentNetworks} alt="FigmentNetworks" /></a>
                        <a href="https://p2p.org/" className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={p2p_logo} alt="P2P" /></a>
                        <a href="https://certus.one/" className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={CertusOne} alt="CertusOne" /></a>
                        <a href="https://www.hashquark.io/" className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={HashQuark} alt="HashQuark" /></a>
                    </div>
                    <div className="become-validator row">
                        <div className="col-lg-7 col-md-12 text">
                            <p>{t("VALIDATORS_INFO")}</p>
                        </div>
                        <div className="col-lg-5 col-md-12 button-list">
                            <a href="https://forms.gle/EcHn9W9JADTaPXGHA" className="button-primary button" rel="noopener noreferrer" target="_blank">{t("BECOME_VALIDATOR")}</a>
                            <a href="https://explorer.persistence.one/" className="button-secondary button" rel="noopener noreferrer" target="_blank">{t("EXPLORER")}</a>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
export default Validators;