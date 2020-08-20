import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown'
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
                                    <li className="nav-item active"><Link className="nav-link" to="/">Products</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/" data-target="#useCases">Use cases</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/">Validators</Link></li>
                                     <li class="nav-item dropdown">
                                    <NavDropdown title="About" id="basic-nav-dropdown">
                                        <NavDropdown.Item><Link to="team">Team</Link></NavDropdown.Item>
                                        <NavDropdown.Item href="https://medium.com/persistence-blog" rel="noopener noreferrer" target="_blank" className="nav-link-custom">Blog</NavDropdown.Item>
                                        <NavDropdown.Item><Link to="roadmap">Roadmap</Link></NavDropdown.Item>
                                    </NavDropdown>
                                        </li>
                                </ul>
                                <div className={this.state.isOpen ? "nav-button" : "nav-button"}>
                                    <ul className="nav navbar-nav navbar-left">
                                        <li>
                                            <div className="header-buttons">
                                                <a href="https://explorer.persistence.one/" className="button-explorer" rel="noopener noreferrer" target="_blank">Explorer</a>
                                                <Link className="button-app" to="content">App</Link>

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
                            <p>Persistence, as the name suggests, is a team that values long term efforts and believes in the power of
                            determination. To fulfill Persistence's Vision of bridging DeFi and Traditional Finance, we needed a team
                        with technical expertise and a deep understanding of the pain points in the Traditional Finance Industry.</p>
                            <p>
                                Our CTO, Deepanshu Tripathi has a substantial amount of experience in developing legacy finance applications.
                                Our CEO, Tushar Aggarwal has worked closely with the Financial Services Industry and believes that there are
                                three core elements that lead to the success of a project: Capital, Technology and Media. Our team strikes the
                                perfect balance between these core principles.
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
                                            <p className="company-name">Tushar helped to set up LuneX Ventures - Southeast Asia's first regulated Crypto VC fund (Crypto arm of a ’Traditional’ Singapore VC called Golden Gate Ventures). He has also written extensively on Blockchain/Crypto on Tech in Asia and was previously host of Decrypt Asia Podcast
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
                                            <p className="company-name">Part of a three-person team to create a unified payment acceptance platform. White-labeled to Reliance (invested by Facebook, etc) eventually sold to African Fintech for $9M USD. Performed world’s first ever Inter-Blockchain NFT transfer</p>
                                        </div>

                                    </div>
                                </div>

                                <div className="developer-text">
                                    <p>People in our team come from highly respected Institutions and Colleges which equips them with the right set of skills to build a project of this stature.
                                    This can be highlighted from the fact that our Blockchain Developers come from the Indian Institute of Technology, Bombay (IIT-B), which is the most prestigious
                                engineering college of India with an acceptance rate of less than 1%.</p>
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
                            Advisors
                            </h3>
                        <div className="adviser-text">
                            <p> Our Advisors are well respected and highly reputed Crypto native people who have built
                            successful projects in the past. They will provide advice on matters ranging from Branding,
                                         Positioning, Marketing to Token Management to help us move in the right direction</p>
                        </div>

                        <div className="row">
                            <div class="margin-t-20 col-lg-4 proileContainer">
                                <div className="profile-picture">
                                    <img src={pic3} alt="pic1" />
                                    <div className="social-icons">
                                        <a href="https://twitter.com/mrjasonchoi" rel="noopener noreferrer" target="_blank"><i class="mdi mdi-twitter icon"></i></a>
                                        <a href="https://www.linkedin.com/in/jasonhtchoi/" rel="noopener noreferrer" target="_blank"><i class="mdi mdi-linkedin icon"></i></a>
                                    </div>
                                </div>
                                <div className="margin-left-xs">
                                    <p className="profile-name">Jason Choi</p>
                                    <p className="designation-name"> Head of Research, Spartan Capital </p>
                                    <p className="company-name"> Jason is a host of the most popular Asian Crypto Podcast called The Blockcrunch.
                                    Jason has been and will be providing inputs on positioning of product, branding, marketing
                                    </p>
                                </div>

                            </div>
                            <div class="margin-t-20 col-lg-4 proileContainer">
                                <div className="profile-picture">
                                    <img src={pic4} alt="pic2" />
                                    <div className="social-icons">
                                        <a href="https://twitter.com/sandeepnailwal" rel="noopener noreferrer" target="_blank"><i class="mdi mdi-twitter icon" /></a>
                                        <a href="https://www.linkedin.com/in/sandeep-nailwal-60709a33/" rel="noopener noreferrer" target="_blank"><i class="mdi mdi-linkedin icon" /></a>
                                    </div>
                                </div>
                                <div className="margin-left-xs">
                                    <p className="profile-name">Sandeep Nailwal</p>
                                    <p className="designation-name">Co-founder and COO, Matic Network</p>
                                    <p className="company-name">
                                        Matic Network is a very successful project from India which was also part of the Binance
                                        Launchpad initiative. Sandeep is helping bridge connections to media and assist on token management
                                    </p>
                                </div>

                            </div>
                            <div class="margin-t-20 col-lg-4  proileContainer">
                                <div className="profile-picture">
                                    <img src={pic5} alt="pic2" />
                                    <div className="social-icons">
                                        <a href="https://twitter.com/hu_zhiwei" rel="noopener noreferrer" target="_blank"><i class="mdi mdi-twitter icon" /></a>
                                        {/* <a href="#" target="_blank"><i class="mdi mdi-linkedin icon" /></a> */}
                                    </div>
                                </div>
                                <div className="margin-left-xs">
                                    <p className="profile-name">Jeffrey Hu</p>
                                    <p className="designation-name">Director of Research, IRIS Network</p>
                                    <p className="company-name">
                                        Jeffrey is the Director of Research at IRISnet (China hub of Cosmos) and is primarily helping
                                        on giving exposure to Persistence in China as a fellow Tendermint Project
                                    </p>
                                </div>

                            </div>
                            {/* <div class="margin-t-20 col-lg-6  proileContainer">
                                <div className="profile-picture profile-xs">
                                    <div className="other-team"><p>More to Come</p></div>

                                </div>
                                <div className="margin-l-40 margin-left-xs">
                                    <p className="profile-name">See yourself here?</p>
                                    <p className="company-name">
                                        If you aligned to our mission and think you can contribute to the growth of this project, please reach out to us at hello@persistence.one
                                    </p>
                                </div>

                            </div> */}
                        </div>


                    </div>
                </section>
                <Footer />
            </div>
        );
    }


}


export default Team 
