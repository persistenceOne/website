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
import Chorus from "../../assets/images1/backers/validators/chorus.png";
import DSRV from "../../assets/images1/backers/validators/svg/DSRV.svg";
import sg1 from "../../assets/images1/backers/validators/svg/sg1.svg";

import StakeWithUs from "../../assets/images1/backers/validators/StakeWithUs.png";
import p2p_logo from "../../assets/images1/backers/validators/p2p.png";
import InfoStones from "../../assets/images1/backers/validators/infostones.svg";
import { useTranslation } from "react-i18next";
import {
    INFOSTONES_URL,
    BECOME_VALIDATOR,
    PERSISTENCEONE_EXPLORER_URL,
    DOKIACAPITAL_URL,
    COSMOSTATION_URL,
    AUDIT_URL,
    STAKE_FISH_URL,
    BRAND_PROTOCOL_URL,
    FIGMENT_URL,
    SG_1_URL,
    HUOBIPOOL_URL,
    STAKE_WITH_US_URL,
    P2P_URL,
    EVERSTAKE_URL,
    DSRVLABS_URL,
    KALPATECH_URL,
    CHORUS_URL
} from "../../constants/config";
const Validators = () => {
    const { t } = useTranslation();
    return (
        <>
            <section className="validators-section" id="section-validators">
                <div className="title-line-section">
                    <h3 className="section-title">{t("VALIDATORS")}</h3>
                </div>
                <div className="container validators">
                    <div className="common-row first-row">
                        <a href={DOKIACAPITAL_URL} className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={dokia} alt="Dokia" /></a>
                        <a href={COSMOSTATION_URL} className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={Cosmostation} alt="Cosmostation" /></a>
                        <a href={AUDIT_URL} className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={audit} alt="audit" /></a>
                        <a href={STAKE_FISH_URL} className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={stakefish} alt="Stakefish" /></a>
                    </div>
                    <div className="common-row second-row">
                        <a href={HUOBIPOOL_URL} className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={huboipool} alt="huboipool" /></a>
                        <a href={EVERSTAKE_URL} className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={everstake} alt="everstake" /></a>
                        <a href={BRAND_PROTOCOL_URL} className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={Band_Protoocol} alt="Band_Protoocol" /></a>
                        <a href={KALPATECH_URL} className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={KalpaTech} alt="KalpaTech" /></a>
                    </div>
                    <div className="common-row third-row">
                        <a href={CHORUS_URL} className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={Chorus} alt="Chorus" /></a>
                        <a href={DSRVLABS_URL} className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={DSRV} alt="DSRV" /></a>
                        <a href={SG_1_URL} className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={sg1} alt="sg1" /></a>
                        <a href={STAKE_WITH_US_URL} className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={StakeWithUs} alt="StakeWithUs" /></a>

                    </div>
                    <div className="common-row third-row">
                        <a href={FIGMENT_URL} className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={FigmentNetworks} alt="FigmentNetworks" /></a>
                        <a href={P2P_URL} className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={p2p_logo} alt="P2P" /></a>
                        <a href={INFOSTONES_URL} className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={InfoStones} alt="InfoStones" /></a>

                    </div>
                    <div className="become-validator row">
                        <div className="col-lg-7 col-md-12 text">
                            <p>{t("VALIDATORS_INFO")}</p>
                        </div>
                        <div className="col-lg-5 col-md-12 button-list">
                            <a href={BECOME_VALIDATOR} className="button-primary button" rel="noopener noreferrer" target="_blank">{t("BECOME_VALIDATOR")}</a>
                            <a href={PERSISTENCEONE_EXPLORER_URL} className="button-secondary button" rel="noopener noreferrer" target="_blank">{t("EXPLORER")}</a>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
export default Validators;