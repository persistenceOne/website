import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ScrollspyNav from "react-scrollspy-nav";
import logo from '../../assets/logo.png'
// import NavDropdown from 'react-bootstrap/NavDropdown'

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
                                        <li className="nav-item active"><a href="#products" className="nav-link">Products</a></li>
                                        <li className="nav-item"><a href="#useCases" className="nav-link">Use cases</a></li>
                                        <li className="nav-item"><a href="#validators" className="nav-link">Validators</a></li>


                                    </ul>

                                </ScrollspyNav>
                                <ul className="navbar-nav navbar-left team-link">
                                    <li className="nav-item"><a href="https://medium.com/persistence-blog" rel="noopener noreferrer" target="_blank" className="nav-link">Blog</a></li>
                                    <li className="nav-item"> <Link className="nav-link" to="team">Team</Link></li>
                                    <li className="nav-item"> <Link className="nav-link" to="roadmap">Roadmap</Link></li>
                                    {/* <li class="nav-item dropdown">
                                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
        </li> */}
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
            </React.Fragment >
        );
    }
}

export default Header;


