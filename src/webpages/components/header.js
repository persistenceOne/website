import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ScrollspyNav from "react-scrollspy-nav";
import logo from '../../assets/logo.png'
import NavDropdown from 'react-bootstrap/NavDropdown'
import LangDropDown from './langDropDown';
import language from '../translationlang';



class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { Tab: '', isOpen: false };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu = () => {
        this.setState({ isOpen: !this.state.isOpen });
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
            <React.Fragment>
                <div id="is-sticky">
                    <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky" id="nav-bar">
                        <div className="container">
                            <Link className="navbar-brand logo text-uppercase" to="/">
                                <img src={logo} alt="logo" /></Link>

                            <button className="navbar-toggler" onClick={this.toggleMenu} type="button">
                                <i className="mdi mdi-menu"></i>
                            </button>
                            <div className={this.state.isOpen ? "collapse navbar-collapse show" : "collapse navbar-collapse"} style={{ display: this.state.isOpen ? "inline-grid" : "" }} id="navbarCollapse">

                                <ScrollspyNav
                                    scrollTargetIds={["products", "useCases", "validators"]}
                                    activeNavClass="active"
                                    scrollDuration="800"
                                    headerBackground="true"
                                    className={this.state.isOpen ? "navbar-nav ml-0 float-left" : "navbar-nav navbar-center"} >
                                    <ul className={this.state.isOpen ? "navbar-nav navbar-left" : "navbar-nav ml-auto navbar-left"} id="mySidenav">
                                        <li className="nav-item active"><a href="#products" className="nav-link">{language[lang].products}</a></li>
                                        <li className="nav-item"><a href="#useCases" className="nav-link">{language[lang].usecase}</a></li>
                                        <li className="nav-item"><a href="#validators" className="nav-link">{language[lang].validators}</a></li>
                                         
                                    </ul>

                                </ScrollspyNav>
                                <ul className="navbar-nav navbar-left team-link">
                                {/* <li className="nav-item"><Link className="nav-link" to="stakedrop">Stakedrop</Link></li>  */}
                                   
                                    <li className="nav-item dropdown">
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
            </React.Fragment >
        );
    }
}
const mapStateToProps = state => {
    return {
        lang: state.language.language,
    }
};

export default (connect(mapStateToProps)(Header));


