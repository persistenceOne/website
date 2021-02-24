import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import logo from '../../assets/images1/logo.png'
import {Nav} from "react-bootstrap";
import Icon from "../Icon";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Tab: '',
            isOpen: false,
            activeTab: 'intenft-tab',
            productActiveTab: 'comdex-tab'
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
        });

    }

    comdexdoc(id, route) {
        if (this.props.history.location.pathname !== route) {
            this.props.history.push(`/${route}`)
            window.scrollTo(0, 0);
            const element = document.getElementById(id);
            if (element) {
                window.scrollTo(0, element.offsetTop - 150);
            }
        }
    }

    onHoverProducts(id) {
        const curretnTab = this.state.productActiveTab;
        if (document.getElementById(curretnTab).classList.contains('show')) {
            document.getElementById(curretnTab).classList.remove('show');
            document.getElementById(id).classList.add('show');
            this.setState({productActiveTab: id});
        }

    }
    onHover(id) {
        const curretnTab = this.state.activeTab;
        if (document.getElementById(curretnTab).classList.contains('show')) {
            document.getElementById(curretnTab).classList.remove('show');
            document.getElementById(id).classList.add('show');
            this.setState({activeTab: id});
        }

    }

    /**
     * Sets active tab
     */
    setActiveTab = (route) => {
        this.setState({isOpen: !this.state.isOpen});
        if (document.getElementById('nab-bar-toggle').classList.contains('collapsed')) {
            document.getElementById('nab-bar-toggle').classList.remove('collapsed');
        } else {
            document.getElementById('nab-bar-toggle').classList.add('collapsed');
        }
        if (document.getElementById('navbarCollapse').classList.contains('show')) {
            document.getElementById('navbarCollapse').classList.remove('show');
        } else {
            document.getElementById('navbarCollapse').classList.add('show');
        }

        if (route === "/vision" || route === "/roadmap") {
            document.getElementById('company-nav-dropdown').classList.add('active');
        } else if (route === "/stakedrop") {
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
                    <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky" id="nav-bar"
                         data-aos="fade-down">
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
                                id="navbarCollapse">
                                <ul className="navbar-nav ml-auto navbar-left"
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
                                                About
                                            </NavLink>
                                            <NavLink className="nav-link dropdown-item" to="/roadmap"
                                                     onClick={() => this.setActiveTab('/roadmap')}>
                                                Roadmap
                                            </NavLink>
                                        </div>

                                    </li>

                                    <li className="nav-item dropdown ecosystem">
                                        <NavLink className="nav-link dropdown-toggle" to="/products"
                                                 id="products-nav-dropdown"
                                                 onClick={() => this.setActiveTab('/products')}
                                                 role="button" data-toggle="dropdown" aria-haspopup="true"
                                                 aria-expanded="false">
                                            Products
                                        </NavLink>
                                        <div className="dropdown-menu ecosystem-dropdown"
                                             aria-labelledby="ecosystem-nav-dropdown">
                                            <div className="dropdown-content">
                                                <div className="items">
                                                    <a className="nav-link dropdown-item primary-medium-color"
                                                       onMouseOver={() => this.onHoverProducts('comdex-tab')}
                                                       href="https://twitter.com/pStakeFinance"
                                                       rel="noopener noreferrer"
                                                       target="_blank">
                                                        <div className="dropdown-image">
                                                            <Icon
                                                                viewClass="arrow-right"
                                                                icon="dropdown-square"/>
                                                        </div>
                                                        Comdex
                                                    </a>
                                                    <a className="nav-link dropdown-item primary-medium-color"
                                                       onMouseOver={() => this.onHoverProducts('audit-tab')}
                                                       href="https://audit.one/"
                                                       rel="noopener noreferrer"
                                                       target="_blank">
                                                        <div className="dropdown-image">
                                                            <Icon
                                                                viewClass="arrow-right"
                                                                icon="dropdown-square"/>
                                                        </div>
                                                        Audit.one
                                                    </a>
                                                    <a className="nav-link dropdown-item primary-medium-color"
                                                       onMouseOver={() => this.onHoverProducts('pstake-tab')}
                                                       href="https://twitter.com/pStakeFinance"
                                                       rel="noopener noreferrer"
                                                       target="_blank">
                                                        <div className="dropdown-image">
                                                            <Icon
                                                                viewClass="arrow-right"
                                                                icon="dropdown-square"/>
                                                        </div>
                                                        PStake
                                                    </a>
                                                    <a className="nav-link dropdown-item primary-medium-color"
                                                       onMouseOver={() => this.onHoverProducts('mantle-tab')}
                                                       href="https://twitter.com/AssetMantle"
                                                       rel="noopener noreferrer"
                                                       target="_blank">
                                                        <div className="dropdown-image">
                                                            <Icon
                                                                viewClass="arrow-right"
                                                                icon="dropdown-square"/>
                                                        </div>
                                                        Asset Mantle
                                                    </a>
                                                    <NavLink
                                                        className="nav-link dropdown-item stake-drop-link primary-medium-color"
                                                        onMouseOver={() => this.onHoverProducts('plend-tab')}
                                                        to="/products" onClick={() => this.setActiveTab('/products')}>
                                                        <div className="dropdown-image">
                                                            <Icon
                                                                viewClass="arrow-right"
                                                                icon="dropdown-square"/>
                                                        </div>
                                                        pLend
                                                    </NavLink>
                                                </div>
                                                <div className="items-content">
                                                    <div className="item internft show" id="comdex-tab">
                                                        <p>Decentralised commodities trading solution that facilitates
                                                            the end-to-end trade cycle including trade discovery,
                                                            settlement and financing. </p>
                                                        <a href="https://comdex.sg/" rel="noopener noreferrer"
                                                           target="_blank"
                                                           className="button">Learn More</a>
                                                    </div>
                                                    <div className="item stake-drop" id="audit-tab">
                                                        <p>Staking-as-a-Service solution for proof-of-stake networks.
                                                            For institutional assets managers looking to generate fixed
                                                            income returns from Staking-as-an-AssetClass, AUDIT.one
                                                            provides whitelabeling solutions for hardware and software.
                                                        </p>

                                                        <a href="https://audit.one/" rel="noopener noreferrer"
                                                           target="_blank"
                                                           className="button">Learn More</a>
                                                    </div>
                                                    <div className="item stake-drop" id="pstake-tab">
                                                        <p>Liquid staking application to unlock liquidity for staked
                                                            assets, allowing stakers to boost yields from their staked
                                                            assets.
                                                        </p>
                                                        <a href="https://twitter.com/pStakeFinance"
                                                           rel="noopener noreferrer"
                                                           target="_blank"
                                                           className="button">Learn More</a>
                                                    </div>
                                                    <div className="item stake-drop" id="mantle-tab">
                                                        <p>Application implementing the minimum clique of PersistenceSDK modules enabling interchain NFT definition, issuance, ownership transfer and decentralized exchange.</p>
                                                        <a href="https://twitter.com/AssetMantle"
                                                           rel="noopener noreferrer"
                                                           target="_blank"
                                                           className="button">Learn More</a>
                                                    </div>
                                                    <div className="item stake-drop" id="plend-tab">
                                                        <p>Debt Financing dApp </p>
                                                        <NavLink to='/products' className="button">Learn More</NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="nav-item"><NavLink className="nav-link primary-medium-color"
                                                                      to="/technology"
                                                                      onClick={() => this.setActiveTab('/technology')}>Technology</NavLink>
                                    </li>
                                    <li className="nav-item dropdown ecosystem">
                                        <NavLink className="nav-link dropdown-toggle" to="/ecosystem"
                                                 id="ecosystem-nav-dropdown"
                                                 onClick={() => this.setActiveTab('/ecosystem')}
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
                                                             onClick={() => this.comdexdoc("section-nft", "ecosystem")}>
                                                        <div className="dropdown-image">
                                                            <Icon
                                                                viewClass="arrow-right"
                                                                icon="dropdown-square"/>
                                                        </div>
                                                        interNFT
                                                    </NavLink>
                                                    <NavLink
                                                        className="nav-link dropdown-item stake-drop-link primary-medium-color"
                                                        onMouseOver={() => this.onHover('stake-drop-tab')}
                                                        to="/stakedrop" onClick={() => this.setActiveTab('/stakedrop')}>
                                                        <div className="dropdown-image">
                                                            <Icon
                                                                viewClass="arrow-right"
                                                                icon="dropdown-triangle"/>
                                                        </div>
                                                        Stakedrop
                                                    </NavLink>
                                                    <NavLink className="nav-link dropdown-item primary-medium-color"
                                                             onMouseOver={() => this.onHover('validators-tab')}
                                                             to="/ecosystem"
                                                             onClick={() => this.comdexdoc("section-validators", "ecosystem")}>
                                                        <div className="dropdown-image">
                                                            <Icon
                                                                viewClass="arrow-right"
                                                                icon="dropdown-polygon"/>
                                                        </div>
                                                        validators
                                                    </NavLink>
                                                    <NavLink className="nav-link dropdown-item primary-medium-color"
                                                             onMouseOver={() => this.onHover('xprt-tab')}
                                                             to="/ecosystem"
                                                             onClick={() => this.comdexdoc("section-xprt", "ecosystem")}>
                                                        <div className="dropdown-image">
                                                            <Icon
                                                                viewClass="dropdown-icon"
                                                                icon="dropdown-circle"/>
                                                        </div>
                                                        xprt token
                                                    </NavLink>
                                                </div>
                                                <div className="items-content">
                                                    <div className="item internft show" id="intenft-tab">
                                                        <p>interNFT is a working group consisting of the leading
                                                            interoperable
                                                            projects and protocols building inter-chain standards for
                                                            Non-Fungible Tokens and Metadata. </p>
                                                        <a href="https://internft.org/" rel="noopener noreferrer"
                                                           target="_blank"
                                                           className="button">Learn More</a>
                                                    </div>
                                                    <div className="item stake-drop" id="stake-drop-tab">
                                                        <p>
                                                            A community-focused initiative designed to facilitate the
                                                            wide distribution of XPRT tokens among PoS token holders
                                                            familiar with staking, thus accelerating the
                                                            decentralisation of the Persistence mainnet once live. </p>
                                                        <NavLink to='/stakedrop' className="button">Open app</NavLink>
                                                    </div>
                                                    <div className="item stake-drop" id="validators-tab">
                                                        <p>A network is only as strong as its validators. The
                                                            Persistence network is secured by leading PoS validators
                                                            running institutional-grade architecture, geographically
                                                            distributed across the world.
                                                        </p>
                                                        <NavLink to='/ecosystem' className="button">Learn More</NavLink>
                                                    </div>
                                                    <div className="item stake-drop" id="xprt-tab">
                                                        <p>The XPRT token is primarily a governance token for the
                                                            Persistence chain. Once the
                                                            Persistence mainnet is launched, token holders will be able
                                                            to stake XPRT tokens to
                                                            passively earn more XPRT. </p>
                                                        <NavLink to='/ecosystem' className="button">Learn More</NavLink>
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

export default withRouter(Header);
