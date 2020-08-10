import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, Form } from 'react-bootstrap'
import logo from '../../assets/PApp.svg'
import wallet from '../../assets/wallet.png'
import deeds from '../../assets/deeds.png'
import obl from '../../assets/obl.png'
import Firsttab from '../components/tab1'
import SecondTab from '../components/tab2'
import ThirdTab from '../components/tab3'
import invoices from '../../assets/invoices.png'
import ethereum from '../../assets/ethereum.png'
import arrow from '../../assets/arrow1.png'
class AppContainer extends React.Component {
    constructor(props) {
        super();
        this.state = {
            // Takes active tab from props if it is defined there
            activeTab: props.activeTab || 1
        };

        // Bind the handleSelect function already here (not in the render function)
        this.handleSelect = this.handleSelect.bind(this);
    }
    render() {

        return (
            <div className="app-body">
                <div>
                    <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky" id="nav-bar">
                        <div className="container">
                            <Link className="navbar-brand logo text-uppercase" to="/">
                                <img src={logo} alt="logo" /></Link>
                            <ul className="nav navbar-nav navbar-left">
                                <li>

                                    <div className="header-buttons">
                                        <Link className="button-explorer" to="/">
                                            Go to main website <img src={arrow} alt="go to website arrow" /></Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="tabSection">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="tabs-container">
                                    <Tabs activeKey={this.state.activeTab} onSelect={this.handleSelect}>
                                        <Tab eventKey={1} title="Asset Tokenization">
                                            <Firsttab />
                                        </Tab>
                                        <Tab eventKey={2} title="Exchange">
                                            <SecondTab />
                                        </Tab>
                                        <Tab eventKey={5} title="Lending">
                                            <ThirdTab />
                                        </Tab>
                                    </Tabs>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="wallet-container">
                                    <div className="title-section">
                                        <p><img src={wallet} alt="wallet" /> Wallet</p>
                                    </div>
                                    <div className="wallet-balance">
                                        <p>$00.00</p>
                                        <div>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>You Recive</Form.Label>
                                                <Form.Control as="Select">
                                                    <option>USDC</option>
                                                    <option>USDT</option>
                                                    <option>DAI</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className="wallet-deeds">
                                        <p>  <img src={deeds} alt="deeds" />0</p><p>Deeds</p>
                                    </div>
                                    <div className="wallet-invoice">
                                        <p>  <img src={obl} alt="invoice" />0</p><p>OBL</p>
                                    </div>
                                    <div className="wallet-obl">
                                        <p>  <img src={invoices} alt="OBL" />0</p><p>Invoices</p>
                                    </div>
                                    <div className="wallet-obl">
                                        <p>  <img src={ethereum} alt="OBL" />0</p> <div>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Control as="Select">
                                                    <option>ETH</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
    handleSelect(selectedTab) {

        this.setState({
            activeTab: selectedTab
        });
    }
}


export default AppContainer 
