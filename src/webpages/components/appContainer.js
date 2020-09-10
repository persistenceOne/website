import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, Form } from 'react-bootstrap'
import logo from '../../assets/app-logo.svg'
import wallet from '../../assets/wallet.png'
import deeds from '../../assets/deeds.png'
import obl from '../../assets/obl.png'
import Firsttab from '../components/tab1'
import SecondTab from '../components/tab2'
import ThirdTab from '../components/tab3'
import invoices from '../../assets/invoices.png'
import ethereum from '../../assets/ethereum.png'
import arrowLeft from '../../assets/arrow-left.png'
import arrowRight from '../../assets/arrow-right.png'
import success from '../../assets/success.png'
import usdc from '../../assets/usdc.png'
import tether from '../../assets/tether.png'
import usdx from '../../assets/usdx.png'
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
                        <div className="container app-container">
                            <Link className="navbar-brand logo text-uppercase app-logo" to="/">
                                <img className="app-logo" src={logo} alt="logo" /></Link>
                            <ul className="nav navbar-nav navbar-left app-nav">
                                <li>

                                    <div className="header-buttons">
                                        <Link className="goto-button" to="/">
                                            Go to main website <img src={arrow} alt="go to website arrow" /></Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="tab-section">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-4">
                                <div className="wallet-container">
                                    <div className="wallet-top-section">
                                    <div className="title-section">
                                        <p>Wallet</p>
                                    </div>
                                    <div className="wallet-top-section-body">
                                    <div className="list">
                                        <p className="title"><img src={usdc} alt="wallet" /> USDC</p>
                                        <div className="list-value-section">
                                                <p className="list-value">54124.10</p>
                                                <p className="sub-item">$1.1 USD</p>
                                        </div>
                                    </div>
                                    <div className="list">
                                        <p className="title"><img src={tether} alt="wallet" /> USDT</p>
                                        <div className="list-value-section">
                                                <p className="list-value">1540.10</p>
                                                <p className="sub-item">$1.02 USD</p>
                                        </div>
                                    </div>
                                    <div className="list">
                                        <p className="title"><img src={usdx} alt="wallet" /> USDX</p>
                                        <div className="list-value-section">
                                                <p className="list-value">514400.2154</p>
                                                <p className="sub-item">$1.01 USD</p>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                    <div className="wallet-bottom-section">
                                        <div className="tabs-container">
                                    <Tabs activeKey={this.state.activeTab} onSelect={this.handleSelect}>
                                        <Tab eventKey={1} title="Invest">
                                        <Form>
                                                <Form.Group controlId="exampleForm.ControlSelect1">
                                                    <Form.Control as="Select">
                                                        <option>USDC</option>
                                                        <option>USDC</option>
                                                        <option>DAI</option>

                                                    </Form.Control>
                                                </Form.Group>
                                                <Form.Group controlId="exampleForm.ControlInput1">
                                                    <div className="label-section">
                                                    <Form.Label>Amount</Form.Label>
                                                    </div>
                                                    <Form.Control type="name" placeholder="Enter Amount" />
                                                </Form.Group>
                                                <div className="form-group-submit">
                                                <button type="submit" class="btn">INVEST</button>
                                                </div>
                                            </Form>
                                        </Tab>
                                        <Tab eventKey={2} title="Withdraw">
                                            
                                        </Tab>
                                      
                                    </Tabs>
                                    </div>
                                    </div>
                                  
                                </div>
                            </div>
                            <div className="col-lg-8 right-section">
                               <div className="header-section">       
                                    <div className="navigation-arrows">
                                        <div>
                                            <img src={arrowLeft} alt="wallet" />
                                            <img src={arrowRight} alt="wallet" />
                                        </div>
                                    </div>
                                    <div className="header-info">
                                    <span className="result">connected</span>
                                    <img src={success} alt="wallet" />
                                     <Form>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Control as="Select">
                                                <option>0x4.....7er7d</option>
                                                <option>0x433.....7e3r7d</option>

                                            </Form.Control>
                                        </Form.Group>
                                          
                                    </Form>
                                    
                                    </div>
                               </div>
                               <SecondTab />
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
