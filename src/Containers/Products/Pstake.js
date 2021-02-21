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
                                    <p className="value">$360B</p>
                                    <p className="name">Target Market</p>
                                </div>
                                <div className="data-card side-border text-center">
                                    <p className="value">2200% </p>
                                    <p className="name">IYOY Growth</p>
                                </div>
                                <div className="data-card text-center">
                                    <p className="value">30+ </p>
                                    <p className="name">Prediction</p>
                                </div>
                            </div>
                            <div className="button-list">
                                <button className="button-primary button" title="Coming Soon" disabled>Open App</button>
                                <button className="button-secondary button" title="Coming Soon"     disabled>Read Whitepaper</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Pstake;