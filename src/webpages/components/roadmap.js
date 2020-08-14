import React from 'react';
import { Table } from 'react-bootstrap'
import Footer from '../components/footer'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import link from '../../assets/link.png'
import Icon from '../icon';



class Roadmap extends React.Component {
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
                                    <li className="nav-item"><a href="https://medium.com/persistence-blog" rel="noopener noreferrer" target="_blank" className="nav-link">Blog</a></li>
                                    <li className="nav-item"> <Link className="nav-link" to="team">Team</Link></li>
                                    <li className="nav-item"> <Link className="nav-link" to="roadmap">Roadmap</Link></li>
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
                <section className="roadmap-section">
                    <div className="container">
                        <div classname="text-center">
                            <h3 className="text-center roadmap-head">Project Roadmap and Milestones</h3>
                        </div>
                        <div className="row table-roadmap">
                            <Table responsive="lg" className="col-lg-12 ">
                                <tbody>
                                    <tr>
                                        <td className="right-border" rowSpan="2" align="center">Q2 2019</td>
                                        <td><p><Icon viewClass="tick" icon="tick" />Persistence Established     </p></td>
                                        <td className="align-right-text" align="right"><span className="red">PROJECT</span></td>

                                    </tr>
                                    <tr>
                                        <td><p><Icon viewClass="tick" icon="tick" />Cross-border Transaction PoC Completed</p></td>
                                        <td className="align-right-text" align="right"><span className="blue">COMDEX</span>&emsp;<span className="dark">dAPPS</span></td>
                                    </tr>
                                    <tr>
                                        <td className="right-border" align="center" rowSpan="3">Q3 2019</td>
                                        <td><p><Icon viewClass="tick" icon="tick" />MVP Completed</p></td>
                                        <td className="align-right-text" align="right"><span className="red">PERSISTENCE SDK</span></td>
                                    </tr>
                                    <tr>
                                        <td><p><Icon viewClass="tick" icon="tick" />Comdex Testnet Launched </p></td>
                                        <td className="align-right-text" align="right"><span className="blue">COMDEX</span>&emsp;<span className="dark">dAPPS</span></td>
                                    </tr>
                                    <tr>
                                        <td><p><Icon viewClass="tick" icon="tick" />First Set of Validators Onboarded</p></td>
                                        <td className="align-right-text" align="right"><span className="red">VALIDATORS</span></td>
                                    </tr>
                                    <tr>
                                        <td className="right-border" align="center">Q4 2019</td>
                                        <td className="underline"><p><Icon viewClass="tick" icon="tick" /><a href="https://finance.yahoo.com/news/comdex-completes-over-10m-worth-070800123.html" rel="noopener noreferrer" target="_blank">Comdex Completes $10 Million Worth of Trades</a>&nbsp;<img src={link} alt="logo" /></p> </td>
                                        <td className="align-right-text" align="right"><span className="blue">COMDEX</span>&emsp;<span className="dark">dAPPS</span></td>

                                    </tr>
                                    <tr>
                                        <td className="right-border" rowSpan="2" align="center">Q1 2020</td>
                                        <td><p><Icon viewClass="tick" icon="tick" />Persistence comes out of Stealth </p></td>
                                        <td className="align-right-text" align="right"><span className="red">PROJECT</span></td>

                                    </tr>
                                    <tr>
                                        <td><p><Icon viewClass="tick" icon="tick" />World’s Top 10 PoS Validators Onboarded</p></td>
                                        <td className="align-right-text" align="right"><span className="red">VALIDATORS</span></td>
                                    </tr>
                                    <tr>
                                        <td className="right-border" rowSpan="4" align="center">Q2 2020</td>
                                        <td><p><Icon viewClass="tick" icon="tick" />SDK Completed</p></td>
                                        <td className="align-right-text" align="right"><span className="red">PERSISTENCE SDK</span></td>

                                    </tr>
                                    <tr>
                                        <td><p><Icon viewClass="tick" icon="tick" />Comdex completed $30 Million Worth of Trades</p></td>
                                        <td className="align-right-text" align="right"><span className="blue">COMDEX</span>&emsp;<span className="dark">dAPPS</span></td>
                                    </tr>
                                    <tr>
                                        <td className="underline"><p><a href="https://medium.com/persistence-blog/goz-updates/home" rel="noopener noreferrer" target="_blank"><Icon viewClass="tick" icon="tick" />Participated in Cosmos Network’s Game of Zones; Won Liveness Reward</a>&nbsp;<img src={link} alt="logo" /></p></td>
                                        <td className="align-right-text" align="right"><span className="red">ECOSYSTEM</span></td>
                                    </tr>
                                    <tr>
                                        <td className="underline">
                                            <p><a href="https://medium.com/persistence-blog/terra-and-persistence-announce-partnership-to-drive-adoption-via-a-token-swap-and-community-677df3d0f6e0" rel="noopener noreferrer" target="_blank"><Icon viewClass="tick" icon="tick" />Partnership with Terra </a>&nbsp;<img src={link} alt="logo" /></p></td>
                                        <td className="align-right-text" align="right"><span className="red">ECOSYSTEM</span></td>
                                    </tr>


                                    <tr>
                                        <td className="right-border" rowSpan="3" align="center">Q3 2020</td>
                                        <td><p><Icon viewClass="tick" icon="tick" />Western Union Integration Completion </p></td>
                                        <td className="align-right-text" align="right"><span className="blue">COMDEX</span>&emsp;<span className="dark">dAPPS</span></td>

                                    </tr>
                                    <tr>
                                        <td><p><Icon viewClass="tick" icon="tick" />SDK Open-sourced</p></td>
                                        <td className="align-right-text" align="right"><span className="red">PERSISTENCE SDK</span></td>
                                    </tr>
                                    <tr>
                                        <td><p><Icon viewClass="tick" icon="tick" />Incentivized Testnet Launch</p></td>
                                        <td className="align-right-text" align="right"><span className="blue">COMDEX</span>&emsp;<span className="dark">dAPPS</span></td>
                                    </tr>


                                    <tr>
                                        <td className="right-border" rowSpan="4" align="center">Q4 2020</td>
                                        <td><p><Icon viewClass="tick" icon="untick" />Token Generation Event</p></td>
                                        <td className="align-right-text" align="right"><span className="dark">TOKEN</span></td>

                                    </tr>
                                    <tr>
                                        <td><p><Icon viewClass="tick" icon="untick" />Mainnet Launch </p></td>
                                        <td className="align-right-text" align="right"><span className="blue">COMDEX</span>&emsp;<span className="dark">dAPPS</span></td>
                                    </tr>
                                    <tr>
                                        <td><p><Icon viewClass="tick" icon="untick" />NFT Module Spec Implementation with multiple Chains</p></td>
                                        <td className="align-right-text" align="right"><span className="red">PERSISTENCE SDK</span></td>
                                    </tr>
                                    <tr>
                                        <td><p><Icon viewClass="tick" icon="untick" />Integration with CosmWasm</p></td>
                                        <td className="align-right-text" align="right"><span className="red">PERSISTENCE SDK</span></td>
                                    </tr>

                                    <tr>
                                        <td className="right-border" rowSpan="2" align="center">Q1 2021</td>
                                        <td><p><Icon viewClass="tick" icon="untick" />Incentivised Testnet Launch</p></td>
                                        <td className="align-right-text" align="right"><span className="red">PERSISTENCE CHAIN</span></td>

                                    </tr>
                                    <tr>
                                        <td><p><Icon viewClass="tick" icon="untick" />Expand Exchange Listings; Wallet and Block Explorer Integration</p> </td>
                                        <td className="align-right-text" align="right"><span className="dark">TOKEN</span></td>
                                    </tr>

                                    <tr>
                                        <td className="right-border" rowSpan="4" align="center">Q2 2021</td>
                                        <td><p><Icon viewClass="tick" icon="untick" />Validator Set Expansion</p></td>
                                        <td className="align-right-text" align="right"><span className="red">VALIDATORS</span></td>

                                    </tr>
                                    <tr>
                                        <td><p><Icon viewClass="tick" icon="untick" />Mainnet Launch</p></td>
                                        <td className="align-right-text" align="right"><span className="red">PERSISTENCE CHAIN</span></td>
                                    </tr>
                                    <tr>
                                        <td><p><Icon viewClass="tick" icon="untick" />Stablecoin Integrations </p></td>
                                        <td className="align-right-text" align="right"><span className="red">ECOSYSTEM</span></td>
                                    </tr>
                                    <tr>
                                        <td><p><Icon viewClass="tick" icon="untick" />Persistence Native dApp Launch</p></td>
                                        <td className="align-right-text" align="right"><span className="dark">dAPPS</span></td>
                                    </tr>
                                    <tr>
                                        <td className="right-border" rowSpan="2" align="center">Q3 2021 </td>
                                        <td><p><Icon viewClass="tick" icon="untick" />Additional SDK Modules Development</p></td>
                                        <td className="align-right-text" align="right"><span className="red">PERSISTENCE SDK</span></td>

                                    </tr>
                                    <tr>
                                        <td><p><Icon viewClass="tick" icon="untick" />Integration with other Protocols and Chains through Interchain Communication Protocols</p></td>
                                        <td className="align-right-text" align="right"><span className="red">PERSISTENCE CHAIN</span></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </section>


                <Footer />
            </div>
        );
    }


}


export default Roadmap 
