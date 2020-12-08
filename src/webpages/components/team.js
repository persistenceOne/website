import React from 'react';
import language from '../translationlang';
import { connect } from 'react-redux';
import ReactGa from 'react-ga';
import pic1 from '../../assets/pics/pic1.png'
import pic2 from '../../assets/pics/pic2.png'
import pic3 from '../../assets/pics/pic3.png'
import pic4 from '../../assets/pics/pic4.png'
import pic5 from '../../assets/pics/pic5.png'
import puneet from '../../assets/pics/puneet.png'
import abhitej from '../../assets/pics/abhitej.png'
import abhinav from '../../assets/pics/abhinav.png'
import prashant from '../../assets/pics/prashant.png'
import Header from '../../webpages/components/header';

class Team extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Tab: '', isOpen: false };
        
    }

    componentDidMount() {
        ReactGa.pageview(window.location.pathname + window.location.search);
    }
   
    /**
     * Sets active tab
     */
    setActiveTab = (tab, e) => {
        this.setState({ Tab: tab });
    }
    render() {
        const { lang } = this.props;
        return (
            <>
            <Header />
            <div className="team-bglines">
                
                
                <section className="quote-section">
                    <div className="container">
                        <div className="quote-box">
                            <div className="quote-box-side">
                            <p>{language[lang].team_page_title}</p>
                            <p>{language[lang].our_cto}
                                
                        </p>
                        </div>
                           
                        </div>
                    </div>
                </section>
                <section className="team-section" id="team">
                    <div class="container">
                        <div className="profiles">
                            <div className="profile-1">
                                <div className="row">
                                    <div class="margin-t-20 col-lg-6 proileContainer">
                                        <div className="profile-picture">
                                            <img src={pic1} alt="pic1" />
                                            <div className="social-icons">
                                                <a href="https://twitter.com/Tushar307" rel="noopener noreferrer" target="_blank"><i class="mdi mdi-twitter icon" /></a>
                                                <a href="https://www.linkedin.com/in/tushar-aggarwal-2823b02b/" rel="noopener noreferrer" target="_blank"><i class="mdi mdi-linkedin icon"></i></a>
                                            </div>
                                        </div>
                                        <div className="margin-l-40 margin-left-xs">
                                            <p className="profile-name">Tushar Aggarwal</p>
                                            <p className="designation-name name-xs">CEO, Persistence</p>
                                            <p className="company-name">{language[lang].tushar_helped}
                                    </p>
                                        </div>

                                    </div>
                                    <div class="margin-t-20 col-lg-6 proileContainer">
                                        <div className="profile-picture">
                                            <img src={pic2} alt="pic2" />
                                            <div className="social-icons">
                                                <a href="https://twitter.com/deepanshutr" rel="noopener noreferrer" target="_blank"><i class="mdi mdi-twitter icon" /></a>
                                                <a href="https://www.linkedin.com/in/deepanshutr/" rel="noopener noreferrer" target="_blank"><i class="mdi mdi-linkedin icon" /></a>
                                            </div>
                                        </div>
                                        <div className="margin-l-40 margin-left-xs">
                                            <p className="profile-name">Deepanshu Tripati</p>
                                            <p className="designation-name name-xs">CTO, Persistence</p>
                                            <p className="company-name">{language[lang].part_of_three}</p>
                                        </div>

                                    </div>
                                </div>

                                <div className="developer-text">
                                    <p>{language[lang].people_in_team}</p>
                                </div>


                            </div>
                        </div>
                    </div>
                </section>
                <section className="developer-section">
                    <div className="container">
                        <div className="developers-container row">
                            <div class="profile">
                                <div className="picture">
                                    <img src={puneet} alt="puneet" />
                                </div>
                                <div className="info">
                                    <p className="title">Puneet Mahajan</p>
                                    <p>Blockchain Developer</p>
                                    <p>IIT, BOMBAY</p>
                                </div>
                            </div>
                            <div class="profile">
                                <div className="picture">
                                    <img src={abhinav} alt="puneet" />
                                </div>
                                <div className="info">
                                    <p className="title">Abhinav Kumar</p>
                                    <p>Blockchain Developer</p>
                                    <p>IIT, BOMBAY</p>
                                </div>
                            </div>
                            <div class="profile">
                                <div className="picture">
                                    <img src={prashant} alt="puneet" />
                                </div>
                                <div className="info">
                                    <p className="title">Prashant Kumar</p>
                                    <p>Blockchain Developer</p>
                                    <p>IIT, BOMBAY</p>
                                </div>
                            </div>
                            <div class="profile">
                                <div className="picture">
                                    <img src={abhitej} alt="puneet" />
                                </div>
                                <div className="info">
                                    <p className="title">Abhitej Singh</p>
                                    <p>Strategy & Community Lead</p>
                                    <p>VIT, VELLORE</p>
                                </div>
                            </div>
                            <div class="profile">
                                <div className="picture p-10">
                                    <div className="other-team"><p>+7 More </p></div>
                                </div>
                                <div className="info">
                                    <p className="title">Marketing, Design,</p>
                                    <p className="title"> DevOps, Research,</p>
                                    <p className="title">Front-end developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="adviser-section">
                    <div className="container">
                        <h3>
                        {language[lang].advisors}
                            </h3>
                        <div className="adviser-text">
                            <p> {language[lang].our_advisors}</p>
                        </div>

                        <div className="card-deck">
                            <div class="margin-t-20 col-lg-4 proileContainer">
                                <div className="col-lg-12 bg-advisors">
                                <div className="profile-picture">
                                    <img src={pic3} alt="pic1" />
                                    <div className="social-icons">
                                        <a href="https://twitter.com/mrjasonchoi" rel="noopener noreferrer" target="_blank"><i class="mdi mdi-twitter icon"></i></a>
                                        <a href="https://www.linkedin.com/in/jasonhtchoi/" rel="noopener noreferrer" target="_blank"><i class="mdi mdi-linkedin icon"></i></a>
                                    </div>
                                </div>
                                <div className="margin-left-xs">
                                    <p className="profile-name">Jason Choi</p>
                                    <p className="designation-name"> {language[lang].head_of_research} </p>
                                    <p className="company-name"> {language[lang].jason_is_host} 
                                    
                                    </p>
                                </div>
                                </div>
                            </div>
                            <div class="margin-t-20 col-lg-4 proileContainer">
                                <div className="col-lg-12 bg-advisors">
                                <div className="profile-picture">
                                    <img src={pic4} alt="pic2" />
                                    <div className="social-icons">
                                        <a href="https://twitter.com/sandeepnailwal" rel="noopener noreferrer" target="_blank"><i class="mdi mdi-twitter icon" /></a>
                                        <a href="https://www.linkedin.com/in/sandeep-nailwal-60709a33/" rel="noopener noreferrer" target="_blank"><i class="mdi mdi-linkedin icon" /></a>
                                    </div>
                                </div>
                                <div className="margin-left-xs">
                                    <p className="profile-name">Sandeep Nailwal</p>
                                    <p className="designation-name">{language[lang].co_founder_and_coo}</p>
                                    <p className="company-name">{language[lang].matic_network}
                                    </p>
                                </div>
                                </div>
                            </div>
                            <div class="margin-t-20 col-lg-4  proileContainer">
                                <div className="col-lg-12 bg-advisors">
                                <div className="profile-picture">
                                    <img src={pic5} alt="pic2" />
                                    <div className="social-icons">
                                        <a href="https://twitter.com/hu_zhiwei" rel="noopener noreferrer" target="_blank"><i class="mdi mdi-twitter icon" /></a>
                                    </div>
                                </div>
                                <div className="margin-left-xs">
                                    <p className="profile-name">Jeffrey Hu</p>
                                    <p className="designation-name">{language[lang].director_of_research}</p>
                                    <p className="company-name">{language[lang].jeffrey_is_director}
                                    </p>
                                </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </section>
               
            </div>
            </>
        );
    }


}

const mapStateToProps = state => {
    return {
        lang: state.language.language,
    }
};

export default (connect(mapStateToProps)(Team));

