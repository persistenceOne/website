import React from 'react';
import language from '../translationlang';
import ReactGa from 'react-ga';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getStatusURL, getKavaStatusURL, getTerraStatusURL, getMaticStatusURL } from "../../constants/url";
import pstakevideo from '../../assets/PStakedrop.mp4';
import Accordion from '../components/accordion'
import Icon from '../icon';
import atom_icon from '../../assets/atom.svg';
import dot_icon from '../../assets/dot.svg';
import mat_icon from '../../assets/matic.svg';
import xtz_icon from '../../assets/xtz.svg';
import luna_icon from '../../assets/luna.svg';
import kava_icon from '../../assets/kava.svg';
import iris_icon from '../../assets/iris.svg';
import banner2 from '../../assets/banner2.svg';
import cosmos_tutorial from '../../assets/cosmos-tutorial.svg';
import mechanism from '../../assets/mechanism.svg';
import Header from '../../webpages/components/header';

class stakedrop extends React.Component {
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
    }
    onClickViewCosmos = () => {
        ReactGa.event({
            category: 'View',
            action: 'Clicked on View Cosmos'
        })
    }
    onClickViewKava = () => {
        ReactGa.event({
            category: 'View',
            action: 'Clicked on View Kava'
        })
    }
    onClickViewTerra = () => {
        ReactGa.event({
            category: 'View',
            action: 'Clicked on View Terra'
        })
    }
    componentDidMount = () => {
        ReactGa.pageview(window.location.pathname + window.location.search);
        const Statusurl = getStatusURL();
        axios.get(Statusurl).then((statusResponse) => {
            const totalDistributed = 200000 - (statusResponse.data.totalDistributed / 1000000)
            const totalCosmosStakeDropGlobalDelegation = (statusResponse.data.totalStakeDropGlobalDelegation / 1000000);
            const totalCosmosDropped = (Math.round((200000 - totalDistributed) * 100) / 100)
            this.setState({ totalDistributedInt: totalDistributed })
            this.setState({ totalCosmosStakeDropGlobalDelegation: (Math.round(totalCosmosStakeDropGlobalDelegation * 100) / 100).toLocaleString() })
            this.setState({ totalDistributed: totalDistributed.toLocaleString() })
            this.setState({ totalCosmosDropped: totalCosmosDropped })
           

            const Statusterraurl = getTerraStatusURL();
            axios.get(Statusterraurl).then((statusResponse) => {
                const totalDistributed = 100000 - (statusResponse.data.totalDistributed / 1000000)
                const totalTerraStakeDropGlobalDelegation = (statusResponse.data.totalStakeDropGlobalDelegation / 1000000);
                const totalTerraDropped = (Math.round((100000 - totalDistributed) * 100) / 100)
                this.setState({ totalDistributedInt: totalDistributed })
                this.setState({ totalTerraStakeDropGlobalDelegation: (Math.round(totalTerraStakeDropGlobalDelegation * 100) / 100).toLocaleString() })
                this.setState({ totalDistributed: totalDistributed.toLocaleString() })
                this.setState({ totalTerraDropped: totalTerraDropped })
              

                const Statuskavaurl = getKavaStatusURL();
                axios.get(Statuskavaurl).then((statusResponse) => {
                    const totalDistributed = 100000 - (statusResponse.data.totalDistributed / 1000000)
                    const totalKavaStakeDropGlobalDelegation = (statusResponse.data.totalStakeDropGlobalDelegation / 1000000);
                    const totalKavaDropped = (Math.round((100000 - totalDistributed) * 100) / 100)
                    this.setState({ totalDistributedInt: totalDistributed })
                    this.setState({ totalKavaStakeDropGlobalDelegation: (Math.round(totalKavaStakeDropGlobalDelegation * 100) / 100).toLocaleString() })
                    this.setState({ totalDistributed: totalDistributed.toLocaleString() })
                    this.setState({ totalKavaDropped: totalKavaDropped })
                  
                   
                    const Statusmaticurl = getMaticStatusURL();
                    axios.get(Statusmaticurl).then((statusResponse) => {
                    const totalDistributed = 200000 - (statusResponse.data.totalDistributed / 1000000)
                    const totalMaticStakeDropGlobalDelegation = (statusResponse.data.totalStakeDropGlobalDelegation);
                    const totalMaticDropped = (Math.round((200000 - totalDistributed) * 100) / 100)
                    this.setState({ totalDistributedInt: totalDistributed })
                    this.setState({ totalMaticStakeDropGlobalDelegation: (Math.round(totalMaticStakeDropGlobalDelegation * 100) / 100).toLocaleString() })
                    this.setState({ totalDistributed: totalDistributed.toLocaleString() })
                    this.setState({ totalMaticDropped: totalMaticDropped })
                    const totaldrop = (totalCosmosDropped + totalKavaDropped + totalTerraDropped + totalMaticDropped).toLocaleString();
                    const totalStakeDropGlobalDelegation = totalCosmosStakeDropGlobalDelegation + totalKavaStakeDropGlobalDelegation + totalTerraStakeDropGlobalDelegation + totalMaticStakeDropGlobalDelegation;
                    this.setState({ totalStakeDropGlobalDelegation: (totalStakeDropGlobalDelegation).toLocaleString() })
                    this.setState({ totaldrop: totaldrop })
                   console.log(totalCosmosStakeDropGlobalDelegation, totalKavaStakeDropGlobalDelegation, totalTerraStakeDropGlobalDelegation, totalMaticStakeDropGlobalDelegation)
                   

                })

                })



            })




        })




    }


    handleModel = () => {
        this.setState({ show: true });
    };

    render() {
        const { lang } = this.props;


        return (
            <div className="section-stake-drop">
                <Header />
                <div>

                    <section className="stakedrop-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <h1 className="stake-title">{language[lang].stake_drop_title}
                                                <p className="sub-text">{language[lang].stake_drop_sub_title_1}</p></h1>
                                            <p className="sub-title title-line">{language[lang].stake_drip_des} <span>{language[lang].stake_drop_des_1} <span><a href="https://notes.persistence.one/s/cucF-3faM" target="_blank" rel="noopener noreferrer">{language[lang].stake_drop_learn_more}</a></span></span></p>

                                        </div>
                                        <div className="col-lg-4">
                                            <video className="pmedia-element" autoPlay="autoplay" preload loop="loop" muted src={pstakevideo}>
                                                <source type="video/webm" src={pstakevideo} />
                                                <source type="video/mp4" src={pstakevideo} />
                                                <source type="video/ogg" src={pstakevideo} />
                                            </video>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 title-cards">
                                    <div className="row row-common">
                                        <div className="col-xs-6 col-md-6 col-lg-3 row-pad">

                                            <div className="col-lg-12 common-cards card-one">

                                                <p>{language[lang].total_xprt}</p>
                                                <h5>1,000,000 XPRT</h5>
                                            </div>
                                        </div>


                                        <div className="col-xs-6 col-md-6 col-lg-3 row-pad">
                                            <div className="col-lg-12 common-cards card-one">
                                                <p>{language[lang].dropped_fis}</p>
                                                <h5>{this.state.totaldrop} XPRT</h5>
                                            </div>
                                        </div>


                                        <div className="col-xs-6 col-md-6 col-lg-3 row-pad">

                                            <div className="col-lg-12 common-cards card-one">

                                                <p>{language[lang].staked_tokens}</p>
                                                <h5>{(this.state.totalStakeDropGlobalDelegation)}</h5>
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
                               
                                <div className="col-md-12">
                                    <a href="https://www.stakingrewards.com/journal/exclusive-xprt-giveaway-persistence-stakedrop-participants" target="_blank" rel="noopener noreferrer">  <img src={banner2} alt="banner" /></a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="stake-drop-campaigns">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="stakedrop-title-head">
                                        <h2 className="title">{language[lang].stake_drop_campaigns}</h2>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-lg-4 campaign-sec">
                                            <div className="col-md-12 campaign-card">
                                                <div className="icon-div">
                                                    <img src={atom_icon} alt="atom" /><span><h6>Completed!</h6>
                                                    {/* <button onClick={this.handleModel}>Participate</button> */}
                                                    <Link onClick={this.onClickViewCosmos} className="viewcampaign" to="/StakeDropCosmos" >View</Link></span>
                                                </div>
                                                <div className="about-campaign">
                                                    <h4>{language[lang].stake_drop_atom_cosmos}</h4>
                                                    <p>200,000 XPRT</p>
                                                </div>
                                                <div className="stake-to">
                                                    <p><Icon viewClass="social_icon_imgg" icon="stakearrow" />&emsp;{language[lang].stake_drop_atom}</p>
                                                    <p><Icon viewClass="social_icon_imgg" icon="stake-time" />&emsp;{language[lang].stake_drop_campaign_duration} 30 Days</p>
                                                    <p><Icon viewClass="social_icon_imgg" icon="stake-flag" />&emsp;26th of October 2020</p>
                                                    <p><Icon viewClass="social_icon_imgg" icon="stake-fillflag" />&emsp;25th of November 2020</p>
                                                    <p className="total_drop_allowcated"><span>Total drop allocated:</span><span>20.00%</span></p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6 col-lg-4 campaign-sec">
                                            <div className="col-md-12 campaign-card">
                                            <div className="icon-div">
                                                    <img src={kava_icon} alt="atom" /><span><h6>Completed!</h6>
                                                    <Link onClick={this.onClickViewKava} className="viewcampaign" to="/StakeDropKava" >View</Link></span>
                                                </div>
                                              
                                                <div className="about-campaign">
                                                    <h4>{language[lang].stake_drop_kava_labs}</h4>
                                                    <p>100,000 XPRT</p>
                                                </div>
                                                <div className="stake-to">
                                                    <p><Icon viewClass="social_icon_imgg" icon="stakearrow" />&emsp;{language[lang].stake_drop_stake_kava}</p>
                                                    <p><Icon viewClass="social_icon_imgg" icon="stake-time" />&emsp;{language[lang].stake_drop_campaign_duration} 28 Days</p>
                                                    <p><Icon viewClass="social_icon_imgg" icon="stake-flag" />&emsp;26th of November 2020</p>
                                                    <p><Icon viewClass="social_icon_imgg" icon="stake-fillflag" />&emsp;23rd of December 2020</p>
                                                    <p className="total_drop_allowcated"><span>Total drop allocated:</span><span>10.00%</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 campaign-sec">
                                            <div className="col-md-12 campaign-card">
                                                <div className="icon-div">
                                                    <img src={luna_icon} alt="atom" /><span><h6>Completed!</h6>
                                                    <Link onClick={this.onClickViewTerra} className="viewcampaign" to="/StakeDropTerra" >View</Link></span>
                                                </div>
                                                <div className="about-campaign">
                                                    <h4>{language[lang].stake_drop_luna_terra}</h4>
                                                    <p>100,000 XPRT</p>
                                                </div>
                                                <div className="stake-to">
                                                    <p><Icon viewClass="social_icon_imgg" icon="stakearrow" />&emsp;{language[lang].stake_drop_stake_luna_terra}</p>
                                                    <p><Icon viewClass="social_icon_imgg" icon="stake-time" />&emsp;{language[lang].stake_drop_campaign_duration} 25 Days</p>
                                                    <p><Icon viewClass="social_icon_imgg" icon="stake-flag" />&emsp;19th of December 2020</p>
                                                    <p><Icon viewClass="social_icon_imgg" icon="stake-fillflag" />&emsp;13th of January 2021</p>
                                                    <p className="total_drop_allowcated"><span>Total drop allocated:</span><span>10.00%</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 campaign-sec">
                                            <div className="col-md-12 campaign-card">
                                                <div className="icon-div">
                                                    <img src={mat_icon} alt="atom" />
                                                    <Link onClick={this.onClickParticipate} to="/StakeDropMatic" >{language[lang].stake_drop_participants}</Link>
                                                </div>
                                                <div className="about-campaign">
                                                    <h4>{language[lang].stake_drop_matic_network}</h4>
                                                    <p>200,000 XPRT</p>
                                                </div>
                                                <div className="stake-to">
                                                    <p><Icon viewClass="social_icon_imgg" icon="stakearrow" />&emsp;{language[lang].stake_drop_stake_matic}</p>
                                                    <p><Icon viewClass="social_icon_imgg" icon="stake-time" />&emsp;{language[lang].stake_drop_campaign_duration} 45 Days</p>
                                                    <p><Icon viewClass="social_icon_imgg" icon="stake-flag" />&emsp; 16th of January 2021</p>
                                                    <p><Icon viewClass="social_icon_imgg" icon="stake-fillflag" />&emsp;2nd of March 2021</p>
                                                    <p className="total_drop_allowcated"><span>Total drop allocated:</span><span>20.00%</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 campaign-sec">
                                            <div className="col-md-12 campaign-card">
                                                <div className="icon-div">
                                                    <img src={iris_icon} alt="atom" />
                                                    <button>Coming Soon</button>
                                                </div>
                                                <div className="about-campaign">
                                                    <h4>{language[lang].stake_drop_iris_net}</h4>
                                                    <p>100,000 XPRT</p>
                                                </div>
                                                <div className="stake-to">
                                                    <p><Icon viewClass="social_icon_imgg" icon="stakearrow" />&emsp;{language[lang].stake_drop_stake_iris_net}</p>
                                                    <p><Icon viewClass="social_icon_imgg" icon="stake-time" />&emsp;{language[lang].stake_drop_campaign_duration}</p>
                                                    <p><Icon viewClass="social_icon_imgg" icon="stake-flag" />&emsp;--</p>
                                                    <p><Icon viewClass="social_icon_imgg" icon="stake-fillflag" />&emsp;--</p>
                                                    <p className="total_drop_allowcated"><span>Total drop allocated:</span><span>10.00%</span></p>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-md-6 col-lg-4 campaign-sec">
                                            <div className="col-md-12 campaign-card">
                                                <div className="icon-div">
                                                    <img src={dot_icon} alt="atom" />
                                                    <button>Coming Soon</button>
                                                </div>
                                                <div className="about-campaign">
                                                    <h4>{language[lang].stake_drop_dot_polkadot}</h4>
                                                    <p>200,000 XPRT</p>
                                                </div>
                                                <div className="stake-to">
                                                    <p><Icon viewClass="social_icon_imgg" icon="stakearrow" />&emsp;{language[lang].stake_drop_stake_dot}</p>
                                                    <p><Icon viewClass="social_icon_imgg" icon="stake-time" />&emsp;{language[lang].stake_drop_campaign_duration}</p>
                                                    <p><Icon viewClass="social_icon_imgg" icon="stake-flag" />&emsp;--</p>
                                                    <p><Icon viewClass="social_icon_imgg" icon="stake-fillflag" />&emsp;--</p>
                                                    <p className="total_drop_allowcated"><span>Total drop allocated:</span><span>20.00%</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="col-md-6 col-lg-4 campaign-sec">
                                            <div className="col-md-12 campaign-card">
                                                <div className="icon-div">
                                                    <img src={xtz_icon} alt="atom" />
                                                    <button>Coming Soon</button>
                                                </div>
                                                <div className="about-campaign">
                                                    <h4>{language[lang].stake_drop_stake_xtx_tezos}</h4>
                                                    <p>100,000 XPRT</p>
                                                </div>
                                                <div className="stake-to">
                                                    <p><Icon viewClass="social_icon_imgg" icon="stakearrow" />&emsp;{language[lang].stake_drop_stake_xtx}</p>
                                                    <p><Icon viewClass="social_icon_imgg" icon="stake-time" />&emsp;{language[lang].stake_drop_campaign_duration}</p>
                                                    <p><Icon viewClass="social_icon_imgg" icon="stake-flag" />&emsp;--</p>
                                                    <p><Icon viewClass="social_icon_imgg" icon="stake-fillflag" />&emsp;--</p>
                                                    <p className="total_drop_allowcated"><span>Total drop allocated:</span><span>10.00%</span></p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6 col-lg-8 campaign-sec">
                                            <div className="col-md-12 campaign-card learnmore_card">
                                                <h4 className="heading">Want to learn more?</h4>
                                                <div className="col-lg-12 about-campaign learn_more">
                                                    <a href="https://notes.persistence.one/7X4wCuP1Q9GHO53YdpiVew#" target="_blank" rel="noopener noreferrer" className="icon-div mechanism-btn mechanism">
                                                        <img src={cosmos_tutorial} alt="Tutorial" />
                                                        <p>Mechanism Paper</p>

                                                    </a>
                                                    <a className="icon-div mechanism-btn" href="https://medium.com/persistence-blog/50-000-worth-of-xprt-will-be-distributed-to-matic-stakers-during-the-matic-stakedrop-beginning-97431e137133" target="_blank" rel="noopener noreferrer">
                                                        <img src={mechanism} alt="Tutorial" />
                                                        <p>Matic Tutorial</p>
                                                    </a>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-6 tutorial-links">
                                                        <div className="link-section">
                                                        <p>Matic StakeDrop Blog [English]</p>
                                                        <a href="https://medium.com/persistence-blog/50-000-worth-of-xprt-will-be-distributed-to-matic-stakers-during-the-matic-stakedrop-beginning-97431e137133" target="_blank" rel="noopener noreferrer">https://medium.com/persistence-blog/terra-luna-stakedrop-begins-december-19th-33fdb78d0686</a>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 tutorial-links">
                                                        <div className="link-section">
                                                        <p>Matic StakeDrop Blog [Mandarin]</p>
                                                        <a href="/stakedropmandarin.pdf" target="_blank" rel="noopener noreferrer">Check here</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="official-announce">
                                                    <a href="https://medium.com/persistence-blog/pos-token-holders-prepare-yourselves-for-persistence-stakedrop-the-grand-unveiling-d5f6ca6ddc40" target="_blank" rel="noopener noreferrer">Official Announcement</a>
                                                </div>

                                            </div>
                                        </div>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="faq-section">
                        <h2 className="text-center">{language[lang].stake_drop_faq}</h2>
                        <div className="container">
                            <div className="row acc-row">
                                <Accordion
                                    title={language[lang].stake_drop_faq_1}
                                    content={language[lang].stake_drop_faq_1_content}
                                />
                                <Accordion
                                    title={language[lang].stake_drop_faq_2}
                                    content={language[lang].stake_drop_faq_2_content}
                                />
                                <Accordion
                                    title={language[lang].stake_drop_faq_3}
                                    content={language[lang].stake_drop_faq_3_content}
                                />
                                <Accordion
                                    title={language[lang].stake_drop_faq_5}
                                    content={language[lang].stake_drop_faq_5_content}
                                />
                                <Accordion
                                    title={language[lang].stake_drop_faq_6}
                                    content={language[lang].stake_drop_faq_6_content}
                                />
                                <Accordion
                                    title={language[lang].stake_drop_faq_7}
                                    content={language[lang].stake_drop_faq_7_content}
                                />
                                <Accordion
                                    title={language[lang].stake_drop_faq_8}
                                    content={language[lang].stake_drop_faq_8_content}
                                />
                                <Accordion
                                    title={language[lang].stake_drop_faq_9}
                                    content={language[lang].stake_drop_faq_9_content}
                                />
                                <Accordion
                                    title={language[lang].stake_drop_faq_10}
                                    content={language[lang].stake_drop_faq_10_content}
                                />

                            </div>
                        </div>
                    </section>

                </div>
            </div>
        );
    }


}


const mapStateToProps = state => {
    return {
        lang: state.language.language,
    }
};

export default (connect(mapStateToProps)(stakedrop));
