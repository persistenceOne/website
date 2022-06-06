import React from "react";
import osmo from "../../assets/images1/osmo.svg";
import juno_swap from "../../assets/images1/juno_swap.svg";

const Opportunities = () => {
    return (
        <section className="opportunities-section">
            <div className="container">
                <div className="content">
                    <p className="title">Opportunities With XPRT</p>
                    <div className="staking-boxes">
                        <p className="heading">Staking</p>
                        <div className="boxes row">
                            <div className="col-md-6">
                                <div className="box">
                                <p className="name">Staking</p>
                                <p className="apr">~35%</p>
                                <p className="sub-title">Staking Rewards</p>
                                <div className="buttons">
                                    <a href="https://wallet.keplr.app/#/core/stake"
                                       className="primary"
                                       target="_blank" rel="noopener noreferrer">
                                        Stake
                                    </a>

                                    <a href="https://medium.com/persistence-blog/persistence-xprt-staking-guide-4504cf9a19df"
                                       className="button-secondary">
                                        TUTORIAL
                                    </a>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="box">
                                <p className="name">Liquid Staking</p>
                                <p className="apr">~25%</p>
                                <p className="sub-title">Staking Rewards + DeFi yields</p>
                                <div className="buttons">
                                    <a href="https://app.pstake.finance/" target="_blank" rel="noopener noreferrer" className="primary">
                                        LIQUID STAKING
                                    </a>

                                    <a href="https://www.youtube.com/watch?v=9B1ktY5BS8o" target="_blank" rel="noopener noreferrer" className="button-secondary">
                                        TUTORIAL
                                    </a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="staking-boxes defi">
                        <p className="heading">DeFi</p>
                        <div className="boxes row">
                            <div className="col-md-6">
                                <div className="box">
                                    <p className="name">
                                        <img src={osmo} alt="osmo" />
                                    </p>
                                    <p className="sub-title">XPRT/USDC Pool</p>
                                    <p className="apr">~35% <span className="apr-text">APR</span></p>
                                    <div className="buttons">
                                        <a href="https://app.osmosis.zone/pool/719" target="_blank" rel="noopener noreferrer" className="primary">
                                            Provide Liquidity
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="box">
                                    <p className="name">
                                        <img src={osmo} alt="osmo" />
                                    </p>
                                    <p className="sub-title">XPRT/ATOM Pool</p>

                                    <p className="apr">~35% <span className="apr-text">APR</span></p>
                                    <div className="buttons">
                                        <a href="https://app.osmosis.zone/pool/13" target="_blank" rel="noopener noreferrer" className="primary">
                                            Provide Liquidity
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="boxes row">
                            <div className="col-md-6">
                                <div className="box">
                                    <p className="name">
                                        <img src={osmo} alt="osmo" />
                                    </p>
                                    <p className="sub-title">XPRT/OSMO Pool</p>
                                    <p className="apr">~35% <span className="apr-text">APR</span></p>
                                    <div className="buttons">
                                        <a href="https://app.osmosis.zone/pool/15" target="_blank" rel="noopener noreferrer" className="primary">
                                            Provide Liquidity
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="box">
                                    <p className="name">
                                        <img src={juno_swap} alt="juno" />
                                    </p>
                                    <p className="sub-title">XPRT/JUNO Pool</p>
                                    <p className="apr"><span className="apr-text">(Rewards Coming Soon)</span></p>
                                    <div className="buttons">
                                        <a href="https://junoswap.com/pools/JUNO-XPRT" target="_blank" rel="noopener noreferrer" className="primary">
                                            Provide Liquidity
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Opportunities;
