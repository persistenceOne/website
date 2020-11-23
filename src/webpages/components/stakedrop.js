import React from 'react';
import language from '../translationlang';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getKavaStatusURL } from "../../constants/url";
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
        };
    }
    componentDidMount = () => {
       
        const Statusurl = getKavaStatusURL();
        axios.get(Statusurl).then((statusResponse) => {
            const totalDistributed = 100000 -(statusResponse.data.totalDistributed / 1000000) 
            const worldTotalDelegations = (statusResponse.data.worldGlobalDelegation);
            const totalStakeDropGlobalDelegation = (statusResponse.data.totalStakeDropGlobalDelegation / 1000000);
            const worldAuditDelegations = (statusResponse.data.worldAuditDelegation);
            this.setState({totalDistributedInt: totalDistributed})  
            this.setState({totalStakeDropGlobalDelegation: (Math.round(totalStakeDropGlobalDelegation * 100) / 100).toLocaleString()})
            this.setState({globalTotalStakedInt: worldTotalDelegations}) 
            this.setState({globalAuditStakedInt: worldAuditDelegations }) 
            this.setState({totalDistributed: totalDistributed.toLocaleString()})
            this.setState({totalDropped: (Math.round((200000 - totalDistributed) * 100) / 100).toLocaleString()})
            this.setState({globalTotalStaked: (worldTotalDelegations / 1000000).toLocaleString()})
            this.setState({globalAuditStaked: (worldAuditDelegations /1000000).toLocaleString()})
            

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
                                                <h5>{this.state.totalDropped} XPRT</h5>
                                            </div>
                                        </div>


                                        <div className="col-xs-6 col-md-6 col-lg-3 row-pad">

                                            <div className="col-lg-12 common-cards card-one">

                                                <p>{language[lang].staked_tokens}</p>
                                                <h5>{this.state.totalStakeDropGlobalDelegation} KAVA</h5>
                                            </div>
                                        </div>
                                    </div>
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
                                                    <img src={atom_icon} alt="atom" />
                                                    {/* <button onClick={this.handleModel}>Participate</button> */}
                                                  <Link to="/StakeDropCosmos" >{language[lang].stake_drop_participants}</Link>
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
                                                    <Link to="/StakeDropKava" >{language[lang].stake_drop_participants}</Link>
                                                    </div>
                                                <div className="about-campaign">
                                                    <h4>{language[lang].stake_drop_kava_labs}</h4>
                                                    <p>100,000 XPRT</p>
                                                </div>
                                                <div className="stake-to">
                                                    <p><Icon viewClass="social_icon_imgg" icon="stakearrow" />&emsp;{language[lang].stake_drop_stake_kava}</p>
                                                    <p><Icon viewClass="social_icon_imgg" icon="stake-time" />&emsp;{language[lang].stake_drop_campaign_duration}</p>
                                                    <p><Icon viewClass="social_icon_imgg" icon="stake-flag" />&emsp;26th of November 2020</p>
                                                    <p><Icon viewClass="social_icon_imgg" icon="stake-fillflag" />&emsp;16th of December 2020</p>
                                                    <p className="total_drop_allowcated"><span>Total drop allocated:</span><span>10.00%</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 campaign-sec">
                                            <div className="col-md-12 campaign-card">
                                                <div className="icon-div">
                                                    <img src={luna_icon} alt="atom" />
                                                    <button>Coming Soon</button>
                                                     </div>
                                                <div className="about-campaign">
                                                    <h4>{language[lang].stake_drop_luna_terra}</h4>
                                                    <p>100,000 XPRT</p>
                                                </div>
                                                <div className="stake-to">
                                                    <p><Icon viewClass="social_icon_imgg" icon="stakearrow" />&emsp;{language[lang].stake_drop_stake_luna_terra}</p>
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
                                                    <a href="stakedropinfo.pdf" target="_blank" className="icon-div mechanism-btn mechanism">
                                                    <img src={cosmos_tutorial} alt="Lunie" />
                                                    <p>Mechanism Paper</p>
                                                    
                                                   </a>
                                                   <a className="icon-div mechanism-btn" href="https://persistenceone.medium.com/kava-stakedrop-tutorial-how-kava-holders-can-participate-in-persistences-stakedrop-f7062a7688e4" target="_blank" rel="noopener noreferrer">
                                                   <img src={mechanism} alt="Lunie" />
                                                   <p>Kava Tutorial</p>
                                                   </a>
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
