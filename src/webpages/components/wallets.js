
import React, { Component } from 'react';
import 'react-rangeslider/lib/index.css'
import wetez from '../../assets/wetez.svg'
import lunie from '../../assets/Lunie.svg'
import cosmos_station from '../../assets/Cosmostation.svg'
import rainbow from '../../assets/rainbow.svg'
import math from '../../assets/math.svg'
import keplr from '../../assets/keplr.svg'
import imtoken from '../../assets/imtoken.svg'

class Wallets extends Component {
    render() {
       
        return (

         
                                 <div className="row">
                                    <div className="wallet-card">
                                        <div className="card-inner">
                                        <img src={lunie} alt="Lunie" />
                                            <p>Lunie</p>
                                        </div>
                                    </div>
                                    <div className="wallet-card">
                                        <div className="card-inner">
                                        <img src={cosmos_station} alt="Cosmostation" />
                                            <p>Cosmostation</p>
                                        </div>
                                    </div>
                                    <div className="wallet-card">
                                        <div className="card-inner">
                                        <img src={imtoken} alt="imToken" />
                                            <p>imToken</p>
                                        </div>
                                    </div>
                                    <div className="wallet-card">
                                        <div className="card-inner">
                                        <img src={wetez} alt="Wetez" />
                                            <p>Wetez</p>
                                        </div>
                                    </div>
                                    <div className="wallet-card">
                                        <div className="card-inner">
                                            <img src={math} alt="Math" />
                                            <p>Math Wallet</p>
                                        </div>
                                    </div>
                                    <div className="wallet-card">
                                        <div className="card-inner">
                                            <img src={rainbow} alt="Rainbow" />
                                            <p>Rainbow Wallet</p>
                                        </div>
                                    </div>
                                    <div className="wallet-card">
                                        
                                        <div className="card-inner">
                                        <img src={keplr} alt="Keplr" />
                                            <p>Keplr Wallet</p>
                                        </div>
                                    </div>
                            </div>
                            
              
            
        );
    }
}

export default Wallets;


