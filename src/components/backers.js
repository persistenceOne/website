import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import threecommas from '../assets/images1/backers/venture/three-commas.png';
import alamedaresearch from '../assets/images1/backers/alameda-research.svg';
import arrington from '../assets/images1/backers/venture/arrington.png';
import au21 from '../assets/images1/backers/venture/au21.png';
import ngcventures from '../assets/images1/backers/venture/ngcventures.png';
import dokia from '../assets/images1/backers/validators/dokiacapital.png';
import Cosmostation from '../assets/images1/backers/validators/Cosmostation.png';
import stakefish from '../assets/images1/backers/validators/stakefish.png';
import sg1 from '../assets/images1/backers/validators/sg1.svg';
import FigmentNetworks from '../assets/images1/backers/validators/figment.png';
import BHarvest from '../assets/images1/backers/validators/BHarvest.png';
import sikka from '../assets/images1/backers/validators/sikka.png';
import Iqlusion from '../assets/images1/backers/validators/Iqlusion.png';
import StakeWithUs from '../assets/images1/backers/validators/StakeWithUs.png';
import p2p_logo from '../assets/images1/backers/validators/p2p.png';
import CertusOne from '../assets/images1/backers/validators/CertusOne.png';
import HashQuark from '../assets/images1/backers/validators/HashQuark.png';
import incrypt from '../assets/images1/backers/venture/incrypt.png';
import iosg from '../assets/images1/backers/venture/iosg.png';
import lunex from '../assets/images1/backers/venture/lunex.png';
import Spark from '../assets/images1/backers/venture/spark.png';
import terra from '../assets/images1/backers/terra.svg';
import woodstock from '../assets/images1/backers/venture/woodstock.png';
import icf from '../assets/images1/backers/ICF.svg';
import huobipool from '../assets/images1/backers/validators/svg/Houbi_Pool10.svg';
import bandprotocol from '../assets/images1/backers/validators/svg/Band_Protoocol.svg';
import everstake from '../assets/images1/backers/validators/svg/everstake.svg';
import kalpatech from '../assets/images1/backers/validators/svg/KalpaTech.svg';
import Ascendex from '../assets/images1/backers/validators/svg/Ascendex.svg';
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
               <a href="https://interchain.io/" className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={icf} alt="ICF" /></a>
               <a href="https://www.alameda-research.com/" className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={alamedaresearch} alt="Alameda" /></a>
                    <a href="http://arringtonxrpcapital.com/companies/" className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={arrington} alt="Arrington" /></a>
            </div>
            <div className="common-row second-row">
               <a href="https://lunex.vc/" target="_blank" className="reveal-scale-up"
                  rel="noopener noreferrer"><img className="logo-img" src={lunex} alt="LuneX" /></a>

               <a href="https://au21.capital/portfolio" className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={au21} alt="Au21" /></a>
               <a href="https://www.sparkdigitalcapital.com/" className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={Spark} alt="Spark" /></a>
               <a href="https://woodstockfund.com/#portfolio" className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={woodstock} alt="Woodstock" /></a>
            </div>
            <div className="common-row second-row"> 
            <a href="https://www.ngc.fund/portfolio" className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={ngcventures} alt="NGC Ventures" /></a>
               <a href="https://iosg.vc/#/" className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={iosg} alt="IOSG" /></a>
               <a href="https://3commas.io/" className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img
                  className="logo-img" src={threecommas} alt="3commas" /></a>
               <a href="https://www.incrypt.co/portfolio" className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={incrypt} alt="Incrypt" /></a>
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
                  <a href="https://bitmax.io/" className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={Ascendex} alt="Ascendex" /></a>
                     <a href="https://kalpatech.co/" className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={kalpatech} alt="Kalpatech" /></a>
      
               
            </div>
            <div className="common-row third-row">
            
            <a href="https://bharvest.io/" className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={BHarvest} alt="BHarvest" /></a>
               <a href="https://www.sikka.tech/" className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={sikka} alt="sikka" /></a>
               <a href="https://www.iqlusion.io/" className="reveal-scale-up" target="_blank"
                  rel="noopener noreferrer"><img className="logo-img" src={Iqlusion} alt="Iqlusion" /></a>
               <a href="https://certus.one/" className="reveal-scale-up" target="_blank" rel="noopener noreferrer"><img
                  className="logo-img" src={CertusOne} alt="CertusOne" /></a>
               
            </div>

         </Tab>

      </Tabs>
   )
};
export default BackersTabs;
