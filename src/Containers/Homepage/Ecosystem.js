import React from 'react';
import drop from "../../assets/images/drop.svg";

const Ecosystem = () => {
    return (
        <section className="home-ecosystem-section">
            <div className="container">
                <h3 className="section-title">The Persistence Ecosystem</h3>
                <p className="sub-heading">Join the growing number of users and builders of the Persistence ecosystem and help make Liquid staked
                    assets the default assets of the PoS economy. </p>
                <div className="boxes">
                    <div className="box">
                        <div className="box-body">
                            <div className="content">
                               <div className="image-section">
                                   <img src={drop} alt="drop"/>
                               </div>
                                <p className="heading">Liquid Staking</p>
                                <ul>
                                    <li>
                                        Issue Liquid Staked (stkASSETs) on the Persistence Network via pSTAKE.
                                    </li>
                                    <li>
                                        All Cosmos/Tendermint-based (IBC enabled) assets could be liquid staked
                                        as stkASSETs issued on the Persistence Network
                                    </li>
                                </ul>
                            </div>
                            <div className="buttons">
                                <a href="https://pstake.finance/" rel="noopener noreferrer" target="_blank" className="button button-primary">
                                    Go to App
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-body">
                            <div className="content">
                                <div className="image-section">
                                    <img src={drop} alt="drop"/>
                                </div>
                                <p className="heading"> DeFi for Liquid Staking</p>
                                <ul>
                                    <li>
                                        <p>Explore DeFi opportunities for stkASSETs within the Persistence ecosystem</p>
                                        <ul>
                                            <li>Borrowing/Lending</li>
                                            <li>DEXes</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Have Interesting Ideas?
                                        Apply for a Grant
                                    </li>
                                </ul>
                            </div>
                            <div className="buttons">
                                <a href="/grants"  rel="noopener noreferrer" target="_blank" className="button button-primary">
                                    Apply
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ecosystem;