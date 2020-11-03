
import React, { Component } from 'react';
import 'react-rangeslider/lib/index.css'
import wetez from '../../assets/wetez.svg'
import lunie from '../../assets/Lunie.svg'
import cosmos_station from '../../assets/Cosmostation.svg'
import rainbow from '../../assets/rainbow.svg'
import math from '../../assets/math.svg'
import keplr from '../../assets/keplr.svg'
import imtoken from '../../assets/imtoken.svg'
import citadelwallet from '../../assets/citadelwallet.svg'

class Wallets extends Component {
    render() {
       
        return (

         
                                 <div className="row">
                                    <a href="https://app.lunie.io/cosmos-hub/validators" target="_blank" rel="noopener noreferrer" title="lunie" className="wallet-card">
                                        <div className="card-inner">
                                        <img src={lunie} alt="Lunie" />
                                            <p>Lunie</p>
                                        </div>
                                    </a>
                                    <a href="https://www.cosmostation.io/" target="_blank" rel="noopener noreferrer" title="cosmostation" className="wallet-card">
                                        <div className="card-inner">
                                        <img src={cosmos_station} alt="Cosmostation" />
                                            <p>Cosmostation</p>
                                        </div>
                                    </a>
                                    <a href="https://token.im/" target="_blank" rel="noopener noreferrer" title="token" className="wallet-card">
                                        <div className="card-inner">
                                        <img src={imtoken} alt="imToken" />
                                            <p>imToken</p>
                                        </div>
                                    </a>
                                    <a href="https://www.wetez.io/pc/homepage" target="_blank" rel="noopener noreferrer" title="wetez" className="wallet-card">
                                        <div className="card-inner">
                                        <img src={wetez} alt="Wetez" />
                                            <p>Wetez</p>
                                        </div>
                                    </a>
                                    <a href="https://mathwallet.org/en-us/" target="_blank" rel="noopener noreferrer" title="mathwallet" className="wallet-card">
                                        <div className="card-inner">
                                            <img src={math} alt="Math" />
                                            <p>Math Wallet</p>
                                        </div>
                                    </a>
                                    <a href="https://www.rainbow.one/" target="_blank" rel="noopener noreferrer" title="rainbow" className="wallet-card">
                                        <div className="card-inner">
                                            <img src={rainbow} alt="Rainbow" />
                                            <p>Rainbow Wallet</p>
                                        </div>
                                    </a>
                                    <a href="https://wallet.keplr.app/#/dashboard" target="_blank" rel="noopener noreferrer" title="keplr" className="wallet-card">
                                        <div className="card-inner">
                                        <img src={keplr} alt="Keplr" />
                                            <p>Keplr Wallet</p>
                                        </div>
                                    </a>
                                    <a href="https://app.citadel.one/" target="_blank" rel="noopener noreferrer" title="keplr" className="wallet-card">
                                        <div className="card-inner">
                                        <img src={citadelwallet} alt="Citadelwallet" />
                                            <p>Citadel Wallet</p>
                                        </div>
                                    </a>
                            </div>
                            
              
            
        );
    }
}

export default Wallets;


