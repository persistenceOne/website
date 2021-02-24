import React from "react";
// import comdexLogo from "../../assets/logos/comdex_small.svg";
import comdex_product from "../../assets/images1/comdex_product.svg";

const Comdex = () => {
    return (
        <section className="product-info-section product-comdex">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 product-info">
                        <img src={comdex_product} alt="comdex-logo"/>
                    </div>
                    <div className="col-md-8">
                        <div className="cards">
                            <p className="text">Decentralised commodities trading solution that facilitates the
                                end-to-end trade cycle including trade discovery, settlement and financing.
                            </p>
                            <div className="row1">
                                <div className="data-card text-left">
                                    <p className="value">$55M+</p>
                                    <p className="name">Transaction Volume</p>
                                </div>
                                <div className="data-card side-border text-center">
                                    <p className="value">35+ </p>
                                    <p className="name">Institutional Traders</p>
                                </div>
                                <div className="data-card text-center">
                                    <p className="value">4</p>
                                    <p className="name">Trading Hubs</p>
                                </div>
                            </div>
                            <div className="button-list">
                                <a href="https://comdex.sg/" rel="noopener noreferrer" target="_blank" className="button-primary button">Comdex.sg</a>
                                <a href="https://explorer.persistence.one/" className="button-secondary button" rel="noopener noreferrer" target="_blank">Block Explorer</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Comdex;