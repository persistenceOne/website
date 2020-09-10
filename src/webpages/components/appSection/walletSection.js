import React from 'react';
import usdc from '../../../assets/usdc.png';
import tether from '../../../assets/tether.png';
import usdx from '../../../assets/usdx.png';

class WalletSection extends React.Component {
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
                <div className="wallet-container">
                    <div className="wallet-top-section">
                    <div className="title-section">
                        <p>Wallet Balances</p>
                    </div>
                    <div className="wallet-top-section-body">
                    <div className="list">
                        <p className="title"><img src={usdc} alt="wallet" /> USDC</p>
                        <div className="list-value-section">
                                <p className="list-value">54124.10</p>
                        </div>
                    </div>
                    <div className="list">
                        <p className="title"><img src={tether} alt="wallet" /> USDT</p>
                        <div className="list-value-section">
                                <p className="list-value">1540.10</p>
                        </div>
                    </div>
                    <div className="list">
                        <p className="title"><img src={usdx} alt="wallet" /> USDX</p>
                        <div className="list-value-section">
                                <p className="list-value">514400.2154</p>
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


export default WalletSection; 
