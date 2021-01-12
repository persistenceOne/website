
import React, { Component } from 'react';
import ReactGa from 'react-ga';
import { Modal } from "react-bootstrap";
import Icon from '../icon';
import Slider from 'react-rangeslider';
import Countdown from 'react-countdown';
import 'react-rangeslider/lib/index.css'
import axios from 'axios';
import Header from '../../webpages/components/header';
import { withRouter } from 'react-router-dom';
import { getCalculateMatic, getMaticStatusURL } from "../../constants/url";
import docTerms from '../../assets/PersistenceT&C.pdf'
import copy from '../../assets/copy.svg'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import MaticWallets from './maticWallet'
class MaticParticipate extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            show: false,
            tcShow: false,
            volume: 0,
            blockHeight: '--',
            totalStaked: '--',
            statkedOnAudit: '--',
            totalRewards: '--',
            estimatedRewards: '--',
            globalTotalStaked: 0,
            globalAuditStaked: 0,
            globalAuditStakedInt: 0,
            totalDistributed: '',
            delegateAudit: 0,
            globalTotalStakedInt: 0,
            delegateOther: 0,
            errorAddress: false,
            copied: false,
            copyValue: false,
            notParticipantAddress: false,
            showDelegateModal: false,
            showDelegateCliModal: false,
            showMagicTxnClieModel: false,
            totalDistributedInt: 0
        }
        this.handleCalculate = this.handleCalculate.bind(this);
        this.handleOninputChange = this.handleOninputChange.bind(this)
    }
    onCopy = () => {
        this.setState({ copyValue: true })
        this.setState({ copied: true });
        setTimeout(() => {
            this.setState({ copyValue: false })
        }, 1000);
    };

    handleClose = () => {
        this.setState({ show: false });
        this.setState({ showDelegateModal: false });
        this.setState({ showDelegateCliModal: false });
        this.setState({ showMagicTxnClieModel: false });
    };

    handleTcModal = () => {
        this.setState({ tcShow: true });
    };
    handleDelegateModel = () => {
        this.setState({ showDelegateModal: true });
    };
    handleDelegateClieModel = () => {
        this.setState({ showDelegateModal: false });
        this.setState({ showDelegateCliModal: true });
    }

    handleMagicTxnClieModel = () => {
        this.setState({ show: false });
        this.setState({ showMagicTxnClieModel: true });
    }
    handleTerms = () => {
        this.setState({ tcShow: false });
        this.setState({ show: true });
    };
    handleCancelTerms = () => {
        this.setState({ tcShow: false });
        this.props.history.push('/StakeDropMatic');
    };

    componentDidMount = () => {
        ReactGa.pageview(window.location.pathname + window.location.search);
        const Statusurl = getMaticStatusURL();
        axios.get(Statusurl).then((statusResponse) => {

            const totalDistributed = 200000 - (statusResponse.data.totalDistributed / 1000000)
            const worldTotalDelegations = (statusResponse.data.totalStakeDropGlobalDelegation);
            const worldAuditDelegations = (statusResponse.data.worldAuditDelegation);
            const worldGlobalDelegation = (statusResponse.data.worldGlobalDelegation / 10 ** 18);
            this.setState({ totalDistributedInt: totalDistributed })
            this.setState({ worldGlobalDelegation: (Math.round(worldGlobalDelegation * 100) / 100).toLocaleString() })
            this.setState({ globalTotalStakedInt: worldTotalDelegations })
            this.setState({ globalAuditStakedInt: worldAuditDelegations })
            this.setState({ totalDistributed: totalDistributed.toLocaleString() })
            this.setState({ globalTotalStaked: (worldTotalDelegations / 10 ** 18).toLocaleString() })
            this.setState({ globalAuditStaked: (worldAuditDelegations / 10 ** 18).toLocaleString() })


        })
    }


    handleOninputChange(event) {
        const value = event.target.value
        this.setState({ volume: value })
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            this.setState({ volume: event.target.value })
        }
        if (event.target.value >= 2000000) {
            this.setState({ volume: 2000000 })

        }
        if (event.target.value === '') {
            const delegateAudit = 0;
            const delegateOther = 0;
            this.setState({ delegateAudit: delegateAudit })
            this.setState({ delegateOther: delegateOther })
        } else {
            var umaticToDelegate = value * 1000000
            var delegateAudit = ((0.25 * umaticToDelegate / (this.state.globalAuditStakedInt + umaticToDelegate) +
                (0.75 * umaticToDelegate) / (this.state.globalTotalStakedInt + umaticToDelegate)) * this.state.totalDistributedInt);
            var delegateOther = ((0.75 * umaticToDelegate) / (this.state.globalTotalStakedInt + umaticToDelegate)) * this.state.totalDistributedInt;
            if (isNaN(delegateAudit)) {
                delegateAudit = 0;
            }
            if (isNaN(delegateOther)) {
                delegateOther = 0;
            }
            if (delegateAudit > 5000) {
                this.setState({ delegateAudit: 5000 })
            } else {
                this.setState({ delegateAudit: (Math.round(delegateAudit * 100) / 100).toFixed(2) })
            }
            if (delegateOther > 5000) {
                this.setState({ delegateOther: 5000 })
            } else {
                this.setState({ delegateOther: (Math.round(delegateOther * 100) / 100).toFixed(2) })
            }
        }
    }
    handleOnChange = (value) => {
        this.setState({ volume: value })
        var umaticToDelegate = value * 1000000
        var delegateAudit = ((0.25 * umaticToDelegate / (this.state.globalAuditStakedInt + umaticToDelegate) +
            (0.75 * umaticToDelegate) / (this.state.globalTotalStakedInt + umaticToDelegate)) * this.state.totalDistributedInt);
        var delegateOther = ((0.75 * umaticToDelegate) / (this.state.globalTotalStakedInt + umaticToDelegate)) * this.state.totalDistributedInt;
        if (isNaN(delegateAudit)) {
            delegateAudit = 0;
        }
        if (isNaN(delegateOther)) {
            delegateOther = 0;
        }
        if (delegateAudit > 5000) {
            this.setState({ delegateAudit: 5000 })
        } else {
            this.setState({ delegateAudit: (Math.round(delegateAudit * 100) / 100).toFixed(2) })
        }
        if (delegateOther > 5000) {
            this.setState({ delegateOther: 5000 })
        } else {
            this.setState({ delegateOther: (Math.round(delegateOther * 100) / 100).toFixed(2) })
        }
    }

    handleCalculate = e => {
        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        e.preventDefault();
        this.setState({ errorAddress: false })
        this.setState({ notParticipantAddress: false })
        const calAddress = e.target.maticAddress.value;
        var addressPrefix = calAddress.startsWith("0x");

        if (addressPrefix === true && calAddress.length === 42) {
            const url = getCalculateMatic(calAddress)
            axios.get(url).then((result) => {
                const calculatedata = result.data;
                if (calculatedata.success === true) {
                    const currentEarned = (calculatedata.received / 1000000);
                    const yourEstimatedRewards = (calculatedata.estimated / 1000000);
                    const totalStaked = (calculatedata.globalDelegation / 10 ** 18).toFixed(2);
                    const statkedOnAudit = (calculatedata.auditDelegation / 10 ** 18).toFixed(2);
                    this.setState({ blockHeight: calculatedata.magicTxCheckpoint })
                    this.setState({ totalStaked: numberWithCommas(totalStaked) })
                    this.setState({ statkedOnAudit: numberWithCommas(statkedOnAudit) })
                    this.setState({ totalRewards: (Math.round(currentEarned * 100) / 100).toFixed(2) })
                    this.setState({ estimatedRewards: (Math.round(yourEstimatedRewards * 100) / 100).toFixed(2) })
                } else {
                    this.setState({ notParticipantAddress: true })
                }
            });
        } else {
            this.setState({ errorAddress: true })
        }

    };

    render() {


        const { volume } = this.state

        return (
            <div className="section-participate">
                <Header />

                <section className="participate-stakedrop">
                    <div className="container">


                        <div className="col-lg-12">
                            <p className="button-back" onClick={this.props.history.goBack}>     <Icon viewClass="arrow-right" icon="arrow-right" /> Back to Campaigns</p>
                            <div className="row">

                                <div className="col-lg-4 section-campaign">
                                    <div className="row campaign-maintwo">
                                        <div className="col-lg-12  header-section">
                                            <h5 className="heading-participate">Matic StakeDrop Campaign</h5>
                                        </div>
                                        <div className="row body-section">
                                            <div className="col-lg-12 card-content campaign-card">
                                                <div className="card-inner">
                                                    <h6>Campaign Duration</h6>
                                                    <h1>45 Days</h1>
                                                </div>
                                                <Icon viewClass="social_icon_imgg" icon="participate" />

                                            </div>
                                            <div className="col-lg-12 card-content">
                                                <div className="participate-cardtwo">
                                                    <h6>Tokens to distribute</h6>
                                                    <h1>200,000 XPRT</h1>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 card-content">
                                                <div className="participate-cardtwo">
                                                    <h6>Start</h6>
                                                    <h1>16th of January 2021 <span>Checkpoint: 9586</span></h1>

                                                </div>
                                            </div>
                                            <div className="col-lg-12 card-content">
                                                <div className="participate-cardtwo end">
                                                    <h6>End</h6>
                                                    <h1>2nd of March 2021<span>Checkpoint: 10935</span></h1>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row campaign-maintwo second">
                                        <div className="col-lg-12  header-section">
                                            <h5 className="heading-participate two">Campaign Status</h5>
                                        </div>
                                        <div className="row body-section">
                                            <div className="col-lg-12 card-content">
                                                <div className="participate-cardtwo">
                                                    <h6>Tokens left:</h6>
                                                    <h1>{this.state.totalDistributed} XPRT</h1>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 card-content">
                                                <div className="participate-cardtwo">
                                                    <h6>Time left:</h6>
                                                    <h1 className="countdown"><Countdown
                                                        date={1614668400000}
                                                        autoStart={true}
                                                    /></h1>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 card-content">
                                                <div className="participate-cardtwo">
                                                    <h6>Total Staked:</h6>
                                                    <h1>{this.state.globalTotalStaked} MATIC <span>Total Active: {this.state.worldGlobalDelegation}</span></h1>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 card-content">
                                                <div className="participate-cardtwo end">
                                                    <h6>Total Staked on AUDIT.one:</h6>
                                                    <h1>{this.state.globalAuditStaked} MATIC</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 staking-second-section">
                                    <div className="col-lg-12 matic-tutorial-section">
                                        <p className="">Matic StakeDrop Tutorial: <a href="www.google.com" target="_blank" rel="noopener noreferrer">How MATIC Holders Can Participate in StakeDrop? </a></p>
                                    </div>
                                    <div className="col-lg-12 stakerow">
                                        <div className="col-lg-12  header-section">
                                            <h5 className="heading-participate">Calculate Your Estimated Rewards</h5>
                                        </div>
                                        <div className="body-section">
                                            <form onSubmit={this.handleCalculate}>

                                                <div className="inputstaking">
                                                    <h5>Staking Address</h5>
                                                    <input
                                                        type="text"
                                                        name="maticAddress"
                                                        id="maticAddress"
                                                        value={this.state.maticAddress}
                                                        onChange={this.handleAddressChange}
                                                        placeholder="Enter Address"
                                                        required

                                                    />

                                                </div>

                                                {this.state.errorAddress ?
                                                    <h6 className="valid-add">Enter Valid Address</h6>
                                                    :
                                                    ""
                                                }
                                                {this.state.notParticipantAddress ?
                                                    <h6 className="valid-add">Not a StakeDrop participant address, please send the magic transaction</h6>
                                                    :
                                                    ""
                                                }
                                                <div className="btn-calculate">
                                                    <button type="submit" className="btn">Calculate</button>
                                                </div>
                                            </form>

                                            <div className="">
                                                <div className="inputstaking justify-start">
                                                    <h5>Start Block Height</h5>
                                                    <h5 className="text-color">{this.state.blockHeight}</h5>
                                                </div>
                                            </div>
                                            <div className="row common-cards">

                                                <div className="inputstaking bottom">
                                                    <h5>Total Staked</h5>
                                                    <h5 className="value">{this.state.totalStaked} MATIC</h5>
                                                </div>


                                                <div className="inputstaking bottom">
                                                    <h5>Total Staked on AUDIT.one</h5>
                                                    <h5 className="value">{this.state.statkedOnAudit} MATIC</h5>
                                                </div>

                                                <div className="inputstaking bottom">
                                                    <h5>Total Rewards</h5>
                                                    <h5 className="value">{this.state.totalRewards} XPRT</h5>
                                                </div>
                                                <div className="inputstaking bottom">
                                                    <h5>Estimated Rewards</h5>
                                                    <h5 className="value">{this.state.estimatedRewards} XPRT</h5>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-12 staking-right-bottom stakerow">
                                        <div className="col-lg-12  header-section">
                                            <h5 className="heading-participate">Participate</h5>
                                        </div>
                                        <div className="body-section">
                                            <div className="range-data">
                                                <p>How many MATICs would you like to stake?</p>

                                                <input
                                                    type="text"
                                                    className="range-value"
                                                    value={volume}
                                                    onChange={this.handleOninputChange}


                                                />
                                            </div>
                                            <div className="range-slider">
                                                <Slider
                                                    value={volume}
                                                    onChange={this.handleOnChange}
                                                    min={0}
                                                    max={2000000}
                                                    step={100}
                                                />
                                            </div>

                                            <div className="">
                                                <div className="row">
                                                    <div className="col-lg-12 delegate-sec">
                                                        <div className="inputstaking bottom">
                                                            <h5>If you delegate to AUDIT.one</h5>
                                                            <h5 className="value">{this.state.delegateAudit} XPRT</h5>
                                                        </div>

                                                        <div className="inputstaking bottom">
                                                            <h5>to Other Validators</h5>
                                                            <h5 className="value">{this.state.delegateOther} XPRT</h5>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="participate-buttons">
                                                <div className="btn-magic-txs">
                                                    <button className="btn" onClick={this.handleTcModal}> <Icon viewClass="social_icon_imgg" icon="magic" /> Send Magic Transaction</button>
                                                </div>
                                                <div className="btn-delegate">
                                                    <button className="btn" onClick={this.handleDelegateModel}>Delegate</button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <Modal
                        show={this.state.tcShow}
                        onHide={this.handleClose}
                        className="accountInfoModel"
                        centered
                    >
                        <Modal.Body>
                            <p className="tc">Accept Stakedrop <a href={docTerms} target="_blank" rel="noopener noreferrer" title="Whitepaper"> Terms & Conditions </a>
                            </p>
                            <div className="button-section">
                                <button className="btn accept" onClick={this.handleTerms} >Accept</button>
                                <button className="btn decline" onClick={this.handleCancelTerms} >Decline</button>
                            </div>
                        </Modal.Body>
                    </Modal>
                    <Modal
                        size="lg"
                        show={this.state.show}
                        onHide={this.handleClose}
                        className="accountInfoModel"
                        centered
                    >
                        <Modal.Body>
                            <div className="staking-wallet-section">

                                <h4 className="text-left title">List of instructions to send Magic Transaction</h4>
                                <ul className="staking-instructions">
                                    <li className="text-left continue-text">To do magic tx, you have to send 0 MATIC to the contract address <span className="addressmatic">0x925d092D9Ff6c95EaB70Ee5a23C77F355C67F46d <CopyToClipboard onCopy={this.onCopy} text={'0x925d092D9Ff6c95EaB70Ee5a23C77F355C67F46d'}>
                                            <img src={copy} alt="copy" className="copy-icon" />
                                        </CopyToClipboard></span> from Matic Wallet (NOT Ethereum Wallet).</li>
                                    <p className="text-left continue-text">&emsp;Note: This address has to be same address from which you have staked your Matic tokens.</p>
                                    <p className="text-left continue-text">&emsp;Note: If you try send any matic token other than 0, Tx will fail.</p>
                                </ul>
                                <ul className="staking-instructions">
                                    <li className="text-left continue-text">Magic Tx can be done via MetaMask - Switch over Matic Mainnet in MetaMask and "Send" 0 MATIC to the contract address. If you haven't added Matic Mainnet, you can do so by adding Custom RPC and filling it with the details from <a href="https://docs.matic.network/docs/develop/network-details/network/" target="_blank" rel="noopener noreferrer">here</a></li>
                                   </ul>
                                <ul className="staking-instructions">
                                    <li className="text-left continue-text">To do Magic Tx you will need some MATIC token in Matic Wallet as fees. If you have MATIC in Ethereum wallet, you can transfer it to Matic Wallet by following the steps:</li>
                                    <p className="text-left continue-text">&emsp;Login <a href="https://wallet.matic.network" rel="noopener noreferrer" target="_blank">https://wallet.matic.network</a></p>
                                    <p className="text-left continue-text">&emsp;Go to "Wallet" tab</p>
                                    <p className="text-left continue-text">&emsp;Select "Switch to Plasma" bridge</p>
                                    <p className="text-left continue-text">&emsp;Select "Matic Wallet"</p>
                                    <p className="text-left continue-text">&emsp;Click on "Deposit" button and follow the instructions.</p>
                                </ul>
                            </div>
                        </Modal.Body>
                    </Modal>

                    <Modal
                        size="lg"
                        show={this.state.showDelegateModal}
                        onHide={this.handleClose}
                        className="accountInfoModel"
                        centered
                    >
                        <Modal.Body>
                            <div className="staking-wallet-section">
                                <h4 className="title">Available Methods to Participate in StakeDrop</h4>
                                
                                <p className="continue-text"> Choose wallet to continue</p>
                                <MaticWallets />
                            </div>
                        </Modal.Body>
                    </Modal>

                   
                    <Modal
                        size="lg"
                        show={this.state.showDelegateCliModal}
                        onHide={this.handleClose}
                        className="accountInfoModel"
                        centered
                    >
                        <Modal.Body>
                            <div className="cli-section">
                                <h3>CLI Method</h3>
                                <p className="info">Awesome, everything that you need is below</p>
                                <div className="cli-address">
                                    <p>kvcli tx staking delegate kavavaloper14gfgngrgg0pj494euuuvhygrhfptzf2hxllsev [amount] --from [from_key_or_address] --chain-id kava-4 --node https://node1.rpc.kava.persistence.one:443</p>
                                </div>

                            </div>
                        </Modal.Body>
                    </Modal>
                </section>
            </div>
        );
    }
}

export default withRouter(MaticParticipate);


