import React from 'react';
import language from '../translationlang';
import ReactGa from 'react-ga';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getStatusURL, getKavaStatusURL, getTerraStatusURL } from "../../constants/url";
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
    onClickView = () => {
        ReactGa.event({
            category: 'View',
            action: 'Clicked on View'
        })
    }
    componentDidMount = () => {
        ReactGa.pageview(window.location.pathname + window.location.search);
        console.log(window.location.pathname)
        const Statusurl = getStatusURL();
        axios.get(Statusurl).then((statusResponse) => {
            const totalDistributed = 200000 - (statusResponse.data.totalDistributed / 1000000)
            const worldTotalDelegations = (statusResponse.data.worldGlobalDelegation);
            const totalCosmosStakeDropGlobalDelegation = (statusResponse.data.totalStakeDropGlobalDelegation / 1000000);
            const worldAuditDelegations = (statusResponse.data.worldAuditDelegation);
            const totalCosmosDropped = (Math.round((200000 - totalDistributed) * 100) / 100)
            this.setState({ totalDistributedInt: totalDistributed })
            this.setState({ totalCosmosStakeDropGlobalDelegation: (Math.round(totalCosmosStakeDropGlobalDelegation * 100) / 100).toLocaleString() })
            this.setState({ globalTotalStakedInt: worldTotalDelegations })
            this.setState({ globalAuditStakedInt: worldAuditDelegations })
            this.setState({ totalDistributed: totalDistributed.toLocaleString() })
            this.setState({ totalCosmosDropped: totalCosmosDropped })
            this.setState({ globalTotalStaked: (worldTotalDelegations / 1000000).toLocaleString() })
            this.setState({ globalAuditStaked: (worldAuditDelegations / 1000000).toLocaleString() })

            const Statusterraurl = getTerraStatusURL();
            axios.get(Statusterraurl).then((statusResponse) => {
                const totalDistributed = 100000 - (statusResponse.data.totalDistributed / 1000000)
                const worldTotalDelegations = (statusResponse.data.worldGlobalDelegation);
                const totalTerraStakeDropGlobalDelegation = (statusResponse.data.totalStakeDropGlobalDelegation / 1000000);
                const worldAuditDelegations = (statusResponse.data.worldAuditDelegation);
                const totalTerraDropped = (Math.round((100000 - totalDistributed) * 100) / 100)
                this.setState({ totalDistributedInt: totalDistributed })
                this.setState({ totalTerraStakeDropGlobalDelegation: (Math.round(totalTerraStakeDropGlobalDelegation * 100) / 100).toLocaleString() })
                this.setState({ globalTotalStakedInt: worldTotalDelegations })
                this.setState({ globalAuditStakedInt: worldAuditDelegations })
                this.setState({ totalDistributed: totalDistributed.toLocaleString() })
                this.setState({ totalTerraDropped: totalTerraDropped })
                this.setState({ globalTotalStaked: (worldTotalDelegations / 1000000).toLocaleString() })
                this.setState({ globalAuditStaked: (worldAuditDelegations / 1000000).toLocaleString() })



                const Statuskavaurl = getKavaStatusURL();
                axios.get(Statuskavaurl).then((statusResponse) => {
                    const totalDistributed = 100000 - (statusResponse.data.totalDistributed / 1000000)
                    const worldTotalDelegations = (statusResponse.data.worldGlobalDelegation);
                    const totalKavaStakeDropGlobalDelegation = (statusResponse.data.totalStakeDropGlobalDelegation / 1000000);
                    const worldAuditDelegations = (statusResponse.data.worldAuditDelegation);
                    const totalKavaDropped = (Math.round((100000 - totalDistributed) * 100) / 100)
                    this.setState({ totalDistributedInt: totalDistributed })
                    this.setState({ totalKavaStakeDropGlobalDelegation: (Math.round(totalKavaStakeDropGlobalDelegation * 100) / 100).toLocaleString() })
                    this.setState({ globalTotalStakedInt: worldTotalDelegations })
                    this.setState({ globalAuditStakedInt: worldAuditDelegations })
                    this.setState({ totalDistributed: totalDistributed.toLocaleString() })
                    this.setState({ totalKavaDropped: totalKavaDropped })
                    this.setState({ globalTotalStaked: (worldTotalDelegations / 1000000).toLocaleString() })
                    this.setState({ globalAuditStaked: (worldAuditDelegations / 1000000).toLocaleString() })
                    const totaldrop = (totalCosmosDropped + totalKavaDropped + totalTerraDropped).toLocaleString();
                    const totalStakeDropGlobalDelegation = totalCosmosStakeDropGlobalDelegation + totalKavaStakeDropGlobalDelegation + totalTerraStakeDropGlobalDelegation;
                    this.setState({ totalStakeDropGlobalDelegation: (totalStakeDropGlobalDelegation).toLocaleString() })
                    this.setState({ totaldrop: totaldrop })

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
                                    <a href="https://www.stakingrewards.com/" target="_blank" rel="noopener noreferrer">  <img src={banner2} alt="banner" /></a>
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
                                                    <Link onClick={this.onClickView} className="viewcampaign" to="/StakeDropCosmos" >View</Link></span>
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
                                                    <img src={kava_icon} alt="atom" />
                                                    <Link onClick={this.onClickParticipate}  to="/StakeDropKava" >Participate</Link>
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
                                                    <img src={luna_icon} alt="atom" />
                                                    <Link onClick={this.onClickParticipate} to="/StakeDropTerra" >{language[lang].stake_drop_participants}</Link>

                                                </div>
                                                <div className="about-campaign">
                                                    <h4>{language[lang].stake_drop_luna_terra}</h4>
                                                    <p>100,000 XPRT</p>
                                                </div>
                                                <div className="stake-to">
                                                    <p><Icon viewClass="social_icon_imgg" icon="stakearrow" />&emsp;{language[lang].stake_drop_stake_luna_terra}</p>
                                                    <p><Icon viewClass="social_icon_imgg" icon="stake-time" />&emsp;{language[lang].stake_drop_campaign_duration} 25 Days</p>
                                                    <p><Icon viewClass="social_icon_imgg" icon="stake-flag" />&emsp;19th December 2020</p>
                                                    <p><Icon viewClass="social_icon_imgg" icon="stake-fillflag" />&emsp;12th January 2021</p>
                                                    <p className="total_drop_allowcated"><span>Total drop allocated:</span><span>10.00%</span></p>
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
                                                    <img src={mat_icon} alt="atom" />
                                                    <button>Coming Soon</button>
                                                </div>
                                                <div className="about-campaign">
                                                    <h4>{language[lang].stake_drop_matic_network}</h4>
                                                    <p>200,000 XPRT</p>
                                                </div>
                                                <div className="stake-to">
                                                    <p><Icon viewClass="social_icon_imgg" icon="stakearrow" />&emsp;{language[lang].stake_drop_stake_matic}</p>
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
                                                    <a className="icon-div mechanism-btn" href="https://medium.com/persistence-blog/luna-stakedrop-tutorial-using-terra-station-how-luna-holders-can-participate-in-persistences-6fba1803a67d" target="_blank" rel="noopener noreferrer">
                                                        <img src={mechanism} alt="Tutorial" />
                                                        <p>Terra Tutorial</p>
                                                    </a>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-4 tutorial-links">
                                                        <div className="link-section">
                                                        <p>English blogpost:</p>
                                                        <a href="https://medium.com/persistence-blog/terra-luna-stakedrop-begins-december-19th-33fdb78d0686" target="_blank" rel="noopener noreferrer">https://medium.com/persistence-blog/terra-luna-stakedrop-begins-december-19th-33fdb78d0686</a>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 tutorial-links">
                                                        <div className="link-section">
                                                        <p>English Tutorial:</p>
                                                        <a href="https://medium.com/persistence-blog/luna-stakedrop-tutorial-using-terra-station-how-luna-holders-can-participate-in-persistences-6fba1803a67d" target="_blank" rel="noopener noreferrer">https://medium.com/persistence-blog/luna-stakedrop-tutorial-using-terra-station-how-luna-holders-can-participate-in-persistences-6fba1803a67d</a>
                                                        </div>
                                                    </div>
                                                
            
                                                    <div className="col-lg-4 tutorial-links">
                                                        <div className="link-section">
                                                        <p>Korean blogpost:</p>
                                                        <a href="https://medium.com/persistence-blog/12%EC%9B%94-19%EC%9D%BC-terra-luna-%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%81%AC%EB%93%9C%EB%A1%AD%EC%9D%84-%EC%8B%9C%EC%9E%91%ED%95%A9%EB%8B%88%EB%8B%A4-25-000-%EC%83%81%EB%8B%B9%EC%9D%98-xprt%EA%B0%80-luna-staker-%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%BB%A4-%EB%93%A4%EC%97%90%EA%B2%8C-%EC%A7%80%EA%B8%89%EB%90%A0-%EC%98%88%EC%A0%95%EC%9E%85%EB%8B%88%EB%8B%A4-daddf55594f7" target="_blank" rel="noopener noreferrer">https://medium.com/persistence-blog/12%EC%9B%94-19%EC%9D%BC-terra-luna-%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%81%AC%EB%93%9C%EB%A1%AD%EC%9D%84-%EC%8B%9C%EC%9E%91%ED%95%A9%EB%8B%88%EB%8B%A4-25-000-%EC%83%81%EB%8B%B9%EC%9D%98-xprt%EA%B0%80-luna-staker-%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%BB%A4-%EB%93%A4%EC%97%90%EA%B2%8C-%EC%A7%80%EA%B8%89%EB%90%A0-%EC%98%88%EC%A0%95%EC%9E%85%EB%8B%88%EB%8B%A4-daddf55594f7</a>
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
