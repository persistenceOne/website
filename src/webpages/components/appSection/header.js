import React, { Component } from 'react';
import LangDropDown from '../langDropDown';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap'
import success from '../../../assets/success.png'
import logo from '../../../assets/app-logo.svg'

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
                        <div className="container app-container">
                            <Link className="navbar-brand logo text-uppercase app-logo" to="/">
                                <img src={logo} alt="logo" /></Link>

                            <button className="navbar-toggler" onClick={this.toggleMenu} type="button">
                                <i className="mdi mdi-menu"></i>
                            </button>
                            <div className={this.state.isOpen ? "collapse navbar-collapse show" : "collapse navbar-collapse"} style={{ display: this.state.isOpen ? "inline-grid" : "" }} id="navbarCollapse">

                                <ul className="nav navbar-nav navbar-left app-nav header-info">

                                    <li>
                                        <span className="result">connected</span>
                                        <img src={success} alt="wallet" />
                                    </li>
                                    <li>
                                        <Form>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Control as="Select">
                                                    <option>0x4.....7er7d</option>
                                                    <option>0x433.....7e3r7d</option>
                                                </Form.Control>
                                            </Form.Group>

                                        </Form>
                                    </li>
                                    <li className="nav-item app-nav"><LangDropDown /></li>
                                    <li className="profile-picture">
                                        <span>P</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </React.Fragment >
        );
    }
}

export default Header;

