import React from 'react';
import LangDropDown from './langDropDown';
import language from '../translationlang';
import { connect } from 'react-redux';
import Footer from '../components/footer'

import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

import NavDropdown from 'react-bootstrap/NavDropdown'

class stakedrop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Tab: '',
            isOpen: false
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
    

    render() {
        const { lang } = this.props;
        return (
            <React.Fragment>
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
                                    <li className="nav-item"><Link className="nav-link" to="/">{language[lang].products}</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/" data-target="#useCases">{language[lang].usecase}</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/">{language[lang].validators}</Link></li>
                                    {/* <li className="nav-item active"><Link className="nav-link" to="stakedrop">Stakedrop</Link></li>  */}
                                    <li class="nav-item dropdown">
                                        <NavDropdown title={language[lang].about} id="basic-nav-dropdown">
                                            <NavDropdown.Item><Link to="team">{language[lang].team}</Link></NavDropdown.Item>
                                            <NavDropdown.Item href="https://medium.com/persistence-blog" rel="noopener noreferrer" target="_blank" className="nav-link-custom">{language[lang].blog}</NavDropdown.Item>
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
                <section className="stakedrop-section">
                    <div className="container">
                        <div className="row">
                        <h1 className="stake-title">Stake dPoS tokens on the below-mentioned networks to earn $XPRT tokens at no cost and near-zero risks.</h1>
                        </div>
                    </div>
                    
                </section>
              


                <Footer />

            </div>
            </React.Fragment>
        );
    }


}


const mapStateToProps = state => {
    return {
        lang: state.language.language,
    }
};

export default (connect(mapStateToProps)(stakedrop));
