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
               <a href="https://terra.money/" className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={terra} alt="Terra" /></a>
               <a href="https://tendermint.com/ventures/" className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={tendermintventures} alt="Tendermint Ventures" /></a>
               <a href="https://interchain.io/" className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={icf} alt="ICF" /></a>
               <a href="https://www.alameda-research.com/" className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={alamedaresearch} alt="Alameda" /></a>
               <a href="http://arringtonxrpcapital.com/companies/" className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={arrington} alt="Arrington" /></a>
            </div>
            <div className="common-row second-row">
               <a href="https://iosg.vc/#/" className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={iosg} alt="IOSG" /></a>
               <a href="https://lunex.vc/" target="_blank" className="reveal-scale-up"
                  rel="noopener noreferrer"><img className="logo-img" src={lunex} alt="LuneX" /></a>
               <a href="https://www.sparkdigitalcapital.com/" className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={Spark} alt="Spark" /></a>
               <a href="https://www.ledgerprime.com/#" className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img
                  className="logo-img" src={ledgerprime} alt="Ledgerprime" /></a>

            </div>

         </Tab>
         <Tab eventKey="validators" title={t("VALIDATORS")}>
            <div className="common-row first-row">
               <a href="https://dokia.capital/" className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={dokia} alt="Dokia" /></a>
               <a href="https://www.cosmostation.io/" className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={Cosmostation} alt="Cosmostation" /></a>
               <a href="https://stake.fish/en/" className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={stakefish} alt="Stakefish" /></a>
               <a href="https://bandprotocol.com/" className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img
                  className="logo-img" src={bandprotocol} alt="Bandprotocol" /></a>
               <a href="https://figment.io/" className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img
                  className="logo-img" src={FigmentNetworks} alt="FigmentNetworks" /></a>
            </div>
            <div className="common-row second-row">
               <a href="https://sg-1.online/" className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={sg1} alt="sg1" /></a>
               <a href="https://www.huobipool.com/" className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={huobipool} alt="huobipool" /></a>
               <a href="https://www.stakewith.us/" className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={StakeWithUs} alt="StakeWithUs" /></a>
               <a href="https://p2p.org/" className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={p2p_logo} alt="P2P" /></a>
               <a href="https://everstake.one/" className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={everstake} alt="Everstake" /></a>
            </div>
            <div className="common-row third-row">
               <a href="https://www.dsrvlabs.com/" className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={DSRV} alt="DSRV" /></a>
               <a href="https://www.hashquark.io/" className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={HashQuark} alt="HashQuark" /></a>
               <a href="https://kalpatech.co/" className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={kalpatech} alt="Kalpatech" /></a>
               <a href="https://chorus.one" className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={Chorus} alt="Chorus" /></a>
            </div>
            <div className="common-row third-row">
               <a href="https://bharvest.io/" className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={BHarvest} alt="BHarvest" /></a>
               <a href="https://www.sikka.tech/" className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={sikka} alt="sikka" /></a>
               <a href="https://certus.one/" className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img
                  className="logo-img" src={CertusOne} alt="CertusOne" /></a>
               <a href="https://citadel.one/" className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={citadel} alt="Citadel" /></a>
            </div>

         </Tab>

      </Tabs>
   )
};
export default BackersTabs;
