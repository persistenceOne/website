import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import threecommas from '../../assets/backers/three-commas.svg';
import alamedaresearch from '../../assets/backers/alameda-research.svg';
import arrington from '../../assets/backers/arrington.svg';
import au21 from '../../assets/backers/au21.svg';
import ngcventures from '../../assets/backers/ngcventures.svg';
import dokia from '../../assets/backers/validators/dokiacapital.svg';
import Cosmostation from '../../assets/backers/validators/Cosmostation.svg';
import stakefish from '../../assets/backers/validators/stakefish.svg';
import sg1 from '../../assets/backers/validators/sg1.svg';
import FigmentNetworks from '../../assets/backers/validators/FigmentNetworks.svg';
import BHarvest from '../../assets/backers/validators/BHarvest.svg';
import sikka from '../../assets/backers/validators/sikka.svg';
import Iqlusion from '../../assets/backers/validators/Iqlusion.svg';
import StakeWithUs from '../../assets/backers/validators/StakeWithUs.svg';
import p2p_logo from '../../assets/backers/validators/p2p.svg';
import CertusOne from '../../assets/backers/validators/CertusOne.svg';
import HashQuark from '../../assets/backers/validators/HashQuark.svg';

// import Cosmostation from '../../assets/backers/Cosmostation.svg';
// import genesisblock from '../../assets/backers/genesis-block.svg';
// import dokia_capital from '../../assets/backers/dokia_capital.svg';
import incrypt from '../../assets/backers/incrypt.svg';
import iosg from '../../assets/backers/iosg.svg';
import lunex from '../../assets/backers/lunex.svg';
// import sgone from '../../assets/backers/sg-1.svg';
import Spark from '../../assets/backers/Spark.svg';
import terra from '../../assets/backers/terra.svg';
import woodstock from '../../assets/backers/woodstock.svg';
import icf from '../../assets/backers/ICF.svg';
class BackersTabs extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			key: 'institutional',
		};
	}

	render() {
		return (
			<Tabs
				className="backers-row row"
				id="controlled-tab-example"
				activeKey={this.state.key}
				onSelect={key => this.setState({ key })}
			>
				<Tab eventKey="institutional" title="Institutional">
					<div className="common-row first-row">

						<a href="http://arringtonxrpcapital.com/companies/" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={arrington} alt="Arrington" /></a> 
						<a href="https://lunex.vc/" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={lunex} alt="LuneX" /></a>
						<a href="https://woodstockfund.com/#portfolio" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={woodstock} alt="Woodstock" /></a>

					</div>
					<div className="common-row second-row">
					<a href="https://au21.capital/portfolio-1" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={au21} alt="Au21" /></a>
					<a href="https://www.ngc.fund/portfolio" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={ngcventures} alt="NGC Ventures" /></a>
					<a href="https://www.sparkdigitalcapital.com/" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={Spark} alt="Spark" /></a>
					</div>
					<div className="common-row third-row">
					<a href="https://iosg.vc/#/" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={iosg} alt="IOSG" /></a>
					<a href="https://www.incrypt.co/portfolio" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={incrypt} alt="Incrypt" /></a>
					<a href="https://3commas.io/" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={threecommas} alt="3commas" /></a>

					</div>
				</Tab>
				<Tab eventKey="validators" title="Validators">
					<div className="common-row first-row">
					<a href="https://dokia.capital/" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={dokia} alt="Dokia" /></a>
					<a href="https://www.cosmostation.io/" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={Cosmostation} alt="Cosmostation" /></a>
					<a href="https://sg-1.online/" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={sg1} alt="sg1" /></a>
					</div>
					<div className="common-row second-row">
					<a href="https://stake.fish/en/" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={stakefish} alt="Stakefish" /></a>
					<a href="https://figment.io/" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={FigmentNetworks} alt="FigmentNetworks" /></a>
					<a href="https://bharvest.io/" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={BHarvest} alt="BHarvest" /></a>
					<a href="https://www.sikka.tech/" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={sikka} alt="sikka" /></a>
					</div>
					<div className="common-row third-row">
					<a href="https://www.iqlusion.io/" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={Iqlusion} alt="Iqlusion" /></a>
					<a href="https://www.stakewith.us/" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={StakeWithUs} alt="StakeWithUs" /></a>
					<a href="https://p2p.org/" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={p2p_logo} alt="P2P" /></a>
					
					</div>
					<div className="common-row fourth-row">
					<a href="https://certus.one/" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={CertusOne} alt="CertusOne" /></a>
					<a href="https://www.hashquark.io/" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={HashQuark} alt="HashQuark" /></a>
					</div>
				</Tab>
				<Tab eventKey="ecosystem" title="Ecosystem">
					<div className="common-row fourth-row">

					<a href="https://www.alameda-research.com/" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={alamedaresearch} alt="Alameda" /></a>
					<a href="https://terra.money/" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={terra} alt="Terra" /></a>
					<a href="https://interchain.io/" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={icf} alt="ICF" /></a>
					</div>
				</Tab>
			</Tabs>
		);
	}
}

export default BackersTabs;