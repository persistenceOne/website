
import React, { Component } from 'react';
import 'react-rangeslider/lib/index.css'
import terra from '../../assets/terra_wallet.svg'


class Wallets extends Component {
    render() {

        return (


            <div className="row">
                <a href="https://station.terra.money/validator/terravaloper1n7pkcal0jkp0ac9r338qp9cm5x6cakfnremtnt" target="_blank" rel="noopener noreferrer" title="Terra" className="wallet-card">
                    <div className="card-inner">
                        <img src={terra} alt="Terra" />
                        <p>Terra Station</p>
                    </div>
                </a>
           
            </div>



        );
    }
}

export default Wallets;


