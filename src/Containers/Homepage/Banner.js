import React from "react";

const Banner = () => {
    return (
        <section className="banner-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 text-center">
                        <p className="banner-heading"><span>Liquid Staking Hub</span></p>
                        <p className="text">
                            Persistence is Tendermint based specialized Layer-1 powering an ecosystem
                            <span>of DeFi dApps focused on unlocking the Liquidity of staked assets.</span>
                        </p>
                        <div className={"button-section text-center d-inline-block"}>
                        <a href="/xprt" rel="noopener noreferrer"
                           target="_blank" className="button-initial button one">
                            $XPRT
                        </a>
                            <a href="https://drive.google.com/file/d/12cjxcyqFdVDY55i4Wh_31k9viVciemRr/view" rel="noopener noreferrer"
                               target="_blank" className="button-initial button">
                                Ecosystem Grants
                            </a>
                    </div>
                        <div className="stats-container text-white">
                            <div className="stats-section">
                                <h2>$182B</h2>
                                <h6 className="home-desc">POS MarketCap</h6>
                            </div>
                            <div className="stats-section">
                                <h2>$120B</h2>
                                <h6 className="home-desc">Staked Assets Value</h6>
                            </div>
                            <div className="stats-section">
                                <h2>$156B</h2>
                                <h6 className="home-desc">DeFi TVL</h6>
                            </div>
                            <div className="stats-section">
                                <h2>$500B</h2>
                                <h6 className="home-desc">Addressable Market</h6>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
};
export default Banner;
