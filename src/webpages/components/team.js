import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown'
import LangDropDown from './langDropDown';
import language from '../translationlang';
import { connect } from 'react-redux';
import quotes1 from '../../assets/quotes1.png'
import quotes2 from '../../assets/quotes2.png'
import Footer from '../components/footer'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import pic1 from '../../assets/pics/pic1.png'
import pic2 from '../../assets/pics/pic2.png'
import pic3 from '../../assets/pics/pic3.png'
import pic4 from '../../assets/pics/pic4.png'
import pic5 from '../../assets/pics/pic5.png'
import puneet from '../../assets/pics/puneet.png'
import abhitej from '../../assets/pics/abhitej.png'
import abhinav from '../../assets/pics/abhinav.png'
import prashant from '../../assets/pics/prashant.png'


class Team extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Tab: '', isOpen: false };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
    componentDidMount() {
        document.body.classList = "";
        document.getElementById('nav-bar-team').classList.add('navbar-white');
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
            <div>
                <div id="sdis-sticky">
                    <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky" id="nav-bar-team">
                        <div className="container">
                            <Link className="navbar-brand logo text-uppercase" to="/">
                                <img src={logo} alt="logo" /></Link>

                            <button className="navbar-toggler" onClick={this.toggleMenu} type="button">
                                <i className="mdi mdi-menu"></i>
                            </button>
                            <div className={this.state.isOpen ? "collapse navbar-collapse show" : "collapse navbar-collapse"} style={{ display: this.state.isOpen ? "inline-grid" : "" }} id="navbarCollapse">

                                <ul className={this.state.isOpen ? "navbar-nav navbar-left" : "navbar-nav ml-auto navbar-left"} id="mySidenav">
                                <li className="nav-item active"><Link className="nav-link" to="/">{language[lang].products}</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/" data-target="#useCases">{language[lang].usecase}</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/">{language[lang].validators}</Link></li>
                                     <li class="nav-item dropdown">
                                    <NavDropdown title={language[lang].about} id="basic-nav-dropdown">
                                        <NavDropdown.Item><Link to="team">{language[lang].team}</Link></NavDropdown.Item>
                                        <NavDropdown.Item href="https://medium.com/persistence-blog" rel="noopener noreferrer" target="_blank" className="nav-link-custom">Blog</NavDropdown.Item>
                                        <NavDropdown.Item><Link to="roadmap">{language[lang].roadmap}</Link></NavDropdown.Item>
                                    </NavDropdown>
                                        </li>
                                        <li className="nav-item"><LangDropDown /></li>
                                </ul>
                                <div className={this.state.isOpen ? "nav-button" : "nav-button"}>
                                    <ul className="nav navbar-nav navbar-left">
                                        <li>
                                            <div className="header-buttons">
                                                <a href="https://explorer.persistence.one/" className="button-explorer" rel="noopener noreferrer" target="_blank">{language[lang].explorer}</a>
                                                <Link className="button-app" to="app">{language[lang].app}</Link>

                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <section className="quote-section">
                    <div className="container">
                        <div className="quote-box">
                            <div className="quote-intial"><img src={quotes1} alt="quote1" /></div>
                            <p>{language[lang].team_page_title}</p>
                            <p>{language[lang].our_cto}
                                
                        </p>
                            <div className="quote-final"><img src={quotes2} alt="quote2" /></div>
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
                <Footer />
            </div>
        );
    }


}

const mapStateToProps = state => {
    return {
        lang: state.language.language,
    }
};

export default (connect(mapStateToProps)(Team));

