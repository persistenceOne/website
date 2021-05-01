import React, {Component} from 'react';
import ReactGa from 'react-ga';
import Icon from "../../components/Icon";
import Slider from 'react-rangeslider';
import Countdown from 'react-countdown';
import 'react-rangeslider/lib/index.css'
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {getCalculateKava, getKavaStatusURL} from "../../constants/url";
import {Modal} from "react-bootstrap";
import docTerms from "../../assets/images1/stakedrop/PersistenceT&C.pdf";
import {CopyToClipboard} from "react-copy-to-clipboard";
import copy from "../../assets/images1/copy.svg";
import MaticWallets from "./maticWallet";


class kavaStakedrop extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            show: false,
            tcShow: false,
            volume: 0,
            ercAddress: '--',
            xprtAddress:'--',
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
        this.setState({copyValue: true})
        this.setState({copied: true});
        setTimeout(() => {
            this.setState({copyValue: false})
        }, 1000);
    };


    handleClose = () => {
        this.setState({show: false});
        this.setState({showDelegateModal: false});
        this.setState({showDelegateCliModal: false});
        this.setState({showMagicTxnClieModel: false});
    };

    handleTcModal = () => {
        ReactGa.event({
            category: 'Send Magic Transaction',
            action: 'Clicked on Magic Transaction'
        });
        this.setState({tcShow: true});
    };
    handleDelegateModel = () => {
        ReactGa.event({
            category: 'Delegate',
            action: 'Clicked on Delegate'
        })
        this.setState({showDelegateModal: true});
    };
    handleDelegateClieModel = () => {
        this.setState({showDelegateModal: false});
        this.setState({showDelegateCliModal: true});
    }

    handleMagicTxnClieModel = () => {
        this.setState({show: false});
        this.setState({showMagicTxnClieModel: true});
    }
    handleTerms = () => {
        this.setState({tcShow: false});
        this.setState({show: true});
    };
    handleCancelTerms = () => {
        this.setState({tcShow: false});
        this.props.history.push('/StakeDropKava');
    };
    componentDidMount = () => {
        window.scrollTo(0, 0)
        ReactGa.pageview(window.location.pathname + window.location.search);
        const Statusurl = getKavaStatusURL();
        axios.get(Statusurl).then((statusResponse) => {
            const totalDistributed = 100000 - (statusResponse.data.totalDistributed / 1000000)
            const worldTotalDelegations = (statusResponse.data.totalStakeDropGlobalDelegation);
            const worldAuditDelegations = (statusResponse.data.worldAuditDelegation);
            const worldGlobalDelegation = (statusResponse.data.worldGlobalDelegation / 1000000);
            this.setState({totalDistributedInt: totalDistributed})
            this.setState({worldGlobalDelegation: (Math.round(worldGlobalDelegation * 100) / 100).toLocaleString()})
            this.setState({globalTotalStakedInt: worldTotalDelegations})
            this.setState({globalAuditStakedInt: worldAuditDelegations})
            this.setState({totalDistributed: totalDistributed.toLocaleString()})
            this.setState({globalTotalStaked: (worldTotalDelegations / 1000000).toLocaleString()})
            this.setState({globalAuditStaked: (worldAuditDelegations / 1000000).toLocaleString()})
        })
    }

    handleOninputChange(event) {
        const value = event.target.value
        this.setState({volume: value})
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            this.setState({volume: event.target.value})
        }
        if (event.target.value >= 1000000) {
            this.setState({volume: 1000000})

        }

        if (event.target.value === '') {
            const delegateAudit = 0;
            const delegateOther = 0;
            this.setState({delegateAudit: delegateAudit})
            this.setState({delegateOther: delegateOther})
        } else {
            var ukavasToDelegate = value * 1000000
            var delegateAudit = ((0.25 * ukavasToDelegate / (this.state.globalAuditStakedInt + ukavasToDelegate) +
                (0.75 * ukavasToDelegate) / (this.state.globalTotalStakedInt + ukavasToDelegate)) * this.state.totalDistributedInt);
            var delegateOther = ((0.75 * ukavasToDelegate) / (this.state.globalTotalStakedInt + ukavasToDelegate)) * this.state.totalDistributedInt;
            if (isNaN(delegateAudit)) {
                delegateAudit = 0;
            }
            if (isNaN(delegateOther)) {
                delegateOther = 0;
            }
            if (delegateAudit > 5000) {
                this.setState({delegateAudit: 5000})
            } else {
                this.setState({delegateAudit: (Math.round(delegateAudit * 100) / 100).toFixed(2)})
            }
            if (delegateOther > 5000) {
                this.setState({delegateOther: 5000})
            } else {
                this.setState({delegateOther: (Math.round(delegateOther * 100) / 100).toFixed(2)})
            }
        }
    }


    handleOnChange = (value) => {
        this.setState({volume: value})
        var ukavasToDelegate = value * 1000000
        var delegateAudit = ((0.25 * ukavasToDelegate / (this.state.globalAuditStakedInt + ukavasToDelegate) +
            (0.75 * ukavasToDelegate) / (this.state.globalTotalStakedInt + ukavasToDelegate)) * this.state.totalDistributedInt);
        var delegateOther = ((0.75 * ukavasToDelegate) / (this.state.globalTotalStakedInt + ukavasToDelegate)) * this.state.totalDistributedInt;
        if (isNaN(delegateAudit)) {
            delegateAudit = 0;
        }
        if (isNaN(delegateOther)) {
            delegateOther = 0;
        }
        if (delegateAudit > 5000) {
            this.setState({delegateAudit: 5000})
        } else {
            this.setState({delegateAudit: (Math.round(delegateAudit * 100) / 100).toFixed(2)})
        }
        if (delegateOther > 5000) {
            this.setState({delegateOther: 5000})
        } else {
            this.setState({delegateOther: (Math.round(delegateOther * 100) / 100).toFixed(2)})
        }
    }
    handleCalculate = e => {
        e.preventDefault();
        this.setState({errorAddress: false})
        this.setState({notParticipantAddress: false})
        const calAddress = e.target.kavaAddress.value;
        var addressPrefix = calAddress.startsWith("kava");

        if (addressPrefix === true && calAddress.length === 43) {
            const url = getCalculateKava(calAddress)
            axios.get(url).then((result) => {
                const calculatedata = result.data;
                if (calculatedata.success === true) {
                    const currentEarned = (calculatedata.received / 1000000);
                    const yourEstimatedRewards = (calculatedata.estimated / 1000000);
                    this.setState({ercAddress: calculatedata.ercAddress});
                    this.setState({xprtAddress:calculatedata.xprtAddress});
                    this.setState({blockHeight: calculatedata.magicTxHeight});
                    this.setState({totalStaked: (calculatedata.globalDelegation / 1000000).toLocaleString()});
                    this.setState({statkedOnAudit: (calculatedata.auditDelegation / 1000000).toLocaleString()});
                    this.setState({totalRewards: (Math.round(currentEarned * 100) / 100).toFixed(2)});
                    this.setState({estimatedRewards: (Math.round(yourEstimatedRewards * 100) / 100).toFixed(2)})
                } else {
                    this.setState({notParticipantAddress: true})
                }
            });
        } else {
            this.setState({errorAddress: true})
        }

    };

    render() {
        const {volume} = this.state
        return (
            <div className="section-participate">
                <section className="participate-stakedrop">
                    <div className="container">
                        <div className="col-lg-12">
                            <p className="button-back" onClick={this.props.history.goBack}><Icon viewClass="arrow-right"
                                                                                                 icon="arrow-right"/> Back
                                to Campaigns</p>
                            <div className="row">

                                <div className="col-lg-4 section-campaign">
                                    <div className="row campaign-maintwo">
                                        <div className="col-lg-12  header-section">
                                            <h5 className="heading-participate">Kava StakeDrop Campaign</h5>
                                        </div>
                                        <div className="row body-section">
                                            <div className="col-lg-12 card-content campaign-card">
                                                <div className="card-inner">
                                                    <h6>Reward Claim Duration</h6>
                                                    <h1>25 Days</h1>
                                                </div>
                                                <Icon viewClass="social_icon_imgg" icon="participate"/>

                                            </div>
                                            <div className="col-lg-12 card-content">
                                                <div className="participate-cardtwo">
                                                    <h6>Tokens to distribute</h6>
                                                    <h1>100,000 XPRT</h1>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 card-content">
                                                <div className="participate-cardtwo">
                                                    <h6>Start Date (Tentatively)</h6>
                                                    <h1>25 April 2021<span>Block Height: 220500</span></h1>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 card-content">
                                                <div className="participate-cardtwo end">
                                                    <h6>End Date (Tentatively):</h6>
                                                    <h1>19 May 2021<span>Block Height: 551750</span></h1>
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
                                                        date={1608748199000}
                                                        autoStart={true}
                                                    /></h1>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 card-content">
                                                <div className="participate-cardtwo">
                                                    <h6>Total Staked:</h6>
                                                    <h1>{this.state.globalTotalStaked} KAVA <span>Total Active: {this.state.worldGlobalDelegation}</span>
                                                    </h1>

                                                </div>
                                            </div>
                                            <div className="col-lg-12 card-content">
                                                <div className="participate-cardtwo end">
                                                    <h6>Total Staked on AUDIT.one:</h6>
                                                    <h1>{this.state.globalAuditStaked} KAVA</h1>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 staking-second-section">
                                    <div className="col-lg-12 kava-tutorial-section">
                                        <p className="">Learn how to claim StakeDrop rewards for Cosmos, Kava and Terra
                                            campaign <a href="https://buff.ly/3g3zAMw" target="_blank"
                                                        rel="noopener noreferrer">here.</a></p>
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
                                                        name="kavaAddress"
                                                        id="kavaAddress"
                                                        value={this.state.kavaAddress}
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
                                                    <h6 className="valid-add">Not a StakeDrop participant address,
                                                        please send the magic transaction</h6>
                                                    :
                                                    ""
                                                }
                                                <div className="btn-calculate">
                                                    <button type="submit" className="btn">Calculate</button>
                                                </div>
                                            </form>
                                            <div className="">
                                                <div className="inputstaking justify-start">
                                                    <h5>XPRT Address</h5>
                                                    <h5 className="text-color">{this.state.xprtAddress}</h5>
                                                </div>
                                            </div>
                                            <div className="row common-cards">

                                                <div className="inputstaking bottom">
                                                    <h5>Total Staked</h5>
                                                    <h5 className="value">{this.state.totalStaked} KAVA</h5>
                                                </div>


                                                <div className="inputstaking bottom">
                                                    <h5>Total Staked on AUDIT.one</h5>
                                                    <h5 className="value">{this.state.statkedOnAudit} KAVA</h5>
                                                </div>

                                                <div className="inputstaking bottom">
                                                    <h5>Total Rewards</h5>
                                                    <h5 className="value">{this.state.totalRewards} XPRT</h5>
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
                                                <p>How many KAVAs would you like to stake?</p>

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
                                                    max={1000000}
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
                                                    <button className="btn" onClick={this.handleTcModal}> <Icon viewClass="social_icon_imgg" icon="magic" />Claim Rewards</button>
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

                                    <li className="text-left continue-text"> The Kava Stakedrop Campaign concluded in December 2020 and now we are distributing the rewards. Please note that we are not accepting any new transaction for participating in the campaign. </li>
                                    <li className="text-left continue-text">All the StakeDrop participants need to create a new persistence wallet (with no prior transactions). You can learn to create one <a rel="noopener noreferrer" href="https://medium.com/persistence-blog/persistence-xprt-wallet-guide-dbf5e27100f3" target="_blank">here.</a></li>

                                    <li className="text-left continue-text"> Once you have created the wallet, starting 25th April 2021 [Block Height: 220500] you can send a transaction of 0.001 KAVA from the same address you used to participate in StakeDrop campaign to the designated address <span className="addressmatic">kava13rxv4w6d6d3hdwgg5dz2ktmmgmncan3sezg56h <CopyToClipboard onCopy={this.onCopy} text={'kava13rxv4w6d6d3hdwgg5dz2ktmmgmncan3sezg56h'}><img src={copy} alt="copy" className="copy-icon" />
                                    </CopyToClipboard></span> and put your Persistence Wallet address in the memo field.</li>
                                    <p className="text-left continue-text">Example TX: kvcli tx send [Your_address] kava13rxv4w6d6d3hdwgg5dz2ktmmgmncan3sezg56h 10ukava --chain-id kava-7 --memo="persistence1aepmuldh8j05y57zh5tje3fuzk63mc2mmf63vv" --node https://kava.rpc.audit.one:443</p>
                                    <li className="text-left continue-text"> Your 0.001 KAVA will be returned at the end of the claim window to your Kava address.</li>
                                    <li className="text-left continue-text">The claim window will end on 19 May 2021[Block Height: 551750]. Any Magic Transaction sent after the 19 May 2021 will not be considered. </li>
                                    <p className="text-left continue-text">Note: Don't share your mnemonics for any wallet with anyone. Mnemonics are highly sensitive data and should be secured very carefully.</p>
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
                                    <p>kvcli tx staking delegate kava13rxv4w6d6d3hdwgg5dz2ktmmgmncan3sezg56h [amount] --from [from_key_or_address] --chain-id kava-4 --node https://node1.rpc.kava.persistence.one:443</p>
                                </div>

                            </div>
                        </Modal.Body>
                    </Modal>
                </section>
            </div>
        );
    }
}

export default withRouter(kavaStakedrop);


