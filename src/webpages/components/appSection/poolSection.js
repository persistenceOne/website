import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import WalletSection from '../../components/appSection/walletSection';
import Footer from '../../components/appSection/footer';
import Header from '../../components/appSection/header';
import backArrow from '../../../assets/backArrow.png';

class poolSection extends React.Component {
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
                                <div className="header-section">
                                    <div className="navigation-arrows">
                                        <div>
                                            <Link className="button-app" to="app"><img src={backArrow} alt="wallet" />Back to Pools</Link>
                                        </div>
                                    </div>

                                </div>
                                <div className="right-section-body">
                                    <p className="pool-title">COMDEX Pool - 01</p>
                                    <div>
                                        <Table responsive bordered table>
                                            <thead>
                                                <tr>
                                                    <th>Assets</th>
                                                    <th>Invested Amount</th>
                                                    <th>Risk Level</th>
                                                    <th>Interest Rate</th>
                                                    <th>Invest</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Invoice NFT 01 (587874544111....)</td>
                                                    <td>$ 1,145,000 USD</td>
                                                    <td>Low</td>
                                                    <td>3.56%</td>
                                                    <td><Link className="button-app" to="payment">Invest</Link></td>
                                                </tr>
                                                <tr>
                                                    <td>Invoice NFT 02 (7896543354....)</td>
                                                    <td>$ 1,145,000 USD</td>
                                                    <td>High</td>
                                                    <td>3.56%</td>
                                                    <td><Link className="button-app" to="payment">Invest</Link></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                    <div className="right-section-body-bottom">
                                        <p className="pool-select">(Select an asset to invest)</p>
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


export default poolSection 
