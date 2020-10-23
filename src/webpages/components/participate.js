
import React, { Component } from 'react';
import Icon from '../icon';
import { Modal } from "react-bootstrap";
import Slider from 'react-rangeslider';
import Countdown from 'react-countdown';
import 'react-rangeslider/lib/index.css'
import axios from 'axios';
import Header from '../../webpages/components/header';
import wetez from '../../assets/wetez.svg'
import lunie from '../../assets/Lunie.svg'
import cosmos_station from '../../assets/Cosmostation.svg'
import rainbow from '../../assets/rainbow.svg'
import math from '../../assets/math.svg'
import keplr from '../../assets/keplr.svg'
import imtoken from '../../assets/imtoken.svg'
import { getCalculateComsmos, getStatusURL } from "../../constants/url";

class Participate extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            show: false,
            volume: 0,
            ercAddress: '--',
            blockHeight: '--',
            totalStaked: '--',
            statkedOnAudit: '--',
            totalRewards: '--',
            estimatedRewards: '--',
            globalTotalStaked: '',
            globalAuditStaked: '',
            totalDistributed: 0,
            delegateAudit:0,
            delegateOther:0,
            errorAddress: false
        }
        this.handleCalculate = this.handleCalculate.bind(this);
    }
    handleOnChange = (value) => {
        this.setState({ volume: value })
        const delegateAudit = (0.25 * value)/(this.state.globalAuditStaked + value) + (0.75* value)/(this.state.globalTotalStaked + value) * this.state.totalDistributed
        const delegateOther =  (0.75 * value)/(this.state.globalTotalStaked + value) * this.state.totalDistributed
        this.setState({ delegateAudit: delegateAudit })
        this.setState({ delegateOther: delegateOther })
        console.log(delegateAudit)

    }
    handleClose = () => {
        this.setState({ show: false });
    };
    handleModel = () => {
        this.setState({ show: true });
    };
    componentDidMount = () => {
        const Statusurl = getStatusURL();
        axios.get(Statusurl).then((statusResponse) => {
            const totalDistributed = 200000-(statusResponse.data.totalDistributed / 1000000) 
            const worldTotalDelegations = statusResponse.data.worldGlobalDelegation;
            const worldAuditDelegations = statusResponse.data.worldAuditDelegation;
            this.setState({ totalDistributed: totalDistributed })
            this.setState({ globalTotalStaked: worldTotalDelegations })
            this.setState({ globalAuditStaked: worldAuditDelegations })


        })
    }

    handleCalculate = e => {
        e.preventDefault();
        const calAddress = e.target.cosmosAddress.value;
        var addressPrefix = calAddress.startsWith("cosmos");

    if (addressPrefix === true && calAddress.length === 45) {
        const url = getCalculateComsmos(calAddress)
       
        axios.get(url).then((result) => {
            const calculatedata = result.data;
            if (calculatedata.success === true) {

                this.setState({ errorAddress: false })
                const currentEarned = calculatedata.received;
                const yourDelegations = calculatedata.globalDelegation;
                const yourAuditDelegation = calculatedata.globalDelegation;
                this.setState({ ercAddress: calculatedata.ercAddress })
                this.setState({ blockHeight: calculatedata.magicTxHeight })
                this.setState({ statkedOnAudit: calculatedata.auditDelegation })
                this.setState({ totalStaked: calculatedata.globalDelegation })
                this.setState({ totalRewards: currentEarned / 1000000 })
                const estimatedRewards = ((currentEarned / 1000000) + yourDelegations / this.state.globalTotalStaked * 0.75 + yourAuditDelegation) / this.state.globalAuditStaked * 0.25;
                this.setState({ estimatedRewards: estimatedRewards })

            } else {
                this.setState({ errorAddress: true })
            }
        });
    }else {
        this.setState({ errorAddress: true })
    }
    

       

    };

    // handleAddressChangehandleAddressChange = () =>{
    // const nameRe = /^[a-zA-Z\b]+$/;
    //     if (event.target.value === '' || nameRe.test(event.target.value)) {

    //     }
    // }
    render() {
        const { volume } = this.state
        return (
            <div className="section-participate"> 
                <Header />
           
            <section className="participate-stakedrop">
                <div className="container">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-4 section-campaign">
                                <div className="row campaign-maintwo">
                                    <div className="col-lg-12  header-section">
                                        <h5 className="heading-participate">Cosmos Stake Drop Campaign</h5>
                                    </div>
                                    <div className="row body-section">
                                        <div className="col-lg-12 card-content campaign-card">
                                            <div className="card-inner">
                                                <h6>Campaign Duration</h6>
                                                <h1>30 Days</h1>
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
                                                <h1>26th of October 2020 <span>Block Height: 3846000</span></h1>

                                            </div>
                                        </div>
                                        <div className="col-lg-12 card-content">
                                            <div className="participate-cardtwo end">
                                                <h6>End</h6>
                                                <h1>25 Novemeber 2020<span>Block Height: 4206000</span></h1>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                
                            </div>
                            <div className="col-lg-8 staking-second-section">
                                <div className="col-lg-12 stakerow">
                                    <div className="col-lg-12  header-section">
                                        <h5 className="heading-participate">Your Rewards</h5>
                                    </div>
                                    <div className="body-section">
                                        <form onSubmit={this.handleCalculate}>

                                            <div className="inputstaking">
                                                <h5>Staking Address</h5>
                                                <input
                                                    type="text"
                                                    name="cosmosAddress"
                                                    id="cosmosAddress"
                                                    value={this.state.cosmosAddress}
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
                                            <div className="btn-calculate">
                                                <button type="submit" className="btn">Calculate</button>
                                            </div>
                                        </form>
                                        <div className="">
                                            <div className="inputstaking justify-start">
                                                <h5>ERC20 Address</h5>
                                                <h5 className="text-color">{this.state.ercAddress}</h5>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="inputstaking justify-start">
                                                <h5>Start Block Height</h5>
                                                <h5 className="text-color">{this.state.blockHeight}</h5>
                                            </div>
                                        </div>
                                        <div className="row common-cards">

                                            <div className="inputstaking bottom">
                                                <h5>Total Staked</h5>
                                                <h5 className="value">{this.state.totalStaked}</h5>
                                            </div>


                                            <div className="inputstaking bottom">
                                                <h5>Total Staked on AUDIT.one</h5>
                                                <h5 className="value">{this.state.statkedOnAudit}</h5>
                                            </div>

                                            <div className="inputstaking bottom">
                                                <h5>Total Rewards</h5>
                                                <h5 className="value">{this.state.totalRewards}</h5>
                                            </div>
                                            <div className="inputstaking bottom">
                                                <h5>Estimated Rewards</h5>
                                                <h5 className="value">{this.state.estimatedRewards}</h5>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                        
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                        <div className="row campaign-maintwo second">
                                    <div className="col-lg-12  header-section">
                                        <h5 className="heading-participate two">Campaign Status</h5>
                                    </div>
                                    <div className="row body-section">
                                        <div className="col-lg-12 card-content">
                                            <div className="participate-cardtwo">
                                                <h6>Tokens left:</h6>
                                                 <h1>{this.state.totalDistributed} $XPRT</h1>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 card-content">
                                            <div className="participate-cardtwo">
                                                <h6>Time left:</h6>
                                                <h1 className="countdown"><Countdown
                                                    date={1603670400000}
                                                    autoStart={true}
                                                /></h1>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 card-content">
                                            <div className="participate-cardtwo">
                                                <h6>Total Staked:</h6>
                                                <h1>{this.state.globalTotalStaked}</h1>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 card-content">
                                            <div className="participate-cardtwo end">
                                                <h6>Total Staked on AUDIT.one:</h6>
                                                <h1>{this.state.globalAuditStaked}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-8 staking-second-section">
                                    <div className="col-lg-12 staking-right-bottom stakerow">
                                        <div className="col-lg-12  header-section">
                                            <h5 className="heading-participate">Participate</h5>
                                        </div>
                                        <div className="body-section">
                                            <div className="range-data">
                                                <p>How many ATOMs you want to stake ?</p>
                                                <p className="range-value">{this.state.volume}</p>
                                            </div>
                                            <div className="range-slider">
                                                <Slider
                                                    value={volume}
                                                    onChange={this.handleOnChange}
                                                    min={0}
                                                    max={this.state.globalTotalStaked}
                                                    step={1}
                                                />
                                            </div>

                                            <div className="">
                                                <div className="row">
                                                    <div className="col-lg-12 delegate-sec">
                                                        <div className="inputstaking bottom">
                                                            <h5>If you delegate to to AUDIT.one</h5>
                                                            <h5 className="value">{this.state.delegateAudit}</h5>
                                                        </div>
                                                      
                                                        <div className="inputstaking bottom">
                                                            <h5>to Other Validators</h5>
                                                            <h5 className="value">{this.state.delegateOther}</h5>
                                                        </div>
                                                  
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div className="participate-buttons">
                                                <div className="btn-magic-txs">
                                                    <button className="btn" > <Icon viewClass="social_icon_imgg" icon="magic" /> Send Magic Transaction</button>
                                                </div>
                                                <div className="btn-delegate">
                                                    <button className="btn" onClick={this.handleModel}>Delegate</button>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                </div>
                    </div>
                </div>
                <Modal
                    size="lg"
                    show={this.state.show}
                    onHide={this.handleClose}
                    className="accountInfoModel"
                    centered
                >
                    <Modal.Body>
                        <div className="staking-wallet-section">
                            <h4 className="title">Available Methods to Participate in Stakedrop</h4>
                            <p className="info">Choose a prefered staking method. We recomend the web interface - it’s easier to use!</p>
                            <div className="row wallet-method">
                            <div className="col-lg-6">
                                    <div className="cli-box">
                                        <div className="card-inner">
                                            <p>Continue with CLI</p>
                                            <Icon viewClass="social_icon_imgg" icon="arrow-right" />
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <p className="continue-text">Or choose wallet to continue</p>
                            <div className="row">
                                    <div className="wallet-card">
                                        <div className="card-inner">
                                        <img src={lunie} alt="Lunie" />
                                            <p>Lunie</p>
                                        </div>
                                    </div>
                                    <div className="wallet-card">
                                        <div className="card-inner">
                                        <img src={cosmos_station} alt="Cosmostation" />
                                            <p>Cosmostation</p>
                                        </div>
                                    </div>
                                    <div className="wallet-card">
                                        <div className="card-inner">
                                        <img src={imtoken} alt="imToken" />
                                            <p>imToken</p>
                                        </div>
                                    </div>
                                    <div className="wallet-card">
                                        <div className="card-inner">
                                        <img src={wetez} alt="Wetez" />
                                            <p>Wetez</p>
                                        </div>
                                    </div>
                                    <div className="wallet-card">
                                        <div className="card-inner">
                                            <img src={math} alt="Math" />
                                            <p>Math Wallet</p>
                                        </div>
                                    </div>
                                    <div className="wallet-card">
                                        <div className="card-inner">
                                            <img src={rainbow} alt="Rainbow" />
                                            <p>Rainbow Wallet</p>
                                        </div>
                                    </div>
                                    <div className="wallet-card">
                                        
                                        <div className="card-inner">
                                        <img src={keplr} alt="Keplr" />
                                            <p>Keplr Wallet</p>
                                        </div>
                                    </div>
                            </div>
                            
                        </div>
                    </Modal.Body>
                </Modal>
            </section>
            </div>
        );
    }
}

export default Participate;


