import React from "react";
import establish from "../../assets/images1/establish.svg";
import event_complete from "../../assets/images1/event_complet.svg"
import event_running from "../../assets/images1/event_running.svg"
import event_pending from "../../assets/images1/event_pending.svg"
import Icon from "../../components/Icon";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const Info = () => {
    return (
        <section className="section-roadmap">
            <div className="container">
                <h3 className="title">
                    Roadmap
                </h3>
                <div className="content">
                    <Tabs defaultActiveKey="2021" id="uncontrolled-tab-example">
                        <Tab eventKey="2019" title="2019">
                            <div className="right-section">
                                <div className="quater-section">
                                    <div className="quater">
                                        <h3 className="quater-text">Q2</h3>
                                    </div>
                                    <div className="eventes">
                                        <div className="event">
                                            <img className="event-status-img" src={establish} alt="establish-img"/>
                                            <p className="event-name establish">Persistence One Established</p>
                                            <a href="https://medium.com/persistence-blog/our-journey-toward-a-new-financial-paradigm-persistence-200e7efafa81"
                                               rel="noopener noreferrer" target="_blank" className="hover-blog">
                                                <img className="event-status-img blog-image" alt="blog2"
                                                     src="https://miro.medium.com/max/1000/1*GiRBfno3sWdPEdLaeqHpQQ.png"/>
                                                <div className="blog-info">
                                                    <div className="medium-icon">
                                                        <Icon viewClass="social_icon_imgg" icon="medium-m"/>
                                                    </div>
                                                    <p>
                                                        Introducing Persistence — Focus on ‘Real-World’ Adoption!
                                                    </p>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">Comdex Onboarded <span>DAPP</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">Cross-border Transaction PoC
                                                Completed <span>DAPP</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="quater-section">
                                    <div className="quater">
                                        <h3 className="quater-text">Q3</h3>
                                    </div>
                                    <div className="eventes">
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">MVP of Persistence SDK <span>core</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">Comdex Testnet Launched <span>DAPP</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">First Set of Validators
                                                Onboarded <span>ecosystem</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="quater-section">
                                    <div className="quater">
                                        <h3 className="quater-text">Q4</h3>
                                    </div>
                                    <div className="eventes">
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">Comdex Completes $10 Millon in Trade
                                                Volume <span>core</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">Team Expansion <span>team</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">Cosmos India Launched <span>community</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="2020" title="2020">
                            <div className="right-section">
                                <div className="quater-section">
                                    <div className="quater">
                                        <h3 className="quater-text">Q1</h3>
                                    </div>
                                    <div className="eventes">
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">Persistence comes out of stealth</p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">Validator Set Expansion <span>Ecosystem</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">Raised funds from Validator/Strategic
                                                Investors</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="quater-section">
                                    <div className="quater">
                                        <h3 className="quater-text">Q2</h3>
                                    </div>
                                    <div className="eventes">
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="event_complete-img"/>
                                            <p className="event-name">SDK Release v1.0 <span>Core</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="event_complete-img"/>
                                            <p className="event-name">Comdex Completes $30 Million in Trade
                                                Volume <span>dapp</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="event_complete-img"/>
                                            <p className="event-name">PoS Validator arm of Persistence,
                                                AUDIT.one launched <span>Ecosystem</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="event_complete-img"/>
                                            <p className="event-name">First Set of Advisors onboarded  <span>Ecosystem</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="event_complete-img"/>
                                            <p className="event-name">Partnership with Terra established  <span>Ecosystem</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="event_complete-img"/>
                                            <p className="event-name">Tendermint delegated 595K ATOMs to
                                                AUDIT.one
                                                (The largest delegation by Tendermint to any validator)  <span>Ecosystem</span></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="quater-section">
                                    <div className="quater">
                                        <h3 className="quater-text">Q3</h3>
                                    </div>
                                    <div className="eventes">
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete}
                                                 alt="event_complete-img"/>
                                            <p className="event-name">SDK Open-sourced <span>core</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete}
                                                 alt="event_complete-img"/>
                                            <p className="event-name">Protocol Paper Released
                                                v1 <span>core</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete}
                                                 alt="event_complete-img"/>
                                            <p className="event-name">Closed $3.7 Million in Private Fundraise</p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete}
                                                 alt="event_complete-img"/>
                                            <p className="event-name">Partnership with
                                                Matic <span>Ecosystem</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete}
                                                 alt="event_complete-img"/>
                                            <p className="event-name">Comdex Incentivised Testnet Launch  <span>Ecosystem</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete}
                                                 alt="event_complete-img"/>
                                            <p className="event-name">Partnership with Matic established <span>Ecosystem</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="quater-section">
                                    <div className="quater">
                                        <h3 className="quater-text">Q4</h3>
                                    </div>
                                    <div className="eventes">
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="event_complete-img"/>
                                            <p className="event-name">Hosted HackAtom India <span>Ecosystem</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="event_complete-img"/>
                                            <p className="event-name">Partnership with Razor Network
                                                established <span>Ecosystem</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="event_complete-img"/>
                                            <p className="event-name">NFT Module Spec Implementation with multiple Chains <span>Ecosystem</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="event_complete-img"/>
                                            <p className="event-name">CosmWasm Integration <span>Ecosystem</span></p>
                                        </div>

                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="event_complete-img"/>
                                            <p className="event-name">Launched StakeDrop Campaign for 7 Networks; Fist being Cosmos StakeDrop <span>Token</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="event_complete-img"/>
                                            <p className="event-name">Team expansion to 20+ Members  <span>Team</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="event_complete-img"/>
                                            <p className="event-name">Comdex Incentivised Testnet Launch <span>dapp</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="event_complete-img"/>
                                            <p className="event-name">Launched XPRT StakeDrop with Cosmos Network <span>Ecosystem</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="event_complete-img"/>
                                            <p className="event-name">30M ATOMs ($600M+ at current price) staked to participate in Persistence's StakeDrop with more than 1000+ participants <span>Ecosystem</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="event_complete-img"/>
                                            <p className="event-name">Launched Terra and Kava StakeDrop campaigns and attracted ~$200M worth of assets with more than 1000+ participants <span>Ecosystem</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="event_complete-img"/>
                                            <p className="event-name">Established partnerships with Cosmostation Wallet, Trust Wallet and Citadel Wallet <span>Ecosystem</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="2021" title="2021">
                            <div className="right-section">
                                <div className="quater-section">
                                    <div className="quater">
                                        <h3 className="quater-text">Q1</h3>
                                    </div>
                                    <div className="eventes">
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">Launched Matic StakeDrop Campaign <span>Token</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">Published Technical Specifications for interNFT  <span>Core</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">Launched Matic StakeDrop Campaign with 220M MATIC staked and 500+ participants <span>Ecosystem</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">AUDIT.one crosses $100M AUD<span>Ecosystem</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="present-img event-status-img" src={event_running}
                                                 alt="establish-img"/>
                                            <div className="circle event-status-img"></div>

                                            <p className="event-name">Protocol Paper Release v2</p>

                                            <p className="present-event ind"><span>We are here!</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="establish-img"/>
                                            <p className="event-name">Persistence Joins Celo Alliance<span>Token</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="establish-img"/>
                                            <p className="event-name">pStake Development <span>Core</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="establish-img"/>
                                            <p className="event-name">Persistence's Cosmos ETH Bridge Live (pBridge) <span>dapp</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="establish-img"/>
                                            <p className="event-name">Token Contract Audit <span>Token</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="establish-img"/>
                                            <p className="event-name">pStake.finance liquid staking application MVP development complete <span>dapp</span></p>
                                        </div>

                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="establish-img"/>
                                            <p className="event-name">Persistence Wallet Launch <span>Core</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="establish-img"/>
                                            <p className="event-name">Public Sale<span>Token</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="establish-img"/>
                                            <p className="event-name">Launch of Persistence's Staking platform <span>dapp</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="establish-img"/>
                                            <p className="event-name">Wallet and Block Explorer Integrations<span>Ecosystem</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="establish-img"/>
                                            <p className="event-name">Initial set of exchange listings<span>Token</span></p>
                                        </div>



                                    </div>
                                </div>
                                <div className="quater-section">
                                    <div className="quater">
                                        <h3 className="quater-text">Q2</h3>
                                    </div>
                                    <div className="eventes">
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="establish-img"/>
                                            <p className="event-name">Persistence Incentivized Testnet Launch <span>Community</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="establish-img"/>
                                            <p className="event-name">Validator Set expansion <span>Ecosystem</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="establish-img"/>
                                            <p className="event-name">interNFT implementation v1.0 <span>Core</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="establish-img"/>
                                            <p className="event-name">pStake Application Launch <span>Token </span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="establish-img"/>
                                            <p className="event-name">Expansion of Exchange listings <span>Token </span></p>
                                        </div>
                                        <div className="event">
                                        <img className="event-status-img" src={event_pending} alt="establish-img"/>
                                        <p className="event-name">AUDIT.one ETH2 staking platform launch<span>Token </span></p>
                                    </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="establish-img"/>
                                             <p className="event-name">Asset Mantle NFT Marketplace application MVP to be launched <span>dapp </span></p>
                                         </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="establish-img"/>
                                            <p className="event-name">SDK release v2.0 <span>Core </span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="establish-img"/>
                                            <p className="event-name">Persistence Alpha Testnet  <span>Core </span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="establish-img"/>
                                            <p className="event-name">Block Explorer v1.0 <span>Core </span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="establish-img"/>
                                            <p className="event-name">Validator Set Expansion <span>Ecosystem </span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="establish-img"/>
                                            <p className="event-name">Community Bounty Program  <span>Community </span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="establish-img"/>
                                            <p className="event-name">Extend Partnerships with other projects <span>Ecosystem </span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="quater-section">
                                    <div className="quater">
                                        <h3 className="quater-text">Q3</h3>
                                    </div>
                                    <div className="eventes">
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="establish-img"/>
                                            <p className="event-name">Asset Mantle NFT Marketplace to be launched <span>dapp</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="establish-img"/>
                                            <p className="event-name">Wallet and Block explorer integrations<span>Ecosystem</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="establish-img"/>
                                            <p className="event-name">Integration with other Protocols and Chains through Interchain Communication Protocols <span>Ecosystem</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="establish-img"/>
                                            <p className="event-name">Additional SDK Modules Development <span>Core</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="establish-img"/>
                                            <p className="event-name">pLend MVP to be launched<span>dapp</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="establish-img"/>
                                            <p className="event-name">Expansion of Wallet Integrations and Block explorers <span>Ecosystem</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="establish-img"/>
                                            <p className="event-name">Persistence Mainnet Launch <span>Core</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="establish-img"/>
                                            <p className="event-name">Comdex Mainnet Launch <span>dapp</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="establish-img"/>
                                            <p className="event-name">AUDIT.one Staking interface to be launched <span>Ecosystem</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="2022" title="Q4 2021 & Q1 2022">
                            <div className="right-section">
                                <div className="quater-section">
                                    <div className="quater">
                                    </div>
                                    <div className="eventes">
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="event_complete-img"/>
                                            <p className="event-name">pLend to be Launched<span>dapp</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="event_complete-img"/>
                                            <p className="event-name">Expansion of Wallet Integrations and Block Explorers <span>Ecosystem</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="event_complete-img"/>
                                            <p className="event-name">Expansion of Exchange listings <span>Token</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="event_complete-img"/>
                                            <p className="event-name">SDK release v3<span>Core</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="event_complete-img"/>
                                            <p className="event-name">pStake v2 to be Launched <span>dapp</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </section>
    )
};
export default Info;