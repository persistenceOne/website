import React from "react";
import pstake_white from "../../assets/images1/logos/pstake_white.svg";

const Pstake = () => {
    return (
        <section className="product-info-section product-pstake">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 product-info pstake">
                        <img src={pstake_white} alt="pstake_-logo"/>
                    </div>
                    <div className="col-md-8">
                        <div className="cards">
                            <p className="text">Liquid staking application to unlock liquidity for staked assets, allowing stakers to boost yields from their staked assets.
                            </p>
                            <div className="row1">
                                <div className="data-card text-left">
                                    <p className="value"> $450B+</p>
                                    <p className="name">Total Addressable Market</p>
                                </div>
                                <div className="data-card text-center">
                                    <p className="value">$105B+ </p>
                                    <p className="name">Staked Assets</p>
                                </div>
                            </div>
                            <div className="button-list">
                                <a href="https://twitter.com/pStakeFinance" rel="noopener noreferrer" target="_blank" className="button-primary button"> Learn More</a>
                                <button className="button coming-soon" data-hover="Coming Soon" >Open app</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Pstake;