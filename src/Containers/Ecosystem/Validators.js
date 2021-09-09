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
let INFOSTONES_URL = process.env.REACT_APP_INFOSTONES_URL;
let BECOME_VALIDATOR = process.env.REACT_APP_BECOME_VALIDATOR;
let PERSISTENCEONE_EXPLORER_URL = process.env.REACT_APP_PERSISTENCEONE_EXPLORER_URL;
let DOKIACAPITAL_URL = process.env.REACT_APP_DOKIACAPITAL_URL;
let COSMOSTATION_URL = process.env.REACT_APP_COSMOSTATION_URL;
let AUDIT_URL = process.env.REACT_APP_AUDIT_URL;
let STAKE_FISH_URL = process.env.REACT_APP_STAKE_FISH_URL;
let BRAND_PROTOCOL_URL = process.env.REACT_APP_BRAND_PROTOCOL_URL;
let FIGMENT_URL = process.env.REACT_APP_FIGMENT_URL;
let SG_1_URL = process.env.REACT_APP_SG_1_URL;
let HUOBIPOOL_URL = process.env.REACT_APP_HUOBIPOOL_URL;
let STAKE_WITH_US_URL = process.env.REACT_APP_STAKE_WITH_US_URL;
let P2P_URL = process.env.REACT_APP_P2P_URL;
let EVERSTAKE_URL = process.env.REACT_APP_EVERSTAKE_URL;
let DSRVLABS_URL = process.env.REACT_APP_DSRVLABS_URL;
let KALPATECH_URL = process.env.REACT_APP_KALPATECH_URL;
let CHORUS_URL = process.env.REACT_APP_CHORUS_URL;
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
                        <a href={`${DOKIACAPITAL_URL}`} className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={dokia} alt="Dokia" /></a>
                        <a href={`${COSMOSTATION_URL}`} className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={Cosmostation} alt="Cosmostation" /></a>
                        <a href={`${AUDIT_URL}`} className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={audit} alt="audit" /></a>
                        <a href={`${STAKE_FISH_URL}`} className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={stakefish} alt="Stakefish" /></a>
                    </div>
                    <div className="common-row second-row">
                        <a href={`${HUOBIPOOL_URL}`} className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={huboipool} alt="huboipool" /></a>
                        <a href={`${EVERSTAKE_URL}`} className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={everstake} alt="everstake" /></a>
                        <a href={`${BRAND_PROTOCOL_URL}`} className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={Band_Protoocol} alt="Band_Protoocol" /></a>
                        <a href={`${KALPATECH_URL}`} className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={KalpaTech} alt="KalpaTech" /></a>
                    </div>
                    <div className="common-row third-row">
                        <a href={`${CHORUS_URL}`} className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={Chorus} alt="Chorus" /></a>
                        <a href={`${DSRVLABS_URL}`} className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={DSRV} alt="DSRV" /></a>
                        <a href={`${SG_1_URL}`} className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={sg1} alt="sg1" /></a>
                        <a href={`${STAKE_WITH_US_URL}`} className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={StakeWithUs} alt="StakeWithUs" /></a>

                    </div>
                    <div className="common-row third-row">
                        <a href={`${FIGMENT_URL}`} className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={FigmentNetworks} alt="FigmentNetworks" /></a>
                        <a href={`${P2P_URL}`} className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={p2p_logo} alt="P2P" /></a>
                        <a href={`${INFOSTONES_URL}`} className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={InfoStones} alt="InfoStones" /></a>

                    </div>
                    <div className="become-validator row">
                        <div className="col-lg-7 col-md-12 text">
                            <p>{t("VALIDATORS_INFO")}</p>
                        </div>
                        <div className="col-lg-5 col-md-12 button-list">
                            <a href={`${BECOME_VALIDATOR}`} className="button-primary button" rel="noopener noreferrer" target="_blank">{t("BECOME_VALIDATOR")}</a>
                            <a href={`${PERSISTENCEONE_EXPLORER_URL}`} className="button-secondary button" rel="noopener noreferrer" target="_blank">{t("EXPLORER")}</a>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
export default Validators;