import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import alamedaresearch from '../assets/images1/backers/alameda-research.svg';
import arrington from '../assets/images1/backers/venture/arrington.png';
import ledgerprime from '../assets/images1/backers/ledgerprime.png';
import dokia from '../assets/images1/backers/validators/dokiacapital.png';
import Cosmostation from '../assets/images1/backers/validators/Cosmostation.png';
import stakefish from '../assets/images1/backers/validators/stakefish.png';
import sg1 from '../assets/images1/backers/validators/sg1.svg';
import FigmentNetworks from '../assets/images1/backers/validators/figment.png';
import BHarvest from '../assets/images1/backers/validators/BHarvest.png';
import sikka from '../assets/images1/backers/validators/sikka.png';
import Chorus from '../assets/images1/backers/validators/chorus.png';
import StakeWithUs from '../assets/images1/backers/validators/StakeWithUs.png';
import p2p_logo from '../assets/images1/backers/validators/p2p.png';
import CertusOne from '../assets/images1/backers/validators/CertusOne.png';
import HashQuark from '../assets/images1/backers/validators/HashQuark.png';
import iosg from '../assets/images1/backers/venture/iosg.png';
import lunex from '../assets/images1/backers/venture/lunex.png';
import Spark from '../assets/images1/backers/venture/spark.png';
import terra from '../assets/images1/backers/terra.svg';
import tendermintventures from '../assets/images1/backers/tendermintventures.png';
import citadel from '../assets/images1/backers/validators/citadel.png';
import icf from '../assets/images1/backers/ICF.svg';
import huobipool from '../assets/images1/backers/validators/svg/Houbi_Pool10.svg';
import bandprotocol from '../assets/images1/backers/validators/svg/Band_Protoocol.svg';
import everstake from '../assets/images1/backers/validators/svg/everstake.svg';
import kalpatech from '../assets/images1/backers/validators/svg/KalpaTech.svg';
import DSRV from '../assets/images1/backers/validators/svg/DSRV.svg';
import { useTranslation } from "react-i18next";
import {ALAMEDA_RESEARCH_URL,
   ARRINGTONXRTCAPITAL_URL,
   TERRA_URL,
   TENDERMINT_VENTURES_URL,
   INTERCHAIN_URL,
   IOSG_URL,
   LUNEX_URL,
   SPARTDIGITALCAPITAL_URL,
   LEDGERPRIME_URL,
   DOKIACAPITAL_URL,
   COSMOSTATION_URL,
   STAKE_FISH_URL,
   BRAND_PROTOCOL_URL,
   FIGMENT_URL,
   SG_1_URL,
   HUOBIPOOL_URL,
   HASHQUARK_URL,
   STAKE_WITH_US_URL,
   P2P_URL,
   EVERSTAKE_URL,
   DSRVLABS_URL,
   KALPATECH_URL,
   CHORUS_URL,
   BHARVEST_URL,
   SIKKA_TECH_URL,
   CERTUS_ONE_URL,
   CITADEL_ONE_URL

} from "../constants/config";

const BackersTabs = () => {
   const [key, setKey] = useState("Venture_Funds");
   const { t } = useTranslation();
   return (
      <Tabs
         className="backers-row row"
         id="controlled-tab-example"
         activeKey={key}
         onSelect={key => setKey(key)}
      >
         <Tab eventKey="Venture_Funds" title={t("VENTURE_FUNDS")}>
            <div className="common-row first-row">
               <a href={TERRA_URL} className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={terra} alt="Terra" /></a>
               <a href={TENDERMINT_VENTURES_URL} className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={tendermintventures} alt="Tendermint Ventures" /></a>
               <a href={INTERCHAIN_URL} className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={icf} alt="ICF" /></a>
               <a href={ALAMEDA_RESEARCH_URL} className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={alamedaresearch} alt="Alameda" /></a>
               <a href={ARRINGTONXRTCAPITAL_URL} className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={arrington} alt="Arrington" /></a>
            </div>
            <div className="common-row second-row">
               <a href={IOSG_URL} className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={iosg} alt="IOSG" /></a>
               <a href={LUNEX_URL} target="_blank" className="reveal-scale-up"
                  rel="noopener noreferrer"><img className="logo-img" src={lunex} alt="LuneX" /></a>
               <a href={SPARTDIGITALCAPITAL_URL} className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={Spark} alt="Spark" /></a>
               <a href={LEDGERPRIME_URL} className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img
                  className="logo-img" src={ledgerprime} alt="Ledgerprime" /></a>

            </div>

         </Tab>
         <Tab eventKey="validators" title={t("VALIDATORS")}>
            <div className="common-row first-row">
               <a href={DOKIACAPITAL_URL} className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={dokia} alt="Dokia" /></a>
               <a href={COSMOSTATION_URL} className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={Cosmostation} alt="Cosmostation" /></a>
               <a href={STAKE_FISH_URL} className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={stakefish} alt="Stakefish" /></a>
               <a href={BRAND_PROTOCOL_URL} className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img
                  className="logo-img" src={bandprotocol} alt="Bandprotocol" /></a>
               <a href={FIGMENT_URL} className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img
                  className="logo-img" src={FigmentNetworks} alt="FigmentNetworks" /></a>
            </div>
            <div className="common-row second-row">
               <a href={SG_1_URL} className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={sg1} alt="sg1" /></a>
               <a href={HUOBIPOOL_URL} className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={huobipool} alt="huobipool" /></a>
               <a href={STAKE_WITH_US_URL} className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={StakeWithUs} alt="StakeWithUs" /></a>
               <a href={P2P_URL} className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={p2p_logo} alt="P2P" /></a>
               <a href={EVERSTAKE_URL} className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={everstake} alt="Everstake" /></a>
            </div>
            <div className="common-row third-row">
               <a href={DSRVLABS_URL} className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={DSRV} alt="DSRV" /></a>
               <a href={HASHQUARK_URL} className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={HashQuark} alt="HashQuark" /></a>
               <a href={KALPATECH_URL} className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={kalpatech} alt="Kalpatech" /></a>
               <a href={CHORUS_URL} className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={Chorus} alt="Chorus" /></a>
            </div>
            <div className="common-row third-row">
               <a href={BHARVEST_URL} className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={BHarvest} alt="BHarvest" /></a>
               <a href={SIKKA_TECH_URL} className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={sikka} alt="sikka" /></a>
               <a href={CERTUS_ONE_URL} className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img
                  className="logo-img" src={CertusOne} alt="CertusOne" /></a>
               <a href={CITADEL_ONE_URL}className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={citadel} alt="Citadel" /></a>
            </div>

         </Tab>

      </Tabs>
   )
};
export default BackersTabs;
