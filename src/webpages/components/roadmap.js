import React from 'react';
import ReactGa from 'react-ga';
import language from '../translationlang';
import { connect } from 'react-redux';
import link from '../../assets/link.png'
import roadmapComdex from '../../assets/roadmap-comdex.svg'
import comdexIcon from '../../assets/comdex-icon.svg'
import terraIcon from '../../assets/terra-icon.svg'
import ixoIcon from '../../assets/ixo-icon.svg'
import wuIcon from '../../assets/WU-icon.svg'
import Header from '../../webpages/components/header';

class Roadmap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Tab: '',
            isOpen: false
        };

       
    }

    componentDidMount() {
        ReactGa.pageview(window.location.pathname + window.location.search);
        document.body.classList = "";
       
        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth() + 1;
        var quarter = (Math.ceil(month / 3))
        const element = document.getElementById("timeline-" + year + "-" + quarter);
        window.scrollTo(0, element.offsetTop);
        document.body.classList = "";
        // if(element){
        //     document.getElementById("timeline-"+year+"-"+quarter).classList.add('active');
        // }
        
    }

    render() {
        const { lang } = this.props;
        return (
            <div>
                <Header />
                
              
                <section className="roadmap-section">
                    <div className="container">

                        <div className="col-md-12">
                          

                            <div className="row">
                                <div className="col-md-4">
                                    <div className="row">
                                        <h3 className="roadmap-head">{language[lang].project_roadmap_milestones}</h3>
                                    </div>
                                </div>
                                <div className="col-md-8">

                                    <div className="timeline-section" id="timeline-2019-2">
                                        <div className="year-section"><span className="year-quarterName">Q2 2019</span></div>
                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <h2>&nbsp;</h2>
                                                </div>
                                            </div>
                                            <span className="diamond"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <h5>{language[lang].persistence_established}</h5>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right"> <img className="icon-bg comdex" src={roadmapComdex} alt="comdex" /></div>
                                                </div>
                                            </div>
                                            <span className="tick-complete"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p>{language[lang].comdex_onboarded}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right"> <img src={comdexIcon} alt="comdex" /></div>
                                                </div>
                                            </div>
                                            <span className="tick-complete"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p>{language[lang].cross_border_transaction}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="timeline-section" id="timeline-2019-3">
                                        <div className="year-section"><span className="year-quarterName">Q3 2019</span></div>
                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <h2>&nbsp;</h2>
                                                </div>
                                            </div>
                                            <span className="diamond"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p>{language[lang].mvp_of_persistence}</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right"> <img src={comdexIcon} alt="comdex" /></div>
                                                </div>
                                            </div>
                                            <span className="tick-complete"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p>{language[lang].comdex_testnet_launched}</p>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right">&nbsp;</div>
                                                </div>
                                            </div>
                                            <span className="diamond"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p>{language[lang].first_set_of_validators}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right"><img className="icon-bg ixo" src={ixoIcon} alt="IXO" /></div>
                                                </div>
                                            </div>
                                            <span className="tick-complete"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p>{language[lang].partnership_with_ixo}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="timeline-section" id="timeline-2019-4">
                                        <div className="year-section"><span className="year-quarterName">Q4 2019</span></div>
                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right"> <img src={comdexIcon} alt="comdex" /></div>
                                                </div>
                                            </div>
                                            <span className="tick-complete"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <a rel="noopener noreferrer" href="https://finance.yahoo.com/news/comdex-completes-over-10m-worth-070800123.html" target="_blank"><p>{language[lang].comdex_completes}&nbsp;<img src={link} alt="url" /></p></a>
                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                    <div className="timeline-section" id="timeline-2020-1">
                                        <div className="year-section"><span className="year-quarterName">Q1 2020</span></div>
                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <h2>&nbsp;</h2>
                                                </div>
                                            </div>
                                            <span className="diamond"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p>{language[lang].out_of_stealth}</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right">&nbsp;</div>
                                                </div>
                                            </div>
                                            <span className="diamond"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p>{language[lang].top_10_pos_validator}</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="timeline-section" id="timeline-2020-2">
                                        <div className="year-section"><span className="year-quarterName">Q2 2020</span></div>
                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right">&nbsp;</div>
                                                </div>
                                            </div>
                                            <span className="diamond"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p>{language[lang].persistence_sdk_completed}</p>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right"> <img src={comdexIcon} alt="comdex" /></div>
                                                </div>
                                            </div>
                                            <span className="tick-complete"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p>{language[lang].comdex_completed}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right">&nbsp;</div>
                                                </div>
                                            </div>
                                            <span className="diamond"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <a rel="noopener noreferrer" href="https://medium.com/persistence-blog/goz-updates/home" target="_blank"><p>{language[lang].participated_in_cosmos}&nbsp;<img src={link} alt="url" /></p></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right"><img className="icon-bg terra" src={terraIcon} alt="terra" /></div>
                                                </div>
                                            </div>
                                            <span className="diamond"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <a rel="noopener noreferrer" href="https://medium.com/persistence-blog/terra-and-persistence-announce-partnership-to-drive-adoption-via-a-token-swap-and-community-677df3d0f6e0" target="_blank"><p>{language[lang].partnership_with_terra}&nbsp;<img src={link} alt="url" /></p></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="timeline-section" id="timeline-2020-3">
                                        <div className="year-section"><span className="year-quarterName">Q3 2020</span></div>

                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right"> <img className="icon-bg wu" src={wuIcon} alt="WU" /></div>
                                                </div>
                                            </div>
                                            <span className="tick-complete"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p>{language[lang].wu_integration_complete}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right">&nbsp;</div>
                                                </div>
                                            </div>
                                            <span className="diamond"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p>{language[lang].sdk_open_source}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right"> <img src={comdexIcon} alt="comdex" /></div>
                                                </div>
                                            </div>
                                            <span className="tick-complete"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p>{language[lang].incentiivized_test_launch}</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="timeline-section" id="timeline-2020-4">
                                        <div className="year-section"><span className="year-quarterName">Q4 2020</span></div>


                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right">&nbsp;</div>
                                                </div>
                                            </div>
                                            <span className="diamond-dark"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p className="dark-text">{language[lang].generation_event}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right">&nbsp;</div>
                                                </div>
                                            </div>
                                            <span className="circle-dark"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p className="dark-text">{language[lang].mainnet_launch_1}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right">&nbsp;</div>
                                                </div>
                                            </div>
                                            <span className="diamond-dark"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p className="dark-text">{language[lang].nft_module_spec}</p>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right">&nbsp;</div>
                                                </div>
                                            </div>
                                            <span className="diamond-dark"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p className="dark-text">{language[lang].integration_cosmwasm}</p>
                                                </div>
                                            </div>
                                        </div>




                                    </div>

                                    <div className="timeline-section" id="timeline-2021-1">
                                        <div className="year-section"><span className="year-quarterName">Q1 2021</span></div>
                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right">&nbsp;</div>
                                                </div>
                                            </div>
                                            <span className="diamond-dark"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p className="dark-text">{language[lang].incentivised_testnet}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right">&nbsp;</div>
                                                </div>
                                            </div>
                                            <span className="circle-dark"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p className="dark-text">{language[lang].expand_exchange_listing}</p>
                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                    <div className="timeline-section" id="timeline-2021-2">
                                        <div className="year-section"><span className="year-quarterName">Q2 2021</span></div>
                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right">&nbsp;</div>
                                                </div>
                                            </div>
                                            <span className="diamond-dark"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p className="dark-text">{language[lang].validator_set_expansion}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right">&nbsp;</div>
                                                </div>
                                            </div>
                                            <span className="diamond-dark"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p className="dark-text">{language[lang].mainnet_launch}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right">&nbsp;</div>
                                                </div>
                                            </div>
                                            <span className="diamond-dark"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p className="dark-text">{language[lang].stable_coin_integrations}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right">&nbsp;</div>
                                                </div>
                                            </div>
                                            <span className="circle-dark"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p className="dark-text">{language[lang].persistence_native_dapp}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="timeline-section" id="timeline-2021-3">
                                        <div className="year-section"><span className="year-quarterName">Q3 2021</span></div>
                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right">&nbsp;</div>
                                                </div>
                                            </div>
                                            <span className="diamond-dark"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p className="dark-text">{language[lang].sdk_modules_dev}</p>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="timeline">
                                            <div class="roadmap left">
                                                <div class="content">
                                                    <div className="text-right">&nbsp;</div>
                                                </div>
                                            </div>
                                            <span className="diamond-dark"></span>
                                            <div class="roadmap right">
                                                <div class="content">
                                                    <p className="dark-text">{language[lang].integration_with_other_pools}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }


}


const mapStateToProps = state => {
    return {
        lang: state.language.language,
    }
};

export default (connect(mapStateToProps)(Roadmap));
