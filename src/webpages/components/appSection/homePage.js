import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import comdexIcon from '../../../assets/comdex-icon.png';
import WalletSection from '../../components/appSection/walletSection';
import Footer from '../../components/appSection/footer';
import Header from '../../components/appSection/header';
import arrow6 from '../../../assets/arrow6.png';

class homePage extends React.Component {
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
                <Header />
                <div className="tab-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <WalletSection />
                            </div>
                            <div className="col-lg-8 right-section">
                                <div className="right-section-body">
                                    <p className="info">Persistence bridges DeFi and Traditional Finance by facilitating borrowing of Cryptoassets using Real-world assets as collateral.</p>
                                    <div className="row poolCards">
                                        <div className="col-lg-6">
                                            <Card>
                                                <Card.Body>
                                                    <div className="icon-part">
                                                        <img className="" src={comdexIcon} alt="logo" />
                                                    </div>
                                                    <div className="content-part">
                                                        <h4>COMDEX Pool - 01 </h4>
                                                        <p>XYZ Firm, Singapore</p>
                                                        <p> Low risk (3.56% Interest Rate)</p>
                                                    </div>
                                                </Card.Body>
                                                <div className="card-footer">
                                                    <p>Invest</p>
                                                    <div>
                                                        <Link className="button-app" to="pool"><img className="" src={arrow6} alt="logo" /></Link>
                                                    </div>
                                                </div>
                                            </Card>
                                        </div>
                                        <div className="col-lg-6">
                                            <Card>
                                                <Card.Body>
                                                    <div className="icon-part">
                                                        <img className="" src={comdexIcon} alt="logo" />
                                                    </div>
                                                    <div className="content-part">
                                                        <h4>COMDEX Pool - 02 </h4>
                                                        <p>XYZ Firm, Singapore</p>
                                                        <p> Low risk (3.56% Interest Rate)</p>
                                                    </div>
                                                </Card.Body>
                                                <div className="card-footer">
                                                    <p>Invest</p>
                                                    <div>
                                                        <Link className="button-app" to="pool"><img className="" src={arrow6} alt="logo" /></Link>
                                                    </div>
                                                </div>
                                            </Card>
                                        </div>
                                        <div className="col-lg-6">
                                            <Card>
                                                <Card.Body>
                                                    <div className="icon-part">
                                                        <img className="" src={comdexIcon} alt="logo" />
                                                    </div>
                                                    <div className="content-part">
                                                        <h4>COMDEX Pool - 03 </h4>
                                                        <p>XYZ Firm, Singapore</p>
                                                        <p> Low risk (3.56% Interest Rate)</p>
                                                    </div>
                                                </Card.Body>
                                                <div className="card-footer">
                                                    <p>Invest</p>
                                                    <div>
                                                        <Link className="button-app" to="pool"><img className="" src={arrow6} alt="logo" /></Link>
                                                    </div>
                                                </div>
                                            </Card>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        );
    }
    handleSelect(selectedTab) {

        this.setState({
            activeTab: selectedTab
        });
    }
}


export default homePage 
