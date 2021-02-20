import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../assets/images1/logo.png'
import { Nav, Button } from "react-bootstrap";
import Circle from "../../assets/images1/shapes/circle.svg"
import Rectangle from "../../assets/images1/shapes/Rectangle.svg"
import Polygon from "../../assets/images1/shapes/polygon.svg"
import Triangle from "../../assets/images1/shapes/triangle.svg"
import internft_logo from "../../assets/images1/internft/internft.svg"

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Tab: '',
            isOpen: false,
            activeTab: 'intenft-tab'
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu = () => {
        this.setState({isOpen: !this.state.isOpen});
        if (document.getElementById('nab-bar-toggle').classList.contains('collapsed')) {
            document.getElementById('nab-bar-toggle').classList.remove('collapsed');
        } else {
            document.getElementById('nab-bar-toggle').classList.add('collapsed');
        }

    };

    componentDidMount() {
        document.addEventListener('scroll', () => {
            var scrolled = document.scrollingElement.scrollTop;
            if (scrolled > 100) {
                document.getElementById('nav-bar').classList.add('scrolled');
                document.getElementById('nav-bar').classList.remove('not-scrolled');
            } else {
                document.getElementById('nav-bar').classList.add('not-scrolled');
                document.getElementById('nav-bar').classList.remove('scrolled');
            }
            if (scrolled) {
                document.getElementById('nav-bar').classList.add('bg-active');
                document.getElementById('nav-bar').classList.remove('bg-not-active');
            } else {
                document.getElementById('nav-bar').classList.add('bg-not-active');
                document.getElementById('nav-bar').classList.remove('bg-active');
            }
            var scrolledBottom = document.scrollingElement.scrollBottom;
            if (scrolledBottom < 5) {
                alert('hi')
            }
        });

    }

    onHover(id) {
        const curretnTab = this.state.activeTab;
        if (document.getElementById(curretnTab).classList.contains('show')) {
            document.getElementById(curretnTab).classList.remove('show');
            document.getElementById(id).classList.add('show');
            this.setState({activeTab: id});
        }
        return function () {

        }
    }

    /**
     * Sets active tab
     */
    setActiveTab = (route) => {
        if (route === "/vision" || route === "/roadmap") {
            document.getElementById('company-nav-dropdown').classList.add('active');
        } else if (route === "/stakedrop") {
            console.log("entred if", document.getElementById('ecosystem-nav-dropdown'))
            document.getElementById('ecosystem-nav-dropdown').classList.add('active');
        } else {
            if (document.getElementById('company-nav-dropdown').classList.contains('active')) {
                document.getElementById('company-nav-dropdown').classList.remove('active');
            } else if (document.getElementById('ecosystem-nav-dropdown').classList.contains('active')) {
                document.getElementById('ecosystem-nav-dropdown').classList.remove('active');
            }
        }
    };

    render() {

        return (
            <React.Fragment>
                <div id="is-sticky">
                    <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky" id="nav-bar">
                        <div className="container">
                            <Nav.Link className="navbar-brand logo text-uppercase" href="/">
                                <img src={logo} alt="logo"/></Nav.Link>
                            <button className="navbar-toggler x collapsed" id="nab-bar-toggle" type="button"
                                    data-toggle="collapse" onClick={this.toggleMenu}
                                    data-target="#navbarsExample05" aria-controls="navbarsExample05"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <div
                                className={this.state.isOpen ? "collapse navbar-collapse show" : "collapse navbar-collapse"}
                                style={{display: this.state.isOpen ? "inline-grid" : ""}} id="navbarCollapse">
                                <ul className={this.state.isOpen ? "navbar-nav navbar-left" : "navbar-nav ml-auto navbar-left"}
                                    id="mySidenav">
                                    <li className="nav-item dropdown company">
                                        <NavLink className="nav-link dropdown-toggle" to="/vision"
                                                 id="company-nav-dropdown"
                                                 role="button" data-toggle="dropdown" aria-haspopup="true"
                                                 aria-expanded="false">
                                            Company
                                        </NavLink>
                                        <div className="dropdown-menu company-menu"
                                             aria-labelledby="company-nav-dropdown">
                                            <NavLink className="nav-link dropdown-item" to="/vision"
                                                     onClick={() => this.setActiveTab('/vision')}>
                                                <div className="dropdown-image">
                                                    <img src={Rectangle} alt="Rectangle"/>
                                                </div>
                                                About
                                            </NavLink>
                                            <NavLink className="nav-link dropdown-item" to="/roadmap"
                                                     onClick={() => this.setActiveTab('/roadmap')}>
                                                <div className="dropdown-image">
                                                    <img src={Triangle} alt="Triangle"/>
                                                </div>
                                                Roadmap
                                            </NavLink>
                                        </div>

                                    </li>
                                    {/*<li className="nav-item active"><Nav.Link className="nav-link primary-medium-color" href="/company">Company</Nav.Link></li>*/}
                                    <li className="nav-item"><NavLink className="nav-link primary-medium-color"
                                                                      to="/products"
                                                                      onClick={() => this.setActiveTab('/products')}>Products</NavLink>
                                    </li>
                                    {/*<li className="nav-item active"><Nav.Link className="nav-link primary-medium-color" href="/ecosystem">Ecosystems</Nav.Link></li>*/}

                                    <li className="nav-item"><NavLink className="nav-link primary-medium-color"
                                                                      to="/technology"
                                                                      onClick={() => this.setActiveTab('/technology')}>Technology</NavLink>
                                    </li>
                                    <li className="nav-item dropdown ecosystem">
                                        <NavLink className="nav-link dropdown-toggle" to="/ecosystem"
                                                 id="ecosystem-nav-dropdown"
                                                 role="button" data-toggle="dropdown" aria-haspopup="true"
                                                 aria-expanded="false">
                                            Ecosystems
                                        </NavLink>
                                        <div className="dropdown-menu ecosystem-dropdown"
                                             aria-labelledby="ecosystem-nav-dropdown">
                                            <div className="dropdown-content">
                                                <div className="items">
                                                    <NavLink className="nav-link dropdown-item primary-medium-color"
                                                             onMouseOver={() => this.onHover('intenft-tab')}
                                                             to="/ecosystem"
                                                             onClick={() => this.setActiveTab('/ecosystem')}>
                                                        <div className="dropdown-image">
                                                            <img src={Rectangle} alt="Rectangle"/>
                                                        </div>
                                                        inter NFT
                                                    </NavLink>
                                                    <NavLink
                                                        className="nav-link dropdown-item stake-drop-link primary-medium-color"
                                                        onMouseOver={() => this.onHover('stake-drop-tab')}
                                                        to="/stakedrop" onClick={() => this.setActiveTab('/stakedrop')}>
                                                        <div className="dropdown-image">
                                                            <img src={Triangle} alt="Triangle"/>
                                                        </div>
                                                        Stakedrop
                                                    </NavLink>
                                                    <NavLink className="nav-link dropdown-item primary-medium-color"
                                                             onMouseOver={() => this.onHover('validators-tab')}
                                                             to="/ecosystem"
                                                             onClick={() => this.setActiveTab('/ecosystem')}>
                                                        <div className="dropdown-image">
                                                            <img src={Polygon} alt="Polygon"/>
                                                        </div>
                                                        validators
                                                    </NavLink>
                                                    <NavLink className="nav-link dropdown-item primary-medium-color"
                                                             onMouseOver={() => this.onHover('xprt-tab')}
                                                             to="/ecosystem"
                                                             onClick={() => this.setActiveTab('/ecosystem')}>
                                                        <div className="dropdown-image">
                                                            <img src={Circle} alt="Circle"/>
                                                        </div>
                                                        xprt token
                                                    </NavLink>
                                                </div>
                                                <div className="items-content">
                                                    <div className="item internft show" id="intenft-tab">
                                                        <img src={internft_logo} alt="internft_logo"/>
                                                        <p>interNFT is a working group consisting of the leading
                                                            interoperable
                                                            projects and protocols building inter-chain standards for
                                                            Non-Fungible Tokens and Metadata. </p>
                                                        <Button>Learn More</Button>
                                                    </div>
                                                    <div className="item stake-drop" id="stake-drop-tab">
                                                        <img src={internft_logo} alt="internft_logo"/>
                                                        <p>
                                                            projects and protocols building inter-chain standards for
                                                            Non-Fungible Tokens and Metadata. </p>
                                                        <Button>Learn More stakedrop</Button>
                                                    </div>
                                                    <div className="item stake-drop" id="validators-tab">
                                                        <img src={internft_logo} alt="internft_logo"/>
                                                        <p>interNFT is a working group consisting of the leading
                                                            interoperable
                                                            projects and protocols building inter-chain standards for
                                                        </p>
                                                        <Button>Learn More validators</Button>
                                                    </div>
                                                    <div className="item stake-drop" id="xprt-tab">
                                                        <img src={internft_logo} alt="internft_logo"/>
                                                        <p>interNFT is a working group consisting of the leading
                                                            interoperable
                                                            Non-Fungible Tokens and Metadata. </p>
                                                        <Button>Learn More xprt</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;
