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

						<img className="logo-img" src={arrington} alt="Arrington" />
						<img className="logo-img" src={lunex} alt="LuneX" />
						<img className="logo-img" src={woodstock} alt="Woodstock" />

					</div>
					<div className="common-row second-row">
						<img className="logo-img" src={au21} alt="Au21" />
						<img className="logo-img" src={ngcventures} alt="NGC Ventures" />
						<img className="logo-img" src={Spark} alt="Spark" />
					</div>
					<div className="common-row third-row">
						<img className="logo-img" src={iosg} alt="IOSG" />
						<img className="logo-img" src={incrypt} alt="Incrypt" />
						<img className="logo-img" src={threecommas} alt="3commas" />

					</div>
				</Tab>
				<Tab eventKey="validators" title="Validators">
					<div className="common-row first-row">
					<img className="logo-img" src={dokia} alt="Dokia" />
					<img className="logo-img" src={Cosmostation} alt="Cosmostation" />
					<img className="logo-img" src={sg1} alt="sg1" />
					</div>
					<div className="common-row second-row">
					<img className="logo-img" src={stakefish} alt="Stakefish" />
					<img className="logo-img" src={FigmentNetworks} alt="FigmentNetworks" />
					<img className="logo-img" src={BHarvest} alt="BHarvest" />
					<img className="logo-img" src={sikka} alt="sikka" />
					</div>
					<div className="common-row third-row">
					<img className="logo-img" src={Iqlusion} alt="Iqlusion" />
					<img className="logo-img" src={StakeWithUs} alt="StakeWithUs" />
					<img className="logo-img" src={p2p_logo} alt="P2P" />
					
					</div>
					<div className="common-row fourth-row">
					<img className="logo-img" src={CertusOne} alt="CertusOne" />
					<img className="logo-img" src={HashQuark} alt="HashQuark" />
					</div>
				</Tab>
				<Tab eventKey="ecosystem" title="Ecosystem">
					<div className="common-row fourth-row">

						{/* <img className="logo-img" src={dokia_capital} alt="Dokia" /> */}
						<img className="logo-img" src={alamedaresearch} alt="Alameda" />
						<img className="logo-img" src={terra} alt="Terra" />
						<img className="logo-img" src={icf} alt="ICF" />
						{/* <img className="logo-img" src={Cosmostation} alt="Cosmostation" />	
						
						
						{/* <img className="logo-img" src={genesisblock} alt="genesisblock" /> */}
						{/* <img className="logo-img" src={sgone} alt="SG1" /> */}
					</div>
				</Tab>
			</Tabs>
		);
	}
}

export default BackersTabs;