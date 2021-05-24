import React from 'react';
import ReactGa from 'react-ga';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {getStatusURL, getKavaStatusURL, getTerraStatusURL, getMaticStatusURL} from "../../constants/url";
import pstakevideo from '../../assets/images1/stakedrop/PStakedrop.mp4';
import Accordion from '../../components/accordion'
import Icon from "../../components/Icon";
import atom_icon from '../../assets/images1/stakedrop/atom.svg';
import dot_icon from '../../assets/images1/stakedrop/dot.svg';
import mat_icon from '../../assets/images1/stakedrop/matic.svg';
import xtz_icon from '../../assets/images1/stakedrop/xtz.svg';
import luna_icon from '../../assets/images1/stakedrop/luna.svg';
import kava_icon from '../../assets/images1/stakedrop/kava.svg';
import iris_icon from '../../assets/images1/stakedrop/iris.svg';
import banner2 from '../../assets/images1/stakedrop/banner2.svg';
import banner3 from '../../assets/images1/stakedrop/banner03.svg';
import cosmos_tutorial from '../../assets/images1/stakedrop/cosmos-tutorial.svg';
import mechanism from '../../assets/images1/stakedrop/mechanism.svg';
import stakedropmandarin from '../../assets/images1/stakedropmandarin.pdf';

const questionList = [
    {
        question: 'What is the Persistence StakeDrop?',
        answer: 'StakeDrop is a token distribution mechanism that allows token holders of some of the most prominent Proof-of-Stake networks to get exposure to XPRT tokens (Persistence tokens).',
    },
    {
        question: 'How many XPRT tokens will be distributed through StakeDrop?',
        answer: 'We will be distributing 1,000,000 XPRT tokens to participants of StakeDrop across all the seven different campaigns.',
    },
    {
        question: 'How can I participate in the Persistence StakeDrop?',
        answer: 'To participate in StakeDrop, you need to stake your tokens with any active validator (on-chain staking) and send a magic transaction to the wallet address provided by us.',
    },
    {
        question: 'How can I maximize my rewards?',
        answer: 'There are two rewards pools per campaign. All participants are rewarded through the Network Rewards Pool. There’s a separate AUDIT.one Rewards Pool which incentivizes delegation to our AUDIT.one validator. Delegators of AUDIT.one receive their share of rewards from the Network Rewards Pool as well as the AUDIT.one Rewards Pool.',
    },
    {
        question: 'Can I stake my tokens through an exchange and still be eligible to earn XPRT rewards?',
        answer: 'No, only on-chain staking will qualify (Although Kraken provides on-chain staking, Kraken stakers will not be eligible to earn XPRT through StakeDrop).',
    },
    {
        question: 'What is a Magic Transaction? ',
        answer: 'A small transaction of 0.001 campaign native tokens (for Cosmos Campaign-ATOM) sent from your staking wallet (same wallet used to stake the native tokens) to a wallet address that will be provided on the Persistence StakeDrop website. This transaction is what enables participation in StakeDrop and you start accumulating XPRT rewards only after you have sent this transaction.',
    },
    {
        question: 'Are all wallets supported?',
        answer: 'Yes. All on-chain staking wallets are supported.',
    },
    {
        question: 'When do my rewards start accumulating? ',
        answer: 'You will be an active participant right after you have sent the Magic transaction of 0.001 tokens with an ERC20 wallet address (XPRT tokens receiving address) in the MEMO field. Please note that the Magic transaction has to be sent through the staking wallet address.',
    },
    {
        question: 'What if I miss out on entering my ERC20 address or fill in the wrong address in the MEMO field? ',
        answer: 'You can resend the magic transaction with the correct ERC20 address. The latest Magic transaction will be considered to collect your ERC20 wallet address.',
    },
];

class StakedropMainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Tab: '',
            isOpen: false,
            globalTotalStaked: 0,
            totalDropped: 0,
            totaldrop: 0,
            totalStakeDropGlobalDelegation: 0,
        };
    }

    onClickParticipate = () => {
        ReactGa.event({
            category: 'Participate',
            action: 'Clicked on Participate'
        })
    };
    onClickViewCosmos = () => {
        ReactGa.event({
            category: 'View',
            action: 'Clicked on View Cosmos'
        })
    };
    onClickViewKava = () => {
        ReactGa.event({
            category: 'View',
            action: 'Clicked on View Kava'
        })
    };
    onClickViewTerra = () => {
        ReactGa.event({
            category: 'View',
            action: 'Clicked on View Terra'
        })
    };
    componentDidMount = () => {
        ReactGa.pageview(window.location.pathname + window.location.search);
        const Statusurl = getStatusURL();
        axios.get(Statusurl).then((statusResponse) => {
            const totalDistributed = 200000 - (statusResponse.data.totalDistributed / 1000000)
            const totalCosmosStakeDropGlobalDelegation = (statusResponse.data.totalStakeDropGlobalDelegation / 1000000);
            const totalCosmosDropped = (Math.round((200000 - totalDistributed) * 100) / 100)
            this.setState({totalDistributedInt: totalDistributed})
            this.setState({totalCosmosStakeDropGlobalDelegation: (Math.round(totalCosmosStakeDropGlobalDelegation * 100) / 100).toLocaleString()})
            this.setState({totalDistributed: totalDistributed.toLocaleString()})
            this.setState({totalCosmosDropped: totalCosmosDropped})


            const Statusterraurl = getTerraStatusURL();
            axios.get(Statusterraurl).then((statusResponse) => {
                const totalDistributed = 100000 - (statusResponse.data.totalDistributed / 1000000)
                const totalTerraStakeDropGlobalDelegation = (statusResponse.data.totalStakeDropGlobalDelegation / 1000000);
                const totalTerraDropped = (Math.round((100000 - totalDistributed) * 100) / 100)
                this.setState({totalDistributedInt: totalDistributed})
                this.setState({totalTerraStakeDropGlobalDelegation: (Math.round(totalTerraStakeDropGlobalDelegation * 100) / 100).toLocaleString()})
                this.setState({totalDistributed: totalDistributed.toLocaleString()})
                this.setState({totalTerraDropped: totalTerraDropped})


                const Statuskavaurl = getKavaStatusURL();
                axios.get(Statuskavaurl).then((statusResponse) => {
                    const totalDistributed = 100000 - (statusResponse.data.totalDistributed / 1000000)
                    const totalKavaStakeDropGlobalDelegation = (statusResponse.data.totalStakeDropGlobalDelegation / 1000000);
                    const totalKavaDropped = (Math.round((100000 - totalDistributed) * 100) / 100)
                    this.setState({totalDistributedInt: totalDistributed})
                    this.setState({totalKavaStakeDropGlobalDelegation: (Math.round(totalKavaStakeDropGlobalDelegation * 100) / 100).toLocaleString()})
                    this.setState({totalDistributed: totalDistributed.toLocaleString()})
                    this.setState({totalKavaDropped: totalKavaDropped})


                    const Statusmaticurl = getMaticStatusURL();
                    axios.get(Statusmaticurl).then((statusResponse) => {
                        const totalDistributed = 200000 - (statusResponse.data.totalDistributed / 1000000)
                        const totalMaticStakeDropGlobalDelegation = (statusResponse.data.totalStakeDropGlobalDelegation);
                        const totalMaticDropped = (Math.round((200000 - totalDistributed) * 100) / 100)
                        this.setState({totalDistributedInt: totalDistributed})
                        this.setState({totalMaticStakeDropGlobalDelegation: (Math.round(totalMaticStakeDropGlobalDelegation * 100) / 100).toLocaleString()})
                        this.setState({totalDistributed: totalDistributed.toLocaleString()})
                        this.setState({totalMaticDropped: totalMaticDropped})
                        const totaldrop = (totalCosmosDropped + totalKavaDropped + totalTerraDropped + totalMaticDropped).toLocaleString();
                        const totalStakeDropGlobalDelegation = totalCosmosStakeDropGlobalDelegation + totalKavaStakeDropGlobalDelegation + totalTerraStakeDropGlobalDelegation + totalMaticStakeDropGlobalDelegation;
                        this.setState({totalStakeDropGlobalDelegation: (totalStakeDropGlobalDelegation).toLocaleString()})
                        this.setState({totaldrop: totaldrop})
                    })

                })


            })


        })


    };


    render() {

        return (
            <div className="section-stake-drop">
                <div>
                    <section className="stakedrop-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <h1 className="stake-title">StakeDrop
                                                <p className="sub-text">Stake tokens, earn XPRT. Stake tokens with our
                                                    AUDIT.one
                                                    validator, earn additional XPRT rewards.</p></h1>
                                            <p className="sub-title title-line">We have allocated 1% of our total supply
                                                at genesis for StakeDrop.
                                                <span>1,000,000 XPRT tokens will be distributed to stakers of some of the most prominent dPoS/nPoS networks. <span><a
                                                    href="https://notes.persistence.one/s/cucF-3faM" target="_blank"
                                                    rel="noopener noreferrer">Learn more</a></span></span>
                                            </p>

                                        </div>
                                        <div className="col-lg-4">
                                            <video className="pmedia-element" autoPlay="autoplay" preload="true"
                                                   loop="loop"
                                                   muted src={pstakevideo}>
                                                <source type="video/webm" src={pstakevideo}/>
                                                <source type="video/mp4" src={pstakevideo}/>
                                                <source type="video/ogg" src={pstakevideo}/>
                                            </video>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 title-cards">
                                    <div className="row row-common">
                                        <div className="col-xs-6 col-md-6 col-lg-3 row-pad p-1">

                                            <div className="col-lg-12 common-cards card-one">

                                                <p>Total XPRT to be dropped</p>
                                                <h5>1,000,000 XPRT</h5>
                                            </div>
                                        </div>


                                        <div className="col-xs-6 col-md-6 col-lg-3 row-pad p-1">
                                            <div className="col-lg-12 common-cards card-one">
                                                <p>Networks Supported</p>
                                                <h5>7</h5>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                    <section className="stakedrop-banner">
                        <div className="container">
                            <div className="row">

                                <div className="col-md-6">
                                    <a href="https://www.stakingrewards.com/journal/exclusive-xprt-giveaway-persistence-stakedrop-participants"
                                       target="_blank" rel="noopener noreferrer"> <img src={banner2} alt="banner"/></a>
                                </div>
                                <div className="col-md-6">
                                    <a href="https://buff.ly/3g3zAMw"
                                       target="_blank" rel="noopener noreferrer"> <img src={banner3} alt="banner"/></a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="stake-drop-campaigns">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="stakedrop-title-head">
                                        <h2 className="title">StakeDrop Campaigns</h2>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-lg-4 campaign-sec">
                                            <div className="col-md-12 campaign-card">
                                                <div className="icon-div">
                                                    <img src={atom_icon} alt="atom"/><span><h6>Completed!</h6>
                                                    <Link onClick={this.onClickViewCosmos} className="viewcampaign"
                                                          to="/StakeDropCosmos">Claim Rewards</Link></span>
                                                </div>
                                                <div className="about-campaign">
                                                    <h4>Cosmos (ATOM)</h4>
                                                    <p>200,000 XPRT</p>
                                                </div>
                                                <div className="stake-to">
                                                    <p><Icon viewClass="social_icon_imgg" icon="stakearrow"/>&emsp;Stake
                                                        Atom to earn XPRT</p>
                                                    <p><Icon viewClass="social_icon_imgg"
                                                             icon="stake-time"/>&emsp;Campaign Duration: 30 Days</p>
                                                    <p><Icon viewClass="social_icon_imgg" icon="stake-flag"/>&emsp;26th
                                                        of October 2020</p>
                                                    <p><Icon viewClass="social_icon_imgg"
                                                             icon="stake-fillflag"/>&emsp;25th of November 2020</p>
                                                    <p className="total_drop_allowcated">
                                                        <span>Total drop allocated:</span><span>20.00%</span></p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6 col-lg-4 campaign-sec">
                                            <div className="col-md-12 campaign-card">
                                                <div className="icon-div">
                                                    <img src={kava_icon} alt="atom"/><span><h6>Completed!</h6>
                                                    <Link onClick={this.onClickViewKava} className="viewcampaign"
                                                          to="/StakeDropKava">Claim Rewards</Link></span>
                                                </div>

                                                <div className="about-campaign">
                                                    <h4>Kava Labs (KAVA)</h4>
                                                    <p>100,000 XPRT</p>
                                                </div>
                                                <div className="stake-to">
                                                    <p><Icon viewClass="social_icon_imgg" icon="stakearrow"/>&emsp;Stake
                                                        KAVA to earn XPRT</p>
                                                    <p><Icon viewClass="social_icon_imgg"
                                                             icon="stake-time"/>&emsp;Campaign Duration: 28 Days</p>
                                                    <p><Icon viewClass="social_icon_imgg" icon="stake-flag"/>&emsp;26th
                                                        of November 2020</p>
                                                    <p><Icon viewClass="social_icon_imgg"
                                                             icon="stake-fillflag"/>&emsp;23rd of December 2020</p>
                                                    <p className="total_drop_allowcated">
                                                        <span>Total drop allocated:</span><span>10.00%</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 campaign-sec">
                                            <div className="col-md-12 campaign-card">
                                                <div className="icon-div">
                                                    <img src={luna_icon} alt="atom"/><span><h6>Completed!</h6>
                                                    <Link onClick={this.onClickViewTerra} className="viewcampaign"
                                                          to="/StakeDropTerra">Claim Rewards</Link></span>
                                                </div>
                                                <div className="about-campaign">
                                                    <h4>Terra (LUNA)</h4>
                                                    <p>100,000 XPRT</p>
                                                </div>
                                                <div className="stake-to">
                                                    <p><Icon viewClass="social_icon_imgg" icon="stakearrow"/>&emsp;Stake
                                                        LUNA to earn XPRT</p>
                                                    <p><Icon viewClass="social_icon_imgg"
                                                             icon="stake-time"/>&emsp;Campaign Duration: 25 Days</p>
                                                    <p><Icon viewClass="social_icon_imgg" icon="stake-flag"/>&emsp;19th
                                                        of December 2020</p>
                                                    <p><Icon viewClass="social_icon_imgg"
                                                             icon="stake-fillflag"/>&emsp;13th of January 2021</p>
                                                    <p className="total_drop_allowcated">
                                                        <span>Total drop allocated:</span><span>10.00%</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 campaign-sec">
                                            <div className="col-md-12 campaign-card">
                                                <div className="icon-div">
                                                    <img src={mat_icon} alt="atom"/><span><h6>Completed!</h6>
                                                    <Link onClick={this.onClickParticipate}
                                                          to="/StakeDropMatic">View</Link></span>
                                                </div>

                                                <div className="about-campaign">
                                                    <h4>Matic Network (MATIC)</h4>
                                                    <p>200,000 XPRT</p>
                                                </div>
                                                <div className="stake-to">
                                                    <p><Icon viewClass="social_icon_imgg" icon="stakearrow"/>&emsp;Stake
                                                        MATIC to earn XPRT</p>
                                                    <p><Icon viewClass="social_icon_imgg"
                                                             icon="stake-time"/>&emsp;Campaign Duration: 76 Days</p>
                                                    <p><Icon viewClass="social_icon_imgg" icon="stake-flag"/>&emsp; 20th
                                                        of January 2021</p>
                                                    <p><Icon viewClass="social_icon_imgg"
                                                             icon="stake-fillflag"/>&emsp;16th April 2021</p>
                                                    <p className="total_drop_allowcated">
                                                        <span>Total drop allocated:</span><span>20.00%</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 campaign-sec">
                                            <div className="col-md-12 campaign-card">
                                                <div className="icon-div">
                                                    <img src={iris_icon} alt="atom"/>
                                                    <button>Coming Soon</button>
                                                </div>
                                                <div className="about-campaign">
                                                    <h4>IRISnet (IRIS)</h4>
                                                    <p>100,000 XPRT</p>
                                                </div>
                                                <div className="stake-to">
                                                    <p><Icon viewClass="social_icon_imgg" icon="stakearrow"/>&emsp;Stake
                                                        IRIS to earn XPRT</p>
                                                    <p><Icon viewClass="social_icon_imgg"
                                                             icon="stake-time"/>&emsp;Campaign Duration:</p>
                                                    <p><Icon viewClass="social_icon_imgg" icon="stake-flag"/>&emsp;--
                                                    </p>
                                                    <p><Icon viewClass="social_icon_imgg"
                                                             icon="stake-fillflag"/>&emsp;--</p>
                                                    <p className="total_drop_allowcated">
                                                        <span>Total drop allocated:</span><span>10.00%</span></p>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-md-6 col-lg-4 campaign-sec">
                                            <div className="col-md-12 campaign-card">
                                                <div className="icon-div">
                                                    <img src={dot_icon} alt="atom"/>
                                                    <button>Coming Soon</button>
                                                </div>
                                                <div className="about-campaign">
                                                    <h4>Polkadot (DOT)</h4>
                                                    <p>200,000 XPRT</p>
                                                </div>
                                                <div className="stake-to">
                                                    <p><Icon viewClass="social_icon_imgg" icon="stakearrow"/>&emsp;Stake
                                                        DOT to earn XPRT</p>
                                                    <p><Icon viewClass="social_icon_imgg"
                                                             icon="stake-time"/>&emsp;Campaign Duration:</p>
                                                    <p><Icon viewClass="social_icon_imgg" icon="stake-flag"/>&emsp;--
                                                    </p>
                                                    <p><Icon viewClass="social_icon_imgg"
                                                             icon="stake-fillflag"/>&emsp;--</p>
                                                    <p className="total_drop_allowcated">
                                                        <span>Total drop allocated:</span><span>20.00%</span></p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6 col-lg-4 campaign-sec">
                                            <div className="col-md-12 campaign-card">
                                                <div className="icon-div">
                                                    <img src={xtz_icon} alt="atom"/>
                                                    <button>Coming Soon</button>
                                                </div>
                                                <div className="about-campaign">
                                                    <h4>Tezos (XTZ)</h4>
                                                    <p>100,000 XPRT</p>
                                                </div>
                                                <div className="stake-to">
                                                    <p><Icon viewClass="social_icon_imgg" icon="stakearrow"/>&emsp;Stake
                                                        XTZ to earn XPRT</p>
                                                    <p><Icon viewClass="social_icon_imgg"
                                                             icon="stake-time"/>&emsp;Campaign Duration:</p>
                                                    <p><Icon viewClass="social_icon_imgg" icon="stake-flag"/>&emsp;--
                                                    </p>
                                                    <p><Icon viewClass="social_icon_imgg"
                                                             icon="stake-fillflag"/>&emsp;--</p>
                                                    <p className="total_drop_allowcated">
                                                        <span>Total drop allocated:</span><span>10.00%</span></p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6 col-lg-8 campaign-sec">
                                            <div className="col-md-12 campaign-card learnmore_card">
                                                <h4 className="heading">Want to learn more?</h4>
                                                <div className="col-lg-12 about-campaign learn_more">
                                                    <a href="https://notes.persistence.one/7X4wCuP1Q9GHO53YdpiVew#"
                                                       target="_blank" rel="noopener noreferrer"
                                                       className="icon-div mechanism-btn mechanism">
                                                        <img src={cosmos_tutorial} alt="Tutorial"/>
                                                        <p>Mechanism Paper</p>

                                                    </a>
                                                    <a className="icon-div mechanism-btn"
                                                       href="https://medium.com/persistence-blog/matic-stakedrop-tutorial-using-matic-web-wallet-how-matic-holders-can-participate-in-7f0e31df3a8c"
                                                       target="_blank" rel="noopener noreferrer">
                                                        <img src={mechanism} alt="Tutorial"/>
                                                        <p>Matic Tutorial</p>
                                                    </a>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-6 tutorial-links">
                                                        <div className="link-section">
                                                            <p>Matic StakeDrop Blog [English]</p>
                                                            <a href="https://medium.com/persistence-blog/matic-stakedrop-tutorial-using-matic-web-wallet-how-matic-holders-can-participate-in-7f0e31df3a8c"
                                                               target="_blank"
                                                               rel="noopener noreferrer">Click here</a>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 tutorial-links">
                                                        <div className="link-section">
                                                            <p>Matic StakeDrop Blog [Mandarin]</p>
                                                            <a href={stakedropmandarin} target="_blank"
                                                               rel="noopener noreferrer">Check here</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="official-announce">
                                                    <a href="https://medium.com/persistence-blog/pos-token-holders-prepare-yourselves-for-persistence-stakedrop-the-grand-unveiling-d5f6ca6ddc40"
                                                       target="_blank" rel="noopener noreferrer">Official
                                                        Announcement</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="faq-section">
                        <h2 className="text-center">Frequently Asked</h2>
                        <div className="container">
                            <div className="row acc-row">
                                {
                                    questionList.map((item, index) => {
                                        return (
                                            <Accordion
                                                key={index}
                                                title={item.question}
                                                content={item.answer}
                                            />
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        );
    }
}

export default StakedropMainPage;
