import React from "react";
import dokia from "../../assets/images1/backers/validators/dokiacapital.png";
import Cosmostation from "../../assets/images1/backers/validators/Cosmostation.png";
import audit from "../../assets/images1/backers/validators/audit.png";
import stakefish from "../../assets/images1/backers/validators/stakefish.png";
import FigmentNetworks from "../../assets/images1/backers/validators/figment.png";
import huboipool from "../../assets/images1/backers/validators/svg/Houbi_Pool10.svg";
import everstake from "../../assets/images1/backers/validators/svg/everstake.svg";
import Band_Protoocol from "../../assets/images1/backers/validators/svg/Band_Protoocol.svg";
import KalpaTech from "../../assets/images1/backers/validators/svg/KalpaTech.svg";
import Ascendex from "../../assets/images1/backers/validators/svg/Ascendex.svg";
import DSRV from "../../assets/images1/backers/validators/svg/DSRV.svg";
import sg1 from "../../assets/images1/backers/validators/svg/sg1.svg";

import StakeWithUs from "../../assets/images1/backers/validators/StakeWithUs.png";
import p2p_logo from "../../assets/images1/backers/validators/p2p.png";
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
                    <a href="https://www.huobipool.com/" className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={huboipool} alt="huboipool" /></a>
                    <a href="https://everstake.one/" className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={everstake} alt="everstake" /></a>
                    <a href="https://bandprotocol.com/" className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={Band_Protoocol} alt="Band_Protoocol" /></a>
                    <a href="https://kalpatech.co/" className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={KalpaTech} alt="KalpaTech" /></a>
                   </div>
                    <div className="common-row third-row">
                    <a href="https://bitmax.io/" className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={Ascendex} alt="Ascendex" /></a>
                    <a href="https://www.dsrvlabs.com/" className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={DSRV} alt="DSRV" /></a>
                    <a href="https://sg-1.online/" className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={sg1} alt="sg1" /></a>
                    <a href="https://www.stakewith.us/" className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={StakeWithUs} alt="StakeWithUs" /></a>
                    
                     </div>
                    <div className="common-row third-row">
                    <a href="https://figment.io/" className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={FigmentNetworks} alt="FigmentNetworks" /></a>
                        <a href="https://p2p.org/" className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={p2p_logo} alt="P2P" /></a>
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