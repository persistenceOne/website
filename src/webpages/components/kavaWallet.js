
import React, { Component } from 'react';
import 'react-rangeslider/lib/index.css'
import trustwallet from '../../assets/trust_wallet.svg'
import cosmos_station from '../../assets/Cosmostation.svg'
import frontier_wallet from '../../assets/frontier_wallet.svg'
import keplr from '../../assets/keplr.svg'

class KavaWallets extends Component {
    render() {
       
        return (

         
                                 <div className="row">
                                    <a href="https://trustwallet.com/" target="_blank" rel="noopener noreferrer" title="Trust Wallet" className="wallet-card">
                                        <div className="card-inner">
                                        <img src={trustwallet} alt="Trust Wallet" />
                                            <p>Trust Wallet</p>
                                        </div>
                                    </a>
                                    <a href="https://frontier.xyz/" target="_blank" rel="noopener noreferrer" title="Frontier Wallet" className="wallet-card">
                                        <div className="card-inner">
                                        <img src={frontier_wallet} alt="Frontier Wallet" />
                                            <p>Frontier Wallet</p>
                                        </div>
                                    </a>
                                    <a href="https://www.cosmostation.io/" target="_blank" rel="noopener noreferrer" title="cosmostation" className="wallet-card">
                                        <div className="card-inner">
                                        <img src={cosmos_station} alt="Cosmostation" />
                                            <p>Cosmostation</p>
                                        </div>
                                    </a>
                                    
                                    <a href="https://wallet.keplr.app/#/dashboard" target="_blank" rel="noopener noreferrer" title="keplr" className="wallet-card">
                                        <div className="card-inner">
                                        <img src={keplr} alt="Keplr" />
                                            <p>Keplr Wallet</p>
                                        </div>
                                    </a>
                                   
                            </div>
                            
              
            
        );
    }
}

export default KavaWallets;


